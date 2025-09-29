import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
import { MapPinIcon, ShieldIcon, CheckCircleSmallIcon } from "./icons";

export function SeoPanel() {
  return (
    <motion.div
      transition={{ delay: 0.08 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-sky-100/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-5">
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
        <Hero3DScene
          spotlightClassName="bg-sky-500/20"
          layers={[
            {
              wrapperClassName: "-translate-x-16 -translate-y-12 rotate-6",
              tileClassName:
                "bg-gradient-to-br from-indigo-600 via-sky-500 to-slate-500 text-white shadow-[0_42px_80px_-38px_rgba(59,130,246,0.8)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Search pulse</p>
                  <p className="text-2xl font-semibold leading-tight">+68%</p>
                  <p className="text-xs text-white/70">Weekly impressions after badge launch</p>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 -rotate-3",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_28px_60px_-32px_rgba(15,23,42,0.45)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400">Top keyword</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-slate-900">fairvia + oakland rentals</p>
                    <p className="text-xs text-slate-500">Indexed across Google & Bing</p>
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
