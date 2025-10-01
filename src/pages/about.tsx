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
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:text-left">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                About
              </span>
              <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">About Fairvia</h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                We help property teams fill units faster, reduce disputes, and simplify compliance through smart unit links that connect listings, leasing workflows, and deposit processes.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image src="/visuals/hero-dashboard.svg" alt="Fairvia deposit management dashboard showing timeline and compliance features" width={320} height={220} className="h-auto w-full max-w-xs" />
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
