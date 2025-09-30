import { motion } from "@/lib/motion";

const SNAPSHOT = {
  target: "Independent California landlords • 1–50 doors",
  valueProp: "Hands-off compliance that helps you compete with full-time management firms",
  differentiators: [
    "21-day deadline protection with zero spreadsheets",
    "AB 2801 photo logs and itemizations ready for disputes",
    "Neutral escrow messaging that keeps renters calm and referring friends",
  ],
  socialProof: "Pilot landlords report reclaiming 6+ hours per move-out and zero missed deadlines",
};

export default function ProblemPain() {
  return (
    <motion.section
      className="bg-slate-50 py-12 sm:py-16"
      id="positioning"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Positioning snapshot
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">The landlord who wears every hat finally gets backup</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Fairvia helps you look buttoned-up without hiring staff—every inspection, deduction, and tenant update happens on schedule and with proof in hand.
          </p>

          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Target</dt>
              <dd className="mt-2 text-base font-semibold text-slate-900">{SNAPSHOT.target}</dd>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Value proposition</dt>
              <dd className="mt-2 text-base font-semibold text-slate-900">{SNAPSHOT.valueProp}</dd>
            </motion.div>
          </dl>

          <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <motion.div
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Differentiators</h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                {SNAPSHOT.differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-sky-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-slate-200 bg-slate-900/80 p-5 text-slate-100 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Social proof</h3>
              <p className="mt-3 text-base font-semibold">{SNAPSHOT.socialProof}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
