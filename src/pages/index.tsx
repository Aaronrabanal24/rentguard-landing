import { Footer, Hero, HomeCTA, SocialProof, TrustSignals } from "@/components";
import StoryArc from "@/components/sections/StoryArc";
import { motion } from "@/lib/motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <Hero />
      </motion.div>
      <TrustSignals />
      <StoryArc />
      <SocialProof />
      <HomeCTA />
      <Footer />
    </div>
  );
}
