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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] sm:hidden">
      <div className="pointer-events-auto safe-bottom safe-inline mx-auto flex w-full flex-col gap-3 border-t border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/10">
        <Button onClick={handleClick} size="lg" className="tap w-full min-h-[44px]">
          Start free unit
        </Button>
      </div>
    </div>
  );
}
