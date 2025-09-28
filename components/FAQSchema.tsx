import Head from "next/head";

const FAQ_DATA = [
  {
    question: "How does the rental matching work",
    answer:
      "Our matching looks at your preferences, budget, location and timing to suggest compatible properties or tenants. As the system learns from activity, suggestions improve.",
  },
  {
    question: "Is the platform free",
    answer:
      "For renters the platform is free. Landlords pay a small fee when a property is successfully rented.",
  },
  {
    question: "How do you verify listings and users",
    answer:
      "We use a multi step process that can include identity verification and ownership checks. Listings and users are vetted before they go live.",
  },
  {
    question: "When will the platform launch",
    answer:
      "We are in private beta now. Join the waitlist to get early access updates and your city priority.",
  },
  {
    question: "What cities will you be available in",
    answer:
      "We will start with major metro areas and expand based on waitlist demand and feedback.",
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

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{faq.question}</h3>
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
