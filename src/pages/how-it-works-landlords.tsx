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
    title: "Create Your Account",
    description: "Verify your identity and connect to our DFPI-licensed escrow partners. Takes under 5 minutes.",
    highlight: "No personal funds held"
  },
  {
    step: "2",
    title: "Set Up Property Profile",
    description: "Add your property details and generate your professional Listing Assist badge for any marketplace.",
    highlight: "SEO-optimized profile page"
  },
  {
    step: "3",
    title: "Invite Your Tenant",
    description: "Send guided onboarding flow with lease templates, identity verification, and deposit instructions.",
    highlight: "California-compliant templates"
  },
  {
    step: "4",
    title: "Manage with Confidence",
    description: "Track the 21-day timeline, communicate through templates, and handle releases with documentation.",
    highlight: "Court-ready archive"
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
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">Your Step-by-Step Journey</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {landlordSteps.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                  {item.highlight}
                </span>
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