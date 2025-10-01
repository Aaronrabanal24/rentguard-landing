import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { WaitlistForm } from "@/components";

export default function GetStartedPage() {
  return (
    <PageContainer title="Fairvia — Get Started" description="Get your free unit link and start capturing leads instantly.">
      <section className="bg-white py-10 text-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
              Get Started
            </span>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Get Your Free Unit Link</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Start capturing leads with instant precheck, automated timeline tracking, and weekly ROI reports for your owners.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/visuals/features-stack.svg"
              alt="Fairvia onboarding"
              width={300}
              height={220}
              className="h-auto w-full max-w-xs"
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-2xl px-4">
          <WaitlistForm />
        </div>
      </section>
    </PageContainer>
  );
}
