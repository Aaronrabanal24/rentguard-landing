const STEPS = [
  {
    title: "Onboard your properties",
    description: "Import your current tenants or add new units. Novatra creates a single landlord dashboard for every deposit.",
  },
  {
    title: "Open neutral deposit holding",
    description: "Licensed California partners safeguard funds while you and tenants stay synced on status.",
  },
  {
    title: "Capture photo documentation",
    description: "Move-in/move-out checklists collect timestamped photos that meet AB 2801 with no extra apps.",
  },
  {
    title: "Send statements & release on time",
    description: "Itemized summaries go out automatically and deposits release within the 21-day window.",
  },
];

const MOBILE_TIPS = [
  "Tap a unit to see status, notes, and required actions at a glance.",
  "Upload photos from your phone—Novatra compresses and timestamps them automatically.",
  "Swipe through upcoming deadlines to prioritize the day’s work in seconds.",
];

export default function ValueAndForm() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Simple workflows built for independent landlords</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Each step is designed for mobile and desktop so you can keep deposits organized between showings, during turnovers, or from the couch at night.
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
