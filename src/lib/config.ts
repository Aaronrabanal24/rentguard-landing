export const config = {
  isProduction: process.env.NODE_ENV === "production",
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
  },
  api: {
    resendKey: process.env.RESEND_API_KEY,
  },
} as const;
