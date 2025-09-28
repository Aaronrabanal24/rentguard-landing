import { motion } from "@/lib/motion";

const TRUST_POINTS = [
  {
    title: "Neutral deposit custody",
    description: "DFPI-licensed escrow partners hold the funds until the landlord signs the Fairvia release flow.",
  },
  {
    title: "Compliance overlay for California",
    description: "AB 12 caps, AB 2801 photo proof, and §1950.5 notices stay in one timeline with audit logs.",
  },
  {
    title: "Listing Assist badge",
    description: "Each property gets a tokenized badge, QR code, and SEO profile that prove controls to renters.",
  },
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
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Trust signals</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Proof points every pilot landlord can share</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            California landlords ask for proof first. Fairvia packages escrow custody, compliance, and Listing Assist evidence for you and your renters.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {TRUST_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <p className="font-semibold text-slate-900">{point.title}</p>
                <p className="mt-2 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
