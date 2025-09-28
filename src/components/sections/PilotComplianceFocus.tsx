import { motion } from "@/lib/motion";
import { pilotComplianceFocus } from "@/data/pilot-scope";

export default function PilotComplianceFocusSection() {
  return (
    <motion.section
      className="bg-slate-900 py-16 text-slate-100"
      id="pilot-compliance"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
          Compliance overlay
        </span>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Controls we enforce before every release</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
          The pilot bakes these checks into each case so you can show regulators, renters, or owners exactly how the deposit was handled.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-slate-200">
          {pilotComplianceFocus.map((item) => (
            <motion.li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-slate-800/50 p-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="mt-1 text-slate-400">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
