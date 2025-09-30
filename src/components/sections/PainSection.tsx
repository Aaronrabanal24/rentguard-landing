import { motion } from "@/lib/motion";

const SCENARIOS = [
  {
    title: "Vacant units cost money every day",
    story:
      "Slow inquiry responses mean prospects move on. Every delayed reply adds vacancy days and lost revenue.",
    icon: "💸",
  },
  {
    title: "No weekly proof for owners",
    story:
      "Constant check-ins drain your time and erode trust. Spreadsheets don't show effort — just empty cells.",
    icon: "📊",
  },
  {
    title: "Deposit disputes and delays",
    story:
      "Manual deposit letters lead to fights. Missing photos, missed deadlines, and legal headaches you can't afford.",
    icon: "⚖️",
  },
];

export default function PainSection() {
  return (
    <motion.section
      className="bg-white py-16"
      id="pain"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Every vacant day costs you money</h2>
          <p className="text-lg text-slate-600 sm:text-xl">
            Slow replies. Spreadsheet overload. Deposit disputes. Sound familiar?
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SCENARIOS.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:scale-105 hover:border-rose-200 hover:shadow-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-4xl transition-all group-hover:bg-rose-50 group-hover:scale-110">
                {scenario.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900 group-hover:text-rose-900">{scenario.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{scenario.story}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
