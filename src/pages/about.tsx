import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";

const HIGHLIGHTS = [
  {
    title: "Our Mission",
    detail: "Bring trust, speed, and clarity to residential leasing and deposits.",
  },
  {
    title: "Who We Serve",
    detail: "Property teams who want to fill units faster, reduce disputes, and simplify compliance without heavy systems.",
  },
  {
    title: "Our Approach",
    detail: "A lightweight operational layer that connects listings, leasing workflows, and deposits into one smart, shareable unit link.",
  },
];

export default function AboutPage() {
  return (
    <PageContainer title="About Fairvia" includeFooter>
      <section className="bg-white py-20 sm:py-28 lg:py-32 text-slate-900">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-8 sm:gap-10 text-center md:flex-row md:items-center md:text-left">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                About
              </span>
              <h1 className="mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">About Fairvia</h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                We help property teams fill units faster, reduce disputes, and simplify compliance through smart unit links that connect listings, leasing workflows, and deposit processes.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/visuals/hero-dashboard.svg"
                alt="Fairvia deposit management dashboard showing timeline and compliance features"
                width={320}
                height={220}
                className="h-auto w-full max-w-xs"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
          <div className="mt-16 sm:mt-20 lg:mt-24 grid gap-8 sm:gap-10 md:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              >
                <h2 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h2>
                <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
