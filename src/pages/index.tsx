import dynamic from "next/dynamic";
import Head from "next/head";
import {
  Footer,
  Hero,
  HomeCTA,
  ResultsSection,
  PainSection,
  HowItWorksSection,
  TargetCustomersSection,
  MetricsSection,
} from "@/components";
import { motion } from "@/lib/motion";
import { organizationSchema, softwareSchema } from "@/lib/structuredData";

const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  loading: () => <div className="mt-16 h-[400px] animate-pulse rounded-3xl bg-slate-100" aria-hidden />,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairvia — Professional Deposit Management for California Landlords</title>
        <meta
          name="description"
          content="Stay ahead of AB 2801's 21-day rule. Hold deposits neutrally, return them on time, and document valid deductions with proof. Professional deposit management for California rentals."
        />
        <link rel="canonical" href="https://fairvia.com/" />

        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Fairvia — Professional Deposit Management" />
        <meta property="og:description" content="Stay compliant with California's AB 2801. Professional deposit management with timeline tracking and compliance automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </Head>

      <div className="min-h-full bg-slate-50 text-slate-900">
        <header>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Hero />
          </motion.div>
        </header>

        <main id="main-content" className="safe-bot pb-32">
          <ResultsSection />
          <PainSection />
          <HowItWorksSection />
          <TargetCustomersSection />
          <MetricsSection />
          <FAQSection />
          <HomeCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
