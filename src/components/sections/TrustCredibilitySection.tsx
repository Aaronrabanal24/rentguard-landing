import { motion } from "@/lib/motion";
import { trustBadges } from "@/data/content";

export default function TrustCredibilitySection() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Built on Trust & Compliance
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Escrow Partners */}
          <motion.div
            className="rounded-xl bg-white border border-slate-200 p-8 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-3xl">🏦</span>
              <h3 className="text-xl font-bold text-slate-900">Escrow Partners</h3>
            </div>
            <ul className="space-y-3">
              {trustBadges.escrowPartners.map((partner) => (
                <li key={partner} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">{partner}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Compliance */}
          <motion.div
            className="rounded-xl bg-white border border-slate-200 p-8 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <h3 className="text-xl font-bold text-slate-900">Compliance & Security</h3>
            </div>
            <ul className="space-y-3">
              {trustBadges.compliance.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-8 rounded-xl bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-200 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4 text-4xl">💬</div>
          <blockquote className="text-lg font-medium text-slate-900 mb-3">
            &ldquo;Fairvia saved us from a $1,200 dispute. The timestamped photos and receipts were exactly what we needed in court.&rdquo;
          </blockquote>
          <cite className="text-sm font-semibold text-slate-600">
            — Sarah M., Property Manager, Oakland CA
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
