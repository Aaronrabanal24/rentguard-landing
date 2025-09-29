import { useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";

export function StickyCTA() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    track("click_cta", { role: "landlord", location: "sticky_cta", label: "request_demo" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  }, [router]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70]">
      <div className="pointer-events-auto mx-auto flex w-full max-w-4xl flex-col gap-3 rounded-t-3xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/10 safe-bot sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4">
        <div className="flex-1 text-sm text-slate-600">
          <p className="text-sm font-semibold text-slate-900">Stay ahead of day-21 deadlines.</p>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            See how Fairvia walks deposits from SEO trust badge to a compliant release.
          </p>
        </div>
        <Button onClick={handleClick} size="md" className="tap w-full whitespace-nowrap sm:w-auto">
          Request a demo
        </Button>
      </div>
    </div>
  );
}
