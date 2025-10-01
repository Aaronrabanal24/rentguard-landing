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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70]">
      <div className="pointer-events-auto safe-bottom safe-inline mx-auto flex w-full flex-col gap-3 border-t border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/10">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">Ready to get started?</p>
            <p className="text-xs text-slate-600">First unit free, forever. No credit card required.</p>
          </div>
          <Button onClick={handleClick} size="lg" className="tap min-h-[44px] w-full sm:w-auto sm:min-w-[200px]">
            Start free unit
          </Button>
        </div>
      </div>
    </div>
  );
}
