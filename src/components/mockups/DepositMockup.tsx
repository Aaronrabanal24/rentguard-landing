import { MockupCard, DepositItem } from "@/components/ui/ProductMockup";

export default function DepositMockup() {
  return (
    <MockupCard className="max-w-lg sm:max-w-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-slate-700">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">Security Deposit Itemization</h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
          Oak Street Apartments - Unit 204 • Tenant: Sarah Martinez
        </p>
        <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold">Move-out: Dec 15, 2024</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">Deposit: $2,400</span>
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 sm:mb-8 grid grid-cols-3 gap-2.5 sm:gap-4">
        <div className="rounded-xl sm:rounded-2xl bg-white/10 border-2 border-white/20 p-3 sm:p-5 backdrop-blur-sm shadow-lg">
          <div className="text-xl sm:text-3xl font-bold text-white leading-tight">$2,400</div>
          <div className="mt-2 text-xs sm:text-sm text-slate-300 font-semibold leading-tight">Original</div>
        </div>
        <div className="rounded-xl sm:rounded-2xl bg-amber-500/20 border-2 border-amber-500/40 p-3 sm:p-5 backdrop-blur-sm shadow-lg">
          <div className="text-xl sm:text-3xl font-bold text-amber-300 leading-tight">-$350</div>
          <div className="mt-2 text-xs sm:text-sm text-amber-200 font-semibold leading-tight">Deductions</div>
        </div>
        <div className="rounded-xl sm:rounded-2xl bg-emerald-500/20 border-2 border-emerald-500/40 p-3 sm:p-5 backdrop-blur-sm shadow-lg">
          <div className="text-xl sm:text-3xl font-bold text-emerald-300 leading-tight">$2,050</div>
          <div className="mt-2 text-xs sm:text-sm text-emerald-200 font-semibold leading-tight">Returned</div>
        </div>
      </div>

      {/* Deduction Items */}
      <div className="space-y-3 sm:space-y-4">
        <div className="text-sm sm:text-base font-bold text-slate-200 mb-3">Deduction Items</div>

        <div className="rounded-xl sm:rounded-2xl bg-white border-2 border-white/90 p-4 sm:p-5 text-slate-900 shadow-lg">
          <DepositItem
            icon="🧹"
            title="Carpet cleaning (living room)"
            subtitle="Per lease agreement • Normal wear excluded"
            amount="$150"
            status="documented"
          />
        </div>

        <div className="rounded-xl sm:rounded-2xl bg-white border-2 border-white/90 p-4 sm:p-5 text-slate-900 shadow-lg">
          <DepositItem
            icon="🔧"
            title="Wall repair (bedroom - nail holes)"
            subtitle="5 holes documented with photos"
            amount="$125"
            status="documented"
          />
        </div>

        <div className="rounded-xl sm:rounded-2xl bg-white border-2 border-white/90 p-4 sm:p-5 text-slate-900 shadow-lg">
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
      <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/15 p-4 sm:p-5 shadow-lg">
        <div className="flex items-center gap-3">
          <svg className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <div className="text-sm sm:text-base font-bold text-emerald-300">Compliant with California law</div>
            <div className="text-xs sm:text-sm text-emerald-400 mt-1 leading-relaxed">
              Letter sent within 21 days • Export ready for audit
            </div>
          </div>
        </div>
      </div>
    </MockupCard>
  );
}
