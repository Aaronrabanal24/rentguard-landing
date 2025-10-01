// Zoho CRM API helper with token caching and v8 support

interface ZohoTokenResponse {
  access_token: string;
  expires_in: number;
  api_domain: string;
  token_type: string;
}

interface TokenCache {
  token: string;
  expiresAt: number;
}

// In-memory token cache (use Redis/KV in production for multi-instance deployments)
let cachedToken: TokenCache | null = null;

/**
 * Swaps refresh token for access token with caching
 */
export async function getZohoAccessToken(): Promise<string> {
  // Return cached token if still valid (with 5min buffer)
  if (cachedToken && Date.now() < cachedToken.expiresAt - 300000) {
    return cachedToken.token;
  }

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
    const errorText = await response.text();
    throw new Error(`Failed to get Zoho access token: ${response.statusText} - ${errorText}`);
  }

  const data: ZohoTokenResponse = await response.json();

  // Cache the token (expires_in is in seconds)
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };

  return data.access_token;
}

interface ZohoLeadInput {
  email: string;
  name: string;
  userType: string;
  location: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
  pageContext?: {
    referrer?: string;
    landingPage?: string;
    userAgent?: string;
  };
}

interface ZohoLeadData {
  data: Array<{
    Last_Name: string;
    Email: string;
    Lead_Source: string;
    Description?: string;
    City?: string;
    $gclid?: string;
  }>;
  trigger?: string[];
}

/**
 * Creates or updates a lead in Zoho CRM using v8 API with upsert
 */
export async function upsertZohoLead(input: ZohoLeadInput, accessToken: string) {
  const { ZOHO_API_DOMAIN } = process.env;
  const apiDomain = ZOHO_API_DOMAIN || "https://www.zohoapis.com";

  // Parse name to ensure Last_Name is present (required field in Zoho)
  const nameParts = input.name.trim().split(" ");
  const lastName = nameParts.length > 1 ? nameParts.slice(-1).join(" ") : nameParts[0];
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : undefined;

  // Build UTM description
  let description = `User Type: ${input.userType}`;
  if (input.utm) {
    const utmParts = [];
    if (input.utm.source) utmParts.push(`Source: ${input.utm.source}`);
    if (input.utm.medium) utmParts.push(`Medium: ${input.utm.medium}`);
    if (input.utm.campaign) utmParts.push(`Campaign: ${input.utm.campaign}`);
    if (utmParts.length) {
      description += `\nUTM: ${utmParts.join(" | ")}`;
    }
  }
  if (input.pageContext?.referrer) {
    description += `\nReferrer: ${input.pageContext.referrer}`;
  }
  if (input.pageContext?.landingPage) {
    description += `\nLanding Page: ${input.pageContext.landingPage}`;
  }

  const leadData: ZohoLeadData = {
    data: [
      {
        Last_Name: lastName,
        ...(firstName && { First_Name: firstName }),
        Email: input.email,
        Lead_Source: input.utm?.source || "Website Waitlist",
        Description: description,
        City: input.location,
        ...(input.utm?.content && { $gclid: input.utm.content }),
      } as any,
    ],
    trigger: ["approval", "workflow", "blueprint"], // Auto-trigger workflows
  };

  // Use v8 upsert API (duplicate check by Email)
  const response = await fetch(`${apiDomain}/crm/v8/Leads/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to upsert Zoho lead: ${response.statusText} - ${errorText}`);
  }

  return await response.json();
}

/**
 * Validates that required Zoho fields are present
 */
export function validateZohoLeadInput(input: ZohoLeadInput): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!input.email || !input.email.includes("@")) {
    errors.push("Valid email is required");
  }

  if (!input.name || input.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters (required for Last_Name)");
  }

  if (!input.location || input.location.trim().length < 2) {
    errors.push("Location is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
