import Head from "next/head";
import { Footer } from "@/components";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BadgePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"renter" | "landlord">("renter");

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
        <title>What is the Fairvia Badge? - Fairvia</title>
        <meta
          name="description"
          content="You're seeing this badge because this listing uses Fairvia to manage deposits and timelines. It signals compliance, transparency, and photo-documented accountability."
        />
        <link rel="canonical" href="https://fairvia.com/badge" />

        <meta property="og:title" content="What is the Fairvia Badge? - Fairvia" />
        <meta property="og:description" content="This listing uses Fairvia to keep your deposit safe and transparent." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/badge" />
      </Head>

      <div className="min-h-full bg-slate-50 text-slate-900">
        <Header />

        <main id="main-content" className="safe-bot pb-32 sm:pb-40">
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                  <span className="text-sm font-semibold text-sky-700">✓ Verified Listing</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  What is the Fairvia Badge?
                </h1>
                <p className="mx-auto mt-8 sm:mt-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-700">
                  <strong>You&apos;re seeing this badge because this listing uses Fairvia to manage deposits and timelines.</strong>
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                  It signals compliance, transparency, and photo-documented accountability between landlords and renters.
                </p>
              </div>

              {/* Badge Visual Mockup */}
              <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">How it looks</h2>
                  <p className="text-base text-slate-600">This badge appears on listings using Fairvia</p>
                </div>

                {/* Mock Badge Preview */}
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 border-2 border-sky-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-slate-900">Fairvia Verified</div>
                      <div className="text-sm text-slate-600">Deposit & timeline managed</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 border-t border-slate-200 pt-3">
                    ✓ AB 2801 Compliant • Photo documentation • Timeline tracking
                  </div>
                </div>
              </div>

              {/* What's Included Checklist */}
              <div className="mt-16 sm:mt-20 rounded-2xl bg-white p-8 sm:p-10 lg:p-12 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">What&apos;s included in this badge?</h2>

                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { icon: "📸", label: "Property photos with timestamp", verified: true },
                    { icon: "🏠", label: "Landlord identity matched to record", verified: true },
                    { icon: "💰", label: "Deposit rules pre-registered", verified: true },
                    { icon: "📊", label: "Timeline auto-initiated on lease start", verified: true },
                    { icon: "⏱️", label: "AB 2801 compliant countdown timers", verified: true },
                    { icon: "📁", label: "Exportable archive for legal defense", verified: true },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-slate-900">{item.label}</div>
                        {item.verified && (
                          <div className="text-xs text-emerald-600 font-medium mt-1">✓ Verified</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role Tabs */}
              <div className="mt-16 sm:mt-20">
                <div className="flex justify-center gap-4 mb-8">
                  <button
                    onClick={() => setActiveTab("renter")}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === "renter"
                        ? "bg-sky-500 text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-300 hover:border-sky-300"
                    }`}
                  >
                    For Renters
                  </button>
                  <button
                    onClick={() => setActiveTab("landlord")}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === "landlord"
                        ? "bg-sky-500 text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-300 hover:border-sky-300"
                    }`}
                  >
                    For Landlords
                  </button>
                </div>

                <div className="rounded-2xl bg-white p-8 sm:p-10 lg:p-12 shadow-lg">
                  {activeTab === "renter" ? (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">What this means for you</h2>
                      <ul className="space-y-5">
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Your deposit is protected</span>
                            <p className="text-slate-600 mt-1">Photo-documented move-in/move-out with timestamped records</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Full transparency</span>
                            <p className="text-slate-600 mt-1">Track your timeline from inquiry to move-out — no login required</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Legal compliance guaranteed</span>
                            <p className="text-slate-600 mt-1">California AB 2801 compliant with automatic deadlines</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Verified landlord identity</span>
                            <p className="text-slate-600 mt-1">Know you&apos;re dealing with a legitimate property owner</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">How the badge builds trust</h2>
                      <ul className="space-y-5">
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Stand out from scams</span>
                            <p className="text-slate-600 mt-1">Badge signals legitimacy on Zillow, Craigslist, and other platforms</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Reduce spam inquiries</span>
                            <p className="text-slate-600 mt-1">Pre-qualification page filters bots and low-quality leads</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Automatic activation</span>
                            <p className="text-slate-600 mt-1">Badge appears on your smart unit link from day one — no setup needed</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="mt-1 h-6 w-6 flex-shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="text-lg font-semibold text-slate-900">Legal protection included</span>
                            <p className="text-slate-600 mt-1">Timestamped audit trail and exportable archive for disputes</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Badge Revocation Policy */}
              <div className="mt-16 sm:mt-20 rounded-xl bg-amber-50 border-2 border-amber-200 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Badge Integrity Policy</h3>
                    <p className="text-slate-700 leading-relaxed">
                      If we detect fraud, misrepresentation, or policy violations, the badge will be removed immediately and the property owner may be suspended from the platform. All badge activations are verified and monitored.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20 sm:mt-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Common questions</h2>
                <div className="mt-10 sm:mt-12 space-y-10">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">{item.question}</h3>
                      <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 sm:mt-20 text-center">
                <div className="mb-4">
                  <p className="text-lg text-slate-700 font-medium">
                    {activeTab === "renter"
                      ? "Looking for a rental with Fairvia protection?"
                      : "Want this badge on your listings?"}
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={handleCTA}
                  className="min-h-[48px] min-w-[48px] px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg"
                  aria-label={activeTab === "renter" ? "Learn more about Fairvia" : "Add Fairvia to your listings"}
                >
                  {activeTab === "renter" ? "Learn More" : "Get Your Free Unit"}
                </Button>
                <p className="mt-4 text-sm text-slate-500">
                  {activeTab === "landlord" && "First unit always free • No credit card required"}
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
