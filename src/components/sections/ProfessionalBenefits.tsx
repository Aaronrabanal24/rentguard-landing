import { motion } from "@/lib/motion";
import { professionalBenefits } from "@/data/professional-benefits";

const categories = Object.entries(professionalBenefits);

export default function ProfessionalBenefits() {
  return (
    <motion.section
      className="bg-white py-16"
      id="benefits"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
          Benefits for landlords
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Operate smarter with less effort</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Fairvia centralizes deposits so small portfolios feel as polished as the big players.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {categories.map(([key, category], index) => (
            <motion.div
              key={key}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
              <ul className="space-y-3">
                {category.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 text-sky-500">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
