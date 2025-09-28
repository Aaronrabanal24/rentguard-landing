import {
  Hero,
  MarketOpportunity,
  TrustSignals,
  ProblemPain,
  ValueAndForm,
  LegalCompliance,
  CompetitiveEdge,
  SocialProof,
  ConversionBlocks,
  FAQSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketOpportunity />
      <TrustSignals />
      <ProblemPain />
      <ValueAndForm />
      <LegalCompliance />
      <CompetitiveEdge />
      <SocialProof />
      <ConversionBlocks />
      <FAQSection />
      <Footer />
    </div>
  );
}
