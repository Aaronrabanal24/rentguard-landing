const STEPS = [
  {
    title: "Onboard your properties",
    description: "Import tenants or add units—Novatra builds one dashboard for every deposit.",
  },
  {
    title: "Open neutral deposit holding",
    description: "Licensed California partners safeguard funds while everyone stays synced on status.",
  },
  {
    title: "Capture photo documentation",
    description: "Move-in/out checklists collect timestamped photos that satisfy AB 2801.",
  },
  {
    title: "Send statements & release on time",
    description: "Itemized summaries send automatically and deposits release inside the 21-day window.",
  },
];

const MOBILE_TIPS = [
  "Tap a unit to see status, notes, and next actions.",
  "Snap photos on your phone—Novatra compresses and timestamps instantly.",
  "Swipe upcoming deadlines to plan the day in seconds.",
];

export default function ValueAndForm() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Simple workflows for busy operators</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Toggle between desktop and phone without losing context—everything updates in real time.
          </p>
        </div>

        <ol className="mt-10 space-y-6">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-800/60 p-6 shadow-sm sm:flex-row sm:items-start"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300 sm:text-base">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 rounded-3xl border border-slate-800 bg-slate-800/60 p-6 text-sm text-slate-300 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">Designed for busy days</h3>
            <p className="mt-2">
              Switch between desktop and mobile without losing context. Every action syncs instantly so your team—or just you—can stay coordinated.
            </p>
          </div>
          <ul className="space-y-3">
            {MOBILE_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="mt-1 text-sky-300">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
