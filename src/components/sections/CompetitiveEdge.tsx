import { motion } from "@/lib/motion";

const FEATURES = [
  {
    title: "21-day deadline control",
    detail: "Hands-off timers and reminders prevent forfeited deposits—customers report $1,200+ kept per busy season.",
  },
  {
    title: "AB 2801 photo evidence",
    detail: "Guided shoots record timestamped proof in under 8 minutes, cutting dispute prep by 75%.",
  },
  {
    title: "Tenant-ready messaging",
    detail: "Pre-built texts and emails answer “Where’s my deposit?” before it escalates, boosting reviews and renewals.",
  },
  {
    title: "Portfolio command center",
    detail: "Every unit, balance, and task in one view helps solo landlords compete with full teams.",
  },
];

export default function CompetitiveEdge() {
  return (
    <motion.section
      className="bg-slate-100 py-16"
      id="edge"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="rounded-3xl border border-white bg-white p-8 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Why Fairvia works
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Operate like a pro shop—even if it&apos;s just you</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Fairvia turns manual landlord chores into “set and forget” workflows so you can spend your time on rent-ready units and new acquisitions.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
              >
                <span className="mt-0.5 text-lg">✅</span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
