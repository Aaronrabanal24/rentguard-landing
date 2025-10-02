import { Footer } from "@/components";
import Header from "@/components/layout/Header";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { pricingContent } from "@/data/content";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PricingPage() {
  const router = useRouter();

  const handleCTA = (tier: string) => {
    if (tier === "Enterprise") {
      router.push("/contact").catch(() => {});
    } else {
      router.push("/get-started").catch(() => {});
    }
  };

  return (
    <>
      <Head>
        <title>Pricing - Fairvia</title>
        <meta
          name="description"
          content="Simple, transparent pricing. Start with your first unit free. SMB Pro from $49 to $149 per month. Enterprise at $1 per unit per month."
        />
        <link rel="canonical" href="https://fairvia.com/pricing" />

        <meta property="og:title" content="Pricing - Fairvia" />
        <meta property="og:description" content="Simple, transparent pricing. Start with your first unit free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/pricing" />
      </Head>

      <div className="min-h-full bg-slate-50 text-slate-900">
        <Header />

        <main id="main-content" className="safe-bot pb-32">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-white to-slate-50 py-16 text-slate-900">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h1 className="text-4xl font-bold sm:text-5xl mb-4">Simple, transparent pricing</h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
                Start with your first unit free. Upgrade as you grow. Enterprise solutions available for larger portfolios.
              </p>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-8 md:grid-cols-3">
                {pricingContent.tiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    className={`rounded-2xl border-2 bg-white p-8 shadow-sm flex flex-col ${
                      tier.name === "SMB Pro" ? "border-sky-500 shadow-xl scale-105" : "border-slate-200"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {tier.name === "SMB Pro" && (
                      <div className="mb-4 -mt-4 -mx-4 bg-sky-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-t-xl text-center">
                        Most Popular
                      </div>
                    )}
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                      {tier.name}
                    </h2>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-slate-900">
                        {tier.price}
                      </div>
                      {tier.priceDetail && (
                        <div className="text-sm font-medium text-slate-500 mt-1">{tier.priceDetail}</div>
                      )}
                      <p className="text-sm text-slate-600 mt-3">{tier.description}</p>
                    </div>

                    <div className="flex-grow mb-6">
                      <ul className="space-y-3">
                        {tier.features?.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <svg
                              className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className={`text-sm ${feature.includes('Everything') ? 'font-semibold text-slate-700' : 'text-slate-600'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => handleCTA(tier.name)}
                      className="w-full min-h-[48px] min-w-[44px] mt-auto"
                      variant={tier.name === "SMB Pro" ? "primary" : "secondary"}
                    >
                      {tier.cta}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
