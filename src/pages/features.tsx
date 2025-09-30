import { useState, type ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import HomeCTA from "@/components/sections/HomeCTA";

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
        <p className="text-lg font-semibold">Neutral escrow</p>
        <p className="text-xs text-white/75">Licensed California partners protect deposits.</p>
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
        <p className="text-sm font-semibold text-slate-900">21-day tracking</p>
        <p className="text-xs text-slate-500">Automated alerts + deadline management.</p>
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
        <p className="text-lg font-semibold">Professional profile</p>
        <p className="text-xs text-white/70">SEO-optimized property listings.</p>
      </div>
    ),
  },
];

const FAIRVIA_PRODUCTS: ProductDefinition[] = [
  {
    slug: "neutral-escrow",
    name: "Neutral Escrow",
    tagline: "Professional deposit protection for landlords and tenants",
    badge: "Core Feature",
    features: [
      { label: "DFPI-licensed escrow partners", detail: "California-regulated third-party deposit custody" },
      { label: "Automated deposit transfers", detail: "Guided flow from tenant to neutral account" },
      { label: "Real-time balance tracking", detail: "Both parties see deposit status and timeline" },
      { label: "Release automation", detail: "Streamlined refund process with documentation" },
    ],
    benefits: [
      { label: "Zero liability for landlords", detail: "Deposits never sit in personal accounts" },
      { label: "Tenant confidence", detail: "Professional escrow builds trust and attracts quality renters" },
      { label: "Compliance ready", detail: "Meets California deposit handling requirements" },
      { label: "Dispute protection", detail: "Neutral third party holds funds during disagreements" },
    ],
    why: "Professional landlords use neutral escrow to eliminate liability, build tenant trust, and ensure compliance with California deposit laws.",
    visual: {
      headline: "Neutral deposit custody",
      caption: "Licensed escrow partners protect every dollar",
      spotlightClassName: "bg-sky-400/20",
      layers: FEATURE_HERO_LAYERS,
    },
    ctaHref: "/how-it-works-landlords",
    ctaLabel: "See landlord workflow",
  },
  {
    slug: "compliance-automation",
    name: "Compliance Automation",
    tagline: "AB 2801 photo requirements and 21-day timeline management",
    badge: "California Law",
    features: [
      { label: "21-day deadline tracking", detail: "Automatic alerts at day 16, 19, and 20" },
      { label: "AB 2801 photo compliance", detail: "Timestamped move-in and move-out documentation" },
      { label: "Itemized deduction helper", detail: "California-compliant templates with receipt attachments" },
      { label: "Legal document archive", detail: "Court-ready record keeping for 3+ years" },
    ],
    benefits: [
      { label: "Never forfeit deposits", detail: "Automated reminders prevent missed deadlines" },
      { label: "Deduction protection", detail: "Photo evidence supports legitimate claims" },
      { label: "Legal compliance", detail: "Stay current with California rental laws" },
      { label: "Audit readiness", detail: "Complete documentation for any disputes" },
    ],
    why: "California's changing laws require professional documentation. Fairvia automates compliance so landlords can focus on their properties.",
    visual: {
      headline: "California compliance automation",
      caption: "Never miss another deadline or documentation requirement",
      spotlightClassName: "bg-amber-400/20",
      layers: [
        {
          wrapperClassName: "-translate-x-14 -translate-y-10 -rotate-5",
          tileClassName:
            "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_44px_86px_-38px_rgba(245,158,11,0.78)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Timeline</p>
              <p className="text-lg font-semibold">21-day alerts</p>
              <p className="text-xs text-white/75">Never forfeit another deposit.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_32px_66px_-36px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Evidence</p>
              <p className="text-sm font-semibold text-slate-900">Photo archive</p>
              <p className="text-xs text-slate-500">AB 2801 compliant documentation.</p>
            </div>
          ),
        },
      ],
    },
    ctaHref: "/how-it-works-landlords",
    ctaLabel: "See compliance workflow",
  },
  {
    slug: "tenant-communication",
    name: "Professional Communication",
    tagline: "Guided messaging and transparent timeline sharing",
    badge: "Tenant Experience",
    features: [
      { label: "Guided message templates", detail: "Professional communication for all scenarios" },
      { label: "Shared timeline access", detail: "Tenants see the same process status as landlords" },
      { label: "One-click confirmations", detail: "Simple tenant acknowledgments with timestamps" },
      { label: "Automated notifications", detail: "Keep tenants informed without manual follow-up" },
    ],
    benefits: [
      { label: "Reduced tenant calls", detail: "Self-service portal answers common questions" },
      { label: "Professional image", detail: "Consistent, compliant communication builds trust" },
      { label: "Faster resolutions", detail: "Clear expectations prevent misunderstandings" },
      { label: "Documentation trail", detail: "Every message archived for dispute protection" },
    ],
    why: "Professional communication reduces disputes, attracts better tenants, and creates a paper trail that protects both parties.",
    visual: {
      headline: "Transparent tenant communication",
      caption: "Keep everyone aligned with professional messaging",
      spotlightClassName: "bg-emerald-400/20",
      layers: [
        {
          wrapperClassName: "-translate-x-12 -translate-y-8 rotate-4",
          tileClassName:
            "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_42px_82px_-36px_rgba(20,184,166,0.8)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Messages</p>
              <p className="text-lg font-semibold">Guided templates</p>
              <p className="text-xs text-white/75">Professional tone, compliant language.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-10 translate-y-6 -rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_30px_64px_-34px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Timeline</p>
              <p className="text-sm font-semibold text-slate-900">Shared access</p>
              <p className="text-xs text-slate-500">Tenants see the same status you do.</p>
            </div>
          ),
        },
      ],
    },
    ctaHref: "/how-it-works-renters",
    ctaLabel: "See tenant experience",
  },
];

export default function FeaturesPage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const currentProduct = FAIRVIA_PRODUCTS[activeProduct];

  return (
    <PageContainer title="Fairvia Features" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Complete Deposit Management</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Everything California landlords need for professional, compliant deposit handling—from neutral escrow to automated compliance.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          {/* Product Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {FAIRVIA_PRODUCTS.map((product, index) => (
              <button
                key={product.slug}
                onClick={() => setActiveProduct(index)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeProduct === index
                    ? "bg-sky-500 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>

          {/* Active Product Display */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Visual */}
              <div className="flex-1">
                <div className="relative h-64 w-full overflow-visible lg:h-80">
                  <div className={`pointer-events-none absolute inset-x-6 bottom-0 -z-10 h-16 rounded-full bg-slate-900/10 blur-2xl lg:inset-x-12 ${currentProduct.visual.spotlightClassName}`} aria-hidden="true" />
                  {currentProduct.visual.layers.map((layer, index) => (
                    <div
                      key={index}
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu transition-transform duration-500 ${layer.wrapperClassName}`}
                    >
                      <div className={`relative min-h-[120px] min-w-[180px] rounded-3xl border border-white/50 bg-white/90 p-4 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.65)] backdrop-blur ${layer.tileClassName}`}>
                        {layer.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  {currentProduct.badge && (
                    <span className="inline-block bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full font-semibold mb-3">
                      {currentProduct.badge}
                    </span>
                  )}
                  <h2 className="text-3xl font-bold text-slate-900">{currentProduct.name}</h2>
                  <p className="text-lg text-slate-600 mt-2">{currentProduct.tagline}</p>
                </div>

                <p className="text-slate-700">{currentProduct.why}</p>

                {currentProduct.ctaHref && (
                  <a
                    href={currentProduct.ctaHref}
                    className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors"
                  >
                    {currentProduct.ctaLabel || "Learn more"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Features & Benefits Grid */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                <div className="space-y-3">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="border-l-2 border-sky-200 pl-4">
                      <h4 className="font-medium text-slate-900">{feature.label}</h4>
                      <p className="text-sm text-slate-600">{feature.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Benefits</h3>
                <div className="space-y-3">
                  {currentProduct.benefits.map((benefit, index) => (
                    <div key={index} className="border-l-2 border-emerald-200 pl-4">
                      <h4 className="font-medium text-slate-900">{benefit.label}</h4>
                      <p className="text-sm text-slate-600">{benefit.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}