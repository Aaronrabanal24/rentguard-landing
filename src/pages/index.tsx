import "@/content/homepage";
import {
  Footer,
  Hero,
  HomeCTA,
  StickyCTA,
} from "@/components";
import { motion } from "@/lib/motion";

// How It Works Section
function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
          How It Works
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          Four crisp steps from trust profile to release packet.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Publish Trust Profile</h3>
            <p className="text-sm text-slate-600">Schema-enhanced listing with renter-verifiable signals</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Onboard Lease & Escrow</h3>
            <p className="text-sm text-slate-600">Guided setup with neutral escrow via DFPI partners</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Message with Templates</h3>
            <p className="text-sm text-slate-600">Professional communication throughout tenancy</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              4
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Release Packet</h3>
            <p className="text-sm text-slate-600">Court-ready documentation by day 21</p>
          </div>
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

// Mini Pricing Band
function MiniPricingBand() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 mb-4">
            Pilot Pricing
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Fairvia (Pilot)</h2>
          <div className="text-4xl font-bold text-slate-900 mb-2">$49<span className="text-lg text-slate-500">/door/month</span></div>
          <p className="text-slate-600 mb-6">Automate the 21-day rule with neutral escrow, guided messages, and court-ready release packet.</p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold text-slate-900 mb-3">Includes:</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• DFPI-partner escrow</li>
              <li>• 21-day countdown with day 16/19/20 nudges</li>
              <li>• AB 2801 photo workflow</li>
              <li>• Release packet (itemization, receipts, photos, timestamps)</li>
              <li>• Tenant messaging templates</li>
              <li>• Live onboarding support</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors">
              Start Pilot
            </button>
            <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
              See Full Pricing
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Pilot pricing • Price-locked for 12 months • Month-to-month • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProof() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container-tight text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Results</h2>
        <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto border border-slate-200">
          <p className="text-slate-600 mb-4 italic">
            &ldquo;Since using Fairvia, I haven&apos;t worried about the 21-day rule once. The countdown and photo workflow handled everything automatically.&rdquo;
          </p>
          <p className="font-semibold text-slate-900">Maria Chen</p>
          <p className="text-sm text-slate-500">8 units, San Jose</p>
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
          <HowItWorks />
          <WhatYouPrevent />
          <TrustStrip />
          <MiniPricingBand />
          <SocialProof />
          <FAQ />
          <HomeCTA />
        </main>

        <Footer />
      </div>
      <StickyCTA />
    </>
  );
}
