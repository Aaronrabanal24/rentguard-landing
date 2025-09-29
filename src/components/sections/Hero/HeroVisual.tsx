import { motion } from "@/lib/motion";

export function HeroVisual() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-800">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">The old way</p>
          <h3 className="mt-2 text-lg font-semibold text-rose-900">Sticky notes & spreadsheets</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-rose-400">•</span>
              <span>Day 19 panic: "Did I send the letter?"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-rose-400">•</span>
              <span>Receipts scattered across email threads</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-rose-400">•</span>
              <span>Deposit held in personal account, tenant mistrust</span>
            </li>
          </ul>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-white px-4 py-3 text-sm font-semibold text-rose-700">
            Missed deadline = −$2,400 refunded
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">With Fairvia</p>
          <h3 className="mt-2 text-lg font-semibold text-emerald-900">21-day workflow on autopilot</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">•</span>
              <span>Day 16, 19, 20 alerts sent automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">•</span>
              <span>Neutral escrow proof and photo evidence in one timeline</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">•</span>
              <span>Itemized letter generated with receipts attached</span>
            </li>
          </ul>
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700">
            Released on time = +$2,400 kept
          </div>
        </div>
      </div>
    </motion.div>
  );
}
