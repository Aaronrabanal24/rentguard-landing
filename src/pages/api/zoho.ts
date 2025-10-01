import type { NextApiRequest, NextApiResponse } from "next";
import { enforceRateLimit, isRateLimitEnabled } from "@/lib/ratelimit";
import { waitlistSchema, type WaitlistData } from "@/lib/types";

interface ZohoTokenResponse {
  access_token: string;
  expires_in: number;
  api_domain: string;
  token_type: string;
}

interface ZohoLeadData {
  data: Array<{
    Last_Name: string;
    Email: string;
    Lead_Source: string;
    Description?: string;
    City?: string;
  }>;
}

async function getZohoAccessToken(): Promise<string> {
  const { ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN, ZOHO_ACCOUNTS_URL } = process.env;

  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    throw new Error("Missing Zoho credentials in environment variables");
  }

  const accountsUrl = ZOHO_ACCOUNTS_URL || "https://accounts.zoho.com";

  const params = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const response = await fetch(`${accountsUrl}/oauth/v2/token?${params}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Failed to get Zoho access token: ${response.statusText}`);
  }

  const data: ZohoTokenResponse = await response.json();
  return data.access_token;
}

async function createZohoLead(data: WaitlistData, accessToken: string) {
  const { ZOHO_API_DOMAIN } = process.env;
  const apiDomain = ZOHO_API_DOMAIN || "https://www.zohoapis.com";

  const leadData: ZohoLeadData = {
    data: [
      {
        Last_Name: data.name,
        Email: data.email,
        Lead_Source: "Website Waitlist",
        Description: `User Type: ${data.userType}`,
        City: data.location,
      },
    ],
  };

  const response = await fetch(`${apiDomain}/crm/v2/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create Zoho lead: ${response.statusText} - ${errorText}`);
  }

  return await response.json();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const identifier =
      (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ??
      req.socket.remoteAddress ??
      "unknown";

    const rateLimitResult = await enforceRateLimit(identifier);

    if (!rateLimitResult.success) {
      if (isRateLimitEnabled()) {
        res.setHeader("RateLimit-Limit", rateLimitResult.limit.toString());
        res.setHeader("RateLimit-Remaining", rateLimitResult.remaining.toString());
        res.setHeader("RateLimit-Reset", rateLimitResult.reset.toString());
      }

      return res.status(429).json({ message: "Too many requests. Please slow down and try again." });
    }

    const parsedBody = waitlistSchema.safeParse(req.body);

    if (!parsedBody.success) {
      const errors = parsedBody.error.flatten().fieldErrors;
      return res.status(400).json({
        message: "Invalid form submission.",
        errors,
      });
    }

    const waitlistData = parsedBody.data as WaitlistData;

    // Get Zoho access token
    const accessToken = await getZohoAccessToken();

    // Create lead in Zoho CRM
    const zohoResponse = await createZohoLead(waitlistData, accessToken);

    console.log("Zoho lead created:", zohoResponse);

    if (isRateLimitEnabled()) {
      res.setHeader("RateLimit-Limit", rateLimitResult.limit.toString());
      res.setHeader("RateLimit-Remaining", rateLimitResult.remaining.toString());
      res.setHeader("RateLimit-Reset", rateLimitResult.reset.toString());
    }

    return res.status(200).json({
      message: "Successfully created lead in Zoho CRM",
      data: waitlistData,
      zohoResponse,
    });
  } catch (error) {
    console.error("Zoho CRM error:", error);
    return res.status(500).json({
      message: "Failed to create lead in Zoho CRM",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
