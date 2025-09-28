import { useRouter } from "next/router";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";

export default function HomeCTA() {
  const router = useRouter();

  const handleClick = () => {
    track("click_cta", { role: "landlord", location: "cta_section", label: "apply_pilot" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <motion.section
      className="bg-white py-16"
      id="get-started"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-teal-50 px-8 py-12 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Pilot enrollment</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Ready to run deposits the Fairvia way?</h2>
        <p className="mt-3 text-sm text-slate-600">
          Share a current or upcoming move-in. We&apos;ll map it through Fairvia, enable Listing Assist, and leave you with the compliance checklist.
        </p>
        <div className="mt-6 flex justify-center">
          <Button onClick={handleClick} size="lg">
            Apply for the Fairvia pilot
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
