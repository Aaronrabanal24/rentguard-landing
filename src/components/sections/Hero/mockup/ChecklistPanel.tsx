import { motion } from "@/lib/motion";
import { Badge } from "@/components/ui";
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

      <div className="relative z-10 space-y-4">
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
      </div>
    </motion.div>
  );
}
