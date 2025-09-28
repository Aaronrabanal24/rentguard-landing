import { motion } from "@/lib/motion";
import { pilotOnboarding, pilotFlows } from "@/data/pilot-scope";

const CORE_FLOWS = [
  { title: "Move in", steps: pilotFlows.moveIn },
  { title: "Move out", steps: pilotFlows.moveOut },
  { title: "Dispute mode", steps: pilotFlows.disputeMode },
  { title: "SEO profile flow", steps: pilotFlows.seoProfile },
  { title: "Communication flow", steps: pilotFlows.communication },
];

export default function PilotWorkflows() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100" id="pilot-workflows">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Onboarding & flows
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A guided path from onboarding to release</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Fairvia keeps landlords and renters in sync from the first invite through final release, with compliance logic running in the background.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <WorkflowCard
            title="Landlord onboarding"
            index={0}
            steps={pilotOnboarding.landlord}
            accent="bg-sky-300/20"
          />
          <WorkflowCard
            title="Tenant onboarding"
            index={1}
            steps={pilotOnboarding.tenant}
            accent="bg-teal-300/20"
          />
          <WorkflowCard
            title="Compliance overlay"
            index={2}
            steps={pilotOnboarding.complianceOverlay}
            accent="bg-orange-300/20"
          />
        </div>

        <motion.div
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-800/60 p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h3 className="text-lg font-semibold text-white">Core user flows inside the pilot</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {CORE_FLOWS.map((flow, index) => (
              <motion.div
                key={flow.title}
                className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <h4 className="text-base font-semibold text-white">{flow.title}</h4>
                <ol className="mt-3 space-y-2 text-sm text-slate-300">
                  {flow.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="mt-1 text-slate-400">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface WorkflowCardProps {
  title: string;
  steps: readonly string[];
  accent: string;
  index: number;
}

function WorkflowCard({ title, steps, accent, index }: WorkflowCardProps) {
  return (
    <motion.div
      className={`rounded-3xl border border-white/10 bg-slate-800/60 p-6 ${accent}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ol className="mt-3 space-y-2 text-sm text-slate-200">
        {steps.map((step) => (
          <li key={step} className="flex items-start gap-2">
            <span className="mt-1 text-slate-400">•</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
