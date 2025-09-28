import { useMemo } from "react";
import { motion } from "@/lib/motion";
import { Separator } from "@/components/ui";
import { ArrowUpRightIcon, CheckCircleIcon, DollarIcon, FileTextIcon, ReceiptIcon } from "./icons";

const deductions = [
  { item: "Cleaning", amount: 150, hasReceipt: true },
  { item: "Minor repairs", amount: 200, hasReceipt: true },
];

export function DeductionPanel() {
  const totals = useMemo(() => {
    const totalDeductions = deductions.reduce((sum, item) => sum + item.amount, 0);
    const refundAmount = 2450 - totalDeductions;
    return { totalDeductions, refundAmount };
  }, []);

  return (
    <motion.div
      transition={{ delay: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-100/40 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-slate-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
              <FileTextIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Final statement</p>
              <p className="text-xs text-slate-500">Deposit resolution</p>
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircleIcon className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="mb-3 flex items-center gap-2 text-slate-700">
              <ReceiptIcon className="h-4 w-4" />
              Itemized deductions
            </div>

            <div className="space-y-3">
              {deductions.map((deduction) => (
                <div key={deduction.item} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span>{deduction.item}</span>
                    {deduction.hasReceipt ? <span className="h-2 w-2 rounded-full bg-sky-500" /> : null}
                  </div>
                  <span className="font-medium text-slate-900">${deduction.amount}</span>
                </div>
              ))}

              <Separator className="my-2" />

              <div className="flex items-center justify-between text-sm">
                <span>Total deductions</span>
                <span className="font-semibold text-slate-900">${totals.totalDeductions}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 text-slate-700">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircleIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-800">Release confirmed</p>
                  <p className="text-xs text-emerald-600">Processed successfully</p>
                </div>
              </div>
              <ArrowUpRightIcon className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="flex items-baseline gap-1 text-emerald-800">
              <DollarIcon className="h-5 w-5 text-emerald-600" />
              <span className="text-2xl font-semibold">{totals.refundAmount.toLocaleString()}</span>
              <span className="text-xs text-emerald-600">refunded</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Completed within 21-day period
          </div>
        </div>
      </div>
    </motion.div>
  );
}
