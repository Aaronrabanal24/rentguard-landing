import { PageContainer } from "@/components/layout/PageContainer";
import PilotWorkflows from "@/components/sections/PilotWorkflows";
import HomeCTA from "@/components/sections/HomeCTA";

export default function HowItWorksPage() {
  return (
    <PageContainer title="Fairvia — How the Workflow Operates">
      <PilotWorkflows />
      <HomeCTA />
    </PageContainer>
  );
}
