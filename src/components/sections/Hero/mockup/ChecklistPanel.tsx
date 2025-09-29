import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
import { CheckIcon, CalendarIcon, FileTextIcon } from "./icons";

const checklist = [
  { step: "Day 0", action: "Deposit received", detail: "Escrow timer starts" },
  { step: "Day 14", action: "Evidence collected", detail: "Photos + receipts logged" },
  { step: "Day 18", action: "Draft sent", detail: "Itemization preview to tenant" },
  { step: "Day 21", action: "Release complete", detail: "Funds + packet delivered" },
];

export function ChecklistPanel() {
  return (
    <motion.div
      transition={{ delay: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-100/60"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">21-day checklist</h3>
          <Badge className="bg-emerald-500 text-white">On track</Badge>
        </div>

        <ul className="space-y-3 text-sm text-slate-600">
          {checklist.map((item) => (
            <li key={item.step} className="flex items-start gap-3 rounded-lg border border-emerald-100 bg-white/80 px-3 py-2 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-slate-900">
                  {item.step} • {item.action}
                </p>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {item.detail}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-600">
          <FileTextIcon className="h-4 w-4" />
          Auto-generated archive ready for audits
        </div>
        <Hero3DScene
          spotlightClassName="bg-emerald-400/20"
          layers={[
            {
              wrapperClassName: "-translate-x-16 -translate-y-12 rotate-6",
              tileClassName:
                "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white shadow-[0_44px_84px_-40px_rgba(16,185,129,0.8)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Checklist</p>
                  <p className="text-lg font-semibold">4 steps</p>
                  <p className="text-xs text-white/75">All deadlines met without manual follow-up.</p>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 -rotate-3",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_32px_60px_-34px_rgba(15,23,42,0.45)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Next alert</p>
                  <p className="text-sm font-semibold text-slate-900">Day 18 reminder</p>
                  <p className="text-xs text-slate-500">Tenant preview notice queued.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </motion.div>
  );
}
