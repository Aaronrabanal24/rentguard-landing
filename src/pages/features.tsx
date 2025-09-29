import type { ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";
import HomeCTA from "@/components/sections/HomeCTA";
import { Hero3DScene } from "@/components/sections/Hero/mockup/Hero3DScene";

interface FeatureLayer {
  content: ReactNode;
  wrapperClassName?: string;
  tileClassName?: string;
}

interface ProductVisualDefinition {
  headline: string;
  caption: string;
  layers: ReadonlyArray<FeatureLayer>;
  spotlightClassName: string;
}

interface ListEntry {
  label: string;
  detail: string;
}

interface ProductDefinition {
  slug: string;
  name: string;
  tagline: string;
  features: ReadonlyArray<ListEntry>;
  benefits: ReadonlyArray<ListEntry>;
  why: string;
  visual: ProductVisualDefinition;
  ctaHref?: string;
  ctaLabel?: string;
  badge?: string;
}

const FEATURE_HERO_LAYERS: FeatureLayer[] = [
  {
    wrapperClassName: "-translate-x-16 -translate-y-12 rotate-6",
    tileClassName:
      "bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-500 text-white shadow-[0_48px_96px_-44px_rgba(14,116,144,0.8)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Discover</p>
        <p className="text-lg font-semibold">City intent tags</p>
        <p className="text-xs text-white/75">Optimized profile for qualified searchers.</p>
      </div>
    ),
  },
  {
    wrapperClassName: "translate-x-12 -translate-y-2 -rotate-4",
    tileClassName:
      "bg-white/95 text-slate-800 shadow-[0_40px_90px_-46px_rgba(15,23,42,0.55)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Comply</p>
        <p className="text-sm font-semibold text-slate-900">Escrow locked</p>
        <p className="text-xs text-slate-500">Identity + lease + funds verified together.</p>
      </div>
    ),
  },
  {
    wrapperClassName: "translate-x-4 translate-y-10 rotate-3",
    tileClassName:
      "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 text-white shadow-[0_44px_92px_-46px_rgba(15,23,42,0.75)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/65">Trust badge</p>
        <p className="text-lg font-semibold">Live verification</p>
        <p className="text-xs text-white/70">Portable proof for every listing.</p>
      </div>
    ),
  },
];

const FEATURE_INTRO_HIGHLIGHTS = [
  {
    product: "Discover",
    headline: "Better renters from search",
    detail: "SEO rental profiles surface verified listings for California intent-based queries.",
  },
  {
    product: "Comply",
    headline: "Neutral escrow by default",
    detail: "ID checks, escrow, and AB 1482-ready leases run in one guided, compliant flow.",
  },
  {
    product: "Trust Badge",
    headline: "Confidence across marketplaces",
    detail: "A live verification overlay follows every listing, email reply, and QR handout.",
  },
  {
    product: "Offboard 21",
    headline: "Tracked 21-day deposit return",
    detail: "Itemized deductions, receipts, and release math stay audit-ready in under 40 minutes.",
  },
] as const;

const FAIRVIA_PRODUCTS: ProductDefinition[] = [
  {
    slug: "discover",
    name: "Fairvia Discover",
    tagline: "SEO-ready property profiles that put California rentals in front of quality renters before they reach out.",
    features: [
      { label: "SEO-ready profile", detail: "City and neighborhood tags publish automatically." },
      { label: "Trust Badge banner", detail: "Mirrors escrow and ID verification in real time." },
      { label: "Google-friendly markup", detail: "Schema and sharing tags generate with every publish." },
      { label: "Share-anywhere link", detail: "Short link and QR fit marketplaces and flyers." },
    ],
    benefits: [
      { label: "Better renters", detail: "SEO profiles plus Trust Badge clicks bring qualified leads." },
      { label: "Less back-and-forth", detail: "Renters get FAQs and proof before messaging you." },
      { label: "Keep listings", detail: "Layer a professional proof page onto what you already use." },
    ],
    why: "Independent California landlords look established with verified escrow and simple FAQs—without extra marketing work.",
    visual: {
      headline: "Discover profile",
      caption: "Neighborhood tags, trust controls, and schema emitters in one clean card.",
      spotlightClassName: "bg-sky-500/20",
      layers: [
        {
          wrapperClassName: "-translate-x-14 -translate-y-10 rotate-6",
          tileClassName:
            "bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-500 text-white shadow-[0_44px_90px_-42px_rgba(14,116,144,0.85)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">SEO view</p>
              <p className="text-lg font-semibold">Temescal · 2BR</p>
              <p className="text-xs text-white/75">FAQ schema and sharing tags publish together.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-10 translate-y-8 -rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_32px_74px_-40px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Trust block</p>
              <p className="text-sm font-semibold text-slate-900">Escrow live · Verified</p>
              <p className="text-xs text-slate-500">Copy stays locked to real compliance flags.</p>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "comply",
    name: "Fairvia Comply",
    tagline: "Escrow, ID checks, and AB 1482-compliant paperwork handled in one guided flow for clean move-ins.",
    badge: "AB 1482 ready",
    features: [
      { label: "ID verification", detail: "Verify landlord and renter identities instantly." },
      { label: "Licensed escrow", detail: "Live status updates keep deposits neutral." },
      { label: "AB 1482 lease pack", detail: "California clauses ready with guided signatures." },
      { label: "Evidence logging", detail: "Photos and receipts timestamped automatically." },
    ],
    benefits: [
      { label: "Neutral escrow", detail: "Deposits secured before move-in day." },
      { label: "No missing fields", detail: "Step-by-step flow replaces email chains." },
      { label: "Fewer support pings", detail: "Renters see the same timeline you do." },
    ],
    why: "Stay compliant without the stress—ID, escrow, and AB 1482 paperwork all handled in one guided process.",
    ctaLabel: "Secure your next lease the compliant way",
    visual: {
      headline: "Comply workspace",
      caption: "Escrow, signatures, and identity steps tracked side-by-side.",
      spotlightClassName: "bg-emerald-500/20",
      layers: [
        {
          wrapperClassName: "-translate-x-14 -translate-y-10 -rotate-4",
          tileClassName:
            "bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 text-white shadow-[0_44px_90px_-42px_rgba(16,185,129,0.82)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Escrow</p>
              <p className="text-lg font-semibold">Funds secured</p>
              <p className="text-xs text-white/75">Neutral custody confirmed before move-in.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-8 translate-y-8 rotate-4",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_32px_72px_-38px_rgba(15,23,42,0.46)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Lease pack</p>
              <p className="text-sm font-semibold text-slate-900">Signed + archived</p>
              <p className="text-xs text-slate-500">Read-only copies for landlord and renter.</p>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "trust-badge",
    name: "Fairvia Trust Badge",
    tagline: "A trust badge that extends verification across every marketplace and listing you already use.",
    features: [
      { label: "One-line badge", detail: "Live verification state embeds in any listing." },
      { label: "Source tracking", detail: "Short link compares marketplace, email, and QR clicks." },
      { label: "Ready-to-use art", detail: "Badge and QR kit sized for posts, replies, and flyers." },
    ],
    benefits: [
      { label: "Higher quality clicks", detail: "Trust Badge lifts response rates in crowded feeds." },
      { label: "Proof pre-contact", detail: "Renters see escrow and verification before messaging." },
      { label: "Seamless handoff", detail: "Badge routes traffic straight to Discover profiles." },
    ],
    why: "The Trust Badge turns escrow verification into a portable signal so every channel carries the same calm proof.",
    visual: {
      headline: "Trust Badge overlay",
      caption: "Live badge states and tracking for every channel in play.",
      spotlightClassName: "bg-indigo-500/20",
      layers: [
        {
          wrapperClassName: "-translate-x-12 -translate-y-8 rotate-5",
          tileClassName:
            "bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white shadow-[0_40px_86px_-40px_rgba(99,102,241,0.78)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Live badge</p>
              <p className="text-lg font-semibold">Verified · Active</p>
              <p className="text-xs text-white/75">Escrow + identity confirmed right now.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-8 translate-y-8 -rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_30px_68px_-38px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Token</p>
              <p className="text-sm font-semibold text-slate-900">fairvia.link/21</p>
              <p className="text-xs text-slate-500">Source-aware short link for every share.</p>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "offboard-21",
    name: "Offboard 21",
    tagline: "Guided move-out with itemized letters, receipts, and a tracked 21-day deposit timeline.",
    features: [
      { label: "21-day dashboard", detail: "Smart nudges keep California deadlines visible." },
      { label: "Deduction helper", detail: "Checks math, categories, and required proof." },
      { label: "Letter automation", detail: "Exports itemized letters with receipts and photos." },
      { label: "Walkthrough capture", detail: "Labeled photo prompts log move-out evidence." },
    ],
    benefits: [
      { label: "Fewer disputes", detail: "Neutral escrow and documented deductions calm conversations." },
      { label: "Faster turnarounds", detail: "Finish move-outs in under 40 minutes." },
      { label: "Court-ready records", detail: "Three-year archive of letters, notes, and releases." },
    ],
    why: "Offboard 21 pairs timers with evidence prompts so you stay compliant and confident during every 21-day deposit return.",
    visual: {
      headline: "Offboard timeline",
      caption: "Countdown, deduction math, and release controls in one calm panel.",
      spotlightClassName: "bg-amber-500/20",
      layers: [
        {
          wrapperClassName: "-translate-x-12 -translate-y-8 rotate-6",
          tileClassName:
            "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_44px_90px_-40px_rgba(249,115,22,0.78)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Countdown</p>
              <p className="text-lg font-semibold">Day 16 alert</p>
              <p className="text-xs text-white/75">Stay ahead of the 21-day clock.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-8 translate-y-8 -rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_32px_70px_-38px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Letter</p>
              <p className="text-sm font-semibold text-slate-900">Itemized + proof</p>
              <p className="text-xs text-slate-500">Receipts and photos auto-attached.</p>
            </div>
          ),
        },
      ],
    },
  },
];

const SUITE_TOGETHER_POINTS = [
  {
    title: "Fairvia Discover",
    detail: "SEO profile plus Trust Badge proof attract better renters before they reach out.",
  },
  {
    title: "Fairvia Comply",
    detail: "Escrow, ID checks, and AB 1482 paperwork run in one guided, compliant flow.",
  },
  {
    title: "Fairvia Trust Badge",
    detail: "Extends live escrow verification across marketplaces, emails, and QR handouts.",
  },
  {
    title: "Offboard 21",
    detail: "Guides the 21-day deposit return with itemized letters, receipts, and releases.",
  },
];

const SUITE_IMPACT = {
  landlord: {
    headline: "Landlord impact — what California landlords gain",
    summary:
      "Fairvia keeps deposits neutral, paperwork compliant, and communication smooth—so independent landlords attract better applicants and avoid costly disputes.",
    bullets: [
      { label: "Better renters", detail: "SEO search profiles and Trust Badge click-throughs." },
      { label: "Fewer disputes", detail: "Neutral escrow plus guided compliance reduce risk and admin time." },
      { label: "Faster move-outs", detail: "Documented deductions and 21-day tracking speed turnovers." },
    ],
  },
  renter: {
    headline: "Renter impact — what renters trust",
    summary:
      "Fairvia builds confidence for renters from first click to final refund, with clear records every step of the way.",
    bullets: [
      { label: "Verified escrow", detail: "Live escrow and ID checks create instant trust." },
      { label: "Shared timelines", detail: "Plain-language updates replace scattered emails." },
      { label: "Fair deposits", detail: "Receipts, letters, and refund math stay transparent." },
    ],
  },
} as const satisfies Record<"landlord" | "renter", { headline: string; summary: string; bullets: ReadonlyArray<ListEntry> }>;

export default function FeaturesPage() {
  return (
    <PageContainer title="Fairvia — Features" animateMain={false}>
      <FeatureHero />
      <ProductSections />
      <SuiteImpactSection />
      <HomeCTA />
    </PageContainer>
  );
}

function FeatureHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:gap-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em]">
            Fairvia feature suite
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            SEO, escrow, and compliance tools for California landlords
          </h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Independent landlords get enterprise-grade rental compliance without extra staff. Fairvia connects discoverability, move-in compliance, portable trust, and the 21-day deposit return in one calm workflow.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURE_INTRO_HIGHLIGHTS.map((item) => (
              <div
                key={item.product}
                className="rounded-3xl border border-white/10 bg-white/8 px-5 py-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.55)] backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">{item.product}</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.headline}</p>
                <p className="mt-1 text-xs text-slate-200/80 sm:text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold text-emerald-200 sm:text-base">
            👉 Fairvia makes rental deposits trusted, fair, and stress-free for California landlords.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#discover"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-emerald-600"
            >
              Book a Demo
              <span aria-hidden>→</span>
            </a>
            <a
              href="#offboard-21"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:-translate-y-[1px] hover:border-white/60"
            >
              Talk 21-Day Deposits
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <FeatureHeroVisual />
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
        <span>Deposit control center</span>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">Live trust</span>
      </div>
      <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-4">
        <Hero3DScene className="h-48" spotlightClassName="bg-emerald-500/20" layers={FEATURE_HERO_LAYERS} />
        <noscript>
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/80 p-4 text-slate-700">
            <p className="text-sm font-semibold">Feature preview</p>
            <p className="text-xs text-slate-500">Enable JavaScript to see the interactive mockup.</p>
          </div>
        </noscript>
      </div>
      <p className="mt-4 text-xs text-slate-200/80">
        Every tool shares escrow status, renter messaging, and analytics so there is one calm source of truth.
      </p>
    </motion.div>
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
  const backgroundClass = index % 2 === 0 ? "bg-white" : "bg-slate-50";
  const ctaHref = product.ctaHref ?? "#contact";

  return (
    <section id={product.slug} className={`${backgroundClass} py-14`}>
      <div className="mx-auto max-w-6xl gap-12 px-4 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <ProductVisual visual={product.visual} />
        <div className="mt-10 space-y-6 lg:mt-0">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90">
              {product.name}
            </span>
            {product.badge ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
                {product.badge}
              </span>
            ) : null}
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{product.tagline}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProductListCard
              title="Benefits"
              items={product.benefits}
              className="sm:col-span-2 lg:col-span-3"
            />
            <ProductListCard
              title="Features"
              items={product.features}
              className="sm:col-span-2 lg:col-span-2"
            />
            <ProductWhyCard why={product.why} />
          </div>
          <a
            href={ctaHref}
            className="inline-flex w-max items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            {product.ctaLabel ?? "See how Fairvia boosts your listings"}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductVisual({ visual }: { visual: ProductVisualDefinition }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-[0_32px_72px_-42px_rgba(15,23,42,0.24)]"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px 0px 0px 0px", amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold uppercase tracking-[0.3em]">{visual.headline}</span>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-600">Mockup</span>
      </div>
      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
        <Hero3DScene className="h-40" spotlightClassName={visual.spotlightClassName} layers={visual.layers} />
      </div>
      <p className="mt-4 text-xs text-slate-500">{visual.caption}</p>
    </motion.div>
  );
}

function ProductListCard({
  title,
  items,
  className,
}: {
  title: string;
  items: ReadonlyArray<ListEntry>;
  className?: string;
}) {
  return (
    <div
      className={`h-full rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.18)] ${
        className ?? ""
      }`}
    >
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{title}</h3>
      <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-500" />
            <span>
              <span className="font-semibold text-slate-900">{item.label}</span>
              <span className="text-slate-600"> — {item.detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductWhyCard({ why }: { why: string }) {
  return (
    <div className="h-full rounded-2xl border border-slate-900/10 bg-slate-900/95 px-5 py-6 text-slate-100 shadow-[0_24px_48px_-34px_rgba(15,23,42,0.3)]">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Why it matters</h3>
      <p className="mt-3 text-sm text-white/90">{why}</p>
    </div>
  );
}

function SuiteImpactSection() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-10 px-4">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em]">
            Suite in sync
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">What happens when all four products run together</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SUITE_TOGETHER_POINTS.map((point) => (
            <div key={point.title} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_24px_48px_-30px_rgba(8,47,73,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">{point.title}</p>
              <p className="mt-2 text-sm text-slate-100/90">{point.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SuiteRoleCard role="landlord" />
          <SuiteRoleCard role="renter" />
        </div>
      </div>
    </section>
  );
}

function SuiteRoleCard({ role }: { role: keyof typeof SUITE_IMPACT }) {
  const data = SUITE_IMPACT[role];

  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/8 px-6 py-6 shadow-[0_26px_54px_-30px_rgba(8,47,73,0.5)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
        {role === "landlord" ? "Landlord impact" : "Renter impact"}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-white">{data.headline}</h3>
      <p className="mt-2 text-sm text-slate-100/85">{data.summary}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-slate-100/90">
        {data.bullets.map((bullet) => (
          <li key={bullet.label} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold text-white">{bullet.label}</span>
              <span className="text-slate-100/80"> — {bullet.detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
