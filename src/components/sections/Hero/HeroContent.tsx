import { heroContent } from "@/data/content";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

export function HeroContent() {
  const router = useRouter();

  const quickHits: Array<{ icon: ReactNode; label: string; detail: string }> = [
    {
      label: "Profile",
      detail: "SEO marketing page",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 2l-6 3-6-3v10h12V5z" />
        </svg>
      ),
    },
    {
      label: "Lease + Escrow",
      detail: "Verified funds flow",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v2H5a1 1 0 000 2h1v4H5a1 1 0 100 2h1v2a1 1 0 102 0v-2h4v2a1 1 0 102 0v-2h1a1 1 0 100-2h-1v-4h1a1 1 0 100-2h-1V6a4 4 0 00-4-4zm2 6V6a2 2 0 00-4 0v2h4zm0 2h-4v4h4v-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Communication",
      detail: "Shared timeline",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H8l-4 4v-4H4a2 2 0 01-2-2V5z" />
        </svg>
      ),
    },
    {
      label: "Release",
      detail: "21-day checklist",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

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
    <div className="relative mx-auto max-w-xl space-y-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-gradient-to-r from-sky-50 to-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm shadow-sky-200/60 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
        {heroContent.eyebrow}
      </span>

      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        {headlineLead}
        {headlineAccent ? (
          <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
            {` ${headlineAccent}`}
          </span>
        ) : null}
      </h1>

      <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">{heroContent.subheadline}</p>

      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
        {quickHits.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">{item.icon}</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-xs text-slate-500">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button onClick={handlePrimaryClick} size="lg">
            {heroContent.primaryCta}
          </Button>
          <Button onClick={handleSecondaryClick} variant="secondary" size="lg" className="border-2 border-slate-300">
            {heroContent.secondaryCta}
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
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
