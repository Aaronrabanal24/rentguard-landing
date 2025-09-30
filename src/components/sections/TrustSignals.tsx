import { motion } from "@/lib/motion";

const TRUST_MARKS = [
  {
    icon: "🛡️",
    title: "Licensed escrow partners",
    detail: "Deposits sit with California DFPI-licensed custodians—not in your personal account.",
  },
  {
    icon: "📷",
    title: "AB 2801 photo compliance",
    detail: "Fairvia timestamps move-in/out photos so deductions stand up when challenged.",
  },
  {
    icon: "📈",
    title: "Proven landlord outcomes",
    detail: "147 deposits processed • 100% released on time • 6.2 hours saved per move-out.",
  },
];

const TRUST_BAR = [
  "DFPI-licensed escrow",
  "Bank-level encryption",
  "150+ landlords",
  "4.9/5 satisfaction",
];

export default function TrustSignals() {
  return (
    <motion.section
      className="bg-white py-14"
      id="trust"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Trust signals</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Proof your tenants and owners can see</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Fairvia makes compliance visible. Licensed escrow, documented timelines, and landlord outcomes move the conversation from “trust me” to “here’s the proof.”
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TRUST_MARKS.map((mark, index) => (
              <motion.div
                key={mark.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <span className="text-2xl" aria-hidden>
                  {mark.icon}
                </span>
                <p className="text-base font-semibold text-slate-900">{mark.title}</p>
                <p className="leading-relaxed">{mark.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {TRUST_BAR.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
