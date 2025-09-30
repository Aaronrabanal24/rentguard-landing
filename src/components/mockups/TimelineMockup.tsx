import { MockupCard, TimelineStep } from "@/components/ui/ProductMockup";

export default function TimelineMockup() {
  return (
    <MockupCard className="max-w-md bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-lg font-bold text-slate-900">Unit 204 Timeline</div>
        <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
          Live
        </span>
      </div>

      {/* Timeline steps */}
      <div className="space-y-3">
        <TimelineStep
          icon="✓"
          title="Unit Posted"
          subtitle="Oct 1, 2024 • 9:00 AM"
          status="completed"
          index={0}
        />
        <TimelineStep
          icon="📧"
          title="7 Inquiries Received"
          subtitle="Oct 3, 2024 • Various times"
          status="completed"
          index={1}
        />
        <TimelineStep
          icon="📅"
          title="Tours Scheduled"
          subtitle="Oct 5-8, 2024 • 8 tours booked"
          status="pending"
          index={2}
        />
        <TimelineStep
          icon="📝"
          title="Applications"
          subtitle="Waiting for tour completion"
          status="scheduled"
          index={3}
        />
      </div>

      {/* Footer note */}
      <div className="mt-4 rounded-xl bg-white/50 p-3 text-center text-xs text-slate-600">
        Auto-timestamped • Shareable with owners
      </div>
    </MockupCard>
  );
}
