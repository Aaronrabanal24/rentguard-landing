import { useEffect } from "react";
import Image from "next/image";
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

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-20 pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,460px)] md:pt-16">
          <HeroContent />
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-full max-w-sm rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-sky-100">
              <Image
                src="/visuals/hero-dashboard.svg"
                alt="Fairvia landlord dashboard"
                width={420}
                height={360}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="w-full max-w-sm">
              <HeroComplianceCard />
            </div>
          </div>
        </div>

        <HeroSocialProof />
      </div>
    </section>
  );
}
