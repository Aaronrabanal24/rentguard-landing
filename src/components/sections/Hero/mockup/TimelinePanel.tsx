import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
import { CalendarIcon, CheckCircleSmallIcon, MessageSquareIcon } from "./icons";

const timeline = [
  { label: "Tenant asked for walkthrough", time: "10:15 AM", status: "Pending landlord" },
  { label: "Landlord confirmed date", time: "10:32 AM", status: "Sent" },
  { label: "Keys handoff checklist", time: "Scheduled", status: "Auto reminder" },
];

export function TimelinePanel() {
  return (
    <motion.div
      transition={{ delay: 0.16 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-indigo-100/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-slate-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Shared timeline</h3>
          <Badge className="bg-indigo-500 text-white">Live</Badge>
        </div>

        <ul className="space-y-3 text-sm text-slate-600">
          {timeline.map((item) => (
            <li key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white/80 px-3 py-2 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <MessageSquareIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-slate-900">{item.label}</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {item.time}
                  <span className="flex items-center gap-1 text-emerald-600">
                    <CheckCircleSmallIcon className="h-3 w-3" />
                    {item.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Hero3DScene
          spotlightClassName="bg-indigo-500/20"
          layers={[
            {
              wrapperClassName: "-translate-x-16 -translate-y-12 -rotate-6",
              tileClassName:
                "bg-gradient-to-br from-indigo-600 via-slate-700 to-blue-500 text-white shadow-[0_44px_86px_-40px_rgba(79,70,229,0.8)]",
              content: (
                <div className="space-y-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60">Milestones</p>
                  <div className="grid gap-1 text-xs">
                    <p className="flex items-center justify-between">
                      <span>Walkthrough</span>
                      <span className="text-white/70">✔</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span>Keys handoff</span>
                      <span className="text-white/70">Scheduled</span>
                    </p>
                  </div>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_32px_62px_-34px_rgba(15,23,42,0.45)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Sync</p>
                  <p className="text-sm font-semibold text-slate-900">Everyone notified</p>
                  <p className="text-xs text-slate-500">Tenant, landlord, and Fairvia support aligned.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </motion.div>
  );
}
