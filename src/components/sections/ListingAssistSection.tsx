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
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              Step 1 • SEO marketing
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Launch a Fairvia profile that proves you&apos;re legit</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Publish a search-friendly property page that showcases compliance, embeds the Fairvia trust badge, and links renters straight back to the listings you already maintain.
            </p>

            <PropertyProfileMockup />
          </div>

          <div className="grid gap-6">
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
      </div>
    </motion.section>
  );
}

function PropertyProfileMockup() {
  const checklist = ["Escrow", "Lease", "Timeline"];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-sky-300/30 via-sky-50 to-white text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
        Property gallery
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-[10px] font-medium text-sky-600">
          <span aria-hidden>🔗</span> Fairvia badge
        </span>
      </div>
      <div className="space-y-4 p-5 text-sm text-slate-600">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Fairvia profile</p>
            <p className="text-lg font-semibold text-slate-900">Safe deposit return — Oakland 2BR</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
            <span className="text-[11px]">✔</span> Verified by Fairvia
          </span>
        </div>

        <ul className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-600">
          {checklist.map((item) => (
            <li key={item} className="flex items-center gap-1 text-emerald-600">
              <span>✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Google preview</p>
          <p className="mt-2 font-semibold text-slate-900">Fairvia profile · Verified landlord · Escrowed deposit</p>
          <p className="truncate text-xs text-slate-500">https://fairvia.com/oakland-2br</p>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-slate-300 text-[10px] text-slate-500">QR</span>
            Share badge on any listing
          </span>
          <span className="text-sky-600">Copy link →</span>
        </div>
      </div>
    </div>
  );
}
