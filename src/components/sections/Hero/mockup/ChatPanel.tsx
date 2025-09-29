import { motion } from "@/lib/motion";
import { Avatar, AvatarFallback } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
import { CalendarIcon, CheckCircleSmallIcon, MessageSquareIcon } from "./icons";

export function ChatPanel() {
  return (
    <motion.div
      transition={{ delay: 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-sky-100/50 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50/70 via-white to-slate-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
              <MessageSquareIcon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-slate-900">Tenant updates</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Synced
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <Avatar className="h-8 w-8 bg-slate-200 text-[11px]">
              <AvatarFallback className="bg-slate-200 text-slate-600">LL</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="max-w-sm rounded-2xl rounded-tl-md bg-slate-50 px-4 py-3 text-sm text-slate-800">
                Walkthrough Tue • 2:00 PM
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  Logged 10:30 AM
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end gap-3">
            <div className="flex-1">
              <div className="ml-auto max-w-sm rounded-2xl rounded-tr-md bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <CheckCircleSmallIcon className="h-4 w-4" />
                  Confirmed
                </div>
                <span className="mt-1 block text-xs text-sky-100">Sent 10:32 AM</span>
              </div>
            </div>
            <Avatar className="h-8 w-8 bg-sky-100 text-[11px] text-sky-600">
              <AvatarFallback className="bg-transparent text-sky-600">You</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            <CheckCircleSmallIcon className="h-4 w-4 text-emerald-500" />
            Tenant acknowledged
            <span className="ml-auto text-xs text-emerald-600">Ready for keys</span>
          </div>
        </div>
        <Hero3DScene
          spotlightClassName="bg-sky-500/20"
          layers={[
            {
              wrapperClassName: "-translate-x-16 -translate-y-12 rotate-6",
              tileClassName:
                "bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-500 text-white shadow-[0_42px_84px_-38px_rgba(56,189,248,0.75)]",
              content: (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">
                    <span>Thread</span>
                    <span>Synced</span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold">&ldquo;Walkthrough confirmed&rdquo;</p>
                    <p className="text-xs text-white/70">Tenant · 10:32 AM</p>
                  </div>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 -rotate-3",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_30px_60px_-32px_rgba(15,23,42,0.45)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Auto log</p>
                  <p className="text-sm font-semibold text-slate-900">Add to release packet</p>
                  <p className="text-xs text-slate-500">Screenshot + receipt zipped.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </motion.div>
  );
}
