import Image from "next/image";
import { motion } from "@/lib/motion";

const COMMUNICATION_POINTS = [
  {
    title: "Every update in one shared timeline",
    detail: "Schedule walkthroughs, confirm key returns, and log receipts without bouncing between email and text threads.",
  },
  {
    title: "Pre-written messages for every moment",
    detail: "Two-click templates cover deposit received, walkthrough reminders, deduction previews, and final release notes.",
  },
  {
    title: "Tenant confirmations you can rely on",
    detail: "Renters acknowledge updates inside Fairvia, creating a permanent record if disputes surface later.",
  },
];

export default function CommunicationSection() {
  return (
    <motion.section
      className="bg-white py-16"
      id="communication"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              Step 3 • Communication
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Shared updates keep renters aligned</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Fairvia replaces ad-hoc texts with a professional, shared timeline. Landlords see every confirmation, renters trust the process, and no message slips through the cracks.
            </p>

            <ul className="space-y-4 text-sm text-slate-600">
              {COMMUNICATION_POINTS.map((point) => (
                <li key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-base font-semibold text-slate-900">{point.title}</p>
                  <p className="mt-1 leading-relaxed">{point.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/visuals/features-stack.svg"
              alt="Fairvia communication timeline with tenant confirmations"
              width={640}
              height={480}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-auto w-full"
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
