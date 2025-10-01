/**
 * Fairvia - Full Product and Business Scope
 * Version: 1.0
 * Date: October 01, 2025
 * Confidential
 */

export const vision = {
  statement: "Bring trust, speed, and clarity to residential leasing and deposits",
  mission: "Help property teams fill units faster, reduce disputes, and simplify compliance, without adding heavy systems or complex onboarding",
} as const;

export const strategicObjectives = [
  "Decrease average days vacant per unit",
  "Reduce deposit dispute frequency and resolution time",
  "Increase transparency between owners, renters, and operators",
  "Provide legally compliant workflows that scale across states",
  "Enable faster adoption through zero-training interfaces",
] as const;

export const coreProduct = {
  description: "A lightweight operational layer that connects listings, leasing workflows, and deposit processes into one smart, shareable unit link",
  positioning: "Designed to complement existing property management systems",
} as const;

export const featureTiers = {
  starter: {
    name: "Starter",
    subtitle: "Perfect for trying Fairvia",
    price: "Free",
    priceDetail: "One unit, forever",
    features: [
      "Smart unit link with QR code",
      "Trust and precheck page",
      "Timeline view from inquiry to move-out",
      "ROI board and owner share link",
      "Exportable summary and archive",
    ],
  },
  pro: {
    name: "Pro",
    subtitle: "For active property managers",
    price: "$49",
    priceDetail: "per unit per month",
    includes: "Everything in Starter, plus:",
    features: [
      "Unlimited units",
      "Deposit workflow with AB 2801 compliance",
      "Itemized deduction builder with receipt upload",
      "Countdown timers for deposit deadlines",
      "Weekly owner update emails",
      "CSV import and export",
    ],
  },
  enterprise: {
    name: "Enterprise",
    subtitle: "For large property management companies",
    price: "Custom pricing",
    priceDetail: "Contact for quote",
    includes: "Everything in Pro, plus:",
    features: [
      "Role-based permissions for org, region, and unit levels",
      "SSO and directory sync (Active Directory, Okta)",
      "Multi-state template library (California, Texas, New York, Florida, Illinois)",
      "Audit trail and immutable logs (compliance-ready)",
      "Legal hold and archive export (litigation support)",
      "Event API and webhooks (integration with existing systems)",
    ],
  },
} as const;

export const userRoles = [
  {
    role: "Owner/Admin",
    access: "Full visibility and control over portfolio",
    capabilities: ["Manage all units", "Configure settings", "View all reports", "Manage team members"],
  },
  {
    role: "Leasing Agent",
    access: "Manage inquiries, prechecks, and tours",
    capabilities: ["Respond to inquiries", "Schedule tours", "Update unit status", "View assigned units"],
  },
  {
    role: "Ops/Compliance Lead",
    access: "Configure templates, monitor compliance",
    capabilities: ["Set up templates", "Review compliance", "Generate reports", "Manage workflows"],
  },
  {
    role: "View-only (Owner)",
    access: "Access ROI board and archive exports",
    capabilities: ["View reports", "Download archives", "See unit performance", "Read-only timeline access"],
  },
] as const;

export const complianceModule = {
  description: "State-specific compliance engine with automated workflows",
  features: [
    "State-specific template engine with review dates",
    "Countdown timers for deposit deadlines (California's 21-day rule)",
    "Itemized deductions with receipts and proof requirements",
    "Legal hold toggle and audit log for disputes",
    "Timeline-integrated export (ZIP of letters, receipts, timeline)",
  ],
  states: ["California", "Florida", "Texas", "New York", "Illinois"],
} as const;

export const uxFlow = {
  principles: [
    "No login required for renters or owners",
    "Timeline auto-generates based on activity",
    "Weekly summary auto-sent to owner (if enabled)",
    "Deposit flow triggers after lease marked complete",
  ],
  keyScreens: [
    "Smart unit link landing page",
    "Trust and precheck form",
    "Timeline view (inquiry → lease → move-in → move-out)",
    "ROI board for owners",
    "Deposit workflow with compliance countdown",
  ],
} as const;

export const accessibility = {
  standards: "WCAG 2.1 AA compliance",
  features: [
    "Visual contrast standards met for all text",
    "Accessible via screen reader for owner dashboard",
    "Export options available for audit and legal review",
    "Compliant messaging and labels per state rules",
  ],
} as const;

export const performance = {
  targets: [
    "Quick interaction under 2 seconds per action",
    "Scalable to 10,000+ active unit links",
    "Redundancy and autosave for legal documents and timelines",
  ],
} as const;

export const rolloutPlan = [
  {
    phase: "Phase 1",
    timeline: "Q4 2025",
    focus: "California and Florida deposit compliance",
    deliverables: [
      "Launch SMB Pro tier",
      "California AB 2801 compliance (21-day deposit return)",
      "Florida deposit law templates",
      "Smart unit link with QR code",
    ],
  },
  {
    phase: "Phase 2",
    timeline: "Q1 2026",
    focus: "Add Texas, New York, Illinois",
    deliverables: [
      "Multi-state template engine",
      "State-specific compliance workflows",
      "Enhanced CSV import/export",
    ],
  },
  {
    phase: "Phase 3",
    timeline: "Q2 2026",
    focus: "Introduce renter-side status views",
    deliverables: [
      "Renter portal with timeline access",
      "Mobile-optimized renter experience",
      "Push notifications for key events",
    ],
  },
  {
    phase: "Phase 4",
    timeline: "Q3 2026",
    focus: "Partner-integrated deposit trust layer",
    deliverables: [
      "Enterprise tier launch",
      "SSO and directory sync",
      "API and webhook integrations",
      "Advanced audit and legal hold features",
    ],
  },
] as const;

export const strategicRisks = [
  {
    risk: "Legal complexity by state",
    control: "Template engine with last reviewed date, legal review process for each state",
    mitigation: "Partner with state-specific legal counsel, automated template updates",
  },
  {
    risk: "Scope creep into full PMS",
    control: "Stay wedge-focused on listings, leasing, and deposits only",
    mitigation: "Clear product boundaries, integrate with existing PMS via API",
  },
  {
    risk: "Low adoption",
    control: "Free first unit, no-login flows for renters and owners",
    mitigation: "Zero-training interface, immediate value on day one",
  },
  {
    risk: "Abuse of free tier",
    control: "Limit to 1 active unit with clear upgrade path",
    mitigation: "Monitor usage patterns, enforce fair use policy",
  },
] as const;

export const competitiveAdvantages = [
  "Zero-training interface that works immediately",
  "Complements existing PMS instead of replacing it",
  "State-specific compliance built-in, not bolted on",
  "Smart unit links that work across all listing platforms",
  "Owner ROI reporting without heavy dashboards",
] as const;
