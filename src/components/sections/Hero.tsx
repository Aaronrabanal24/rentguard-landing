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
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-16 sm:py-20 lg:py-24"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* F-pattern layout: left-aligned text block with generous white space */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Text content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div
              className="mb-6 inline-flex w-fit items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900"
              role="text"
              aria-label={`Category: ${heroContent.eyebrow}`}
            >
              {heroContent.eyebrow}
            </div>

            {/* H1 - Bold, top-left eye entry point */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {heroContent.headline}
            </h1>

            {/* Subheadline - 4.5:1 contrast ratio */}
            <p className="mb-8 text-lg leading-relaxed text-slate-700 sm:text-xl">
              {heroContent.subheadline}
            </p>

            {/* CTA Buttons - Primary action dominant, secondary low-contrast */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
                className="min-h-[48px] min-w-[48px] px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg"
                aria-label="Start your free unit today"
              >
                {heroContent.primaryCta}
              </Button>

              {/* Secondary CTA as text link (low visual competition) */}
              <button
                onClick={handleSecondaryCTA}
                className="min-h-[48px] px-4 text-base font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                aria-label="Learn how Fairvia works"
              >
                {heroContent.secondaryCta}
              </button>
            </div>

            {/* Proof bar - Above the fold on 390px-wide phones */}
            <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4" role="list" aria-label="Key features">
              {heroContent.proofBar.map((item) => (
                <div key={item.label} className="flex items-center gap-2" role="listitem">
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Micro-trust line */}
            <p className="text-sm text-slate-600">
              {heroContent.microTrust}
            </p>
          </div>

          {/* Right column: Hero mockup */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/visuals/hero-dashboard.svg"
                alt="Timeline view showing deposit workflow from received to return sent with compliance tracking"
                width={600}
                height={450}
                priority
                loading="eager"
                className="h-auto w-full drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
