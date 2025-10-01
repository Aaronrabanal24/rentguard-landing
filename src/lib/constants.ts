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
    question: "How do deposit timelines work?",
    answer:
      "California has a 21 day return window. Florida has a 15 day return if no claim, 30 day notice if deduction. All timelines include countdown timers and exportable archive for compliance.",
  },
  {
    question: "What visibility do renters get?",
    answer:
      "No login read only status timeline for key milestones.",
  },
  {
    question: "Do renters and owners need to create accounts?",
    answer:
      "No. Renters and owners access their information through secure smart unit links with no login required. This makes adoption instant and reduces friction for everyone involved.",
  },
  {
    question: "What states does Fairvia support?",
    answer:
      "We currently support California and Florida, with Texas, New York, and Illinois coming soon. Each state has specific compliance templates built in, including California's 21 day deposit return window and state specific deduction requirements.",
  },
] as const;
