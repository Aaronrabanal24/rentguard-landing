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
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-gradient-to-r from-sky-50 to-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm shadow-sky-200/60 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
        {heroContent.badge}
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

      <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {heroContent.value_props.map((value, index) => (
          <div
            key={value.title}
            className="group rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                {getValuePropIcon(index)}
              </div>
              <h3 className="font-semibold text-slate-900">{value.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button onClick={handlePrimaryClick} size="lg">
            Apply for the Fairvia pilot
          </Button>
          <Button onClick={handleSecondaryClick} variant="secondary" size="lg" className="border-2 border-slate-300">
            Preview the Listing Assist badge
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
          {trustIndicators.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${item.color}`} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const trustIndicators: Array<{ label: string; color: string }> = [
  { label: "Escrow-only deposit custody", color: "bg-green-500" },
  { label: "21-day clock auto-tracked", color: "bg-blue-500" },
  { label: "Listing Assist badge for any listing", color: "bg-purple-500" },
];

function splitHeadline(headline: string): [string, string] {
  if (!headline.includes(" ")) {
    return [headline, ""];
  }

  const lastSpaceIndex = headline.lastIndexOf(" ");
  const lead = headline.slice(0, lastSpaceIndex);
  const accent = headline.slice(lastSpaceIndex + 1);
  return [lead, accent];
}

function getValuePropIcon(index: number): ReactNode {
  const icons: ReactNode[] = [
    (
      <svg key="check" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
    (
      <svg key="shield" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    (
      <svg key="clock" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    (
      <svg key="spark" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5L10 2z" />
      </svg>
    ),
  ];

  return icons[index % icons.length];
}
