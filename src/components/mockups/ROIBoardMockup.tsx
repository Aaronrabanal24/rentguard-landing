import { MockupCard, StatCard } from "@/components/ui/ProductMockup";

export default function ROIBoardMockup() {
  return (
    <MockupCard className="max-w-md">
      {/* Email Header Simulation */}
      <div className="mb-4 rounded-lg bg-slate-50 p-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-500" />
          <div>
            <div className="text-xs font-medium text-slate-500">Weekly Update • Every Friday</div>
            <div className="text-sm font-semibold text-slate-900">From: Fairvia • To: property.owner@email.com</div>
          </div>
        </div>
      </div>

      {/* Property Header */}
      <div className="mb-4">
        <div className="text-xs font-medium text-slate-500">📍 Weekly Update: 123 Oak St, Unit 204</div>
      </div>

      {/* Stats Grid */}
      <div className="mb-4 grid grid-cols-4 gap-2">
        <StatCard value="12" label="Days Listed" color="blue" />
        <StatCard value="23" label="Inquiries" color="green" />
        <StatCard value="8" label="Tours" color="purple" />
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-2xl">✓</div>
          <div className="mt-1 text-xs font-medium text-emerald-700">Signed</div>
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-2 rounded-xl bg-slate-50 p-4">
        <div className="text-xs font-semibold text-slate-700">This Week&apos;s Activity:</div>
        <ul className="space-y-1 text-xs text-slate-600">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Posted to Zillow, Apartments.com</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>7 new inquiries (all replied within 2 hours)</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>8 tours scheduled for Oct 5-8</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span className="font-semibold text-emerald-700">Lease signed Oct 12 • Move-in Oct 20</span>
          </li>
        </ul>
      </div>

      {/* Footer badge */}
      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-700">Auto-sent</span>
        <span>•</span>
        <span>No spreadsheets needed</span>
      </div>
    </MockupCard>
  );
}
