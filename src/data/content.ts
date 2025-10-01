export const heroContent = {
  eyebrow: "California Deposit Compliance",
  headline: "Trust, speed, and clarity for every lease.",
  subheadline:
    "One smart link connects listings, leasing steps, and deposits into a shareable timeline so owners see progress, renters see status, and disputes drop.",
  primaryCta: "Start free unit",
  secondaryCta: "See how it works",
  microTrust: "California-ready templates, timers, and an exportable archive included.",
  proofBar: [
    { icon: "🔗", label: "Smart unit link" },
    { icon: "✓", label: "Trust and precheck" },
    { icon: "📊", label: "Shared timeline" },
    { icon: "📁", label: "Exportable archive" },
  ],
} as const;

export const aboutContent = {
  subhead: "Fairvia is a lightweight operational layer that connects listings, leasing workflows, and deposit processes into one smart, shareable unit link.",
  whyItWorks: "No new systems to learn. Just faster leases, fewer disputes, and clear proof of performance.",
  complianceTeaser: "State specific template engine with countdown timers and an exportable archive.",
  renterPortalLine: "Read only status timeline, no login required.",
} as const;

export const howItWorksContent = {
  sections: [
    {
      title: "List and capture",
      items: [
        "Smart unit link with QR",
        "Trust and precheck page",
        "Timeline view from inquiry to lease",
      ],
    },
    {
      title: "Show proof to owners",
      items: [
        "ROI board and owner share link",
      ],
    },
    {
      title: "Deposit closeout",
      items: [
        "State specific templates and countdown timers",
        "Itemized letters with photos and receipts",
        "Exportable archive as ZIP",
      ],
    },
    {
      title: "Renter experience",
      items: [
        "Read only status timeline with no login",
        "Optional satisfaction pulse after lease",
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

export const faqContent = {
  questions: [
    {
      question: "How do deposit timelines work?",
      answer: "California has a 21 day return window. Florida has a 15 day return if no claim, 30 day notice if deduction. All timelines include countdown timers and exportable archive for compliance.",
    },
    {
      question: "What visibility do renters get?",
      answer: "No login read only status timeline for key milestones.",
    },
  ],
} as const;
