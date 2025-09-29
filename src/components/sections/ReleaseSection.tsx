import Image from "next/image";
import { motion } from "@/lib/motion";

const RELEASE_POINTS = [
  {
    title: "Deduction math that stands up in court",
    detail: "Select categories, attach receipts, and let Fairvia generate an itemized letter with photos and timestamped notes.",
  },
  {
    title: "21-day countdown with early alerts",
    detail: "Fairvia counts down California’s 21-day deadline and nudges you at day 16, 19, and 20 so you never forfeit another deposit.",
  },
  {
    title: "Release packet archived automatically",
    detail: "Export-ready PDF includes the deduction letter, receipts, renter confirmations, and escrow proof—ready if a dispute escalates.",
  },
];

export default function ReleaseSection() {
  return (
    <motion.section
      className="bg-slate-50 py-16"
      id="release"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <motion.div
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/visuals/why-fairvia.svg"
              alt="Fairvia deposit release letter with receipts"
              width={640}
              height={480}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-auto w-full"
              priority={false}
            />
          </motion.div>

          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Step 4 • Deposit release
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Deliver the release packet with receipts and proof</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Fairvia guides every deduction and handles the final payout. You keep the amount you&apos;re owed, the renter sees a professional summary, and disputes end before they begin.
            </p>

            <ul className="space-y-4 text-sm text-slate-600">
              {RELEASE_POINTS.map((point) => (
                <li key={point.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-base font-semibold text-slate-900">{point.title}</p>
                  <p className="mt-1 leading-relaxed">{point.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
