import dynamic from "next/dynamic";
import {
  Footer,
  Hero,
  HomeCTA,
  ResultsSection,
  PainSection,
  HowItWorksSection,
  StickyCTA,
} from "@/components";
import { motion } from "@/lib/motion";

const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  loading: () => <div className="mt-16 h-[400px] animate-pulse rounded-3xl bg-slate-100" aria-hidden />,
});

export default function Home() {
  return (
    <>
      <div className="min-h-full bg-slate-50 text-slate-900">
        <header>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Hero />
          </motion.div>
        </header>

        <main className="safe-bot pb-32">
          <ResultsSection />
          <PainSection />
          <HowItWorksSection />
          <FAQSection />
          <HomeCTA />
        </main>

        <Footer />
      </div>
      <StickyCTA />
    </>
  );
}
