import { motion } from "@/lib/motion";
import { valueProps } from "@/data/content";

export default function ValueROISection() {
  return (
    <section className="relative bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Real Value, Measurable ROI
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Stop losing money to disputes and wasted time
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.metric}
              className="rounded-xl bg-white border-2 border-emerald-200 p-8 text-center shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-3 text-5xl font-bold text-emerald-600">{item.metric}</div>
              <p className="text-base font-medium text-slate-700">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-6 py-3">
            <span className="text-2xl">💰</span>
            <span className="text-sm font-semibold text-emerald-900">
              Average landlord saves $2,400/year per property with Fairvia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
