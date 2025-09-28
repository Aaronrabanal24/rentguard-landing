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
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-8 shadow-2xl shadow-sky-200/40 backdrop-blur-xl">
                <Image
                  src="/visuals/hero-dashboard.svg"
                  alt="Fairvia landlord dashboard"
                  width={520}
                  height={400}
                  priority
                  className="h-auto w-full"
                />

                <div className="pointer-events-none">
                  {overlayBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className={`animate-float absolute ${badge.position} flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-xs font-medium text-slate-700 shadow-lg backdrop-blur`}
                      aria-hidden
                    >
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full ${badge.color} text-[11px] text-white`}>
                        {badge.icon}
                      </span>
                      {badge.label}
                    </div>
                  ))}
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

const overlayBadges = [
  {
    label: "SEO profile live",
    position: "-right-4 top-6",
    color: "bg-sky-500",
    icon: "P",
  },
  {
    label: "Escrow verified",
    position: "left-8 top-10",
    color: "bg-teal-500",
    icon: "E",
  },
  {
    label: "Timeline shared",
    position: "-left-4 bottom-16",
    color: "bg-indigo-500",
    icon: "C",
  },
  {
    label: "Release queued",
    position: "right-6 bottom-12",
    color: "bg-orange-500",
    icon: "R",
  },
] as const;
