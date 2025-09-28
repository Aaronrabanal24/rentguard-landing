import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";

const TIERS = [
  {
    name: "Pilot",
    price: "Free",
    description: "Available to California landlords while we expand the program.",
    features: [
      "Neutral escrow managed by licensed partners",
      "Workflow automation for move-in/out",
      "Tenant transparency portal",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "Coming soon",
    description: "Designed for landlords scaling beyond the pilot cohort.",
    features: [
      "Portfolio analytics and owner reporting",
      "Team permissions and task assignments",
      "API & property management integrations",
      "Priority support",
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
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Pilot-friendly today, scalable tomorrow</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Lock in pilot access now and be the first to know when paid plans launch.
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
      </section>
    </PageContainer>
  );
}
