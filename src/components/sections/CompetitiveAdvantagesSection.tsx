import { motion } from "@/lib/motion";
import { competitiveAdvantages } from "@/data/content";

export default function CompetitiveAdvantagesSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Why Fairvia Wins
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Not just another tool. A wedge product that fits perfectly into your existing workflow.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className="rounded-2xl bg-slate-800/50 border border-slate-700 p-6 sm:p-8 backdrop-blur-sm hover:bg-slate-800/80 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4" aria-hidden="true">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            vs. AppFolio/Yardi (clunky PMS) • ShowMojo (scheduling only) • Buildium (accounting first)
          </p>
        </div>
      </div>
    </section>
  );
}
