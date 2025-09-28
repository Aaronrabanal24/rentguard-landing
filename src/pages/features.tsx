import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import CompetitiveEdge from "@/components/sections/CompetitiveEdge";
import ProfessionalBenefits from "@/components/sections/ProfessionalBenefits";
import LegalCompliance from "@/components/sections/LegalCompliance";

export default function FeaturesPage() {
  return (
    <PageContainer title="Fairvia — Features & Compliance">
      <section className="bg-white py-10 text-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
              Features
            </span>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Automation, landlord benefits, and compliance in one platform</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Fairvia bundles neutral escrow workflows, pro landlord tooling, and the California safeguards you need to stay confident.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/visuals/features-stack.svg"
              alt="Fairvia feature stack"
              width={320}
              height={220}
              className="h-auto w-full max-w-xs"
            />
          </div>
        </div>
      </section>
      <CompetitiveEdge />
      <ProfessionalBenefits />
      <LegalCompliance />
    </PageContainer>
  );
}
