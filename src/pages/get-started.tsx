import Head from "next/head";
import { Footer } from "@/components";
import Header from "@/components/layout/Header";
import { WaitlistForm } from "@/components";

export default function GetStartedPage() {
  return (
    <>
      <Head>
        <title>Get started - Fairvia</title>
        <meta
          name="description"
          content="Start with one free unit. Join the pilot and get onboarding support from our team."
        />
        <link rel="canonical" href="https://fairvia.com/get-started" />

        <meta property="og:title" content="Get started - Fairvia" />
        <meta property="og:description" content="Start with one free unit. Join the pilot." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/get-started" />
      </Head>

      <div className="min-h-full bg-slate-50 text-slate-900">
        <Header />

        <main id="main-content" className="safe-bot pb-32 sm:pb-40">
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-24 sm:py-32 lg:py-36">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Start with one free unit
                </h1>
                <p className="mx-auto mt-8 sm:mt-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-700">
                  Join the pilot. We will follow up with a Calendly link for onboarding.
                </p>
              </div>

              <div className="mt-14 sm:mt-16 lg:mt-20">
                <WaitlistForm ctaLabel="Join pilot" />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
