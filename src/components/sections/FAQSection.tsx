import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "@/lib/motion";
import { faqContent } from "@/data/content";
import { track } from "@/lib/tracking";

const faqItems = faqContent;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const router = useRouter();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <motion.section
        className="relative overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20"
        id="faq"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
        <div className="container-tight">
          <div className="mb-10 text-left max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-orange-100 to-purple-200 bg-clip-text text-transparent sm:text-4xl">
              Common Questions & Objections
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Clear answers to help you decide with confidence
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map((faq, index) => (
              <motion.button
                type="button"
                key={faq.question}
                className={`tap w-full rounded-2xl border bg-slate-800/50 backdrop-blur-sm p-5 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl md:rounded-3xl md:p-6 ${
                  openIndex === index ? "border-orange-500/50 shadow-orange-500/20" : "border-slate-700/50"
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.04 }}
                onClick={() => {
                  const next = openIndex === index ? null : index;
                  if (next !== null) {
                    track("faq_expand", { question: faq.question });
                  }
                  setOpenIndex(next);
                }}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex flex-1 items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-sm font-semibold text-orange-400">{index + 1}</span>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{faq.question}</h3>
                  </div>
                  <span className="text-slate-400">{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index ? (
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{faq.answer}</p>
                ) : null}
              </motion.button>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm p-5 md:rounded-3xl md:p-6">
              <h3 className="mb-2 text-lg font-semibold text-orange-300">Need a deeper walkthrough?</h3>
              <p className="mb-4 text-orange-200/90 sm:text-base">Book a fast session with our compliance team and leave with a customized 21-day action plan.</p>
              <button
                onClick={() => {
                  router.push("/get-started").catch(() => {
                    /* noop */
                  });
                }}
                className="tap inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
