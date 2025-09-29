import Image from "next/image";
import { motion } from "@/lib/motion";

const STEPS = [
  {
    title: "Kick off lease onboarding",
    description: "Invite tenants or upload your move-out spreadsheet—Fairvia creates a workspace for each deposit so nothing slips.",
  },
  {
    title: "Activate neutral escrow",
    description: "Licensed California partners hold the deposit while Fairvia tracks balances for you and the renter in real time.",
  },
  {
    title: "Verify everyone in minutes",
    description: "ID checks, lease signatures, and compliance checklists live in one flow—no separate tools or personal accounts required.",
  },
  {
    title: "Stay audit-ready from day one",
    description: "Move-in photos, receipts, and notes are organized for later steps, including the final release and potential disputes.",
  },
];

const MOBILE_TIPS = [
  "Track every deadline from your phone while crews handle turns.",
  "Snap photos in-app—Fairvia timestamps and uploads without breaking stride.",
  "Swipe through upcoming releases to plan your week in under a minute.",
];

export default function ValueAndForm() {
  return (
    <motion.section
      className="bg-slate-900 py-16 text-slate-100"
      id="how-it-works"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Step 2 • Lease onboarding & deposit
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Onboard leases and deposits without touching a personal account</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Fairvia replaces spreadsheets and personal escrow with a guided intake that verifies IDs, locks funds in neutral escrow, and keeps everyone looking at the same data.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <ol className="space-y-6">
            {STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-800/60 p-6 shadow-sm sm:flex-row sm:items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 sm:text-base">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-800/60 p-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/visuals/hero-dashboard.svg"
              alt="Fairvia escrow and lease onboarding interface"
              width={640}
              height={480}
              className="h-auto w-full"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid gap-6 rounded-3xl border border-slate-800 bg-slate-800/60 p-6 text-sm text-slate-300 sm:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div>
            <h3 className="text-lg font-semibold text-white">Designed for peak chaos days</h3>
            <p className="mt-2">
              Whether you&apos;re turning units back-to-back or meeting contractors, Fairvia keeps the compliance layer running quietly in the background.
            </p>
          </div>
          <ul className="space-y-3">
            {MOBILE_TIPS.map((tip) => (
              <motion.li
                key={tip}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="mt-1 text-sky-300">•</span>
                <span>{tip}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
