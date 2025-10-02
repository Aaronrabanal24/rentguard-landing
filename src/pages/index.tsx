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
import TenantExperienceSection from "@/components/sections/TenantExperienceSection";
import PricingReminderSection from "@/components/sections/PricingReminderSection";
import FAQSection from "@/components/sections/FAQSection";
import TargetCustomersSection from "@/components/sections/TargetCustomersSection";
import CompetitiveAdvantagesSection from "@/components/sections/CompetitiveAdvantagesSection";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { motion } from "@/lib/motion";
import { organizationSchema, softwareSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairvia - Fill Units Faster, Handle Deposits Cleanly, Prove Your Work</title>
        <meta
          name="description"
          content="Lightweight leasing & deposit operations layer. Smart unit links track inquiries, CA-compliant deposit workflows, ROI proof for owners. Free first unit. No heavy PMS."
        />
        <link rel="canonical" href="https://fairvia.com/" />

        {/* Open Graph - Optimized for LinkedIn sharing */}
        <meta property="og:title" content="Fairvia - Fill Units Faster, Handle Deposits Cleanly" />
        <meta property="og:description" content="A lightweight layer connecting listings, leasing, and deposits. No heavy PMS. CA AB 2801 compliant. Free first unit. Built for SMBs & enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/" />
        <meta property="og:image" content="https://fairvia.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fairvia dashboard showing unit timeline and ROI board" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fairvia - Fill Units Faster, Handle Deposits Cleanly" />
        <meta name="twitter:description" content="Smart leasing & deposit layer. Free first unit. CA compliant. Built for property teams." />
        <meta name="twitter:image" content="https://fairvia.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="Fairvia dashboard showing unit timeline" />

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
          <TargetCustomersSection />
          <HowItWorksSection />
          <TenantExperienceSection />
          <ValueROISection />
          <CompetitiveAdvantagesSection />
          <PricingReminderSection />
          <TrustCredibilitySection />
          <FAQSection />
          <HomeCTA />
        </main>

        <StickyCTA />
        <Footer />
      </div>
    </>
  );
}
