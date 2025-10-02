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
          <div className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-orange-100 to-purple-200 bg-clip-text text-transparent sm:text-4xl lg:text-5xl px-4 leading-tight">
              Common Questions & Objections
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 font-medium px-4">
              Clear answers to help you decide with confidence
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {faqItems.map((faq, index) => (
              <motion.button
                type="button"
                key={faq.question}
                className={`tap w-full rounded-2xl sm:rounded-3xl border-2 bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  openIndex === index ? "border-orange-500/50 shadow-orange-500/30 scale-[1.02]" : "border-slate-700/50"
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
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex flex-1 items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-base font-black text-white shadow-lg">{index + 1}</span>
                    <h3 className="text-lg font-black text-white sm:text-xl leading-tight mt-1">{faq.question}</h3>
                  </div>
                  <span className="text-2xl text-slate-400 font-bold flex-shrink-0 mt-1">{openIndex === index ? "−" : "+"}</span>
                </div>
                {openIndex === index ? (
                  <p className="text-base sm:text-lg leading-relaxed text-slate-200 ml-16 mt-4">{faq.answer}</p>
                ) : null}
              </motion.button>
            ))}
          </div>
          <div className="mt-16 sm:mt-20 text-center">
            <div className="rounded-2xl sm:rounded-3xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/15 to-pink-500/15 backdrop-blur-sm p-8 sm:p-12 shadow-2xl shadow-orange-500/20">
              <h3 className="mb-4 text-2xl sm:text-3xl font-black text-orange-300 px-4">Need a deeper walkthrough?</h3>
              <p className="mb-8 text-lg sm:text-xl text-orange-100 font-medium px-4 leading-relaxed max-w-2xl mx-auto">
                Book a fast session with our compliance team and leave with a customized 21-day action plan.
              </p>
              <button
                onClick={() => {
                  router.push("/get-started").catch(() => {
                    /* noop */
                  });
                }}
                className="tap inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-4 text-lg font-black text-white shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              >
                Get Started Free →
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
