import { motion } from "@/lib/motion";
import { listingAssistDefinition } from "@/data/pilot-scope";

const BADGE_STATES = listingAssistDefinition.states;
const EMBED_TYPES = listingAssistDefinition.embedTypes;

export default function ListingAssistSection() {
  return (
    <motion.section
      className="bg-white py-16"
      id="listing-assist"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
          Step 1 • SEO marketing
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Launch a Fairvia profile that proves you&apos;re legit</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Publish a search-friendly property page that showcases compliance, embeds the Fairvia trust badge, and links renters straight back to the listings you already maintain.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h3 className="text-base font-semibold text-slate-900">What renters see</h3>
            <ul className="mt-3 space-y-2">
              {BADGE_STATES.map((state) => (
                <li key={state} className="flex items-start gap-2">
                  <span className="mt-1 text-sky-500">•</span>
                  <span>{state}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          >
            <h3 className="text-base font-semibold text-slate-900">How you share it</h3>
            <ul className="mt-3 space-y-2">
              {EMBED_TYPES.map((embed) => (
                <li key={embed} className="flex items-start gap-2">
                  <span className="mt-1 text-sky-500">•</span>
                  <span>{embed}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
