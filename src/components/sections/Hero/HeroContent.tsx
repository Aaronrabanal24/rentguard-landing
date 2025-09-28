import { heroContent } from "@/data/content";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

export function HeroContent() {
  const router = useRouter();

  const handlePrimaryClick = () => {
    track("click_cta", { role: "landlord", location: "hero", label: "request_demo" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  const handleSecondaryClick = () => {
    track("click_cta", { role: "landlord", location: "hero", label: "learn_how" });
    router.push("/how-it-works").catch(() => {
      /* noop */
    });
  };

  const [headlineLead, headlineAccent] = splitHeadline(heroContent.headline);

  return (
    <div className="relative">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-gradient-to-r from-sky-50 to-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm shadow-sky-200/60 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
        {heroContent.badge}
      </span>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        {headlineLead}
        {headlineAccent ? (
          <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
            {` ${headlineAccent}`}
          </span>
        ) : null}
      </h1>

      <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
        {heroContent.subheadline}
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <div className="space-y-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <Button onClick={handlePrimaryClick} size="lg">
            Request a landlord demo
          </Button>
          <Button onClick={handleSecondaryClick} variant="secondary" size="lg" className="border-2 border-slate-300">
            View the landlord workflow
          </Button>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-500">
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
  { label: "0 missed 21-day deadlines", color: "bg-green-500" },
  { label: "DFPI-licensed escrow partners", color: "bg-blue-500" },
  { label: "AB 2801 photo-ready", color: "bg-purple-500" },
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
  ];

  return icons[index % icons.length];
}
