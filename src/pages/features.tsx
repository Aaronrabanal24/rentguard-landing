import { useState, type ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import HomeCTA from "@/components/sections/HomeCTA";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionBadge, Card, CardHeader, CardTitle, CardContent, Grid, Button } from "@/components/ui";

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


const FAIRVIA_PRODUCTS: ProductDefinition[] = [
  {
    slug: "discover",
    name: "Discover",
    tagline: "Trust profiles that attract qualified renters and show clear trust controls",
    badge: "Step 1",
    features: [
      { label: "Schema-enhanced property profiles", detail: "City and neighborhood tags with clean titles and RentalProperty schema" },
      { label: "Trust signals upfront", detail: "Show escrow and verification before first contact" },
      { label: "FAQ block with schema", detail: "Plain language answers that emit structured data" },
      { label: "Photo gallery with room labels", detail: "Alt text prompts and professional presentation" },
      { label: "Short link and QR codes", detail: "Easy sharing for flyers and marketplace listings" },
      { label: "Simple analytics dashboard", detail: "Track impressions by query and city, measure actions" },
    ],
    benefits: [
      { label: "Higher quality clicks", detail: "Attract serious renters who understand your process" },
      { label: "Better search visibility", detail: "Structured data and local optimization" },
      { label: "Reduced message volume", detail: "FAQ answers common questions before contact" },
      { label: "Trust before contact", detail: "Escrow and verification badges build confidence" },
    ],
    why: "Independent California landlords get better click quality and fewer back and forth messages by showing trust controls upfront in schema-enhanced profiles.",
    visual: {
      headline: "Trust profiles with renter-verifiable signals",
      caption: "Attract qualified renters who understand your process",
      spotlightClassName: "bg-sky-400/20",
      layers: [
        {
          wrapperClassName: "-translate-x-16 -translate-y-12 rotate-6",
          tileClassName:
            "bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-500 text-white shadow-[0_48px_96px_-44px_rgba(14,116,144,0.8)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Discover</p>
              <p className="text-lg font-semibold">Trust signals</p>
              <p className="text-xs text-white/75">Show escrow protection before contact.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-12 -translate-y-2 -rotate-4",
          tileClassName:
            "bg-white/95 text-slate-800 shadow-[0_40px_90px_-46px_rgba(15,23,42,0.55)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Search</p>
              <p className="text-sm font-semibold text-slate-900">Local SEO</p>
              <p className="text-xs text-slate-500">City and neighborhood optimization.</p>
            </div>
          ),
        },
      ],
    },
    ctaHref: "/how-it-works-landlords",
    ctaLabel: "See discovery workflow",
  },
  {
    slug: "comply",
    name: "Comply",
    tagline: "Identity escrow and lease pack with guided setup and shared records",
    badge: "Step 2",
    features: [
      { label: "Identity verification", detail: "Confirm identity on both landlord and renter sides" },
      { label: "California lease pack", detail: "E-signature with read only copies for both parties" },
      { label: "Neutral escrow setup", detail: "Funds move to escrow before key handoff" },
      { label: "Move in photo checklist", detail: "Labels and timestamps for complete documentation" },
      { label: "Case timeline and vault", detail: "Single shared record with audit log" },
      { label: "Renter portal", detail: "Clear status updates that reduce message volume" },
    ],
    benefits: [
      { label: "Deposits start correct", detail: "Neutral escrow from day one eliminates liability" },
      { label: "Complete documentation", detail: "Photo checklist and lease pack in one place" },
      { label: "Fewer messages", detail: "Renter portal explains what happens next" },
      { label: "California compliance", detail: "Lease forms and checklists designed for state law" },
    ],
    why: "Landlords who want the deposit to start correct so the move out can finish correct use guided setup for identity, lease, and escrow.",
    visual: {
      headline: "Identity escrow and lease pack",
      caption: "Guided setup with shared records from start to finish",
      spotlightClassName: "bg-amber-400/20",
      layers: [
        {
          wrapperClassName: "-translate-x-14 -translate-y-10 -rotate-5",
          tileClassName:
            "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_44px_86px_-38px_rgba(245,158,11,0.78)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Setup</p>
              <p className="text-lg font-semibold">Guided flow</p>
              <p className="text-xs text-white/75">Identity, lease, and escrow in order.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_32px_66px_-36px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Records</p>
              <p className="text-sm font-semibold text-slate-900">Shared vault</p>
              <p className="text-xs text-slate-500">Timeline and documents in one place.</p>
            </div>
          ),
        },
      ],
    },
    ctaHref: "/how-it-works-landlords",
    ctaLabel: "See compliance setup",
  },
  {
    slug: "trust-badge",
    name: "Trust Badge",
    tagline: "Portable trust mark that proves escrow and verification anywhere you list",
    badge: "Step 3",
    features: [
      { label: "Badge generator with tokens", detail: "Unique verification per property with live states" },
      { label: "Copy block for listings", detail: "One line snippet for marketplace descriptions" },
      { label: "QR for printed materials", detail: "Flyers and window signs with tracking" },
      { label: "Live state updates", detail: "Shows setup, live, verified, paused, or under review" },
      { label: "Click tracking by source", detail: "Compare performance across placements" },
      { label: "Routes to full profile", detail: "Links back to Discover page for complete details" },
    ],
    benefits: [
      { label: "Works with current listings", detail: "Add trust signals without changing platforms" },
      { label: "Shows real verification", detail: "Live state backed by actual escrow setup" },
      { label: "Measurable trust lift", detail: "Track clicks and engagement by placement" },
      { label: "Simple and portable", detail: "One snippet works everywhere you advertise" },
    ],
    why: "Landlords who want to keep using current marketplaces and social posts add a clear trust signal that increases click quality from crowded listings.",
    visual: {
      headline: "Portable trust marks",
      caption: "Prove escrow and verification anywhere you list",
      spotlightClassName: "bg-emerald-400/20",
      layers: [
        {
          wrapperClassName: "-translate-x-12 -translate-y-8 rotate-4",
          tileClassName:
            "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_42px_82px_-36px_rgba(20,184,166,0.8)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Trust</p>
              <p className="text-lg font-semibold">Live badges</p>
              <p className="text-xs text-white/75">Real verification state, not static logos.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-10 translate-y-6 -rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_30px_64px_-34px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Portable</p>
              <p className="text-sm font-semibold text-slate-900">Any platform</p>
              <p className="text-xs text-slate-500">Works with current listings and posts.</p>
            </div>
          ),
        },
      ],
    },
    ctaHref: "/how-it-works-landlords",
    ctaLabel: "See badge system",
  },
  {
    slug: "offboard-twenty-one",
    name: "Offboard",
    tagline: "Guided move out flow with 21 day clock and documented deductions",
    badge: "Step 4",
    features: [
      { label: "Visible countdown timer", detail: "21 day clock with reminders at key steps" },
      { label: "Deductions helper", detail: "Math checks and categories for cleaning, repairs, unpaid rent" },
      { label: "Normal wear guardrails", detail: "Gentle warnings to avoid common overclaim errors" },
      { label: "Itemized letter generator", detail: "Clean letters with receipts and photos attached" },
      { label: "Structured dispute mode", detail: "Notes and clear event timeline for resolution" },
      { label: "Final release and archive", detail: "Escrow release with 3 year case storage" },
    ],
    benefits: [
      { label: "Never miss deadlines", detail: "Visible timer and automated reminders keep you on track" },
      { label: "Fair deductions only", detail: "Guardrails prevent overclaim errors and disputes" },
      { label: "Complete documentation", detail: "Photos, receipts, and timeline support any claims" },
      { label: "Calm finish process", detail: "Professional letters and clear communication" },
    ],
    why: "Landlords who want a calm and fair finish with records that stand up later use guided move out that keeps them on time and well documented.",
    visual: {
      headline: "Guided move out with 21 day clock",
      caption: "Stay on time and well documented from walkthrough to refund",
      spotlightClassName: "bg-rose-400/20",
      layers: [
        {
          wrapperClassName: "-translate-x-14 -translate-y-10 -rotate-5",
          tileClassName:
            "bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 text-white shadow-[0_44px_86px_-38px_rgba(244,63,94,0.78)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Clock</p>
              <p className="text-lg font-semibold">21 day timer</p>
              <p className="text-xs text-white/75">Never miss California deadlines.</p>
            </div>
          ),
        },
        {
          wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
          tileClassName:
            "bg-white/95 text-slate-700 shadow-[0_32px_66px_-36px_rgba(15,23,42,0.45)]",
          content: (
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Deductions</p>
              <p className="text-sm font-semibold text-slate-900">Fair only</p>
              <p className="text-xs text-slate-500">Guardrails prevent overclaim errors.</p>
            </div>
          ),
        },
      ],
    },
    ctaHref: "/how-it-works-landlords",
    ctaLabel: "See offboard process",
  },
];

export default function FeaturesPage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const currentProduct = FAIRVIA_PRODUCTS[activeProduct];

  return (
    <PageContainer title="Fairvia Features" animateMain={false}>
      <Section background="gradient-primary" padding="xl">
        <SectionHeader>
          <SectionBadge>Complete Suite</SectionBadge>
          <SectionTitle size="xl">The Complete Fairvia System</SectionTitle>
          <SectionSubtitle size="lg">
            From discovery to deposit return—everything California landlords need for professional rental management with neutral escrow protection and compliance automation.
          </SectionSubtitle>
        </SectionHeader>
      </Section>

      <Section background="slate" padding="xl">
          {/* Product Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {FAIRVIA_PRODUCTS.map((product, index) => (
              <Button
                key={product.slug}
                variant={activeProduct === index ? "primary" : "secondary"}
                size="md"
                onClick={() => setActiveProduct(index)}
                className="transition-all"
              >
                {product.name}
              </Button>
            ))}
          </div>

          {/* Active Product Display */}
          <Card variant="elevated" padding="xl" radius="xl">
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
                  <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
                    {currentProduct.ctaLabel || "Learn more"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                )}
              </div>
            </div>

            {/* Features & Benefits Grid */}
            <Grid cols={2} gap="xl" className="mt-12">
              <Card variant="glass" padding="lg">
                <CardHeader>
                  <CardTitle level={3} className="text-xl text-slate-900">Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="border-l-2 border-sky-200 pl-4">
                      <h4 className="font-medium text-slate-900 mb-1">{feature.label}</h4>
                      <p className="text-sm text-slate-600">{feature.detail}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card variant="glass" padding="lg">
                <CardHeader>
                  <CardTitle level={3} className="text-xl text-slate-900">Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentProduct.benefits.map((benefit, index) => (
                    <div key={index} className="border-l-2 border-emerald-200 pl-4">
                      <h4 className="font-medium text-slate-900 mb-1">{benefit.label}</h4>
                      <p className="text-sm text-slate-600">{benefit.detail}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Card>
      </Section>

      <HomeCTA />
    </PageContainer>
  );
}