import { useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import { HeroContent } from "./HeroContent";
import { HeroSocialProof } from "./HeroSocialProof";
import { track } from "@/lib/tracking";

const HeroVisual = dynamic(async () => {
  const mod = await import("./HeroVisual");
  return { default: mod.HeroVisual };
}, {
  loading: () => <HeroVisualSkeleton />,
});

export default function Hero() {
  useEffect(() => {
    track("view_hero", { focus: "landlord" });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 lg:overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-12rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-200/35 blur-3xl animate-[pulse_14s_ease-in-out_infinite]" />
        <div className="absolute right-[-10rem] top-1/4 h-[22rem] w-[22rem] rounded-full bg-teal-200/30 blur-3xl animate-[pulse_18s_ease-in-out_infinite]" />
        <div className="absolute left-[-12rem] bottom-[-6rem] h-[20rem] w-[20rem] rounded-full bg-indigo-200/25 blur-3xl animate-[pulse_16s_ease-in-out_infinite]" />
      </div>

      <div className="relative flex min-dvh-80 flex-col">
        <Header />
        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
              <HeroContent />
              <HeroVisual />
            </div>
          </div>
        </div>

        <HeroSocialProof />
      </div>
    </section>
  );
}

function HeroVisualSkeleton() {
  return (
    <div className="hidden w-full animate-pulse rounded-[32px] border border-slate-200/70 bg-white/60 md:block">
      <div className="media-16x9 w-full bg-slate-100" />
    </div>
  );
}
