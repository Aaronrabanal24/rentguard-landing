import type { NextApiRequest, NextApiResponse } from "next";
import { enforceRateLimit, isRateLimitEnabled } from "@/lib/ratelimit";
import { waitlistSchema, type WaitlistData } from "@/lib/types";
import { getZohoAccessToken, upsertZohoLead, validateZohoLeadInput } from "@/lib/zoho";

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

    // Extract UTM parameters from query string
    const utm = {
      source: (req.query.utm_source as string) || undefined,
      medium: (req.query.utm_medium as string) || undefined,
      campaign: (req.query.utm_campaign as string) || undefined,
      term: (req.query.utm_term as string) || undefined,
      content: (req.query.utm_content as string) || undefined,
    };

    // Capture page context
    const pageContext = {
      referrer: (req.headers.referer || req.headers.referrer) as string | undefined,
      landingPage: req.headers.host ? `https://${req.headers.host}${req.url}` : undefined,
      userAgent: req.headers["user-agent"] as string | undefined,
    };

    // Build lead input with UTM and context
    const leadInput = {
      email: waitlistData.email,
      name: waitlistData.name,
      userType: waitlistData.userType,
      location: waitlistData.location,
      utm,
      pageContext,
    };

    // Validate Zoho-specific requirements
    const validation = validateZohoLeadInput(leadInput);
    if (!validation.valid) {
      return res.status(400).json({
        message: "Zoho validation failed",
        errors: validation.errors,
      });
    }

    // Get cached access token
    const accessToken = await getZohoAccessToken();

    // Upsert lead in Zoho CRM v8 (won't create duplicates)
    const zohoResponse = await upsertZohoLead(leadInput, accessToken);

    console.log("Zoho lead upserted:", zohoResponse);

    if (isRateLimitEnabled()) {
      res.setHeader("RateLimit-Limit", rateLimitResult.limit.toString());
      res.setHeader("RateLimit-Remaining", rateLimitResult.remaining.toString());
      res.setHeader("RateLimit-Reset", rateLimitResult.reset.toString());
    }

    return res.status(200).json({
      message: "Successfully synced to Zoho CRM",
      data: waitlistData,
      zohoResponse,
    });
  } catch (error) {
    console.error("Zoho CRM error - Full details:", error);
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
    return res.status(500).json({
      message: "Failed to sync to Zoho CRM",
      error: error instanceof Error ? error.message : "Unknown error",
      details: error instanceof Error ? error.stack : String(error),
    });
  }
}
