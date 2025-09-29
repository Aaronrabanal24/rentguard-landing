import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
import { DollarIcon, ShieldIcon, CheckCircleSmallIcon } from "./icons";

export function FundsFlowPanel() {
  return (
    <motion.div
      transition={{ delay: 0.12 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-teal-100/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Verified funds flow</h3>
          <Badge className="bg-emerald-500 text-white">Neutral</Badge>
        </div>

        <div className="grid gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2">
            <ShieldIcon className="h-4 w-4 text-emerald-500" />
            Escrow held with DFPI partners only
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2">
            <CheckCircleSmallIcon className="h-4 w-4 text-emerald-500" />
            Renter identity + lease verified before release
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2">
            <DollarIcon className="h-4 w-4 text-emerald-600" />
            Full audit trail for deposits, draws, and refunds
          </div>
        </div>
        <Hero3DScene
          spotlightClassName="bg-emerald-400/20"
          layers={[
            {
              wrapperClassName: "-translate-x-[4.5rem] -translate-y-12 -rotate-6",
              tileClassName:
                "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_46px_88px_-42px_rgba(16,185,129,0.85)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Custody</p>
                  <p className="text-lg font-semibold">Triple ledger</p>
                  <p className="text-xs text-white/75">Fairvia • Bank • Renter receipts</p>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_32px_60px_-34px_rgba(15,23,42,0.45)]",
              content: (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                    <span>Flow</span>
                    <span>T-Chain</span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-slate-900">Escrow → Landlord → Tenant</p>
                    <p className="text-xs text-slate-500">Every transfer digitally notarized.</p>
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
