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
    question: "Who can join the pilot?",
    answer:
      "We&apos;re onboarding independent California landlords with one to twenty units. Your listings stay on Zillow, Craigslist, or Facebook—we supply the Listing Assist badge and property profile instead of a marketplace.",
  },
  {
    question: "Does Fairvia replace my leasing workflow?",
    answer:
      "Fairvia connects you to a DFPI-licensed escrow partner, provides the California lease pack, and tracks status for both sides. You still control your lease terms—we just make sure identity checks, signatures, and neutral custody happen on time.",
  },
  {
    question: "What proof do renters and advisors get?",
    answer:
      "Every case has a shared timeline with guided messages, receipts, and photos. Renters can acknowledge updates with one click, and advisors can export the archive if they need to review deductions or timelines.",
  },
  {
    question: "How fast can I get onboarded?",
    answer:
      "Most landlords complete identity verification, property setup, and the first tenant invite in under 30 minutes. We walk you through the first move-in and move-out so the compliance workflow, timers, and documentation are dialed before you go live.",
  },
] as const;
