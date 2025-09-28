import { PageContainer } from "@/components/layout/PageContainer";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import ProblemPain from "@/components/sections/ProblemPain";
import SocialProof from "@/components/sections/SocialProof";

export default function WhyFairviaPage() {
  return (
    <PageContainer title="Fairvia — Why Landlords Choose Neutral Escrow">
      <section className="bg-white py-10 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
            Why Fairvia
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Neutral escrow built for busy California landlords</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            See the market pressure, how Fairvia positions small portfolios to win, and the proof from our pilot program.
          </p>
        </div>
      </section>
      <MarketOpportunity />
      <ProblemPain />
      <SocialProof />
    </PageContainer>
  );
}
