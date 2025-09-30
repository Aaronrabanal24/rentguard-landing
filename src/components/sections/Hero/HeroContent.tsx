import { heroContent } from "@/data/content";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";
import { useRouter } from "next/router";

export function HeroContent() {
  const router = useRouter();


  const handlePrimaryClick = () => {
    track("click_cta", { role: "landlord", location: "hero", label: "apply_pilot" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  const handleSecondaryClick = () => {
    track("click_cta", { role: "landlord", location: "hero", label: "view_listing_assist" });
    router.push("/how-it-works").catch(() => {
      /* noop */
    });
  };

  const [headlineLead, headlineAccent] = splitHeadline(heroContent.headline);

  return (
    <div className="relative mx-auto max-w-xl space-y-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-gradient-to-r from-sky-50 to-teal-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm shadow-sky-200/60 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
        {heroContent.eyebrow}
      </span>

      <h1 className="text-[2rem] font-bold tracking-tight text-slate-900 sm:text-[2.75rem] lg:text-6xl">
        {headlineLead}
        {headlineAccent ? (
          <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
            {` ${headlineAccent}`}
          </span>
        ) : null}
      </h1>

      <p className="max-w-prose text-base leading-relaxed text-slate-600 sm:text-lg">
        {heroContent.subheadline}
      </p>

      <div className="space-y-6 pt-2">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button onClick={handlePrimaryClick} size="lg" className="w-full sm:w-auto">
            {heroContent.primaryCta}
          </Button>
          <Button
            onClick={handleSecondaryClick}
            variant="secondary"
            size="lg"
            className="w-full border-2 border-slate-300 sm:w-auto"
          >
            {heroContent.secondaryCta}
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>{heroContent.socialProof}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function splitHeadline(headline: string): [string, string] {
  if (!headline.includes(" ")) {
    return [headline, ""];
  }

  const lastSpaceIndex = headline.lastIndexOf(" ");
  const lead = headline.slice(0, lastSpaceIndex);
  const accent = headline.slice(lastSpaceIndex + 1);
  return [lead, accent];
}
