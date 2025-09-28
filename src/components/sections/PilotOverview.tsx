import { motion } from "@/lib/motion";
import { pilotFocus } from "@/data/pilot-scope";

export default function PilotOverview() {
  const { focus, qualifier, thesis, primaryOutcome } = pilotFocus;

  return (
    <motion.section
      className="bg-slate-50 py-16"
      id="pilot-overview"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
          Product thesis
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{focus}</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">{qualifier}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-slate-900">Thesis</h3>
            <p className="mt-2 leading-relaxed">{thesis}</p>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          >
            <h3 className="text-lg font-semibold text-slate-900">Primary outcome</h3>
            <p className="mt-2 leading-relaxed">{primaryOutcome}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
