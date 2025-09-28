import Head from "next/head";

const FAQ_DATA = [
  {
    question: "How does RentGuard escrow protect my deposit?",
    answer:
      "Your deposit is held by licensed escrow partners, not in personal accounts. Funds are only released when both parties approve the move-in, protecting against scams and disputes.",
  },
  {
    question: "What does RentGuard cost?",
    answer:
      "Renters join free. Landlords pay $25-100/month for premium tools. Escrow transactions charge 1-2% of deposit amount, split between both parties.",
  },
  {
    question: "How do you verify identities and prevent fraud?",
    answer:
      "We use multi-layer verification including identity checks, income verification, and property ownership confirmation. Suspicious activity triggers manual review before any funds move.",
  },
  {
    question: "Which cities support RentGuard escrow?",
    answer:
      "We're launching in NYC, LA, and SF with licensed escrow partners. Expanding to other major metros based on waitlist demand and regulatory approval.",
  },
  {
    question: "What happens if there's a dispute?",
    answer:
      "Our digital audit trail tracks all communications and agreements. Licensed mediators help resolve disputes quickly, with escrow funds held safely until resolution.",
  },
  {
    question: "Are the lease templates legally compliant?",
    answer:
      "Yes, our digital lease templates are pre-vetted by real estate attorneys and updated to meet local housing laws in each supported market.",
  },
];

export default function FAQSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
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
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-300/30 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
              Questions & answers
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Common questions about rental protection</h2>
            <p className="mt-4 text-base text-slate-600">
              Everything about escrow, verification, and pricing so you can rent with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200"
              >
                <div className="mb-3 flex items-center gap-3 text-emerald-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold">{index + 1}</span>
                  <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Ready to eliminate rental fears?</h3>
              <p className="text-emerald-700 mb-4">Join thousands who've protected their deposits with RentGuard escrow.</p>
              <button
                onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Get protected now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
