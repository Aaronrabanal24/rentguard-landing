import dynamic from "next/dynamic";
import "@/content/homepage";
import {
  Footer,
  Hero,
  HomeCTA,
  TrustSignals,
  ProblemPain,
  ValueAndForm,
  CompetitiveEdge,
  ProfessionalBenefits,
  ListingAssistSection,
  CommunicationSection,
  ReleaseSection,
} from "@/components";
import { motion } from "@/lib/motion";

const StoryArc = dynamic(() => import("@/components/sections/StoryArc"), {
  loading: () => <div className="mt-10 h-[460px] animate-pulse rounded-3xl bg-slate-100" aria-hidden />,
});

const SocialProof = dynamic(() => import("@/components/sections/SocialProof"), {
  loading: () => <div className="mt-16 h-[320px] animate-pulse rounded-3xl bg-slate-100" aria-hidden />,
});

const MarketOpportunity = dynamic(() => import("@/components/sections/MarketOpportunity"), {
  loading: () => <div className="mt-16 h-[360px] animate-pulse rounded-3xl bg-slate-100" aria-hidden />,
});

const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  loading: () => <div className="mt-16 h-[400px] animate-pulse rounded-3xl bg-slate-100" aria-hidden />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Hero />
        </motion.div>
      </header>

      <main>
        <ListingAssistSection />
        <ValueAndForm />
        <CommunicationSection />
        <ReleaseSection />
        <StoryArc />
        <TrustSignals />
        <ProblemPain />
        <CompetitiveEdge />
        <ProfessionalBenefits />
        <SocialProof />
        <MarketOpportunity />
        <FAQSection />
        <HomeCTA />
      </main>

      <Footer />
    </div>
  );
}
