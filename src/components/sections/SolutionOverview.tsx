import { motion } from "@/lib/motion";

const STEPS = [
  {
    step: "Step 1",
    title: "SEO profile + trust badge",
    before: "Renters Google your property and see nothing but listings.",
    after: "They see a Fairvia profile proving funds are safe before they apply.",
  },
  {
    step: "Step 2",
    title: "Lease onboarding & neutral escrow",
    before: "Deposits sit in your personal account with no shared view.",
    after: "Escrow partner holds the money and everyone views the same timeline.",
  },
  {
    step: "Step 3",
    title: "Guided communication",
    before: "Late-night texts, missing receipts, and unclear commitments.",
    after: "Pre-written updates, renter confirmations, and receipts in one feed.",
  },
  {
    step: "Step 4",
    title: "21-day release packet",
    before: "Day-21 panic, manual letters, and risky math.",
    after: "Auto alerts, deduction helpers, and a court-ready PDF.",
  },
];

export default function SolutionOverview() {
  return (
    <motion.section
      className="bg-slate-900 py-16 text-slate-100"
      id="solution"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-4xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            The Fairvia workflow
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">What if compliance ran on autopilot?</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Fairvia replaces the spreadsheet scramble with a guided path from SEO credibility to a paid-out deposit. Every step removes a manual chore that usually happens at midnight.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_45px_-35px_rgba(15,23,42,0.6)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">{item.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              </div>

              <div className="grid gap-3 text-sm text-slate-200">
                <div className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">Before Fairvia</p>
                  <p className="mt-1 leading-relaxed text-rose-100">{item.before}</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">With Fairvia</p>
                  <p className="mt-1 leading-relaxed text-emerald-50">{item.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
