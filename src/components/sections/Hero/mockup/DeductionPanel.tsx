import { useMemo } from "react";
import { motion } from "@/lib/motion";
import { Separator } from "@/components/ui";
import { Hero3DScene } from "./Hero3DScene";
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

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
              <FileTextIcon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-slate-900">Deposit summary</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600" aria-hidden>
            <CheckCircleIcon className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="mb-3 flex items-center gap-2 text-slate-700">
              <ReceiptIcon className="h-4 w-4" />
              Deductions applied
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
                <span>Total</span>
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
                  <p className="text-sm font-medium text-emerald-800">Release ready</p>
                  <p className="text-xs text-emerald-600">Packet queued</p>
                </div>
              </div>
              <ArrowUpRightIcon className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="flex items-baseline gap-1 text-emerald-800">
              <DollarIcon className="h-5 w-5 text-emerald-600" />
              <span className="text-2xl font-semibold">{totals.refundAmount.toLocaleString()}</span>
              <span className="text-xs text-emerald-600">to renter</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            21-day clock met
          </div>
        </div>
        <Hero3DScene
          spotlightClassName="bg-emerald-400/20"
          layers={[
            {
              wrapperClassName: "-translate-x-16 -translate-y-12 -rotate-6",
              tileClassName:
                "bg-gradient-to-br from-emerald-500 via-teal-500 to-lime-500 text-white shadow-[0_46px_88px_-42px_rgba(16,185,129,0.85)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Refund</p>
                  <p className="text-3xl font-semibold leading-none">${totals.refundAmount.toLocaleString()}</p>
                  <p className="text-xs text-white/75">Clears to renter in under 24 hours</p>
                </div>
              ),
            },
            {
              wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
              tileClassName:
                "bg-white/95 text-slate-700 shadow-[0_32px_62px_-34px_rgba(15,23,42,0.45)]",
              content: (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Audit trail</p>
                  <p className="text-sm font-semibold text-slate-900">Receipts attached</p>
                  <p className="text-xs text-slate-500">Cleaning & repairs auto-added to PDF packet.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </motion.div>
  );
}
