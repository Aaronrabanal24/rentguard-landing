import { motion } from "@/lib/motion";
import { painPoints } from "@/data/content";

export default function PainPointsSection() {
  return (
    <section className="relative bg-transparent py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-rose-100 to-purple-200 bg-clip-text text-transparent sm:text-3xl lg:text-4xl max-w-3xl mx-auto">
            The Hidden Cost of Manual Management
          </h2>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-3">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.pain}
              className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm border-2 border-rose-500/30 p-6 sm:p-7 text-center shadow-lg shadow-rose-500/10 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4 text-4xl sm:text-5xl" aria-hidden="true">⚠️</div>
              <h3 className="mb-3 text-lg sm:text-xl font-bold text-white leading-tight">{item.pain}</h3>
              <p className="text-sm sm:text-base font-bold text-rose-300 bg-rose-500/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">{item.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
