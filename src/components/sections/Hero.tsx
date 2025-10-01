import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-24 sm:py-32 lg:px-8"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl text-center">
        <div
          className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900"
          role="text"
          aria-label={`Category: ${heroContent.eyebrow}`}
        >
          {heroContent.eyebrow}
        </div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          {heroContent.headline}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          {heroContent.subheadline}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" role="group" aria-label="Call to action buttons">
          <Button
            size="lg"
            onClick={() => {
              const ctaSection = document.querySelector('#get-started');
              ctaSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Start free trial with one unit"
          >
            {heroContent.primaryCta}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const howItWorksSection = document.querySelector('#how-it-works');
              howItWorksSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Learn how Fairvia works"
          >
            {heroContent.secondaryCta}
          </Button>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          {heroContent.socialProof}
        </p>
      </div>
    </section>
  );
}
