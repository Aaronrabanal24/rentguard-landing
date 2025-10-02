import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/content";

export default function Hero() {
  const handlePrimaryCTA = () => {
    const ctaSection = document.querySelector('#get-started');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryCTA = () => {
    const howItWorksSection = document.querySelector('#how-it-works');
    howItWorksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-sky-50/40 to-white px-4 py-12 sm:px-6 sm:py-16 lg:py-24"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* F-pattern layout: left-aligned text block with generous white space */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Text content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div
              className="mb-4 sm:mb-6 inline-flex w-fit items-center rounded-full bg-blue-100 border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-900"
              role="text"
              aria-label={`Category: ${heroContent.eyebrow}`}
            >
              {heroContent.eyebrow}
            </div>

            {/* H1 - Bold, top-left eye entry point */}
            <h1 className="mb-4 sm:mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {heroContent.headline}
            </h1>

            {/* Subheadline - 4.5:1 contrast ratio */}
            <p className="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-2xl">
              {heroContent.subheadline}
            </p>

            {/* Micro-promise / Onboarding line */}
            <div className="mb-5 sm:mb-6 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100/50 border border-sky-200 px-4 sm:px-5 py-3.5 sm:py-4 shadow-sm">
              <p className="text-sm sm:text-base font-semibold text-sky-900 flex items-start gap-2">
                <span className="text-lg flex-shrink-0">⚡</span>
                <span>{heroContent.microPromise}</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 ml-7">
                {heroContent.nextSteps}
              </p>
            </div>

            {/* CTA Buttons - Primary action dominant, secondary low-contrast */}
            <div className="mb-6 sm:mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
                className="w-full sm:w-auto shadow-lg hover:shadow-xl"
                aria-label="Start your free unit today"
              >
                {heroContent.primaryCta}
              </Button>

              {/* Secondary CTA as text link (low visual competition) */}
              <button
                onClick={handleSecondaryCTA}
                className="min-h-[48px] w-full sm:w-auto px-4 text-base font-semibold text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 rounded-lg"
                aria-label="Learn how Fairvia works"
              >
                {heroContent.secondaryCta}
              </button>
            </div>

            {/* Trust badges - escrow partners & testimonial */}
            <div className="mb-5 sm:mb-6 rounded-xl bg-white border border-slate-200 px-4 sm:px-5 py-3.5 sm:py-4 shadow-sm">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                {heroContent.trustLine}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-300 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                  ✓ DFPI Licensed
                </span>
                <span className="inline-flex items-center rounded-full bg-sky-50 border border-sky-300 px-3 py-1.5 text-xs font-semibold text-sky-800">
                  ✓ AB 2801 Compliant
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-50 border border-purple-300 px-3 py-1.5 text-xs font-semibold text-purple-800">
                  ✓ SOC 2 Type II
                </span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-600 border-t border-slate-200 pt-3">
                &ldquo;Fairvia saved me from a deposit dispute&rdquo; — <strong className="font-semibold text-slate-800">Sarah M., Oakland</strong>
              </p>
            </div>

            {/* Proof bar - Above the fold on 390px-wide phones */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4" role="list" aria-label="Key features">
              {heroContent.proofBar.map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-slate-50/50 rounded-lg p-2 sm:bg-transparent sm:p-0" role="listitem">
                  <span className="text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Hero mockup */}
          <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-lg">
              <Image
                src="/visuals/hero-dashboard.svg"
                alt="Timeline view showing deposit workflow from received to return sent with compliance tracking"
                width={600}
                height={450}
                priority
                loading="eager"
                className="h-auto w-full drop-shadow-2xl rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
