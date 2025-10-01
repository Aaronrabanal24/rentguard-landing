import Head from "next/head";
import {
  Footer,
  Hero,
  HomeCTA,
  HowItWorksSection,
} from "@/components";
import Header from "@/components/layout/Header";
import PainPointsSection from "@/components/sections/PainPointsSection";
import ValueROISection from "@/components/sections/ValueROISection";
import TrustCredibilitySection from "@/components/sections/TrustCredibilitySection";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { motion } from "@/lib/motion";
import { organizationSchema, softwareSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trust, speed, and clarity for every lease — Fairvia</title>
        <meta
          name="description"
          content="One smart link connects listings, leasing steps, and deposits into a shareable timeline. California-ready templates and compliance tracking included."
        />
        <link rel="canonical" href="https://fairvia.com/" />

        {/* Open Graph - Optimized for LinkedIn sharing (under 60 chars) */}
        <meta property="og:title" content="Trust, speed & clarity for every lease — Fairvia" />
        <meta property="og:description" content="One smart link connects listings, leasing steps, and deposits into a shareable timeline—owners see progress, renters see status, and disputes drop." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/" />
        <meta property="og:image" content="https://fairvia.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fairvia timeline view showing deposit workflow management" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trust, speed & clarity for every lease — Fairvia" />
        <meta name="twitter:description" content="One smart link connects listings, leasing steps, and deposits. California-ready templates and compliance tracking included." />
        <meta name="twitter:image" content="https://fairvia.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="Fairvia timeline view showing deposit workflow management" />

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
        <Header />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Hero />
        </motion.div>

        <main id="main-content" className="safe-bot pb-32">
          <PainPointsSection />
          <HowItWorksSection />
          <ValueROISection />
          <TrustCredibilitySection />
          <HomeCTA />
        </main>

        <StickyCTA />
        <Footer />
      </div>
    </>
  );
}
