import { Footer } from "@/components";
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
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid gap-8 md:grid-cols-3">
                {pricingContent.tiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    className={`rounded-2xl border-2 bg-white p-8 shadow-sm ${
                      tier.name === "SMB Pro" ? "border-sky-500 shadow-xl" : "border-slate-200"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                      {tier.name}
                    </h2>
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-slate-900">
                        {tier.price}
                        {tier.priceDetail && (
                          <span className="text-lg font-medium text-slate-500"> {tier.priceDetail}</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mt-2">{tier.description}</p>
                    </div>

                    <Button
                      onClick={() => handleCTA(tier.name)}
                      className="w-full min-h-[44px] min-w-[44px]"
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
