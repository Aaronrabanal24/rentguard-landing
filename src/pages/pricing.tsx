import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";

const PLAN_FEATURES = [
  "DFPI-licensed neutral escrow",
  "21-day deadline alerts at day 16, 19, and 20",
  "AB 2801 photo archive with receipts and signatures",
  "Tenant communication portal with confirmations",
  "Listing Assist SEO profile and trust badge",
  "Live onboarding and ongoing compliance support",
];

export default function PricingPage() {
  return (
    <PageContainer title="Fairvia Pricing" includeFooter>
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Simple, transparent pricing
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">$49 per unit, per month. Cancel anytime.</h1>
          <p className="mt-3 text-base text-slate-600">
            One price includes escrow, compliance automation, tenant communication, and support. Process one deposit—if Fairvia doesn&apos;t save you time, we&apos;ll refund 100%.
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Fairvia platform</p>
              <p className="text-4xl font-bold text-slate-900">
                $49<span className="text-lg font-medium text-slate-500">/unit/month</span>
              </p>
            </div>
            <div className="text-sm text-slate-600">
              <p>Free compliance audit before you commit.</p>
              <p>No setup fee. Cancel anytime.</p>
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
              Start free trial
            </button>
            <button className="w-full rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-[1px] hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300">
              Talk to a compliance specialist
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Why it pays for itself:</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <span>• Average time saved per move-out: 6.2 hours</span>
              <span>• Deposits protected per unit: $2,400+</span>
              <span>• Risk of forfeiture when you miss day 21: 100%</span>
              <span>• Fairvia keeps the entire deposit with documented proof</span>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-8 max-w-3xl px-4 text-xs text-slate-500">
          Need owner reporting or enterprise integrations? We&apos;re building a plan for 50+ doors—join the waitlist and we&apos;ll reach out as soon as it&apos;s ready.
        </p>
      </section>
    </PageContainer>
  );
}
