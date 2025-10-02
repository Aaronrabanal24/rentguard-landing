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
      className="bg-transparent py-12 sm:py-16"
      id="get-started"
      style={{ zIndex: 1 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container-tight">
        <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-slate-800/50 to-teal-500/10 backdrop-blur-sm px-6 py-10 text-center shadow-xl shadow-sky-500/20 sm:rounded-3xl sm:px-8 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Get Started</p>
        <h2 className="mt-3 text-3xl font-semibold bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent">Ready to run deposits the Fairvia way?</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Share a current or upcoming move-in. We&apos;ll map it through Fairvia, enable Listing Assist, and leave you with the compliance checklist.
        </p>
        <div className="mt-6 flex justify-center">
          <Button onClick={handleClick} size="lg">
            Start with One Free Unit
          </Button>
        </div>
        </div>
      </div>
    </motion.section>
  );
}
