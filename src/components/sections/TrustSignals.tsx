import { motion } from "@/lib/motion";

const TRUST_POINTS = [
  {
    title: "Licensed escrow partners",
    description: "Deposits stay with DFPI-licensed escrow agents and FDIC banks—Fairvia never touches client funds.",
  },
  {
    title: "0 missed deadlines",
    description: "Pilot landlords hit every 21-day refund clock with Fairvia running timers and reminders.",
  },
  {
    title: "Audit-ready documentation",
    description: "Civil Code §1950.5, AB 12, and AB 2801 checklists prove deductions and deposit handling on demand.",
  },
];

export default function TrustSignals() {
  return (
    <motion.section
      className="bg-white py-14"
      id="trust"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Trust signals</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Compliance proof landlords can point to</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Landlords and investors want validation up front. These signals show Fairvia keeps deposits neutral, on time, and audit-ready.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {TRUST_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <p className="font-semibold text-slate-900">{point.title}</p>
                <p className="mt-2 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
