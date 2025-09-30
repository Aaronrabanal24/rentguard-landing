import { motion } from "@/lib/motion";

interface MockupCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MockupCard({ children, className = "", delay = 0 }: MockupCardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

interface StatCardProps {
  value: string | number;
  label: string;
  color?: "blue" | "green" | "purple" | "amber";
}

export function StatCard({ value, label, color = "blue" }: StatCardProps) {
  const colorClasses = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-emerald-600 bg-emerald-50",
    purple: "text-purple-600 bg-purple-50",
    amber: "text-amber-600 bg-amber-50",
  };

  return (
    <div className={`rounded-xl ${colorClasses[color]} p-4`}>
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm font-medium opacity-80">{label}</div>
    </div>
  );
}

interface TimelineStepProps {
  icon: string;
  title: string;
  subtitle: string;
  status: "completed" | "pending" | "scheduled";
  index: number;
}

export function TimelineStep({ icon, title, subtitle, status, index }: TimelineStepProps) {
  const statusColors = {
    completed: "bg-blue-500 text-white",
    pending: "bg-purple-500 text-white",
    scheduled: "bg-slate-200 text-slate-600",
  };

  const statusLabels = {
    completed: "Done",
    pending: "In Progress",
    scheduled: "Auto-Booked",
  };

  return (
    <motion.div
      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-500">{subtitle}</div>
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[status]}`}>
        {statusLabels[status]}
      </span>
    </motion.div>
  );
}

interface MobileFrameProps {
  children: React.ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-2xl">
        {/* Status bar */}
        <div className="mb-2 flex items-center justify-between px-4 py-1 text-xs text-white">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-white/30" />
            <div className="h-3 w-3 rounded-full bg-white/30" />
            <div className="h-3 w-3 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Screen content */}
        <div className="overflow-hidden rounded-[2.5rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

interface DepositItemProps {
  icon: string;
  title: string;
  subtitle: string;
  amount: string;
  status?: "photo-required" | "documented" | "compliant";
}

export function DepositItem({ icon, title, subtitle, amount, status }: DepositItemProps) {
  const statusBadges = {
    "photo-required": { text: "Photo required", color: "bg-amber-100 text-amber-700" },
    "documented": { text: "Photo documented", color: "bg-blue-100 text-blue-700" },
    "compliant": { text: "CA Civ Code §1950.5", color: "bg-emerald-100 text-emerald-700" },
  };

  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-500">{subtitle}</div>
        {status && (
          <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusBadges[status].color}`}>
            {statusBadges[status].text}
          </span>
        )}
      </div>
      <div className="text-right">
        <div className="font-bold text-slate-900">{amount}</div>
      </div>
    </div>
  );
}
