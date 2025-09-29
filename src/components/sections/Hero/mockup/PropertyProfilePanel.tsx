import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
import { CalendarIcon, CheckIcon, MapPinIcon, UsersIcon } from "./icons";
import { ImageWithFallback } from "./ImageWithFallback";

export function PropertyProfilePanel() {
  return (
    <motion.div
      transition={{ delay: 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/80 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50/80 via-white to-emerald-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-6">
        <div className="relative h-48 overflow-hidden rounded-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581209410127-8211e90da024?auto=format&fit=crop&w=1080&q=80"
            alt="2 bedroom apartment interior"
            fill
            priority={false}
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          <Badge className="absolute right-3 top-3 bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            <span className="mr-2 h-2 w-2 rounded-full bg-white animate-pulse" />
            Verified listing
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Lakeside 2BR • Oakland</h3>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                Oakland, CA
              </span>
              <span className="flex items-center gap-2">
                <UsersIcon className="h-4 w-4" />
                2 bed · 1 bath
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                <CheckIcon className="h-3 w-3" />
              </span>
              Escrow live
              <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-sky-50 px-3 py-2 text-sm text-sky-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-white">
                <CheckIcon className="h-3 w-3" />
              </span>
              Lease signed & stored
              <CalendarIcon className="ml-auto h-4 w-4 text-sky-500" />
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-violet-50 px-3 py-2 text-sm text-violet-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-white">
                <CheckIcon className="h-3 w-3" />
              </span>
              Move-out timeline set
            </div>
          </div>
        </div>
        <Hero3DScene
          spotlightClassName="bg-sky-400/20"
          layers={[
            {
              wrapperClassName: "-translate-x-20 -translate-y-10 -rotate-6 scale-95",
              tileClassName:
                "bg-gradient-to-br from-sky-600 via-sky-500 to-teal-500 text-white shadow-[0_40px_70px_-35px_rgba(14,116,144,0.85)]",
              content: (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    <span>Profile kit</span>
                    <span>Live</span>
                  </div>
                  <p className="text-xl font-semibold leading-tight">Lakeside badge</p>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CalendarIcon className="h-4 w-4" />
                    Compliance timer synced
                  </div>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_26px_60px_-30px_rgba(15,23,42,0.55)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400">Verification</p>
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
                    <span>Fairvia badge</span>
                    <span className="flex items-center gap-1 text-emerald-500">
                      <CheckIcon className="h-3 w-3" />
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">QR links renters to escrow proof.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </motion.div>
  );
}
