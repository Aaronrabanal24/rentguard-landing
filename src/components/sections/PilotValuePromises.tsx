import { motion } from "@/lib/motion";
import { pilotValuePromises } from "@/data/pilot-scope";

export default function PilotValuePromisesSection() {
  return (
    <motion.section
      className="bg-white py-12 sm:py-16"
      id="pilot-promises"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
          Value promises
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">What every pilot participant can point to</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          These promises define the pilot contract—if a feature doesn&apos;t deliver on them, it isn&apos;t in scope.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pilotValuePromises.map((promise) => (
            <motion.div
              key={promise}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span>{promise}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
