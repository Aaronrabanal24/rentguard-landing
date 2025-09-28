import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";

const TIERS = [
  {
    name: "Pilot",
    price: "Free",
    description: "Limited seats for California landlords who want hands-off 21-day compliance before AB 2801 fully hits.",
    features: [
      "Neutral escrow managed by licensed California partners",
      "21-day timers, AB 2801 photo logs, and auto statements",
      "Tenant transparency portal with status updates",
      "Email support plus onboarding audit of one recent move-out",
    ],
  },
  {
    name: "Professional",
    price: "Coming soon",
    description: "For landlords scaling beyond 50 doors who want owner reporting and integrations.",
    features: [
      "Portfolio analytics and owner-ready reporting",
      "Team permissions, task routing, and escalations",
      "API & property management integrations",
      "Priority support with quarterly compliance reviews",
    ],
  },
];

export default function PricingPage() {
  return (
    <PageContainer title="Fairvia Pricing" includeFooter>
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            Pricing
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Avoid one dispute and Fairvia pays for itself</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            A single lost deposit can cost $3,000+ in refunds and legal fees. Pilot access is free while we onboard California landlords who want an edge before AB 2801 enforcement ramps up.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-2">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            >
              <h2 className="text-xl font-semibold text-slate-900">{tier.name}</h2>
              <p className="mt-2 text-3xl font-bold text-slate-900">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-sky-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl px-4 text-xs text-slate-500">
          Still on the fence? Compare the cost of one disputed deposit&mdash;lost rent, cleaning, and legal hours often exceed $3,000. Fairvia&apos;s automation keeps that money in your pocket while delivering a professional experience tenants talk about.
        </p>
      </section>
    </PageContainer>
  );
}
