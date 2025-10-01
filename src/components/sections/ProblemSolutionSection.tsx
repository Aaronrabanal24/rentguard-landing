import { motion } from "@/lib/motion";
import { problemSolutionContent } from "@/data/content";

export default function ProblemSolutionSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {problemSolutionContent.map((item, index) => (
            <motion.div
              key={item.problem}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4 text-5xl">{item.icon}</div>
              <div className="mb-3">
                <span className="text-rose-600 line-through text-sm font-medium">
                  {item.problem}
                </span>
              </div>
              <div>
                <span className="text-emerald-600 text-base font-semibold">
                  ✓ {item.solution}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
