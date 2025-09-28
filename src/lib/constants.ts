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
    question: "Will this work for my duplex or small portfolio?",
    answer:
      "Yes. Fairvia was built with 6-door and 30-door landlords during our pilot, so the workflows match the realities of small teams. Most owners tell us they save 6–8 hours every move-out and finally feel confident competing with full-service management companies.",
  },
  {
    question: "How do I explain it to tenants?",
    answer:
      "We give you email and text templates that explain neutral escrow in plain language. Once renters learn their deposit sits with a licensed third party and they can see status updates, resistance disappears—92% of pilot tenants rated the process \"more fair\" than their last move-out.",
  },
  {
    question: "Does it work with traditional deposits?",
    answer:
      "Absolutely. Fairvia supports standard security deposits, surety alternatives, and even hybrid arrangements. Funds stay in DFPI-regulated escrow and every transaction is logged so you can prove compliance if a tenant or owner ever questions it.",
  },
  {
    question: "How quickly can I start?",
    answer:
      "Most landlords import their units and invite tenants in under 30 minutes. We'll walk you through your first move-out, and by the second one the automation handles timers, photo logs, and statements without you lifting a finger.",
  },
] as const;
