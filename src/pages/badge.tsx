import Head from "next/head";
import { Footer } from "@/components";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BadgePage() {
  const router = useRouter();

  const handleCTA = () => {
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  const faqItems = [
    {
      question: "Does this replace tenant screening?",
      answer: "No. The Trust and precheck page is a pre-qualification step that helps reduce spam and low-quality inquiries before formal screening.",
    },
    {
      question: "What information does the badge show?",
      answer: "It shows proof of listing authenticity, property details, and landlord verification status to help renters identify legitimate listings.",
    },
    {
      question: "How does this reduce spam?",
      answer: "By requiring basic information and showing verified details upfront, the Trust and precheck page filters out automated bots and unserious inquiries.",
    },
  ];

  return (
    <>
      <Head>
        <title>Trust and precheck - Fairvia</title>
        <meta
          name="description"
          content="Learn how Fairvia's Trust and precheck page helps landlords reduce spam and helps renters identify legitimate listings. No new system to learn."
        />
        <link rel="canonical" href="https://fairvia.com/badge" />

        <meta property="og:title" content="Trust and precheck - Fairvia" />
        <meta property="og:description" content="Learn how Fairvia's Trust and precheck page helps landlords reduce spam and helps renters identify legitimate listings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/badge" />
      </Head>

      <div className="min-h-full bg-slate-50 text-slate-900">
        <main id="main-content" className="safe-bot pb-32">
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Trust and precheck page
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                  A lightweight verification layer that helps owners reduce spam and helps renters identify legitimate listings. No new system to learn.
                </p>
              </div>

              <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">
                <div className="grid gap-12 lg:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">What it shows</h2>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">Verified property details and photos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">Landlord contact information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">Timeline of listing activity</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Why owners like it</h2>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">Reduces spam and bot inquiries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">Builds trust with serious renters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">Shows as part of unit link from day one</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 rounded-lg bg-sky-50 p-6">
                  <p className="text-center text-sm text-slate-700">
                    <strong>No new system to learn.</strong> The Trust and precheck page is built into every smart unit link.
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-3xl font-bold text-slate-900">Common questions</h2>
                <div className="mt-8 space-y-8">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-xl font-semibold text-slate-900">{item.question}</h3>
                      <p className="mt-2 text-slate-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  onClick={handleCTA}
                  className="min-h-[48px] min-w-[48px] px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg"
                  aria-label="Start your free unit today"
                >
                  Start free unit
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
