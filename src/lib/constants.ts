export const COMPANY = {
  name: "Fairvia",
  description: "Smart unit links for faster leasing and compliant deposits",
  url: "https://fairvia.com",
  tagline: "Trust, speed, and clarity for residential leasing",
} as const;

export const FEATURES = {
  escrowProtection: "Neutral deposit holding",
  complianceAutomation: "Compliance built in",
  smallPortfolios: "Made for small portfolios",
} as const;

export const FAQ_DATA = [
  {
    question: "How much does Fairvia cost?",
    answer:
      "Starter is free forever for one unit. Pro is $49 per unit per month with unlimited units, full deposit workflows, and AB 2801 compliance. Enterprise pricing is available for larger property management companies needing multi-state templates, SSO, and API access.",
  },
  {
    question: "Does Fairvia replace my property management system?",
    answer:
      "No. Fairvia is designed to complement your existing PMS. We focus specifically on listings, leasing workflows, and deposits — the areas where transparency and speed matter most. We integrate with your current tools rather than replacing them.",
  },
  {
    question: "What states does Fairvia support?",
    answer:
      "We currently support California and Florida (Q4 2025), with Texas, New York, and Illinois coming in Q1 2026. Each state has specific compliance templates built-in, including California's AB 2801 (21-day deposit return) and state-specific deduction requirements.",
  },
  {
    question: "Do renters and owners need to create accounts?",
    answer:
      "No. Renters and owners access their information through secure smart unit links — no login required. This makes adoption instant and reduces friction for everyone involved.",
  },
] as const;
