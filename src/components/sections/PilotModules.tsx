import { motion } from "@/lib/motion";
import { pilotModules } from "@/data/pilot-scope";

export default function PilotModules() {
  return (
    <motion.section
      className="bg-slate-50 py-16"
      id="pilot-modules"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
          Fairvia pilot scope
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Five layers that deliver certainty</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Every pilot landlord gets the same backbone: compliance automation, escrow, documentation, badge-driven trust, and a shared communication feed.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pilotModules.map((module, index) => (
            <motion.article
              key={module.id}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{module.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 text-sky-500">•</span>
                    <span>{bullet}</span>
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
