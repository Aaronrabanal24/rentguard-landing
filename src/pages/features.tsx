import { PageContainer } from "@/components/layout/PageContainer";
import CompetitiveEdge from "@/components/sections/CompetitiveEdge";
import ProfessionalBenefits from "@/components/sections/ProfessionalBenefits";
import LegalCompliance from "@/components/sections/LegalCompliance";

export default function FeaturesPage() {
  return (
    <PageContainer title="Fairvia — Features & Compliance">
      <section className="bg-white py-10 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            Features
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Automation, landlord benefits, and California compliance in one platform</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Fairvia bundles neutral escrow workflows, professional landlord tooling, and the state-specific safeguards you need to stay confident.
          </p>
        </div>
      </section>
      <CompetitiveEdge />
      <ProfessionalBenefits />
      <LegalCompliance />
    </PageContainer>
  );
}
