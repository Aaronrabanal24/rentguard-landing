import { landlordContent } from "@/data/landlord-content";

const managerPain = landlordContent.problems.opportunities;
const renterPain = [
  {
    challenge: "Understanding deposit status",
    solution: "Neutral deposit holding lets renters see when funds are released.",
  },
  {
    challenge: "Receiving clear deduction evidence",
    solution: "Photo-driven documentation means deductions come with proof upfront.",
  },
  {
    challenge: "Knowing how to raise concerns",
    solution: "RentGuard keeps a shared record so tenants can flag questions without friction.",
  },
];

export default function ProblemPain() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100" id="problems">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold">The California security deposit headache</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-300">
          RentGuard tackles the same pain points for both sides: legal timelines, compliant documentation, and transparent communication.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-white">Property managers & owners</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {managerPain.map((item) => (
                <li key={item.challenge}>
                  <span className="font-semibold text-white">{item.challenge}:</span> {item.solution}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-white">Renters & tenants</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {renterPain.map((item) => (
                <li key={item.challenge}>
                  <span className="font-semibold text-white">{item.challenge}:</span> {item.solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
