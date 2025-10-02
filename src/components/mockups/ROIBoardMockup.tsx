import { MockupCard, StatCard } from "@/components/ui/ProductMockup";

export default function ROIBoardMockup() {
  return (
    <MockupCard className="max-w-md sm:max-w-lg">
      {/* Email Header Simulation */}
      <div className="mb-5 sm:mb-6 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200/60 p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
            <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm font-semibold text-slate-500">Weekly Update • Every Friday</div>
            <div className="text-sm sm:text-base font-bold text-slate-900 truncate">From: Fairvia</div>
          </div>
        </div>
      </div>

      {/* Property Header */}
      <div className="mb-5 sm:mb-6">
        <div className="text-sm sm:text-base font-bold text-slate-700 flex items-center gap-2">
          <span className="text-lg">📍</span>
          <span>Weekly Update: 123 Oak St, Unit 204</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-5 sm:mb-6 grid grid-cols-4 gap-2 sm:gap-3">
        <StatCard value="12" label="Days Listed" color="blue" />
        <StatCard value="23" label="Inquiries" color="green" />
        <StatCard value="8" label="Tours" color="purple" />
        <div className="rounded-xl sm:rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-3 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-2xl sm:text-3xl">✓</div>
          <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold text-emerald-700 leading-tight text-center">Signed</div>
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200/60 p-4 sm:p-5">
        <div className="text-sm sm:text-base font-bold text-slate-800 mb-3">This Week&apos;s Activity:</div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500 font-bold mt-0.5">•</span>
            <span>Posted to Zillow, Apartments.com</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-500 font-bold mt-0.5">•</span>
            <span>7 new inquiries (all replied within 2 hours)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-purple-500 font-bold mt-0.5">•</span>
            <span>8 tours scheduled for Oct 5-8</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 font-bold mt-0.5">✓</span>
            <span className="font-bold text-emerald-700">Lease signed Oct 12 • Move-in Oct 20</span>
          </li>
        </ul>
      </div>

      {/* Footer badge */}
      <div className="mt-5 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-600">
        <span className="rounded-full bg-purple-100 border-2 border-purple-200 px-3 py-1.5 font-bold text-purple-700">Auto-sent</span>
        <span className="font-bold">•</span>
        <span className="font-semibold">No spreadsheets needed</span>
      </div>
    </MockupCard>
  );
}
