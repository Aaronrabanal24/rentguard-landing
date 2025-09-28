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
        <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl animate-[pulse_14s_ease-in-out_infinite]" />
        <div className="absolute right-[-8rem] top-1/3 h-[22rem] w-[22rem] rounded-full bg-teal-200/35 blur-3xl animate-[pulse_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-orange-200/30 blur-3xl animate-[pulse_18s_ease-in-out_infinite]" />
      </div>

      <div className="relative">
        <Header />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 lg:grid-cols-[1fr_600px] lg:gap-20 lg:pt-16">
          <HeroContent />

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-100/50 via-white to-teal-100/50 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-sky-200/40 backdrop-blur-xl">
                <Image
                  src="/visuals/hero-dashboard.svg"
                  alt="Fairvia landlord dashboard"
                  width={520}
                  height={400}
                  priority
                  className="h-auto w-full"
                />

                <div className="animate-float absolute -right-4 top-1/4 w-48 rounded-xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-green-600">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="font-medium">Escrow Active</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-800">$2,400</p>
                  <p className="text-xs text-slate-500">Unit 2B • Move-in pending</p>
                </div>

                <div className="animate-float-delayed absolute -left-4 bottom-1/4 w-44 rounded-xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-orange-600">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="font-medium">Due in 3 days</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-800">AB 2801 Photos</p>
                  <p className="text-xs text-slate-500">Unit 1A • Move-out</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <HeroComplianceCard />
            </div>
          </div>
        </div>

        <HeroSocialProof />
      </div>
    </section>
  );
}
