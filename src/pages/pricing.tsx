import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";
import HomeCTA from "@/components/sections/HomeCTA";

const PLAN_FEATURES = [
  "DFPI-partner escrow",
  "21-day countdown with day 16/19/20 nudges",
  "AB 2801 photo workflow",
  "Release packet (itemization, receipts, photos, timestamps)",
  "Tenant messaging templates",
  "Portfolio view",
  "Live onboarding support",
];

export default function PricingPage() {
  return (
    <PageContainer title="Fairvia Pricing" animateMain={false}>
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
            Pilot Pricing
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Fairvia (Pilot) — $49 per door/month</h1>
          <p className="mt-3 text-base text-slate-600">
            Automate the 21-day rule with neutral escrow, guided messages, and court-ready release packet.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start gap-3 text-left sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Fairvia (Pilot)</p>
              <p className="text-4xl font-bold text-slate-900">
                $49<span className="text-lg font-medium text-slate-500">/door/month</span>
              </p>
            </div>
            <div className="text-sm text-slate-600">
              <p>Pilot pricing • Price-locked for 12 months</p>
              <p>Month-to-month • Cancel anytime</p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {PLAN_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="mt-1 text-emerald-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <button className="w-full rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
              Start Pilot
            </button>
            <button className="w-full rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-[1px] hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300">
              Talk to a Specialist
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Micro-ROI:</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <span>• Average 6.2 hours saved per move-out</span>
              <span>• 147 deposits processed</span>
              <span>• Avoided forfeitures from missed day-21 can run into the thousands</span>
              <span>• Fairvia exists to make that a non-event</span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm">
            <p className="font-semibold text-amber-900 mb-2">On-time definition:</p>
            <p className="text-amber-800">Packet generated and payout initiated by day 21 when documentation is completed in-app.</p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Pricing FAQ</h2>
          <div className="space-y-6">
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

        <div className="mx-auto mt-12 max-w-2xl px-4 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">50+ doors?</h3>
          <p className="text-slate-600 mb-6">Talk to a specialist about volume pricing and owner reporting.</p>
          <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Contact Sales
          </button>
        </div>

        {/* Trust Disclaimer */}
        <div className="mx-auto mt-16 max-w-4xl px-4 text-center">
          <div className="bg-slate-900 rounded-xl py-8 px-6">
            <p className="text-slate-300 text-sm mb-2">
              Deposits held by DFPI-licensed partners • Shared timeline and receipts • Same packet for landlord and tenant
            </p>
            <p className="text-slate-500 text-xs">
              Fairvia is not a bank, escrow agent, or law firm. Deposits are held by DFPI-licensed partners.
            </p>
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}
