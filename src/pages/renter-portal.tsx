import Head from "next/head";
import { Footer } from "@/components";
import Header from "@/components/layout/Header";

export default function RenterPortalPage() {
  const milestones = [
    { status: "completed", label: "Inquiry received", date: "Mar 15, 2025" },
    { status: "completed", label: "Tour scheduled", date: "Mar 18, 2025" },
    { status: "completed", label: "Application submitted", date: "Mar 20, 2025" },
    { status: "completed", label: "Lease signed", date: "Mar 25, 2025" },
    { status: "completed", label: "Deposit received", date: "Mar 25, 2025" },
    { status: "in_progress", label: "Move-in inspection", date: "Apr 1, 2025" },
    { status: "pending", label: "Deposit return", date: "Pending" },
  ];

  return (
    <>
      <Head>
        <title>Renter portal - Fairvia</title>
        <meta
          name="description"
          content="See how renters track their rental journey with Fairvia. No login required, read only status timeline for key milestones."
        />
        <link rel="canonical" href="https://fairvia.com/renter-portal" />

        <meta property="og:title" content="Renter portal - Fairvia" />
        <meta property="og:description" content="See how renters track their rental journey with Fairvia. No login required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/renter-portal" />
      </Head>

      <div className="min-h-full bg-slate-50 text-slate-900">
        <Header />

        <main id="main-content" className="safe-bot pb-32">
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Renter portal
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                  No login required. Read only status timeline for key milestones.
                </p>
              </div>

              <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-slate-900">Your rental timeline</h2>
                  <p className="mt-2 text-slate-600">Track your journey from inquiry to move-out</p>
                </div>

                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.label} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            milestone.status === "completed"
                              ? "bg-sky-500 text-white"
                              : milestone.status === "in_progress"
                              ? "bg-orange-500 text-white"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {milestone.status === "completed" ? (
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : milestone.status === "in_progress" ? (
                            <svg className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                          ) : (
                            <span className="text-sm font-semibold">{index + 1}</span>
                          )}
                        </div>
                        {index < milestones.length - 1 && (
                          <div
                            className={`mt-2 h-12 w-0.5 ${
                              milestone.status === "completed" ? "bg-sky-500" : "bg-slate-200"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className="text-lg font-semibold text-slate-900">{milestone.label}</h3>
                        <p className="mt-1 text-sm text-slate-600">{milestone.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <div className="rounded-lg bg-sky-50 p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">No login</h3>
                  <p className="mt-2 text-sm text-slate-600">Access your timeline with a secure link</p>
                </div>
                <div className="rounded-lg bg-sky-50 p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">Read only</h3>
                  <p className="mt-2 text-sm text-slate-600">View status and history anytime</p>
                </div>
                <div className="rounded-lg bg-sky-50 p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">Always current</h3>
                  <p className="mt-2 text-sm text-slate-600">Updates automatically as milestones complete</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
