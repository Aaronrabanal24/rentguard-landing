export const heroContent = {
  eyebrow: "California Deposit Compliance",
  headline: "Every Lease, Handled with Trust, Speed & Clarity",
  subheadline:
    "Escrow-backed, compliant, zero spreadsheets. From smart links to deposit release, Fairvia keeps you protected.",
  microPromise: "Set up in 5 minutes. Free for your first unit.",
  nextSteps: "Set up your unit, invite your tenant, and start the deposit timeline — all in under 5 minutes.",
  primaryCta: "Start free unit",
  secondaryCta: "See how it works",
  trustLine: "🔒 Escrow-backed & DFPI-licensed",
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
      benefit: "Avoid lost leads",
      items: [
        "Post on Zillow, Craigslist, or show QR at unit",
        "Built-in precheck and trust page",
        "UTM tracking for every inquiry",
      ],
    },
    {
      title: "Handle Deposits Compliantly",
      description: "Timed workflows, receipts, dispute tools",
      benefit: "Eliminate guesswork",
      items: [
        "AB 2801 compliant 21-day timers",
        "Itemized deductions with timestamped photos & receipts",
        "Exportable archive for legal defense",
      ],
    },
    {
      title: "Show Your ROI",
      description: "Exportable proof for owners & investors",
      benefit: "Stop losing deposits in legal fights",
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
    metric: "$500+",
    description: "Avoid disputes per unit per year",
  },
  {
    metric: "70%",
    description: "Reduce move-out admin time",
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

export const faqContent = [
  {
    question: "What if the tenant doesn't respond to deductions?",
    answer: "Fairvia's system includes automatic reminders and default timelines. If no response within 7 days, the system documents non-response and proceeds with the landlord's deductions as legally defensible.",
  },
  {
    question: "Is this legally binding in California?",
    answer: "Yes. Fairvia templates are built on AB 2801 and Civil Code 1950.5. All timelines, receipts, and notices meet California legal standards. Your exports include timestamped audit trails for court if needed.",
  },
  {
    question: "Do I need to switch from my current tools?",
    answer: "No. Fairvia works alongside your existing systems. You can keep using your property management software — Fairvia just handles the compliance-heavy deposit workflows and gives you exportable proof.",
  },
  {
    question: "How long before I see value?",
    answer: "Immediately. Your first unit is free forever. You'll see value on day one: cleaner documentation, automatic timers, and a shareable status link your tenant can access without calls or emails.",
  },
  {
    question: "What if a dispute escalates to court?",
    answer: "Fairvia's timestamped photo evidence, itemized deductions, and complete audit trail have been designed with legal defense in mind. You can export a complete package for your attorney in one click.",
  },
] as const;
