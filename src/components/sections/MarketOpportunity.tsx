import { motion } from "@/lib/motion";
import { opportunities } from "@/data/opportunities";

const SUBPOINTS = [
  "California civil code fines start at $200 per tenant when the 21-day clock is missed.",
  "AB 2801 photo evidence becomes mandatory for deductions in 2024—Fairvia handles it now.",
  "Professional updates help you keep high-quality tenants and avoid one-star reviews.",
];

export default function MarketOpportunity() {
  return (
    <motion.section
      className="bg-white py-12 sm:py-16"
      id="market"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            The California challenge
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Stop burning nights on California deposit compliance</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Independent landlords juggle inspections, deadlines, and anxious renters. Fairvia gives you a compliance command center that runs in the background while you focus on rent-ready units.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {opportunities.map((item, index) => (
              <motion.div
                key={item.challenge}
                className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.challenge}</p>
                <p className="text-base font-semibold text-slate-900">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-slate-900">Why it matters now</h3>
          <ul className="mt-3 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
            {SUBPOINTS.map((point, index) => (
              <motion.li
                key={point}
                className="flex items-start gap-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.04 }}
              >
                <span className="mt-[2px] text-orange-500">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
