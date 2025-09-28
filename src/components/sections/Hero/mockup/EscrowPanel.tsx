import { motion } from "@/lib/motion";
import { Progress } from "@/components/ui";
import { ClockIcon, DollarIcon, ShieldIcon } from "./icons";

export function EscrowPanel() {
  const progress = Math.round((21 / 30) * 100);

  return (
    <motion.div
      transition={{ delay: 0.15 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-indigo-100/40 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
              <ShieldIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Escrow status</p>
              <p className="text-xs text-slate-500">Security deposit</p>
            </div>
          </div>
          <div className="h-8 w-8 animate-[spin_6s_linear_infinite] rounded-full border-2 border-indigo-200 border-t-indigo-500" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <DollarIcon className="h-4 w-4 text-emerald-500" />
              Amount secured
            </div>
            <span className="text-lg font-semibold text-slate-900">$2,450</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-amber-500" />
                Time remaining
              </div>
              <span className="font-medium text-amber-600">21 days</span>
            </div>

            <Progress value={progress} className="h-2 bg-amber-100">
              <span className="sr-only">{progress}% of escrow timeline elapsed</span>
            </Progress>

            <div className="flex justify-between text-xs text-slate-500">
              <span>Started</span>
              <span>{progress}% elapsed</span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Deposit secured & protected
          </div>
        </div>
      </div>
    </motion.div>
  );
}
