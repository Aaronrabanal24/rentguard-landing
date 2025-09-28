import Head from "next/head";
import { useState } from "react";
import { FAQ_DATA } from "@/lib/constants";
import { track } from "@/lib/tracking";

const faqItems = FAQ_DATA;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      <section className="relative overflow-hidden bg-slate-100 py-20" id="faq">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-300/25 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600">
              FAQ
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Quick answers for landlords</h2>
            <p className="mt-4 text-base text-slate-600">How Novatra handles deposits, tenants, and rollout.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((faq, index) => (
              <button
                type="button"
                key={faq.question}
                className={`text-left rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  openIndex === index ? "border-orange-300" : "border-slate-200"
                }`}
                onClick={() => {
                  const next = openIndex === index ? null : index;
                  if (next !== null) {
                    track("faq_expand", { question: faq.question });
                  }
                  setOpenIndex(next);
                }}
              >
                <div className="mb-3 flex items-center justify-between text-orange-600">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold">{index + 1}</span>
                    <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                  </div>
                  <span className="text-slate-400">{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>}
              </button>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-orange-900">Need a deeper walkthrough?</h3>
              <p className="mb-4 text-orange-700">Hop on a call and we’ll show how Novatra fits your portfolio.</p>
              <button
                onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                Talk to the team
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
