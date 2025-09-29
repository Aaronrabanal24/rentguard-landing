import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";
import HomeCTA from "@/components/sections/HomeCTA";
import { Hero3DScene } from "@/components/sections/Hero/mockup/Hero3DScene";

interface FeatureLayer {
  content: ReactNode;
  wrapperClassName?: string;
  tileClassName?: string;
}

interface ProductStat {
  label: string;
  value: string;
  description?: string;
}

interface ProductComparisonEntry {
  label: string;
  detail: string;
}

interface ProductVisualDefinition {
  headline: string;
  caption: string;
  layers: ReadonlyArray<FeatureLayer>;
  spotlightClassName: string;
  stats: ReadonlyArray<ProductStat>;
}

interface ProductDefinition {
  slug: string;
  label: string;
  name: string;
  tagline: string;
  summary: {
    whatItIs: string;
    whoItIsFor: string;
  };
  objectives: ReadonlyArray<string>;
  capabilities: ReadonlyArray<string>;
  flow: ReadonlyArray<string>;
  differentiators: ReadonlyArray<string>;
  outcomes: ReadonlyArray<string>;
  metrics: ReadonlyArray<string>;
  risks: ReadonlyArray<string>;
  competitiveView: ReadonlyArray<ProductComparisonEntry>;
  visual: ProductVisualDefinition;
}

const PilotModules = dynamic(() => import("@/components/sections/PilotModules"), {
  loading: () => <SectionSkeleton heightClass="h-[420px]" label="Loading pilot modules" />,
});

const PilotFeatureMatrix = dynamic(() => import("@/components/sections/PilotFeatureMatrix"), {
  loading: () => <SectionSkeleton heightClass="h-[420px]" label="Loading feature matrix" />,
});

const FEATURE_HERO_LAYERS: FeatureLayer[] = [
  {
    wrapperClassName: "-translate-x-20 -translate-y-16 rotate-6",
    tileClassName:
      "bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-500 text-white shadow-[0_52px_104px_-48px_rgba(14,116,144,0.82)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Discover</p>
        <p className="text-lg font-semibold">City + neighborhood tags</p>
        <p className="text-xs text-white/75">Structured data prepped for search intent.</p>
      </div>
    ),
  },
  {
    wrapperClassName: "translate-x-12 -translate-y-2 -rotate-3",
    tileClassName:
      "bg-white/95 text-slate-800 shadow-[0_40px_90px_-46px_rgba(15,23,42,0.55)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Comply</p>
        <p className="text-sm font-semibold text-slate-900">Escrow verified</p>
        <p className="text-xs text-slate-500">Identity, lease, and funds locked in before move-in.</p>
      </div>
    ),
  },
  {
    wrapperClassName: "translate-x-6 translate-y-14 rotate-4",
    tileClassName:
      "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 text-white shadow-[0_46px_96px_-48px_rgba(15,23,42,0.75)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/65">Trust badge</p>
        <p className="text-lg font-semibold">Live state · Verified</p>
        <p className="text-xs text-white/70">Portable overlay for any marketplace listing.</p>
      </div>
    ),
  },
];

const SUITE_HERO_STATS: ProductStat[] = [
  {
    label: "North star",
    value: "Escrow by default",
    description: "Every lease starts with neutral custody and shared verification.",
  },
  {
    label: "Landlord focus",
    value: "1–20 doors",
    description: "Designed for independent California operators who need expert guardrails without added staff.",
  },
  {
    label: "Time saved",
    value: "< 40 min move-out",
    description: "Guided automations keep the 21-day clock calm and documented end to end.",
  },
];

const FAIRVIA_PRODUCTS: ProductDefinition[] = [
  {
    slug: "discover",
    label: "SEO profiles",
    name: "Fairvia Discover",
    tagline: "Search-optimized property profiles that attract qualified renters and show clear trust controls.",
    summary: {
      whatItIs:
        "A search optimized property profile that attracts qualified renters and shows clear trust controls.",
      whoItIsFor:
        "Independent California landlords with one to twenty units who already list on large marketplaces but want better click quality and fewer back and forth messages.",
    },
    objectives: [
      "Raise discovery from search for city and neighborhood rental intent",
      "Lift trust before first contact by showing escrow and verification",
      "Send higher intent traffic into the landlord funnel that already exists",
    ],
    capabilities: [
      "Property profile with city and neighborhood tags and clean titles",
      "FAQ block in plain language that also emits FAQ schema",
      "RentalProperty schema with canonical and Open Graph data",
      "Photo gallery with alt text prompts and room labels",
      "Short link and QR for flyers and messages",
      "Simple analytics for impressions by query and by city and for actions",
    ],
    flow: [
      "Enter property details and upload photos",
      "Toggle trust flags for escrow and verification",
      "Accept suggested title, description, alt text, and FAQ or edit in place",
      "Preview on mobile and desktop then publish",
      "Share the short link and QR in marketplace listings and messages",
      "Review analytics and improve photos or copy when prompted",
    ],
    differentiators: [
      "Proof page that shows escrow and verification first",
      "Plain language that fits California deposit rules without legal jargon",
      "Works with current listings rather than replacing them",
    ],
    outcomes: [
      "Search impressions that match city and neighborhood intent",
      "Click through from badge links in marketplace descriptions",
      "Ask a question clicks and application starts from the profile",
      "Scroll depth to the trust block and FAQ views",
    ],
    metrics: [
      "Impressions by query and by city",
      "Profile visits and time on page",
      "Ask a question and application starts",
      "Share rate for QR and short link",
    ],
    risks: [
      "Overclaim risk is removed by locking trust text to real flags",
      "Stale content risk is reduced by a quality meter and prompts to refresh",
      "SEO abuse is blocked by a content linter that avoids bait terms",
    ],
    competitiveView: [
      {
        label: "Marketplaces",
        detail:
          "Great reach but weak control over structured data and no trusted space to show escrow or verification.",
      },
      {
        label: "Template sites",
        detail:
          "Attractive but limited search reach without heavy effort and no built in trust model.",
      },
      {
        label: "Property manager suites",
        detail:
          "One size fits all pages and generic copy. Fairvia is focused and local and shows real guardrails.",
      },
    ],
    visual: {
      headline: "Discover profile mockup",
      caption: "City and neighborhood tags lead with trust controls and structured data.",
      spotlightClassName: "bg-sky-500/25",
      layers: [
        {
          wrapperClassName: "-translate-x-16 -translate-y-12 rotate-6",
          tileClassName:
            "bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-500 text-white shadow-[0_48px_92px_-46px_rgba(14,116,144,0.85)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">SEO focus</p>
              <p className="text-lg font-semibold">Oakland · Temescal</p>
              <p className="text-xs text-white/75">Structured tags auto-injected for neighborhoods.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-12 translate-y-8 -rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_34px_76px_-40px_rgba(15,23,42,0.48)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Trust block</p>
              <p className="text-sm font-semibold text-slate-900">Escrow live · Verified</p>
              <p className="text-xs text-slate-500">Proof content stays locked to real flags.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-2 -translate-y-6 rotate-2",
          tileClassName:
            "bg-gradient-to-br from-white via-amber-50 to-rose-100 text-slate-800 shadow-[0_32px_70px_-44px_rgba(251,191,36,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-500">Schema</p>
              <p className="text-sm font-semibold text-slate-900">FAQ ready</p>
              <p className="text-xs text-slate-600">Plain language content emits FAQ schema.</p>
            </div>
          ),
        },
      ],
      stats: [
        {
          label: "Structured data",
          value: "RentalProperty + FAQ",
          description: "Published automatically with canonical and OG tags.",
        },
        {
          label: "Link tools",
          value: "QR + short link",
          description: "Share in marketplace descriptions and flyers instantly.",
        },
        {
          label: "Insights",
          value: "Query + city",
          description: "Analytics split impressions by search phrase and location.",
        },
      ],
    },
  },
  {
    slug: "comply",
    label: "Identity escrow + lease pack",
    name: "Fairvia Comply",
    tagline: "Guided setup for identity, escrow, and lease packs with a shared record and renter view.",
    summary: {
      whatItIs:
        "Guided setup for identity lease and escrow with a shared record and a renter view.",
      whoItIsFor: "Landlords who want the deposit to start correct so the move out can finish correct.",
    },
    objectives: [
      "Put funds in neutral escrow before move in",
      "Confirm identity on both sides",
      "Issue a clean California lease pack with e signature and read only copies",
      "Create a single shared record from first step to final release",
    ],
    capabilities: [
      "Identity verification for landlord and renter",
      "Lease pack for California with e signature and a read only copy for both sides",
      "Neutral escrow setup with clear status",
      "Move in photo checklist with labels and timestamps",
      "Case timeline and document vault with audit log",
      "Renter portal that explains what happens next",
    ],
    flow: [
      "Confirm landlord identity and profile",
      "Create applicant and verify identity",
      "Generate lease pack and route for e signature",
      "Set up escrow and move funds before key handoff",
      "Capture move in photos and store receipts and notes",
      "Share read only status and timeline with the renter",
    ],
    differentiators: [
      "Neutral escrow by default",
      "Simple renter portal that lowers message volume",
      "California first copy and checklists",
    ],
    outcomes: [
      "Percent of deposits in escrow before move in",
      "Time to complete setup from invite to funded",
      "Error rate on missing fields in the lease pack",
      "Renter portal views and fewer back and forth messages",
    ],
    metrics: [
      "Setup completion within seven days",
      "Percent funded before move in",
      "Support tickets per case",
      "Renter portal satisfaction signal from quick prompts",
    ],
    risks: [
      "Wrong party risk reduced by dual identity checks",
      "Incomplete pack risk reduced by one time field entry across forms",
      "Data privacy protected by role based access and retention rules",
    ],
    competitiveView: [
      {
        label: "Point identity tools",
        detail: "Verify identity but do not connect to escrow or the lease pack.",
      },
      {
        label: "Signature tools",
        detail: "Collect signatures but ignore deposit setup and photo checklists.",
      },
      {
        label: "All in one manager suites",
        detail: "Large surface with many settings and a steep learning curve. Comply is focused on the deposit and the lease only.",
      },
    ],
    visual: {
      headline: "Comply escrow workspace",
      caption: "Identity, lease, and funds shown in one shared timeline before move-in.",
      spotlightClassName: "bg-emerald-500/25",
      layers: [
        {
          wrapperClassName: "-translate-x-16 -translate-y-12 -rotate-4",
          tileClassName:
            "bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 text-white shadow-[0_48px_96px_-46px_rgba(16,185,129,0.82)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Escrow</p>
              <p className="text-lg font-semibold">Funds secured</p>
              <p className="text-xs text-white/75">Neutral custody confirmed pre move-in.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-10 translate-y-10 rotate-5",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_36px_82px_-42px_rgba(15,23,42,0.5)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Lease pack</p>
              <p className="text-sm font-semibold text-slate-900">AB 1482 ready</p>
              <p className="text-xs text-slate-500">California clauses locked and audit logged.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-2 -translate-y-4 -rotate-2",
          tileClassName:
            "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-[0_38px_84px_-46px_rgba(15,23,42,0.7)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Identity</p>
              <p className="text-sm font-semibold">Dual verified</p>
              <p className="text-xs text-white/70">Both sides complete checks before signing.</p>
            </div>
          ),
        },
      ],
      stats: [
        {
          label: "Setup cadence",
          value: "Minutes, not days",
          description: "Guided flow moves from invite to funded without hand-offs.",
        },
        {
          label: "Shared record",
          value: "Case timeline",
          description: "Landlord and renter see the same status and audit log.",
        },
        {
          label: "Portal clarity",
          value: "Plain language",
          description: "Renter view explains escrow and next steps without jargon.",
        },
      ],
    },
  },
  {
    slug: "trust-badge",
    label: "Listing Assist overlay",
    name: "Fairvia Trust Badge",
    tagline: "A portable trust mark that proves escrow and verification anywhere a landlord lists a unit.",
    summary: {
      whatItIs:
        "A portable trust mark that proves escrow and verification anywhere a landlord lists a unit.",
      whoItIsFor:
        "Landlords who want to keep using current marketplaces and social posts but add a clear trust signal.",
    },
    objectives: [
      "Increase click quality from crowded listings",
      "Make trust visible before first message",
      "Route prospects to the Discover profile for full details",
    ],
    capabilities: [
      "Badge generator with a unique token per property",
      "Copy block for marketplace descriptions and email replies",
      "Small graphic and QR for flyers and window signs",
      "Badge states for setup not complete, live and verified, paused, or under review",
      "Click tracking by source to compare placements",
    ],
    flow: [
      "Generate the badge and copy the one line snippet",
      "Paste into marketplace description and common replies",
      "Add QR to printed items",
      "Measure click quality and adjust copy or placement",
    ],
    differentiators: [
      "Simple and portable",
      "Shows real live state rather than a static logo",
      "Backed by a profile that explains the process",
    ],
    outcomes: [
      "Click through from each marketplace and from email replies",
      "Time on profile after a badge click",
      "Ask a question conversions from badge traffic",
    ],
    metrics: [
      "Badge clicks by source",
      "Profile engagement from badge traffic",
      "Application starts from badge traffic",
    ],
    risks: [
      "Misuse risk reduced by token based generation and source checks",
      "Over promise risk avoided by live state that reflects Comply",
    ],
    competitiveView: [
      {
        label: "Trust icons without verification",
        detail: "Static graphics with no live data.",
      },
      {
        label: "Marketplace trust programs",
        detail: "Often locked to their own system and do not show escrow that is neutral.",
      },
      {
        label: "Fairvia",
        detail: "Shows a real state that links to a plain language profile.",
      },
    ],
    visual: {
      headline: "Trust badge overlay",
      caption: "Live escrow state follows the listing wherever it is shared.",
      spotlightClassName: "bg-indigo-500/20",
      layers: [
        {
          wrapperClassName: "-translate-x-14 -translate-y-10 rotate-5",
          tileClassName:
            "bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white shadow-[0_44px_90px_-44px_rgba(99,102,241,0.78)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Badge state</p>
              <p className="text-lg font-semibold">Verified live</p>
              <p className="text-xs text-white/75">Escrow + identity confirmed right now.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-8 translate-y-8 -rotate-4",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_32px_72px_-40px_rgba(15,23,42,0.48)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Token</p>
              <p className="text-sm font-semibold text-slate-900">fairvia.link/2BR</p>
              <p className="text-xs text-slate-500">Immutable short link for any channel.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-2 -translate-y-4 rotate-3",
          tileClassName:
            "bg-gradient-to-br from-emerald-400 via-sky-400 to-cyan-400 text-slate-900 shadow-[0_30px_64px_-42px_rgba(14,165,233,0.55)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-800">Clicks</p>
              <p className="text-sm font-semibold text-slate-900">Source compare</p>
              <p className="text-xs text-slate-700">Marketplace vs email vs flyer QR.</p>
            </div>
          ),
        },
      ],
      stats: [
        {
          label: "Placement",
          value: "Marketplaces + replies",
          description: "One snippet adapts to listings, emails, and printed flyers.",
        },
        {
          label: "Live trust",
          value: "Setup · Live · Paused",
          description: "Badge states mirror Comply in real time—no stale promises.",
        },
        {
          label: "Attribution",
          value: "Source tracking",
          description: "Compare click quality across marketplaces and campaigns.",
        },
      ],
    },
  },
  {
    slug: "offboard",
    label: "Deductions letters + the clock",
    name: "Fairvia Offboard twenty one",
    tagline: "A guided move out flow that keeps the landlord on time and well documented from walkthrough to refund.",
    summary: {
      whatItIs:
        "A guided move out flow that keeps the landlord on time and well documented from walkthrough to refund.",
      whoItIsFor:
        "Landlords who want a calm and fair finish and a record that stands up later.",
    },
    objectives: [
      "Keep the twenty one day clock visible and on track",
      "Help the landlord calculate lawful deductions with proof",
      "Generate a clean itemized letter with totals and attachments",
      "Release funds from escrow with support for partial returns",
      "Archive the full case in one place",
    ],
    capabilities: [
      "Visible countdown and reminders for key steps",
      "Deductions helper with math checks and categories for cleaning, repairs, and unpaid rent",
      "Guardrails for normal wear and tear with gentle warnings",
      "Itemized letter generator with receipts and photos attached",
      "Structured dispute mode with notes and a clear event timeline",
      "Final release flow and case archive for three years",
    ],
    flow: [
      "Offer a pre move out walkthrough and capture notes and photos",
      "Upload receipts and optional vendor estimates",
      "Use the helper to add items and confirm categories and math",
      "Generate the letter and run an internal double check",
      "Release the correct amount from escrow and send the letter",
      "Store the record and close the case",
    ],
    differentiators: [
      "Clock first design so deadlines are not missed",
      "Guardrails to avoid common overclaim errors",
      "Calm letter voice with clear attachments and totals",
    ],
    outcomes: [
      "On time return rate",
      "Dispute rate and resolution time",
      "Average minutes spent per move out",
      "Share of cases with complete photo sets and receipts",
    ],
    metrics: [
      "Ninety five percent on time return rate",
      "Below ten percent dispute rate",
      "Under forty minutes average landlord time per case",
    ],
    risks: [
      "Late return risk lowered by reminders and visible timers",
      "Overclaim risk lowered by guardrails and examples",
      "Evidence gaps lowered by required photos and receipts prompts",
    ],
    competitiveView: [
      {
        label: "Generic document templates",
        detail: "Do not track time and do not check math or evidence.",
      },
      {
        label: "Suite move out modules",
        detail: "Heavy with many unrelated steps and state specific confusion.",
      },
      {
        label: "Fairvia",
        detail: "Simple and focused on California rules with a guided letter and a clear clock.",
      },
    ],
    visual: {
      headline: "Offboard countdown + deductions",
      caption: "Countdown, deduction math, and escrow release staged in one calm view.",
      spotlightClassName: "bg-amber-500/25",
      layers: [
        {
          wrapperClassName: "-translate-x-14 -translate-y-12 rotate-6",
          tileClassName:
            "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_48px_96px_-46px_rgba(249,115,22,0.8)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Countdown</p>
              <p className="text-lg font-semibold">Day 16 reminder</p>
              <p className="text-xs text-white/75">Stay ahead of the 21-day cutoff.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-10 translate-y-10 -rotate-4",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_36px_78px_-40px_rgba(15,23,42,0.48)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Letter</p>
              <p className="text-sm font-semibold text-slate-900">Itemized with proof</p>
              <p className="text-xs text-slate-500">Receipts and photos attached automatically.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-2 -translate-y-4 rotate-2",
          tileClassName:
            "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-[0_38px_84px_-46px_rgba(15,23,42,0.7)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Release</p>
              <p className="text-sm font-semibold">$2,100 queued</p>
              <p className="text-xs text-white/70">Escrow partner issues refund on time.</p>
            </div>
          ),
        },
      ],
      stats: [
        {
          label: "Clock",
          value: "Visible timeline",
          description: "Countdown shows risk checkpoints and recommended actions.",
        },
        {
          label: "Math",
          value: "Guardrailed helper",
          description: "Categories, rates, and totals double-check automatically.",
        },
        {
          label: "Archive",
          value: "3-year vault",
          description: "Receipts, notes, and letters stay court-ready on export.",
        },
      ],
    },
  },
];

const CROSS_PRODUCT_POINTS = [
  {
    title: "Discover attracts",
    detail:
      "Discover attracts quality renters to a credible page with trust signals.",
  },
  {
    title: "Comply secures",
    detail: "Comply sets identity, lease, and escrow while creating the shared record.",
  },
  {
    title: "Trust Badge projects",
    detail: "Trust Badge projects those controls across every listing and message.",
  },
  {
    title: "Offboard finishes",
    detail: "Offboard twenty one finishes with a documented letter and a clean release.",
  },
];

const DATA_MODEL_POINTS = [
  "Property record plus a case record for each tenancy",
  "Document vault for photos, receipts, and signed files",
  "Role based access for landlord and renter with read only where needed",
  "Retention controls and export on request",
  "Clear consent for identity checks and transparent escrow status",
];

const TECH_CHOICES = [
  "Next framework and server actions for a fast and simple app",
  "Postgres for core data and object storage for photos and files",
  "Partner integrations for identity, escrow, and e signature",
  "Image compression and a two second load target on mid range phones",
  "Simple privacy friendly analytics",
];

const PRICING_POINTS = [
  "Discover free for a limited set of addresses to seed profiles",
  "Comply as a monthly plan per landlord with Trust Badge included",
  "Offboard twenty one as a per case add or a small monthly bundle that covers a set number of move outs",
];

const NORTH_STAR_POINTS = [
  "Percent of leases with escrow at move in",
  "On time returns at move out",
  "Dispute rate and time saved per case",
  "Repeat use as units turn again",
];

const SUITE_RISKS = [
  {
    risk: "Escrow adoption",
    mitigation: "Make escrow default and explain it clearly in the trust block.",
  },
  {
    risk: "Feature creep into accounting or rent collection",
    mitigation: "Stay focused on deposits and offboarding.",
  },
  {
    risk: "State expansion too soon",
    mitigation: "Prove California first then add new regions with the same calm pattern.",
  },
  {
    risk: "Support load",
    mitigation: "Use simple in app guides and a renter view that answers common questions.",
  },
];

export default function FeaturesPage() {
  return (
    <PageContainer title="Fairvia — Features & Compliance" animateMain={false}>
      <FeatureHero />
      <ProductQuickNav />
      <ProductSuiteOverview />
      <ProductSections />
      <CrossProductSection />
      <DataModelPrivacySection />
      <TechnicalChoicesSection />
      <PricingSection />
      <NorthStarSection />
      <SuiteRisksSection />
      <PilotModules />
      <PilotFeatureMatrix />
      <HomeCTA />
    </PageContainer>
  );
}

function SectionSkeleton({ heightClass, label }: { heightClass: string; label: string }) {
  return (
    <div
      className={`flex ${heightClass} items-center justify-center rounded-3xl border border-slate-200 bg-white/70 text-sm text-slate-400 animate-pulse`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      {label}
    </div>
  );
}

function FeatureHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:gap-16">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Fairvia suite
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">One calm deposit platform from search to day twenty one</h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Discover, Comply, Trust Badge, and Offboard twenty one combine to attract qualified renters, prove escrow and identity up front, project trust everywhere you advertise, and close every tenancy with lawful documentation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#discover"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-emerald-600"
            >
              Explore the product modules
            </a>
            <a
              href="#suite-overview"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 transition hover:-translate-y-[1px] hover:border-white/60"
            >
              Understand the system
            </a>
          </div>
        </div>

        <FeatureHeroVisual />
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-3 px-4 text-xs text-slate-200 sm:grid-cols-3">
        {SUITE_HERO_STATS.map((stat) => (
          <FeatureHeroStat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function FeatureHeroVisual() {
  return (
    <motion.div
      className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-[0_40px_80px_-30px_rgba(6,40,90,0.55)] backdrop-blur"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px 0px 0px 0px", amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between text-xs text-slate-200">
        <span>Suite control center</span>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">Calm and verified</span>
      </div>
      <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-4">
        <Hero3DScene className="h-48" spotlightClassName="bg-emerald-500/20" layers={FEATURE_HERO_LAYERS} />
        <noscript>
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/80 p-4 text-slate-700">
            <p className="text-sm font-semibold">Suite workflow preview</p>
            <p className="text-xs text-slate-500">Enable JavaScript to see the interactive feature demo.</p>
          </div>
        </noscript>
      </div>
      <p className="mt-4 text-xs text-slate-200/80">
        Every module shares the same ledger, trust controls, and analytics so landlords and renters stay aligned.
      </p>
    </motion.div>
  );
}

function FeatureHeroStat({ label, value, description }: ProductStat) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">{label}</p>
      {description ? <p className="mt-2 text-[11px] text-white/70">{description}</p> : null}
    </div>
  );
}

function ProductQuickNav() {
  return (
    <nav
      aria-label="Product navigation"
      className="bg-white py-4 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)]"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        {FAIRVIA_PRODUCTS.map((product) => (
          <a
            key={product.slug}
            href={`#${product.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-[11px] transition hover:-translate-y-[1px] hover:border-slate-400 hover:text-slate-700"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {product.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

function ProductSuiteOverview() {
  return (
    <section id="suite-overview" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-6 px-4">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Why the suite exists
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">A trusted pattern for California deposits</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Fairvia unifies search visibility, escrow compliance, trust signalling, and lawful offboarding so independent landlords can operate with the calm and documentation of a professional firm without the overhead.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-600">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Guardrails</h3>
            <p className="mt-3 text-sm text-slate-600">
              Each module shares locked trust text, dual identity verification, and a shared case timeline. Overclaim, stale copy, and missing receipts are blocked by design.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-600">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Shared data core</h3>
            <p className="mt-3 text-sm text-slate-600">
              One property record, one renter view, one escrow ledger. Analytics, messaging, and documents stay in sync across Discover, Comply, Trust Badge, and Offboard twenty one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSections() {
  return (
    <div>
      {FAIRVIA_PRODUCTS.map((product, index) => (
        <ProductSection key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}

function ProductSection({ product, index }: { product: ProductDefinition; index: number }) {
  const backgroundClass = index % 2 === 0 ? "bg-slate-50" : "bg-white";

  return (
    <section id={product.slug} className={`${backgroundClass} py-16`}>
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex w-max items-center gap-2 rounded-full bg-slate-900/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90">
              {product.label}
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{product.name}</h2>
              <p className="text-sm text-slate-600 sm:text-base">{product.tagline}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ProductSummaryCard title="What it is" copy={product.summary.whatItIs} />
              <ProductSummaryCard title="Who it is for" copy={product.summary.whoItIsFor} />
            </div>
          </div>

          <ProductVisual visual={product.visual} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ProductListCard title="Objectives" items={product.objectives} />
          <ProductListCard title="Core capabilities" items={product.capabilities} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ProductListCard title="End to end flow" items={product.flow} numbered />
          <ProductListCard title="Why it is different" items={product.differentiators} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ProductListCard title="Measurable outcomes" items={product.outcomes} />
          <ProductListCard title="Primary metrics" items={product.metrics} />
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <ProductListCard title="Risks and guardrails" items={product.risks} />
          <ProductComparisonCard entries={product.competitiveView} />
        </div>
      </div>
    </section>
  );
}

function ProductSummaryCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white/90 px-5 py-6 shadow-[0_20px_40px_-36px_rgba(15,23,42,0.2)]">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{copy}</p>
    </div>
  );
}

function ProductListCard({
  title,
  items,
  numbered = false,
}: {
  title: string;
  items: ReadonlyArray<string>;
  numbered?: boolean;
}) {
  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white/95 px-5 py-6 shadow-[0_22px_44px_-36px_rgba(15,23,42,0.16)]">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{title}</h3>
      {numbered ? (
        <ol className="mt-4 space-y-3 text-sm text-slate-600">
          {items.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[3px] inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-semibold text-emerald-600">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProductComparisonCard({ entries }: { entries: ReadonlyArray<ProductComparisonEntry> }) {
  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white/95 px-5 py-6 shadow-[0_22px_44px_-36px_rgba(15,23,42,0.16)]">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Competitive view</h3>
      <div className="mt-4 space-y-4 text-sm text-slate-600">
        {entries.map((entry) => (
          <div key={entry.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{entry.label}</p>
            <p className="mt-2 text-sm text-slate-600">{entry.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductVisual({ visual }: { visual: ProductVisualDefinition }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-[0_32px_72px_-40px_rgba(15,23,42,0.24)]"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px 0px 0px 0px", amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold uppercase tracking-[0.3em]">{visual.headline}</span>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-600">Suite mockup</span>
      </div>
      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
        <Hero3DScene className="h-44" spotlightClassName={visual.spotlightClassName} layers={visual.layers} />
      </div>
      <p className="mt-4 text-xs text-slate-500">{visual.caption}</p>
      <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
        {visual.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{stat.value}</p>
            {stat.description ? <p className="mt-1 text-xs text-slate-500">{stat.description}</p> : null}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CrossProductSection() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-8 px-4">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Cross product analysis
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">How the four parts fit together</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            The suite acts like a relay. Each module hands verified data, context, and trust forward so landlords and renters see one calm storyline—from search and first click to escrow release and record retention.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {CROSS_PRODUCT_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-sm text-slate-200 shadow-[0_26px_60px_-36px_rgba(8,47,73,0.45)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">{point.title}</p>
              <p className="mt-3 text-sm text-slate-200/90">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataModelPrivacySection() {
  return (
    <section className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-8 px-4">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Data model and privacy
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Shared records, calm access controls</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Fairvia treats each tenancy as a governed case. Documents, photos, signatures, and escrow events live in one vault with role aware permissions and transparent consent steps.
          </p>
        </div>
        <ProductListCard title="Suite data guardrails" items={DATA_MODEL_POINTS} />
      </div>
    </section>
  );
}

function TechnicalChoicesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-4">
        <div className="space-y-3 text-slate-900">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Technical choices
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Fast, privacy-friendly, integration ready</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            The stack pairs performant defaults with partner connections where they matter—identity, escrow, and signatures—while keeping the landlord and renter experience quick on any device.
          </p>
        </div>
        <ProductListCard title="Build decisions" items={TECH_CHOICES} />
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-8 px-4">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Pricing shape for the pilot
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Meet landlords where they start</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Pricing encourages adoption across the journey: Discover seeds profiles, Comply brings escrow to the center, and Offboard twenty one guarantees lawful finishes.
          </p>
        </div>
        <ProductListCard title="Pilot offer" items={PRICING_POINTS} />
      </div>
    </section>
  );
}

function NorthStarSection() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8 px-4">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            North star outcomes
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Measure calm, trust, and lawful outcomes</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Adoption is tracked via escrow usage, on-time returns, time saved, and repeat use as doors turn. Metrics span the full arc from first impression to final release.
          </p>
        </div>
        <ProductListCard title="Guiding metrics" items={NORTH_STAR_POINTS} />
      </div>
    </section>
  );
}

function SuiteRisksSection() {
  return (
    <section className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-8 px-4">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">
            Risks across the suite
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Guardrails baked into the roadmap</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Each risk has a direct mitigation inside the product experience so landlords stay compliant and confident without extra policy docs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {SUITE_RISKS.map((item) => (
            <div key={item.risk} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">{item.risk}</p>
              <p className="mt-3 text-sm text-slate-600">{item.mitigation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
