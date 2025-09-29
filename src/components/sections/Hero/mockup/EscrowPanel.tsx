import { motion } from "@/lib/motion";
import { Progress } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
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
            <p className="text-sm font-semibold text-slate-900">Deposit in escrow</p>
          </div>
          <div className="h-8 w-8 animate-[spin_6s_linear_infinite] rounded-full border-2 border-indigo-200 border-t-indigo-500" aria-hidden />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <DollarIcon className="h-4 w-4 text-emerald-500" />
              In account
            </div>
            <span className="text-lg font-semibold text-slate-900">$2,450</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-amber-500" />
                Days left
              </div>
              <span className="font-medium text-amber-600">21 days</span>
            </div>

            <Progress value={progress} className="h-2 bg-amber-100">
              <span className="sr-only">{progress}% of escrow timeline elapsed</span>
            </Progress>

            <div className="flex justify-between text-xs text-slate-500">
              <span>Opened</span>
              <span>{progress}% elapsed</span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Funds locked until release
          </div>
        </div>
        <Hero3DScene
          spotlightClassName="bg-indigo-500/20"
          layers={[
            {
              wrapperClassName: "-translate-x-16 -translate-y-10 rotate-3",
              tileClassName:
                "bg-gradient-to-br from-indigo-600 via-violet-500 to-sky-500 text-white shadow-[0_44px_82px_-40px_rgba(79,70,229,0.8)]",
              content: (
                <div className="space-y-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70">Escrow vault</p>
                  <p className="text-lg font-semibold">Multi-sig secured</p>
                  <p className="text-xs text-white/75">DFPI tracked release sequence</p>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 -rotate-6",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_30px_60px_-32px_rgba(15,23,42,0.5)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Release path</p>
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
                    <span>Tenant</span>
                    <span className="text-emerald-500">✔ Notified</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Reg clock</span>
                    <span>Day 9 of 21</span>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </motion.div>
  );
}
