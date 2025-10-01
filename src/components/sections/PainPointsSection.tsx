import { motion } from "@/lib/motion";
import { painPoints } from "@/data/content";

export default function PainPointsSection() {
  return (
    <section className="relative bg-gradient-to-b from-rose-50 to-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The Hidden Cost of Manual Deposit Management
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.pain}
              className="rounded-xl bg-white border-2 border-rose-200 p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-3 text-3xl">⚠️</div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{item.pain}</h3>
              <p className="text-sm font-semibold text-rose-600">{item.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
