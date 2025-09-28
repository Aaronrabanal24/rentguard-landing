import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
import { MapPinIcon, ShieldIcon, CheckCircleSmallIcon } from "./icons";

export function SeoPanel() {
  return (
    <motion.div
      transition={{ delay: 0.08 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-sky-100/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-slate-900">SEO marketing page</h3>
            <p className="text-sm text-slate-600">Public profile renters can trust</p>
          </div>
          <Badge className="bg-slate-900 text-white">Indexed</Badge>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
            <ShieldIcon className="h-4 w-4 text-sky-500" />
            Compliance badges show DFPI coverage
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
            <MapPinIcon className="h-4 w-4 text-slate-500" />
            Links renters straight to your active listing
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
            <CheckCircleSmallIcon className="h-4 w-4 text-emerald-500" />
            FAQ, deposits, and photos in one shareable link
          </div>
        </div>
      </div>
    </motion.div>
  );
}
