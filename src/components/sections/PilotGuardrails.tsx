import { motion } from "@/lib/motion";
import { pilotGuardrails } from "@/data/pilot-scope";

export default function PilotGuardrailsSection() {
  return (
    <motion.section
      className="bg-white py-12 sm:py-16"
      id="pilot-guardrails"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
          Pilot guardrails
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Scope we&apos;re holding for launch quality</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Fairvia stays narrow so every workflow feels finished and compliant on day one.
        </p>
        <ul className="mt-8 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          {pilotGuardrails.map((item) => (
            <motion.li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="mt-1 text-orange-500">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
