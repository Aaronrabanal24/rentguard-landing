import { useEffect } from "react";
import Header from "@/components/layout/Header";
import { HeroContent } from "./HeroContent";
import { HeroSocialProof } from "./HeroSocialProof";
import { HeroComplianceCard } from "./HeroComplianceCard";
import { track } from "@/lib/tracking";
import { HeroMockup } from "./mockup/HeroMockup";

export default function Hero() {
  useEffect(() => {
    track("view_hero", { focus: "landlord" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl animate-[pulse_14s_ease-in-out_infinite]" />
        <div className="absolute right-[-8rem] top-1/3 h-[22rem] w-[22rem] rounded-full bg-teal-200/35 blur-3xl animate-[pulse_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-orange-200/30 blur-3xl animate-[pulse_18s_ease-in-out_infinite]" />
      </div>

      <div className="relative">
        <Header />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 lg:grid-cols-[1fr_600px] lg:gap-20 lg:pt-16">
          <HeroContent />

          <div className="relative space-y-8">
            <HeroMockup />

            <HeroComplianceCard />
          </div>
        </div>

        <HeroSocialProof />
      </div>
    </section>
  );
}
