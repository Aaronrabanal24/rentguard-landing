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
      className="relative overflow-hidden bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-transparent px-4 py-16 sm:px-6 sm:py-20 lg:py-28 xl:py-32"
      aria-label="Hero section"
      style={{ zIndex: 1 }}
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* F-pattern layout: left-aligned text block with generous white space */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          {/* Left column: Text content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div
              className="mb-4 sm:mb-6 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-400/30 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-sky-300"
              role="text"
              aria-label={`Category: ${heroContent.eyebrow}`}
            >
              {heroContent.eyebrow}
            </div>

            {/* H1 - Bold, top-left eye entry point */}
            <h1 className="mb-5 sm:mb-7 text-4xl font-black tracking-tight bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              {heroContent.headline}
            </h1>

            {/* Subheadline - 4.5:1 contrast ratio */}
            <p className="mb-7 sm:mb-9 text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-200 max-w-2xl font-medium">
              {heroContent.subheadline}
            </p>

            {/* Micro-promise / Onboarding line */}
            <div className="mb-5 sm:mb-6 rounded-xl bg-gradient-to-br from-sky-500/10 to-purple-500/10 border border-sky-400/30 backdrop-blur-sm px-4 sm:px-5 py-3.5 sm:py-4 shadow-lg shadow-sky-500/10">
              <p className="text-sm sm:text-base font-semibold text-sky-200 flex items-start gap-2">
                <span className="text-lg flex-shrink-0">⚡</span>
                <span>{heroContent.microPromise}</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 ml-7">
                {heroContent.nextSteps}
              </p>
            </div>

            {/* CTA Buttons - Enhanced structure with better prominence */}
            <div className="mb-8 sm:mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] hover:scale-105 transition-all duration-300"
                aria-label="Start your free unit today"
              >
                {heroContent.primaryCta} →
              </Button>

              {/* Secondary CTA with improved visibility */}
              <button
                onClick={handleSecondaryCTA}
                className="min-h-[48px] w-full sm:w-auto px-6 py-3 text-base font-bold text-slate-100 bg-slate-800/50 border-2 border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-sky-500/50 hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                aria-label="Learn how Fairvia works"
              >
                {heroContent.secondaryCta}
              </button>
            </div>

            {/* Trust badges - escrow partners & testimonial */}
            <div className="mb-5 sm:mb-6 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm px-4 sm:px-5 py-3.5 sm:py-4 shadow-lg">
              <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-3">
                {heroContent.trustLine}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                  ✓ DFPI Licensed
                </span>
                <span className="inline-flex items-center rounded-full bg-sky-500/20 border border-sky-400/30 px-3 py-1.5 text-xs font-semibold text-sky-300">
                  ✓ AB 2801 Compliant
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-500/20 border border-purple-400/30 px-3 py-1.5 text-xs font-semibold text-purple-300">
                  ✓ SOC 2 Type II
                </span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-400 border-t border-slate-700/50 pt-3">
                &ldquo;Fairvia saved me from a deposit dispute&rdquo; — <strong className="font-semibold text-slate-200">Sarah M., Oakland</strong>
              </p>
            </div>

            {/* Proof bar - Above the fold on 390px-wide phones */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4" role="list" aria-label="Key features">
              {heroContent.proofBar.map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-lg p-2 sm:bg-transparent sm:border-0 sm:p-0" role="listitem">
                  <span className="text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Hero mockup - Enhanced for mobile */}
          <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-purple-500/20 blur-3xl opacity-50 animate-pulse" aria-hidden="true" />

              <div className="relative">
                <Image
                  src="/visuals/hero-dashboard.svg"
                  alt="Timeline view showing deposit workflow from received to return sent with compliance tracking"
                  width={600}
                  height={450}
                  priority
                  loading="eager"
                  className="h-auto w-full drop-shadow-2xl rounded-2xl ring-1 ring-white/10 transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
