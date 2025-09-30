import { PageContainer } from "@/components/layout/PageContainer";
import PilotWorkflows from "@/components/sections/PilotWorkflows";
import TrustSignals from "@/components/sections/TrustSignals";
import ProfessionalBenefits from "@/components/sections/ProfessionalBenefits";
import HomeCTA from "@/components/sections/HomeCTA";

const problemPoints = [
  "Miss the 21-day deadline and California law says you forfeit the entire deposit—no matter how bad the damage was.",
  "AB 2801 requires timestamped photos for deductions starting 2025. Most landlords will find out the hard way if they can't prove it.",
  "Tenants Google you before they apply. If they can't see proof of neutral escrow and professional communication, they walk.",
];

const solutionHighlights = [
  "Fairvia automates the AB 2801 photo log, deduction math, and release letter in one workspace.",
  "Licensed DFPI escrow partners hold the deposit and share the timeline with landlords, renters, and advisors.",
  "Guided communication keeps tenants aligned: alerts at day 16, 19, 20; confirmations tracked automatically.",
  "Every case produces a court-ready archive with receipts, signatures, and release proof—no more digging at midnight.",
];

export default function HowItWorksPage() {
  return (
    <PageContainer title="Fairvia — How It Works" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">How Fairvia Works</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Automated compliance, neutral escrow, and transparent communication for California landlords.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-rose-50 py-16 text-rose-900">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold">The California Reality</h2>
          <p className="mt-3 text-rose-800">
            You&apos;re juggling turnovers, calls, and spreadsheets. One late deduction letter can cost you the entire deposit.
          </p>
          <div className="mt-8 space-y-4">
            {problemPoints.map((point, index) => (
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
          <h2 className="text-3xl font-semibold text-slate-900">What Fairvia Does Differently</h2>
          <div className="mt-8 space-y-4">
            {solutionHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-emerald-500 mt-1">✓</span>
                <span className="text-sm text-slate-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <PilotWorkflows />

      {/* Trust & Benefits */}
      <TrustSignals />
      <ProfessionalBenefits />

      <HomeCTA />
    </PageContainer>
  );
}
