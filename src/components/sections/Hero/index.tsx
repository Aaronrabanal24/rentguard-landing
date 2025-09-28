import { useEffect } from "react";
import Header from "@/components/layout/Header";
import { HeroContent } from "./HeroContent";
import { HeroSocialProof } from "./HeroSocialProof";
import { HeroComplianceCard } from "./HeroComplianceCard";
import { track } from "@/lib/tracking";

export default function Hero() {
  useEffect(() => {
    track("view_hero", { focus: "landlord" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-[22rem] w-[22rem] rounded-full bg-teal-200/35 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      <div className="relative">
        <Header />

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-20 pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:pt-16">
          <HeroContent />
          <HeroComplianceCard />
        </div>

        <HeroSocialProof />
      </div>
    </section>
  );
}
