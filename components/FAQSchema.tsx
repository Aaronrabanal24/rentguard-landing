import Head from "next/head";

const FAQ_DATA = [
  {
    question: "How does RentGuard match renters and landlords?",
    answer:
      "We evaluate preferences, budget, move-in timing, rental history, and property requirements to surface best-fit matches. As activity increases, our recommendations sharpen automatically.",
  },
  {
    question: "Is RentGuard free to use?",
    answer:
      "Renters join at no cost. Landlords only pay a success fee once a lease is secured using our escrow-protected workflow.",
  },
  {
    question: "How do you verify listings and users?",
    answer:
      "Identity, ownership, and income checks are completed in layered steps. Suspicious activity triggers manual review before anything goes live.",
  },
  {
    question: "When will the platform launch publicly?",
    answer:
      "We are onboarding private beta partners right now and expanding city by city. Join the waitlist for priority invitations.",
  },
  {
    question: "Which cities are supported first?",
    answer:
      "We begin in major metro hubs and expand using waitlist demand data. Tell us where you operate so we can prioritize your market.",
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
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Questions & answers
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">What people ask before joining RentGuard</h2>
            <p className="mt-4 text-base text-slate-600">
              Everything from pricing to verification so you can move forward with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3 text-indigo-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold">{index + 1}</span>
                  <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
