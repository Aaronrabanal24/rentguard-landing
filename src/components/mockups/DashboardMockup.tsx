import { MockupCard, StatCard } from "@/components/ui/ProductMockup";

export default function DashboardMockup() {
  return (
    <MockupCard className="max-w-md">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-slate-500">Welcome back</div>
          <div className="text-xl font-bold text-slate-900">Dashboard</div>
        </div>
        <button className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
          Create Link
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard value="12" label="Active Postings" color="blue" />
        <StatCard value="23" label="This Week" color="green" />
        <StatCard value="8" label="Leased" color="purple" />
      </div>

      {/* Leasing Timeline Preview */}
      <div className="mt-4 text-xs font-medium text-slate-500">
        Leasing Timeline
      </div>
    </MockupCard>
  );
}
