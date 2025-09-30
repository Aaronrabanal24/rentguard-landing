import { PageContainer } from "@/components/layout/PageContainer";
import PilotWorkflows from "@/components/sections/PilotWorkflows";
import TrustSignals from "@/components/sections/TrustSignals";
import ProfessionalBenefits from "@/components/sections/ProfessionalBenefits";
import HomeCTA from "@/components/sections/HomeCTA";

const landlordPainPoints = [
  "Miss the 21-day deadline and California law says you forfeit the entire deposit—no matter how bad the damage was.",
  "AB 2801 requires timestamped photos for deductions starting 2025. Most landlords will find out the hard way if they can't prove it.",
  "Tenants Google you before they apply. If they can't see proof of neutral escrow and professional communication, they walk.",
  "Managing deposits in your personal account looks unprofessional and creates liability concerns.",
];

const landlordSolutions = [
  "Fairvia automates the AB 2801 photo log, deduction math, and release letter in one workspace.",
  "Licensed DFPI escrow partners hold the deposit and share the timeline with landlords, renters, and advisors.",
  "Guided communication keeps tenants aligned: alerts at day 16, 19, 20; confirmations tracked automatically.",
  "Every case produces a court-ready archive with receipts, signatures, and release proof—no more digging at midnight.",
  "Professional Listing Assist badge shows tenants you use neutral escrow and compliance workflows.",
];

const landlordSteps = [
  {
    step: "1",
    title: "Discover: SEO Property Profiles",
    description: "Create search optimized property profiles with trust signals upfront. Show escrow and verification badges before first contact to attract qualified renters.",
    highlight: "Better click quality",
    details: "Property profile with city tags, FAQ schema, photo gallery with room labels, short links and QR codes for flyers"
  },
  {
    step: "2",
    title: "Comply: Identity Escrow and Lease Pack",
    description: "Guided setup for identity verification, California lease pack with e-signature, and neutral escrow before key handoff.",
    highlight: "Deposits start correct",
    details: "Identity verification both sides, move in photo checklist, case timeline and vault, renter portal with status updates"
  },
  {
    step: "3",
    title: "Trust Badge: Portable Verification",
    description: "Generate trust badges with live verification states for your marketplace listings and social posts. One snippet works everywhere.",
    highlight: "Works with current listings",
    details: "Badge generator with tokens, copy block for descriptions, QR for flyers, click tracking by source"
  },
  {
    step: "4",
    title: "Offboard: 21 Day Move-out Clock",
    description: "Guided move out with visible countdown, deductions helper with guardrails, and itemized letters with receipts attached.",
    highlight: "Never miss deadlines",
    details: "Countdown timer with reminders, normal wear guardrails, dispute mode, final release and 3 year archive"
  }
];

export default function HowItWorksLandlordsPage() {
  return (
    <PageContainer title="How Fairvia Works for Landlords" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
            For Landlords
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Professional Deposit Management</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Stop losing deposits to missed deadlines. Fairvia handles compliance, neutral escrow, and tenant communication so you can focus on filling units—not fighting disputes.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-rose-50 py-16 text-rose-900">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold">The Reality for California Landlords</h2>
          <p className="mt-3 text-rose-800">
            You&apos;re juggling turnovers, calls, and spreadsheets. One missed deadline or missing receipt can cost you the entire deposit.
          </p>
          <div className="mt-8 space-y-4">
            {landlordPainPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-rose-200">
                <span className="text-rose-500 mt-1">•</span>
                <span className="text-sm text-rose-800">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold text-slate-900">How Fairvia Protects Landlords</h2>
          <div className="mt-8 space-y-4">
            {landlordSolutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-emerald-500 mt-1">✓</span>
                <span className="text-sm text-slate-700">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">The Four Step Fairvia Suite</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {landlordSteps.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium mt-1">
                      {item.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                <p className="text-xs text-slate-500">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Workflows */}
      <PilotWorkflows />

      {/* Trust & Benefits */}
      <TrustSignals />
      <ProfessionalBenefits />

      <HomeCTA />
    </PageContainer>
  );
}