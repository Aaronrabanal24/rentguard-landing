import { motion } from "@/lib/motion";
import { painPoints } from "@/data/content";

export default function PainPointsSection() {
  return (
    <section className="relative bg-transparent py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-black bg-gradient-to-r from-white via-rose-100 to-purple-200 bg-clip-text text-transparent sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight px-4">
            The Hidden Cost of Manual Management
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
            These problems cost you time, money, and peace of mind every day
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.pain}
              className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm border-2 border-rose-500/30 p-8 sm:p-10 text-center shadow-lg shadow-rose-500/10 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-6 text-5xl sm:text-6xl" aria-hidden="true">⚠️</div>
              <h3 className="mb-4 text-xl sm:text-2xl font-black text-white leading-tight px-2">{item.pain}</h3>
              <p className="text-base sm:text-lg font-black text-rose-300 bg-rose-500/20 backdrop-blur-sm rounded-xl px-4 py-3 inline-block">{item.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
