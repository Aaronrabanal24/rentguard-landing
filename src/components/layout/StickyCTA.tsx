import { useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";

export function StickyCTA() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    track("click_cta", { role: "landlord", location: "sticky_cta", label: "start_trial" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  }, [router]);

  return (
    // Hidden on mobile (< 640px), visible on tablet and desktop
    <div className="hidden sm:block pointer-events-none fixed inset-x-0 bottom-0 z-[70]">
      <div className="pointer-events-auto safe-bottom safe-inline mx-auto flex w-full flex-col gap-3 border-t-2 border-sky-500/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl px-4 py-4 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-left">
            <p className="text-lg font-black text-white">Ready to get started?</p>
            <p className="text-base text-sky-300 font-semibold">First unit free, forever. No credit card required.</p>
          </div>
          <Button
            onClick={handleClick}
            size="lg"
            className="tap min-h-[52px] px-8 py-3 text-base font-black shadow-2xl hover:scale-105 transition-all min-w-[200px]"
          >
            Start free unit →
          </Button>
        </div>
      </div>
    </div>
  );
}
