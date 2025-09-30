import { MockupCard, DepositItem } from "@/components/ui/ProductMockup";

export default function DepositMockup() {
  return (
    <MockupCard className="max-w-lg bg-slate-900 text-white">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Security Deposit Itemization</h3>
        <p className="mt-1 text-sm text-slate-400">
          Oak Street Apartments - Unit 204 • Tenant: Sarah Martinez
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Move-out: Dec 15, 2024
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Deposit: $2,400
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
          <div className="text-2xl font-bold text-white">$2,400</div>
          <div className="mt-1 text-xs text-slate-300">Original Deposit</div>
        </div>
        <div className="rounded-xl bg-amber-500/20 p-4 backdrop-blur-sm">
          <div className="text-2xl font-bold text-amber-300">-$350</div>
          <div className="mt-1 text-xs text-amber-200">Total Deductions</div>
        </div>
        <div className="rounded-xl bg-emerald-500/20 p-4 backdrop-blur-sm">
          <div className="text-2xl font-bold text-emerald-300">$2,050</div>
          <div className="mt-1 text-xs text-emerald-200">Amount Returned</div>
        </div>
      </div>

      {/* Deduction Items */}
      <div className="space-y-3">
        <div className="text-sm font-semibold text-slate-300">Deduction Items</div>

        <div className="rounded-xl bg-white p-4 text-slate-900">
          <DepositItem
            icon="🧹"
            title="Carpet cleaning (living room)"
            subtitle="Per lease agreement • Normal wear excluded"
            amount="$150"
            status="documented"
          />
        </div>

        <div className="rounded-xl bg-white p-4 text-slate-900">
          <DepositItem
            icon="🔧"
            title="Wall repair (bedroom - nail holes)"
            subtitle="5 holes documented with photos"
            amount="$125"
            status="documented"
          />
        </div>

        <div className="rounded-xl bg-white p-4 text-slate-900">
          <DepositItem
            icon="🚪"
            title="Kitchen cabinet hinge replacement"
            subtitle="Photo documentation attached"
            amount="$75"
            status="documented"
          />
        </div>
      </div>

      {/* Compliance Footer */}
      <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <div className="text-sm font-semibold text-emerald-300">Compliant with California law</div>
            <div className="text-xs text-emerald-400">
              Letter sent within 21 days • Export ready for audit
            </div>
          </div>
        </div>
      </div>
    </MockupCard>
  );
}
