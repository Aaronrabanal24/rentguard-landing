import "@/content/homepage";
import {
  Footer,
  Hero,
  HomeCTA,
  StickyCTA,
} from "@/components";
import { motion } from "@/lib/motion";
import Link from "next/link";

// Benefits Section - "Why Fairvia?"
function BenefitsSection() {
  const benefits = [
    {
      icon: "✅",
      title: "Legal Compliance, Simplified",
      description: "Tracks 21-day rule. Automates letters.",
      color: "emerald"
    },
    {
      icon: "🔒",
      title: "Escrow & Timeline Transparency",
      description: "Neutral third-party holding. Trust from both sides.",
      color: "sky"
    },
    {
      icon: "📤",
      title: "Full Case Exports",
      description: "Defensible, shareable PDFs and JSONs.",
      color: "amber"
    },
    {
      icon: "📨",
      title: "Message Smart. Everywhere.",
      description: "Built-in email + SMS relay.",
      color: "purple"
    },
    {
      icon: "🌟",
      title: "Reputation Badge",
      description: "Boosts listing conversion via public proof.",
      color: "rose"
    },
    {
      icon: "🛠️",
      title: "CA Compliance Built-in",
      description: "Hardwired to AB 2801 and landlord law.",
      color: "teal"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Why Fairvia?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Each feature delivers concrete, risk-reducing value that protects both landlords and renters.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works - 6 Step Process
function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Property Profile (SEO + Badge)",
      description: "Create search-optimized listing with trust signals and verification badges that attract qualified renters.",
      color: "sky"
    },
    {
      number: "2",
      title: "Invite Renter with ID Check",
      description: "Send secure invitation with identity verification to ensure legitimate applications only.",
      color: "emerald"
    },
    {
      number: "3",
      title: "E-sign Lease + Fund Escrow",
      description: "Digital lease signing with automatic escrow funding through DFPI-licensed partners.",
      color: "amber"
    },
    {
      number: "4",
      title: "Document the Move",
      description: "Timestamped photo checklist and move-in documentation that satisfies AB 2801 requirements.",
      color: "purple"
    },
    {
      number: "5",
      title: "Deduct & Return Deposit with Proof",
      description: "Automated 21-day tracking with itemized deductions, receipts, and compliant documentation.",
      color: "rose"
    },
    {
      number: "6",
      title: "Export Case Archive",
      description: "Complete case files in PDF and JSON formats for your records and legal protection.",
      color: "teal"
    }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            End-to-end simplicity that de-risks trying the platform. Each step ties to a Fairvia feature.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg ${
                  step.color === 'sky' ? 'bg-sky-500' :
                  step.color === 'emerald' ? 'bg-emerald-500' :
                  step.color === 'amber' ? 'bg-amber-500' :
                  step.color === 'purple' ? 'bg-purple-500' :
                  step.color === 'rose' ? 'bg-rose-500' :
                  step.color === 'teal' ? 'bg-teal-500' : 'bg-slate-500'
                }`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                </div>
              </div>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// What You Prevent Section
function WhatYouPrevent() {
  return (
    <section className="bg-rose-50 py-16">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          What You Prevent
        </h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-rose-200">
            <h3 className="font-semibold text-slate-900 mb-2">Forfeited Deposits</h3>
            <p className="text-sm text-slate-600 mb-3">Miss the day-21 deadline and California law says you forfeit the entire deposit—no matter how bad the damage was.</p>
            <p className="text-xs font-medium text-emerald-600">How Fairvia prevents this: Automated countdown with day 16/19/20 nudges</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-rose-200">
            <h3 className="font-semibold text-slate-900 mb-2">Tenant Disputes</h3>
            <p className="text-sm text-slate-600 mb-3">Without photo proof and proper documentation, legitimate deductions turn into costly disputes.</p>
            <p className="text-xs font-medium text-emerald-600">How Fairvia prevents this: AB 2801 photo workflow with timestamps that support deductions</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-rose-200">
            <h3 className="font-semibold text-slate-900 mb-2">Compliance Panic</h3>
            <p className="text-sm text-slate-600 mb-3">California laws keep changing. One missing requirement can cost you thousands in legal fees.</p>
            <p className="text-xs font-medium text-emerald-600">How Fairvia prevents this: Court-ready packet with itemization, receipts, photos, timestamps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Strip Section
function TrustStrip() {
  return (
    <section className="bg-slate-900 py-8">
      <div className="container-tight text-center">
        <p className="text-slate-300 text-sm">
          Deposits held by DFPI-licensed partners • Shared timeline and receipts • Same packet for landlord and tenant
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Fairvia is not a bank, escrow agent, or law firm. Deposits are held by DFPI-licensed partners.
        </p>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing</h2>
          <p className="text-lg text-slate-600 mb-8">Transparent and scalable pricing that anchors high perceived value.</p>

          <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-xl p-8 border border-sky-200 mb-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter Plan</h3>
              <div className="text-5xl font-bold text-slate-900 mb-2">$69<span className="text-xl text-slate-500">/mo</span></div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-4">Includes:</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">5 Active Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">5 E-sign Envelopes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">Message Relay</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">Deduction Tools + Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">Full Exports</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">DFPI Escrow Partners</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-2">Add-ons:</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div>• $10/case (additional cases)</div>
                <div>• $1.50 per e-sign envelope (additional)</div>
                <div>• Certified Exports (planned)</div>
              </div>
            </div>

            <Link href="/get-started" className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
              Start Now – It&apos;s Free to Join
            </Link>
          </div>

          <div className="bg-slate-100 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-2">Coming Soon – Pro Plan</h4>
            <div className="grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <div>• Unlimited Cases</div>
              <div>• 20+ E-sign Envelopes</div>
              <div>• Admin Reporting</div>
              <div>• Legal Checker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Fairvia eliminated the stress of deposit compliance. The 21-day tracking and automated letters saved me from forfeiting a $2,400 deposit when things got complicated.",
      author: "Sarah Chen",
      role: "Property Owner, Oakland",
      units: "8 units"
    },
    {
      quote: "The neutral escrow gave my tenants confidence, and I get better quality applications. The reputation badge really works on Craigslist.",
      author: "Michael Rodriguez",
      role: "Independent Landlord, San Jose",
      units: "12 units"
    },
    {
      quote: "As a renter, seeing the Fairvia badge told me this landlord was serious about doing things right. The transparent timeline was amazing.",
      author: "Jennifer Park",
      role: "Renter, San Francisco",
      units: null
    }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What People Are Saying</h2>
          <p className="text-lg text-slate-600">Real quotes from landlords and renters using Fairvia.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-slate-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
                {testimonial.units && (
                  <p className="text-xs text-emerald-600 mt-1">{testimonial.units}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// For Renters Section
function ForRentersSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">For Renters</h2>
          <p className="text-lg text-slate-600">Transparent timeline, receipt uploads, and export access that protects your interests.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👀</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Transparent Timeline</h3>
            <p className="text-sm text-slate-600">See exactly where your deposit is and what happens next</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📤</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Receipt Uploads</h3>
            <p className="text-sm text-slate-600">Submit move-out documentation and receipts directly</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Export Access</h3>
            <p className="text-sm text-slate-600">Download complete case files for your records</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Legal Protection</h3>
            <p className="text-sm text-slate-600">DFPI-licensed escrow and compliance documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
}


// FAQ Section
function FAQ() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Why only one plan?</h3>
            <p className="text-slate-600">Compliance shouldn&apos;t be a menu. One plan includes escrow, countdown, photos, messaging, and the release packet.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Will the price change?</h3>
            <p className="text-slate-600">This is pilot pricing. Early customers are price-locked for 12 months.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">What counts as &apos;on-time&apos;?</h3>
            <p className="text-slate-600">When documentation is completed in-app by day 21, we generate the packet and initiate payout.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Can I cancel?</h3>
            <p className="text-slate-600">Yes—month-to-month, cancel anytime before the next billing period.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="min-h-full bg-slate-50 text-slate-900">
        <header>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Hero />
          </motion.div>
        </header>

        <main className="safe-bot pb-32">
          <BenefitsSection />
          <HowItWorks />
          <WhatYouPrevent />
          <TrustStrip />
          <PricingSection />
          <TestimonialsSection />
          <ForRentersSection />
          <FAQ />
          <HomeCTA />
        </main>

        <Footer />
      </div>
      <StickyCTA />
    </>
  );
}
