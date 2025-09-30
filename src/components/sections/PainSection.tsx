import { motion } from "@/lib/motion";

const SCENARIOS = [
  {
    title: "Leads go cold waiting for a reply.",
    story:
      "Prospects move on when responses take hours or days.",
    icon: "📧",
  },
  {
    title: "Owners ask \"What's going on?\"",
    story:
      "Constant check-ins drain your time and erode trust.",
    icon: "💬",
  },
  {
    title: "Deposit letters cause drama and delays.",
    story:
      "Manual processes lead to disputes and legal headaches.",
    icon: "📄",
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
        <div className="max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">You lose money every day a unit sits vacant.</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Leads drop off. Owners ask questions. Deposit fights drag on.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SCENARIOS.map((scenario) => (
            <motion.div
              key={scenario.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="text-4xl">{scenario.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{scenario.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{scenario.story}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
