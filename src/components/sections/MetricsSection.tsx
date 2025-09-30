import { motion } from "@/lib/motion";

const SMB_METRICS = [
  { metric: "Time to first reply", icon: "⏱️" },
  { metric: "Tours per 100 leads", icon: "🚪" },
  { metric: "Days to lease", icon: "📅" },
  { metric: "Vacancy dollars saved", icon: "💰" },
];

const ENTERPRISE_METRICS = [
  { metric: "Days vacant by region", icon: "📍" },
  { metric: "Show → Apply → Lease conversion", icon: "🔄" },
  { metric: "Median response time", icon: "⚡" },
  { metric: "Deposit dispute rate", icon: "⚖️" },
];

export default function MetricsSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Track what actually matters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Fairvia turns every interaction into measurable outcomes
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* SMB Metrics */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">SMB Operators</h3>
              <p className="mt-2 text-sm text-slate-600">
                Metrics that prove operational excellence to owners
              </p>
            </div>

            <div className="space-y-4">
              {SMB_METRICS.map((item, index) => (
                <motion.div
                  key={item.metric}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-sky-200 hover:bg-sky-50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{item.metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-sky-50 p-4">
              <p className="text-sm font-medium text-sky-900">
                <strong>Success indicator:</strong> Second unit added within 60 days
              </p>
            </div>
          </motion.div>

          {/* Enterprise Metrics */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Enterprise Teams</h3>
              <p className="mt-2 text-sm text-slate-600">
                Portfolio-wide visibility and compliance tracking
              </p>
            </div>

            <div className="space-y-4">
              {ENTERPRISE_METRICS.map((item, index) => (
                <motion.div
                  key={item.metric}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-violet-200 hover:bg-violet-50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{item.metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-violet-50 p-4">
              <p className="text-sm font-medium text-violet-900">
                <strong>Success indicator:</strong> Audit compliance rate + legal hold support
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-slate-500">
            All metrics auto-generated from your smart unit links — no manual entry required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
