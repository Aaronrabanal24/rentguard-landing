export const heroContent = {
  eyebrow: "California Deposit Compliance",
  headline: "Deposits & Leasing Compliance Done Right in California",
  subheadline:
    "From smart links to deposit release, Fairvia keeps you compliant, transparent, and protected.",
  microPromise: "Set up in 5 minutes. Free for your first unit.",
  primaryCta: "Start free unit",
  secondaryCta: "See how it works",
  trustLine: "Deposits held by DFPI-licensed escrow partners",
  proofBar: [
    { icon: "🔗", label: "Smart unit link" },
    { icon: "✓", label: "Trust and precheck" },
    { icon: "📊", label: "Shared timeline" },
    { icon: "📁", label: "Exportable archive" },
  ],
} as const;

export const painPoints = [
  {
    pain: "Deposit disputes cost money and time",
    stat: "Average dispute: $800 + 12 hours",
  },
  {
    pain: "Tenants push back without documentation",
    stat: "40% of deductions challenged",
  },
  {
    pain: "AB 2801 compliance deadlines missed",
    stat: "21-day window = legal liability",
  },
] as const;

export const problemSolutionContent = [
  {
    problem: "Missed leads",
    solution: "Smart unit links track every inquiry",
    icon: "🔗",
  },
  {
    problem: "Dispute risk",
    solution: "Timed deposit workflows with receipts",
    icon: "✅",
  },
  {
    problem: "Owner demands",
    solution: "ROI board shows leasing activity",
    icon: "📊",
  },
] as const;

export const aboutContent = {
  subhead: "Fairvia is a lightweight operational layer that connects listings, leasing workflows, and deposit processes into one smart, shareable unit link.",
  whyItWorks: "No new systems to learn. Just faster leases, fewer disputes, and clear proof of performance.",
  complianceTeaser: "State specific template engine with countdown timers and an exportable archive.",
  renterPortalLine: "Read only status timeline, no login required.",
} as const;

export const howItWorksContent = {
  sections: [
    {
      title: "Create a Smart Unit Link",
      description: "Capture and track inquiries",
      items: [
        "Post on Zillow, Craigslist, or show QR at unit",
        "Built-in precheck and trust page",
        "UTM tracking for every inquiry",
      ],
    },
    {
      title: "Handle Deposits Compliantly",
      description: "Timed workflows, receipts, dispute tools",
      items: [
        "AB 2801 compliant 21-day timers",
        "Itemized deductions with photo proof",
        "Exportable archive for legal defense",
      ],
    },
    {
      title: "Show Your ROI",
      description: "Exportable proof for owners & investors",
      items: [
        "Automated weekly summary emails",
        "Days listed, inquiries, tours, lease status",
        "Export-ready KPI dashboard",
      ],
    },
  ],
} as const;

export const featuresContent = {
  tiers: [
    {
      name: "Common Core",
      items: [
        "Smart link with QR",
        "Trust page",
        "Timeline",
        "ROI board",
        "Exportable archive",
      ],
    },
    {
      name: "SMB Pro",
      items: [
        "Deposit intent marker",
        "CSV import and export",
        "Basic fraud",
        "Weekly owner update",
      ],
    },
    {
      name: "Enterprise",
      items: [
        "Role based permissions",
        "SSO",
        "Multi state template library",
        "Audit logs",
        "Legal hold",
        "Event API",
        "Webhooks",
      ],
    },
  ],
} as const;

export const pricingContent = {
  tiers: [
    {
      name: "Starter",
      price: "Free",
      priceDetail: "",
      description: "Free first unit",
      cta: "Start free unit",
    },
    {
      name: "SMB Pro",
      price: "$49-$149",
      priceDetail: "per month",
      description: "For small property managers",
      cta: "Get started",
    },
    {
      name: "Enterprise",
      price: "$1",
      priceDetail: "per unit per month + platform + onboarding",
      description: "For larger portfolios",
      cta: "Contact sales",
    },
  ],
} as const;

export const valueProps = [
  {
    metric: "$800",
    description: "Average savings per avoided dispute",
  },
  {
    metric: "12 hours",
    description: "Saved per property per move-out",
  },
  {
    metric: "100%",
    description: "On-time deposit returns with timers",
  },
] as const;

export const trustBadges = {
  escrowPartners: ["North American Title Company", "Pacific Escrow Services"],
  compliance: ["DFPI Licensed", "AB 2801 Compliant", "SOC 2 Type II"],
} as const;

export const faqContent = {
  questions: [
    {
      question: "What if the tenant doesn't respond to deductions?",
      answer: "Fairvia's system includes automatic reminders and default timelines. If no response within 7 days, the system documents non-response and proceeds with the landlord's deductions as legally defensible.",
    },
    {
      question: "Is this legally binding?",
      answer: "Yes. Fairvia generates state-compliant deposit letters with timestamps, receipts, and photo documentation. The exportable archive serves as legal proof in court.",
    },
    {
      question: "Does this integrate with my property management software?",
      answer: "Fairvia works standalone with CSV import/export in SMB Pro. Enterprise tier offers API integration with major PMS platforms.",
    },
    {
      question: "How do deposit timelines work?",
      answer: "California requires 21-day return windows (AB 2801). Florida requires 15 days if no claim, 30 days if deductions. Fairvia automates countdown timers and compliance notifications.",
    },
    {
      question: "What if I have properties in multiple states?",
      answer: "Enterprise tier includes multi-state template libraries with automatic compliance rules for California, Florida, Texas, New York, and Illinois.",
    },
  ],
} as const;
