import { useRouter } from "next/router";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";

export default function HomeCTA() {
  const router = useRouter();

  const handleClick = () => {
    track("click_cta", { role: "landlord", location: "cta_section", label: "request_demo" });
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
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Landlord demo</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Landlord ready to see it in action?</h2>
        <p className="mt-3 text-sm text-slate-600">
          We&apos;ll walk through one of your deposits, show the landlord automation, and hand over the compliance checklist you can use immediately.
        </p>
        <div className="mt-6 flex justify-center">
          <Button onClick={handleClick} size="lg">
            Request landlord demo
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
