export const pilotFocus = {
  focus: "Independent California landlords manage deposits the professional way.",
  qualifier:
    "No marketplace in the pilot—Fairvia delivers a streamlined landlord SaaS with an optional Listing Assist trust badge that overlays on any listing you already post elsewhere.",
  thesis:
    "Fairvia turns messy deposit handling into a guided workflow that keeps both sides informed, compliant, and calm.",
  primaryOutcome: "Reduce hours spent per move in and move out while raising trust and reducing disputes.",
} as const;

export const pilotGuardrails = [
  "California deposits and move-out rules only",
  "Independent landlords with one to twenty units",
  "Listings remain on Zillow, Craigslist, and Facebook—Fairvia provides overlay badge, profile page, and SEO property profile",
  "Pilot excludes rent collection, maintenance tickets, and accounting",
] as const;

export const pilotPersonas = [
  {
    name: "Owner-operator landlord",
    jobs: [
      "Stay compliant without looking amateur",
      "Deflect repetitive tenant questions about deposits",
      "Signal professionalism on public listings to attract reliable renters",
    ],
  },
  {
    name: "Renter",
    jobs: [
      "Know deposits are safe and deductions will be clear",
      "Receive updates without chasing the landlord",
    ],
  },
  {
    name: "Property advisor or realtor",
    jobs: [
      "Offer a safe deposit flow for small clients without becoming the manager",
    ],
  },
] as const;

export const pilotValuePromises = [
  "Deposit held by a neutral partner until release",
  "Identity and lease verified",
  "Deadlines tracked with alerts",
  "Templates for receipts, disclosures, and itemized deductions",
  "Shared timeline that keeps both sides aligned",
  "SEO profile pages that attract renters with verified compliance",
  "Built-in communication layer for clear landlord-to-renter messaging",
] as const;

export const pilotModules = [
  {
    id: "compliance",
    title: "Compliance Workflow",
    summary: "Fairvia automates California deposit law, guiding landlords through compliant releases with documentation handled for them.",
    bullets: [
      "Built-in logic for California’s twenty one day return rule",
      "Auto reminders for landlords",
      "Itemized deduction letter generator with receipts and math checks",
      "Archive of all steps for at least three years",
    ],
  },
  {
    id: "escrow",
    title: "Escrow + Lease Backbone",
    summary: "Licensed partners hold deposits while Fairvia packages the lease workflow so both sides see neutral status updates.",
    bullets: [
      "Deposit setup and transfer to a licensed escrow partner",
      "Lease pack with California-compliant templates and e-signature",
      "Neutral status confirmation visible to both landlord and renter",
    ],
  },
  {
    id: "checklists",
    title: "Move-In / Move-Out Checklists",
    summary: "Timestamped photo sets and shared tasks keep condition notes tied to each deposit case.",
    bullets: [
      "Photo checklist with timestamps",
      "Guided steps for landlords and renters to document condition",
      "Secure document vault that ties files to each deposit case",
    ],
  },
  {
    id: "listing-assist",
    title: "Listing Assist Badge + SEO Profile",
    summary: "A Fairvia trust badge overlays on existing listings and links to a compliance-ready property profile.",
    bullets: [
      "Badge generator with unique property token",
      "Public profile page showing escrow, verification, and compliance status",
      "SEO-optimized property page with schema markup and FAQs to attract renters",
    ],
  },
  {
    id: "communication",
    title: "Communication Layer",
    summary: "Guided templates and confirmations keep both sides aligned without juggling texts or email threads.",
    bullets: [
      "Guided message templates for common deposit updates",
      "Ability to attach receipts, estimates, or photos",
      "One-click renter confirmations",
      "Shared timeline that logs every message and acknowledgement",
    ],
  },
] as const;

export const pilotMvpFeatureSet = {
  landlordWorkspace: [
    "Property profiles and tenants",
    "Guided deposit setup and transfer to partner escrow",
    "Lease pack with California templates and e-signature",
    "Photo checklist for move-in and move-out with timestamp archive",
    "Deductions helper with math checks and receipt attachments",
    "Auto reminders for the twenty one day return clock",
    "Release flow with optional partial returns and notes",
    "Secure document vault and case timeline",
    "Communication layer to send guided messages and attach receipts or photos",
  ],
  renterPortal: [
    "View status of deposit and identity checks",
    "See lease files and photo sets",
    "Timeline with key dates and what happens next",
    "Acknowledge move-in checklist and final release",
    "Receive landlord messages and confirm updates with one click",
  ],
  listingAssist: [
    "Badge generator that produces a shareable badge link and small embed",
    "Public profile page for the property that lists the controls in use",
    "SEO optimized property profile page with schema markup for RentalProperty and FAQs",
    "QR code and short link for printed flyers and images",
  ],
  adminOps: [
    "Simple case queue with status filters",
    "Audit log per case",
    "Config for templates and legal copy",
  ],
} as const;

export const listingAssistDefinition = {
  description:
    "A trust mark that landlords place on any listing they post elsewhere. The badge links to a Fairvia page that proves the landlord is using identity checks, escrow for the deposit, a verified lease pack, and a shared timeline.",
  states: ["Setup not complete", "Live and verified", "Paused or under review"],
  embedTypes: ["Link plus small graphic for marketplace descriptions", "QR code for images and flyers", "Copy block for email replies"],
} as const;

export const pilotOnboarding = {
  landlord: [
    "Create account and verify identity",
    "Create property profile and invite tenant",
    "Connect to escrow partner inside Fairvia—landlord never holds the deposit",
    "Choose the California lease pack and fill fields once",
    "Send for e-signature; both sides receive a read-only copy",
    "Generate Listing Assist badge and add to existing listings",
    "SEO optimized profile page created automatically with metadata and FAQ schema",
  ],
  tenant: [
    "Verify identity and sign lease",
    "Send deposit to partner escrow using guided rails",
    "Confirm move-in checklist and upload photos",
  ],
  complianceOverlay: [
    "Built-in logic for twenty one day return timeline",
    "Required disclosures and receipts for deductions",
    "Itemized letter generator with totals and attachments",
    "Archive of all steps and timestamps",
  ],
} as const;

export const pilotComplianceFocus = [
  "Pre move-out walkthrough offer and checklist with clear expectations for cleaning and repairs",
  "Twenty one day return clock auto tracked from move-out date with reminders and a visible timer in the case",
  "Itemized deductions letter that separates cleaning, repairs, and unpaid rent with required proof",
  "Guardrails that warn on normal wear and tear and steer toward well-documented deductions",
  "Standard record archive with photos, receipts, and message history kept together for at least three years",
  "Templates for notices and acknowledgements so communication stays consistent and timestamped",
  "Optional internal double check before sending the final letter and release instruction",
] as const;

export const pilotFlows = {
  moveIn: [
    "Landlord sets case to Move In and shares checklist",
    "Tenant uploads photos and confirms condition",
    "Deposit received by escrow partner and confirmation posted to both sides",
  ],
  moveOut: [
    "Landlord schedules walkthrough and captures photos",
    "Deductions helper suggests line items and math checks totals",
    "Itemized letter and receipts are bundled and sent",
    "Release instruction is sent to escrow partner with amount and payee details",
    "Case is closed and archived for three years",
  ],
  disputeMode: [
    "Structured notes and attachments per claim",
    "Timeline shows who did what and when",
    "Optional message to the other side with a guided template",
  ],
  seoProfile: [
    "Each property automatically gets a search optimized profile page with schema markup",
    "Page includes compliance badge, escrow statement, and timeline status",
    "Metadata is city and neighborhood targeted (for example, \"2BR Apartment near Lake Merritt Oakland CA\")",
    "Profile pages link back to landlord’s original listing for renter funnel",
  ],
  communication: [
    "Landlord sends a message using a guided template (for example, walkthrough scheduled)",
    "Message and attachments appear in the shared timeline with timestamp",
    "Renter receives notification and can confirm with one click",
    "All communication is archived with the case for three years",
  ],
} as const;
