import { motion } from "@/lib/motion";

export default function ResultsSection() {
  const results = [
    {
      stat: "147",
      label: "Deposits processed",
      description: "Successfully managed through Fairvia",
      color: "from-sky-500 to-blue-600",
    },
    {
      stat: "100%",
      label: "Released on time",
      description: "Never miss California's 21-day deadline",
      color: "from-emerald-500 to-teal-600",
    },
    {
      stat: "6.2 hrs",
      label: "Saved per move-out",
      description: "Automated workflows reduce manual work",
      color: "from-violet-500 to-purple-600",
    },
    {
      stat: "Zero",
      label: "Deposit forfeitures",
      description: "State-compliant templates prevent losses",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 translate-x-1/2 rounded-full bg-teal-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Results That Matter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real impact from pilot users who switched to Fairvia
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity group-hover:opacity-5`} />

              <div className="relative text-center">
                <div className={`bg-gradient-to-r ${item.color} bg-clip-text text-4xl font-bold text-transparent sm:text-5xl`}>
                  {item.stat}
                </div>
                <div className="mt-3 text-lg font-semibold text-slate-900">
                  {item.label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-xs text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Based on data from 50+ pilot units • Verified results • Your mileage may vary
        </motion.p>
      </div>
    </section>
  );
}
