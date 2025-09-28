import { motion } from "@/lib/motion";

const SIGNALS = [
  {
    title: "Neutral escrow in action",
    body: "Pilot landlords are already onboarding deposits with licensed California partners.",
  },
  {
    title: "Growing landlord interest",
    body: "Independent owners and boutique PMs are lining up to streamline deposit workflows.",
  },
  {
    title: "Tenant transparency",
    body: "Waitlist renters call neutral escrow and clear deductions their top reasons to join.",
  },
];

export default function SocialProof() {
  return (
    <motion.section
      className="bg-slate-50 py-14"
      id="signals"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold text-slate-900">Pilot momentum at a glance</h2>
          <p className="mt-2 text-sm text-slate-600">Metrics refresh weekly so you can see traction without the fluff.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SIGNALS.map((signal, index) => (
              <motion.div
                key={signal.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <p className="font-semibold text-slate-900">{signal.title}</p>
                <p className="mt-2">{signal.body}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">Join the pilot to share results and feature in our first landlord case study.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
