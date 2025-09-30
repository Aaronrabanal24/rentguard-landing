import { motion } from "@/lib/motion";

const CUSTOMER_SEGMENTS = [
  {
    title: "SMB Operators",
    subtitle: "Independent landlords & small PM teams",
    icon: "🏘️",
    profile: "3–20 units · 1–3 team members",
    painPoints: [
      "Vacant units due to slow replies",
      "No weekly proof for owners",
      "Deposit disputes & delays",
      "Spreadsheet overload",
    ],
    triggers: [
      "Just onboarded new units",
      "Listings gone stale",
      "Recent bad deposit experience",
    ],
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Enterprise Property Managers",
    subtitle: "Regional & national portfolios",
    icon: "🏢",
    profile: "100+ units · Central ops + regional teams",
    painPoints: [
      "No visibility into leasing response time",
      "Inconsistent listing quality and process",
      "Compliance risk for multi-state deposits",
      "Manual reporting to owners/investors",
    ],
    triggers: [
      "Executive push to reduce vacancy days",
      "Audit/compliance risk on deposits",
      "New owner demanding reporting",
    ],
    color: "from-violet-500 to-purple-600",
  },
];

export default function TargetCustomersSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for property operators at every scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            From independent landlords to enterprise portfolios — we solve the same core problems
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {CUSTOMER_SEGMENTS.map((segment, index) => (
            <motion.div
              key={segment.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 transition-opacity group-hover:opacity-10`} />

              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-4xl">
                    {segment.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{segment.title}</h3>
                    <p className="mt-1 text-slate-300">{segment.subtitle}</p>
                    <p className="mt-2 text-sm font-medium text-slate-400">{segment.profile}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Pain Points
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {segment.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1 text-rose-400">✗</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Buying Triggers
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {segment.triggers.map((trigger) => (
                        <li key={trigger} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1 text-emerald-400">→</span>
                          <span>{trigger}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg font-medium text-slate-200">
            We&apos;re not replacing your PMS. We&apos;re the trust layer between your listings, your owners, and your renters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
