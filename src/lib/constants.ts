export const COMPANY = {
  name: "Fairvia",
  description: "Professional deposit management for California landlords",
  url: "https://fairvia.com",
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
      "Fairvia is $69/month for up to 5 active cases with no long-term contract. That includes neutral escrow (state-regulated deposit holding), AB 2801 compliance automation (California's 21-day deposit law), tenant communication, and live support. We also offer a free 30-minute compliance audit before you start so you can see the workflow in action.",
  },
  {
    question: "Is my tenant’s deposit actually safe?",
    answer:
      "Yes. Deposits are held with DFPI-licensed escrow partners—not in your personal account. Tenants and owners see the same timeline, alerts, and release packet so there’s no question about where the money sits or when it will be released.",
  },
  {
    question: "What if I only manage 2 or 3 units?",
    answer:
      "Fairvia is built for California landlords with 1–20 doors. You can onboard a single property, set up the move-out workflow in under 20 minutes, and only pay for the doors you run through Fairvia. Most landlords start with one deposit and expand from there.",
  },
] as const;
