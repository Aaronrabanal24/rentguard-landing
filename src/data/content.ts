export const heroContent = {
  eyebrow: "Leasing & Deposit Operations Layer",
  headline: "Fill Units Faster, Handle Deposits Cleanly, Prove Your Work",
  subheadline:
    "A lightweight layer that connects listings, leasing workflows, and deposit processes into one smart, shareable unit link. No heavy PMS. No complex onboarding.",
  microPromise: "Your first unit is always free — no commitment.",
  nextSteps: "Create your smart unit link, track every inquiry, and handle deposits with CA-compliant workflows — all in one timeline.",
  primaryCta: "Claim your free unit",
  secondaryCta: "See how it works",
  trustLine: "Trusted by property teams • CA AB 2801 Compliant",
  proofBar: [
    { icon: "🔗", label: "Smart unit link" },
    { icon: "✓", label: "Lead tracking" },
    { icon: "📊", label: "ROI proof" },
    { icon: "📁", label: "Compliant deposits" },
  ],
} as const;

export const painPoints = [
  {
    pain: "Vacant units cost thousands in lost rent",
    stat: "Slow replies = missed leads = $$$",
  },
  {
    pain: "Owners demand proof of leasing effort",
    stat: "Spreadsheets don't cut it",
  },
  {
    pain: "Deposits mishandled = disputes & delays",
    stat: "Legal risk + reputation damage",
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
      name: "Free",
      price: "Free",
      priceDetail: "Forever",
      description: "Perfect to get started — no commitment",
      cta: "Claim free unit",
      badge: undefined,
      features: [
        "1 unit, always free",
        "Smart link with QR code",
        "Inquiry tracking timeline",
        "Owner ROI board",
        "Exportable reports",
      ],
    },
    {
      name: "Pro",
      price: "$99",
      priceDetail: "per month",
      description: "Everything you need to scale fast",
      cta: "Start 14-day trial",
      badge: "Most Popular",
      features: [
        "Everything in Free, plus:",
        "Unlimited units",
        "AB 2801 compliant workflows",
        "Itemized deposits • Receipts • Timers",
        "Multi-state templates",
        "Weekly owner emails",
        "CSV export",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "$499",
      priceDetail: "per month",
      description: "For portfolios with 100+ units",
      cta: "Contact sales",
      badge: undefined,
      features: [
        "Everything in Pro, plus:",
        "SSO & role permissions",
        "API access & webhooks",
        "Immutable audit logs",
        "Legal hold controls",
        "Dedicated account manager",
        "Custom onboarding",
      ],
    },
  ],
} as const;

export const targetCustomers = [
  {
    category: "SMB Landlords",
    description: "Independent landlords with 3-20 units. Small PMs with 10-100 units. One owner + lean team.",
    painPoints: ["Slow leasing", "No proof for owners", "Manual deposit tracking"],
    value: "Free first unit. Fast ROI board. Simple setup.",
  },
  {
    category: "Enterprise Portfolios",
    description: "Regional and national portfolios. Central ops + onsite teams. Existing PMS (Yardi, MRI, AppFolio).",
    painPoints: ["No leasing visibility", "Multi-state compliance", "Performance tracking"],
    value: "Role permissions. Multi-state templates. API integration.",
  },
] as const;

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

export const competitiveAdvantages = [
  {
    title: "Zero-training interface",
    description: "Works immediately, no onboarding needed",
    icon: "⚡",
  },
  {
    title: "Complements your PMS",
    description: "No need to replace existing systems",
    icon: "🔗",
  },
  {
    title: "Built-in compliance",
    description: "State-specific rules, not bolted on",
    icon: "✅",
  },
  {
    title: "Works everywhere",
    description: "Smart links across all listing platforms",
    icon: "🌐",
  },
  {
    title: "Owner proof, instantly",
    description: "ROI reporting without heavy dashboards",
    icon: "📊",
  },
] as const;

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
