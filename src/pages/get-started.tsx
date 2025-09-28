import { PageContainer } from "@/components/layout/PageContainer";
import ConversionBlocks from "@/components/sections/ConversionBlocks";

export default function GetStartedPage() {
  return (
    <PageContainer title="Fairvia — Get Started" description="Request a landlord demo or enroll in the Fairvia pilot program.">
      <section className="bg-white py-10 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
            Get Started
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Choose the next step that fits your role</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Book a live walkthrough if you manage properties or join the renter pilot to experience neutral escrow firsthand.
          </p>
        </div>
      </section>
      <ConversionBlocks />
    </PageContainer>
  );
}
