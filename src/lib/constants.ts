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
    question: "Will this work for my duplex or small portfolio?",
    answer:
      "Absolutely. Novatra is built for independent landlords managing 1–50 units. You get the same professional tools larger operators use, sized for your workflow.",
  },
  {
    question: "How do I explain it to tenants?",
    answer:
      "We provide tenant-friendly guides and email templates. Most renters appreciate the transparency that comes with neutral deposit holding.",
  },
  {
    question: "Does it work with traditional deposits?",
    answer:
      "Yes. Novatra supports both standard security deposits and alternative arrangements while keeping every transaction documented.",
  },
  {
    question: "How quickly can I start?",
    answer:
      "Import your current tenants and you can run professional deposit management immediately—no complex implementation or extra software required.",
  },
] as const;
