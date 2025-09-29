import { motion } from "@/lib/motion";
import { pilotMvpFeatureSet } from "@/data/pilot-scope";

const FEATURE_SETS = [
  { key: "landlordWorkspace", title: "Landlord workspace" },
  { key: "renterPortal", title: "Renter portal" },
  { key: "listingAssist", title: "Listing Assist badge" },
  { key: "adminOps", title: "Admin & ops" },
] as const;

type FeatureSetKey = (typeof FEATURE_SETS)[number]["key"];

export default function PilotFeatureMatrix() {
  return (
    <motion.section
      className="bg-white py-16"
      id="pilot-feature-set"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px 0px 0px 0px", amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
          MVP feature set
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Every pilot account ships with these workspaces</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Scope stays tight so we can finish each surface before we widen beyond deposits.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {FEATURE_SETS.map((set, index) => (
            <motion.article
              key={set.key}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px 0px 0px 0px", amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-slate-900">{set.title}</h3>
              <ul className="mt-3 space-y-2">
                {pilotMvpFeatureSet[set.key as FeatureSetKey].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-slate-500">•</span>
                    <span>{item}</span>
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
