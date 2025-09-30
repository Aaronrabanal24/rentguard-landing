export default function ResultsSection() {
  const results = [
    {
      stat: "40%",
      label: "Fewer vacancy days",
      description: "Fill units faster with instant lead capture",
    },
    {
      stat: "100%",
      label: "Leads captured",
      description: "Never miss an inquiry, even at 2 AM",
    },
    {
      stat: "5hrs",
      label: "Saved per week",
      description: "Stop chasing owners for updates",
    },
    {
      stat: "Zero",
      label: "Deposit disputes",
      description: "State-compliant templates prevent fights",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Results That Matter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real impact from pilot users who switched to Fairvia
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item) => (
            <div
              key={item.label}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 sm:text-5xl">
                  {item.stat}
                </div>
                <div className="mt-3 text-lg font-semibold text-slate-900">
                  {item.label}
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Based on data from 50+ pilot units • Verified results • Your mileage may vary
        </p>
      </div>
    </section>
  );
}
