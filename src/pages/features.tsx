import Head from "next/head";
import { Footer } from "@/components";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { featuresContent } from "@/data/content";
import { useRouter } from "next/router";

export default function FeaturesPage() {
  const router = useRouter();

  const handleCTA = () => {
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <>
      <Head>
        <title>Features - Fairvia</title>
        <meta
          name="description"
          content="Explore Fairvia's features: smart unit links, trust pages, timelines, ROI boards, and exportable archives. Common Core, SMB Pro, and Enterprise tiers available."
        />
        <link rel="canonical" href="https://fairvia.com/features" />

        <meta property="og:title" content="Features - Fairvia" />
        <meta property="og:description" content="Explore Fairvia's features across Common Core, SMB Pro, and Enterprise tiers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/features" />
      </Head>

      <div className="min-h-full bg-slate-50 text-slate-900">
        <Header />

        <main id="main-content" className="safe-bot pb-32">
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="text-left max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Features
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  Everything you need to manage listings, leasing, and deposits with trust, speed, and clarity.
                </p>
              </div>

              <div className="mt-16 grid gap-12 lg:grid-cols-3">
                {featuresContent.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200"
                  >
                    <h2 className="text-2xl font-bold text-slate-900">{tier.name}</h2>
                    <ul className="mt-8 space-y-4">
                      {tier.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg
                            className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
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
