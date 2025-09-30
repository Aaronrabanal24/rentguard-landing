import { useEffect, useRef, useState } from "react";
import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "SEO profile & trust badge",
    before: "Renters Google your property and see nothing but listings.",
    after: "They see a Fairvia profile proving funds are safe before they apply.",
    badge: "Confidence before the tour",
  },
  {
    title: "Lease onboarding & neutral escrow",
    before: "Deposits sit in your personal account with no shared view.",
    after: "Escrow partner holds the money and everyone views the same timeline.",
    badge: "Neutral custody in minutes",
  },
  {
    title: "Guided communication",
    before: "Late-night texts, missing receipts, and unclear commitments.",
    after: "Pre-written updates, renter confirmations, and receipts in one feed.",
    badge: "Every update documented",
  },
  {
    title: "21-day release packet",
    before: "Day-21 panic, manual letters, and risky math.",
    after: "Auto alerts, deduction helpers, and a court-ready PDF.",
    badge: "Deposit released on time",
  },
];

export default function SolutionOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const index = itemRefs.current.findIndex((node) => node === entry.target);
            if (index >= 0) {
              setActiveIndex((prev) => (prev === index ? prev : index));
            }
          }
        });
      },
      {
        root: track,
        threshold: [0.6, 0.75],
      }
    );

    itemRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const node = itemRefs.current[index];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    setActiveIndex(index);
  };

  const handleArrow = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const firstSlide = track.firstElementChild as HTMLElement | null;
    const slideWidth = firstSlide?.offsetWidth ?? track.clientWidth;
    track.scrollBy({ left: direction * (slideWidth + 16), behavior: "smooth" });
  };

  return (
    <motion.section
      className="bg-slate-900 py-12 sm:py-16 text-slate-100"
      id="solution"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-4xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            The Fairvia workflow
          </span>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">What if compliance ran on autopilot?</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Fairvia replaces the spreadsheet scramble with a guided path from SEO credibility to a paid-out deposit. Every step removes a manual chore that usually happens at midnight.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="snap-x-mandatory flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {STEPS.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "tap snap-child flex min-w-[220px] items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                  activeIndex === index
                    ? "border-white bg-white/15 text-white shadow-sm"
                    : "border-white/20 bg-white/5 text-slate-200 hover:border-white/40"
                )}
                aria-pressed={activeIndex === index}
              >
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
                  Step {index + 1}
                </span>
                <span className="text-sm font-medium leading-snug text-white">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div className="relative">
            <div
              ref={trackRef}
              className="snap-x-mandatory flex gap-4 overflow-x-auto pb-6 scrollbar-none"
              aria-live="polite"
            >
              {STEPS.map((item, index) => (
                <article
                  key={item.title}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  className="snap-child relative flex w-full shrink-0 basis-[85vw] flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-100 shadow-[0_25px_45px_-35px_rgba(15,23,42,0.6)] backdrop-blur-sm sm:basis-[420px] lg:basis-[440px]"
                >
                  <header className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-200">Step {index + 1}</p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-100">
                      {item.badge}
                    </span>
                  </header>

                  <div className="grid gap-3 text-left text-sm">
                    <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-100/80">Before Fairvia</p>
                      <p className="mt-1 leading-relaxed text-rose-50">{item.before}</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-100/80">With Fairvia</p>
                      <p className="mt-1 leading-relaxed text-emerald-50">{item.after}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <button
                type="button"
                onClick={() => handleArrow(-1)}
                className="pointer-events-auto tap flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-slate-900/60 text-lg text-white shadow-sm backdrop-blur"
                aria-label="Previous workflow step"
              >
                ‹
              </button>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
              <button
                type="button"
                onClick={() => handleArrow(1)}
                className="pointer-events-auto tap flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-slate-900/60 text-lg text-white shadow-sm backdrop-blur"
                aria-label="Next workflow step"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
