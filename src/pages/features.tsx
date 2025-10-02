import Head from "next/head";
import { Footer } from "@/components";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { pricingContent } from "@/data/content";
import { motion } from "@/lib/motion";
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

      <div className="min-h-full relative">
        <Header />

        <main id="main-content" className="safe-bot pb-32" style={{ zIndex: 1 }}>
          <section className="relative overflow-hidden bg-gradient-to-b from-slate-900/95 to-transparent px-6 py-16 sm:py-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="mx-auto max-w-6xl relative">
              <div className="text-left max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent sm:text-5xl">
                  Features
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  Everything you need to manage listings, leasing, and deposits with trust, speed, and clarity.
                </p>
              </div>

              <div className="mt-16 grid gap-8 lg:grid-cols-3">
                {pricingContent.tiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    className={`rounded-2xl bg-slate-800/50 backdrop-blur-sm p-8 shadow-xl ring-2 ${
                      tier.name === "Pilot" ? "ring-sky-500 scale-105" : "ring-slate-700/50"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {tier.name === "Pilot" && (
                      <div className="mb-4 -mt-4 -mx-4 bg-gradient-to-r from-sky-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-t-xl text-center">
                        Limited Spots
                      </div>
                    )}
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">{tier.name}</h2>
                    <div className="mt-2 mb-6">
                      <div className="text-3xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">{tier.price}</div>
                      {tier.priceDetail && (
                        <div className="text-sm text-slate-400 mt-1">{tier.priceDetail}</div>
                      )}
                      <p className="text-sm text-slate-300 mt-2">{tier.description}</p>
                    </div>
                    <ul className="space-y-3">
                      {tier.features?.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className={`text-sm ${item.includes('Everything') ? 'font-semibold text-sky-300' : 'text-slate-300'}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
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
