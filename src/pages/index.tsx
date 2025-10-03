import Head from "next/head";
import {
  Header,
  PlatformHero,
  HowItWorks,
  Features,
  ROISection,
  TrustProof,
  CTASection,
  Footer,
} from "@/components";
import { StickyCTA } from "@/components/StickyCTA";
import { FAQ } from "@/components/FAQ";
import { organizationSchema, softwareSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairvia - Transparent Leasing Platform</title>
        <meta
          name="description"
          content="Transparency and trust between owners and property managers. Fairvia makes deposits clear, compliant, and dispute-ready."
        />
        <link rel="canonical" href="https://fairvia.com/" />
        <meta property="og:title" content="Fairvia - Transparent Leasing Platform" />
        <meta property="og:description" content="One smart unit link shows the same record to everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <StickyCTA />
        <Header />
        <PlatformHero />
        <HowItWorks />
        <Features />
        <ROISection />
        <TrustProof />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
