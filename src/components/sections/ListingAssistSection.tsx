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
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Publish a calm, compliant property profile</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Fairvia pages use plain language, deposit timelines, and California law indicators so renters see fast, transparent compliance.
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
  const gallery = [
    "Front exterior",
    "Living room",
    "Kitchen",
    "Primary bedroom",
    "Bathroom",
    "Backyard",
  ];

  const featureChips = ["3 beds", "2 baths", "1650 sq ft", "Backyard access"];
  const trustChecks = ["Escrow verified", "Identity confirmed", "Lease on file"];
  const faqItems = [
    "How does Fairvia release deposits by Jun 21?",
    "What does California deposit protection cover?",
    "Who handles utilities and yard care?",
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative border-b border-slate-200/70">
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
            Berkeley Hills single family home
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4 text-xs text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white">
              Hover for controls
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold text-white">
              3 / 6 | Living room
            </span>
          </div>
          <button
            type="button"
            className="absolute left-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-sm md:flex"
            aria-label="Previous photo"
          >
            {"<"}
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-sm md:flex"
            aria-label="Next photo"
          >
            {">"}
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto bg-slate-900/90 px-4 py-3 text-[11px] text-white/70">
          {gallery.map((label, index) => (
            <div
              key={label}
              className={`flex min-w-[110px] items-center justify-between rounded-xl border px-3 py-2 ${
                index === 1 ? "border-white/60 bg-white/10 text-white" : "border-white/20"
              }`}
            >
              <span>{label}</span>
              <span>{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 p-6 text-sm text-slate-600">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Fairvia profile</p>
            <h3 className="text-lg font-semibold text-slate-900">Secure deposit handling in Berkeley Hills</h3>
            <p className="text-xs text-slate-500">
              Calm copy keeps renters grounded. Shared updates track every deposit move.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
              <span aria-hidden>✔</span>
              California deposit protection active
            </span>
            <span className="text-base font-semibold text-slate-900">$4,800 rent | $4,800 deposit</span>
          </div>
        </header>

        <div className="flex flex-wrap gap-2">
          {featureChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Highlights</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Bright living room opens to a fenced yard with drought friendly landscaping.</li>
                <li>Fairvia escrow timestamps every repair photo and receipt.</li>
                <li>Move out calendar shows Jun 12 walkthrough and Jun 21 release.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-relaxed">
              <p className="font-semibold text-slate-900">Secure deposit handling</p>
              <p className="mt-2 text-slate-600">
                Fairvia keeps funds in DFPI licensed escrow. Renters and owners see the same receipts, inspection notes, and day 21 payout status.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Trust checks</p>
              <ul className="mt-3 grid gap-2 text-sm">
                {trustChecks.map((item) => (
                  <li key={item} className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white px-3 py-2 text-emerald-600">
                    <span>{item}</span>
                    <span aria-hidden>✔</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">FAQ</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {faqItems.map((faq) => (
                  <li key={faq} className="rounded-xl border border-slate-200 px-3 py-2">
                    {faq}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-900 px-4 py-4 text-xs text-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-white">21 day deposit return guaranteed in California</span>
          <span className="text-slate-300">Escrow partner releases funds on Jun 21 with full audit log.</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white">
            Download compliance packet
          </span>
        </footer>
      </div>
    </div>
  );
}
