import { motion } from "@/lib/motion";

const SIGNALS = [
  {
    title: "Designed for independent owners",
    body: "Pilot landlords manage 1-20 units and keep their listings on Zillow, Craigslist, and Facebook.",
  },
  {
    title: "Pilot target: under 4 hours per move",
    body: "Guided workflows trim the paperwork, photos, and notices that normally stretch across a week.",
  },
  {
    title: "Listing Assist wins trust",
    body: "Renters scan the badge, confirm escrow and compliance, then click through to your original listing.",
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
          <h2 className="text-3xl font-semibold text-slate-900">What landlords and renters get during the pilot</h2>
          <p className="mt-2 text-sm text-slate-600">Fairvia keeps the pilot scoped to California deposits so we can deliver fast wins and measurable trust signals.</p>
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
          <p className="mt-6 text-xs text-slate-500">Join the pilot early to shape templates, badge language, and the compliance checklist library.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
