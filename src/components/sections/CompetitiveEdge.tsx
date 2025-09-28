const FEATURES = [
  {
    title: "21-day deadline management",
    detail: "Smart reminders keep every refund window on schedule.",
  },
  {
    title: "Photo documentation workflows",
    detail: "Guided checklists capture AB 2801 proof in a couple of taps.",
  },
  {
    title: "Professional tenant communication",
    detail: "Ready-to-send templates keep deposit updates clean and consistent.",
  },
  {
    title: "Portfolio-friendly dashboard",
    detail: "Manage 1–50+ units from one view with statuses, reminders, and escrow built in.",
  },
];

export default function CompetitiveEdge() {
  return (
    <section className="bg-slate-100 py-16" id="edge">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white bg-white p-8 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Why Novatra works
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Run deposits like a pro without adding headcount</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Built-in workflows handle the busywork so you stay responsive, compliant, and tenant-friendly across every property.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm">
                <span className="mt-0.5 text-lg">✅</span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
