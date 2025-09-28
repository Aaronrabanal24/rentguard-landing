import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
import { DollarIcon, ShieldIcon, CheckCircleSmallIcon } from "./icons";

export function FundsFlowPanel() {
  return (
    <motion.div
      transition={{ delay: 0.12 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-teal-100/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-4">
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
      </div>
    </motion.div>
  );
}
