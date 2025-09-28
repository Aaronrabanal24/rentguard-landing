import { motion } from "@/lib/motion";
import { pilotPersonas } from "@/data/pilot-scope";

export default function PilotPersonasSection() {
  return (
    <motion.section
      className="bg-slate-50 py-16"
      id="pilot-personas"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          Personas & jobs
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Who the pilot serves on day one</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          We listened to independent landlords, renters, and advisors before tightening scope—each group gets tangible wins built into the workflow.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pilotPersonas.map((persona, index) => (
            <motion.article
              key={persona.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-slate-900">{persona.name}</h3>
              <ul className="mt-3 space-y-2">
                {persona.jobs.map((job) => (
                  <li key={job} className="flex items-start gap-2">
                    <span className="mt-1 text-teal-500">•</span>
                    <span>{job}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
