export const COMPANY = {
  name: "RentGuard",
  description: "Stay compliant with California's new deposit laws",
  url: "https://rentguard.com",
} as const;

export const FEATURES = {
  escrowProtection: "True escrow, not insurance",
  complianceAutomation: "Compliance automation",
  smallPortfolios: "Built for small portfolios",
} as const;

export const FAQ_DATA = [
  {
    question: "Who holds the money?",
    answer:
      "RentGuard routes deposits to licensed California escrow partners. Funds remain neutral until landlord and renter approve the release.",
  },
  {
    question: "What if there is a dispute?",
    answer:
      "All inspections, deductions, and messages are timestamped. RentGuard shares the record so you can resolve issues quickly while funds stay in escrow.",
  },
  {
    question: "Where is RentGuard available?",
    answer: "RentGuard is currently enrolling California landlords and renters. Additional markets will open after the pilot cohort completes.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Landlords choose a simple monthly plan after the pilot. Renters join free and split a small escrow fee only when the move-in is confirmed.",
  },
] as const;
