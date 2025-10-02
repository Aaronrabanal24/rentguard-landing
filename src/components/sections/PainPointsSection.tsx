import { motion } from "@/lib/motion";
import { painPoints } from "@/data/content";

export default function PainPointsSection() {
  return (
    <section className="relative bg-gradient-to-b from-rose-50/80 via-red-50/40 to-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl mx-auto">
            The Hidden Cost of Manual Deposit Management
          </h2>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-3">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.pain}
              className="rounded-2xl bg-white border-2 border-rose-200 p-6 sm:p-7 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4 text-4xl sm:text-5xl" aria-hidden="true">⚠️</div>
              <h3 className="mb-3 text-lg sm:text-xl font-bold text-slate-900 leading-tight">{item.pain}</h3>
              <p className="text-sm sm:text-base font-bold text-rose-700 bg-rose-50 rounded-lg px-3 py-2 inline-block">{item.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
