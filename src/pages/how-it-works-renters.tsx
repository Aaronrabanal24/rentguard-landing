import { PageContainer } from "@/components/layout/PageContainer";
import HomeCTA from "@/components/sections/HomeCTA";

const renterPainPoints = [
  "Your deposit disappears into your landlord's personal account with no transparency about where it goes.",
  "You never know if deductions are legitimate or if your landlord is following California law.",
  "Getting your deposit back feels like begging—no clear timeline, no proof of process.",
  "When disputes happen, it's your word against theirs with no neutral documentation.",
];

const renterBenefits = [
  "Your deposit sits in neutral escrow with a California-licensed partner—never in your landlord's personal account.",
  "See the entire timeline: when deposits are received, what the 21-day deadline is, and proof of compliance.",
  "Get automatic updates at key milestones with one-click confirmations so you're always informed.",
  "All communications, photos, and receipts are timestamped and stored for your protection.",
  "If disputes arise, you have access to a complete, neutral record of all interactions.",
];

const renterSteps = [
  {
    step: "1",
    title: "Get Invited by Your Landlord",
    description: "When your landlord uses Fairvia, you'll receive an invitation to join the secure deposit process.",
    highlight: "No cost to you"
  },
  {
    step: "2",
    title: "Verify & Sign Digitally",
    description: "Complete identity verification and e-sign your California-compliant lease in minutes.",
    highlight: "Bank-level security"
  },
  {
    step: "3",
    title: "Send Deposit to Neutral Escrow",
    description: "Your deposit goes directly to a licensed escrow partner—never to your landlord's account.",
    highlight: "DFPI-licensed protection"
  },
  {
    step: "4",
    title: "Stay Informed Throughout",
    description: "Track move-in photos, get timeline updates, and see the 21-day countdown with automatic notifications.",
    highlight: "Complete transparency"
  }
];

const protectionFeatures = [
  {
    icon: "🛡️",
    title: "Neutral Escrow Protection",
    description: "Your deposit is held by California-licensed partners, not your landlord."
  },
  {
    icon: "📱",
    title: "Real-Time Updates",
    description: "Get notified at every step with clear timelines and one-click confirmations."
  },
  {
    icon: "📄",
    title: "Complete Documentation",
    description: "All photos, receipts, and communications are timestamped and archived."
  },
  {
    icon: "⚖️",
    title: "Legal Compliance",
    description: "Your landlord follows AB 2801 photo requirements and 21-day return rules."
  },
  {
    icon: "💬",
    title: "Clear Communication",
    description: "Receive guided messages with proof of delivery and response tracking."
  },
  {
    icon: "🔍",
    title: "Audit Trail",
    description: "Complete record of every interaction kept for 3+ years for your protection."
  }
];

export default function HowItWorksRentersPage() {
  return (
    <PageContainer title="How Fairvia Works for Renters" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            For Renters
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Your Deposit, Protected</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            When your landlord uses Fairvia, your deposit gets neutral escrow protection, complete transparency, and compliance with California law.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-amber-50 py-16 text-amber-900">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold">Typical Renter Frustrations</h2>
          <p className="mt-3 text-amber-800">
            Most landlords handle deposits informally, leaving renters vulnerable and uninformed about where their money goes.
          </p>
          <div className="mt-8 space-y-4">
            {renterPainPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-amber-200">
                <span className="text-amber-500 mt-1">•</span>
                <span className="text-sm text-amber-800">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold text-slate-900">How Fairvia Protects You</h2>
          <div className="mt-8 space-y-4">
            {renterBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-emerald-500 mt-1">✓</span>
                <span className="text-sm text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">Your Protection Journey</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {renterSteps.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
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

      {/* Protection Features */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">Complete Protection Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {protectionFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold text-center mb-12">Your Transparent Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { day: "Day 1", event: "Deposit sent to neutral escrow", status: "You & landlord both get confirmation" },
                { day: "Move-in", event: "Photo checklist shared", status: "Upload condition photos with timestamps" },
                { day: "During tenancy", event: "All communications logged", status: "Message history with read receipts" },
                { day: "Move-out notice", event: "21-day countdown begins", status: "Automatic alerts at day 16, 19, 20" },
                { day: "Day 21", event: "Deposit release deadline", status: "Full refund or itemized deductions required" },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.day}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{item.event}</h4>
                    <p className="text-slate-300 text-sm mt-1">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}