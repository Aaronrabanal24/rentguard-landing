import { motion } from "@/lib/motion";

const SCENARIOS = [
  {
    title: "Sarah’s $2,400 loss",
    story:
      "Manages five units in Oakland. Missed the day-21 deadline during turnover week and had to refund the full deposit plus attorney fees.",
    impact: "Time lost: 40 hours • Money lost: $5,200",
  },
  {
    title: "Mike’s review nightmare",
    story:
      "San Jose landlord kept deposits in a personal account. Tenant left a one-star review accusing him of theft. Three qualified applicants walked away.",
    impact: "Revenue lost: $7,200 (two months vacant)",
  },
  {
    title: "Lisa’s AB 2801 panic",
    story:
      "Owns 12 units in Sacramento. Spent weekends hunting for photo requirements and still didn’t feel audit-ready before the law kicked in.",
    impact: "Time lost: 60 hours • Stress level: off the charts",
  },
];

export default function PainSection() {
  return (
    <motion.section
      className="bg-white py-12 sm:py-16"
      id="pain"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">
            The $3,000 mistake waiting to happen
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">The California landlord gauntlet</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            One missed email. One late deduction letter. One tenant who knows the law. That’s all it takes to forfeit an entire deposit and torpedo your reputation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SCENARIOS.map((scenario) => (
            <motion.div
              key={scenario.title}
              className="flex h-full flex-col rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-900 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">Scenario</p>
              <h3 className="mt-2 text-lg font-semibold text-rose-900">{scenario.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-rose-800">{scenario.story}</p>
              <div className="mt-4 rounded-xl border border-white/60 bg-white px-3 py-2 text-xs font-semibold text-rose-700">
                {scenario.impact}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-center text-slate-100 sm:flex-row sm:text-left">
          <div>
            <p className="text-base font-semibold">Fairvia prevents all three.</p>
            <p className="mt-1 text-sm text-slate-300">Compliance automation means you never scramble at day 21, never fight to prove neutrality, and never lose a tenant over trust.</p>
          </div>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
          >
            See the difference →
          </a>
        </div>
      </div>
    </motion.section>
  );
}
