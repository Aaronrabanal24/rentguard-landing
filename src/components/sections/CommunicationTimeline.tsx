import { useRouter } from "next/router";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";

const BULLETS = [
  {
    title: "Guided templates",
    description: "Send notices for walkthroughs, updates, and deposit releases without writing from scratch.",
  },
  {
    title: "Receipts and photos",
    description: "Attach supporting files directly to the case so renters see everything tied to the deposit.",
  },
  {
    title: "One-click confirmation",
    description: "Renters acknowledge updates without back and forth, keeping everyone on the same page.",
  },
  {
    title: "Timestamped archive",
    description: "Every message is stored alongside the deposit record for quick audits and dispute reviews.",
  },
];

export default function CommunicationTimeline() {
  const router = useRouter();

  const handleClick = () => {
    track("click_cta", { role: "landlord", location: "features_communication", label: "apply_pilot" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <motion.section
      className="bg-slate-100 py-16"
      id="communication"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
          Communication layer
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">All deposit messages in one place</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Fairvia replaces scattered texts and lost emails with a single timeline. Every notice, receipt, and reply is logged and visible to both sides.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {BULLETS.map((bullet, index) => (
            <motion.div
              key={bullet.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <h3 className="text-base font-semibold text-slate-900">{bullet.title}</h3>
              <p className="mt-2 leading-relaxed">{bullet.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Button size="lg" onClick={handleClick}>
            Join the pilot
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
