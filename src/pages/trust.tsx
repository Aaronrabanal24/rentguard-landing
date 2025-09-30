import { PageContainer } from "@/components/layout/PageContainer";
import HomeCTA from "@/components/sections/HomeCTA";

const SECURITY_POINTS = [
  {
    title: "DFPI-Licensed Partners",
    detail: "Deposits held by California-regulated partners in segregated accounts, separate from Fairvia's operating funds.",
  },
  {
    title: "Shared Timeline and Receipts",
    detail: "Both landlord and tenant see the same process status, documentation, and timeline updates.",
  },
  {
    title: "Same Packet for Everyone",
    detail: "Landlord and tenant receive identical release packets with itemization, receipts, photos, and timestamps.",
  },
];

export default function TrustPage() {
  return (
    <PageContainer title="Trust & Security" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight text-center">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Trust & Security</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            How Fairvia keeps deposits safe with DFPI-licensed partners and professional-grade security practices.
          </p>
        </div>
      </section>

      {/* What DFPI-Licensed Partners Means */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What &ldquo;DFPI-Licensed Partners&rdquo; Means in Practice</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Custody & Separation</h3>
                <p className="text-slate-600 mb-4">
                  Your tenant&apos;s deposit goes directly to a California Department of Financial Protection and Innovation (DFPI) licensed partner.
                  These funds are held in segregated accounts, completely separate from Fairvia&apos;s operating funds.
                </p>
                <p className="text-slate-600">
                  This means your deposit is protected even if Fairvia ceased operations—it would remain safely held by the licensed partner.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Regulatory Oversight</h3>
                <p className="text-slate-600 mb-4">
                  DFPI licensing requires regular audits, capital requirements, and adherence to strict financial handling procedures.
                  Our partners must demonstrate they can safely custody funds and have proper insurance coverage.
                </p>
                <p className="text-slate-600">
                  This is the same regulatory framework that governs banks and credit unions in California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Flow Diagram */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">How Money Flows</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Tenant</h3>
                <p className="text-sm text-slate-600">Sends deposit via secure transfer</p>
              </div>

              <div className="hidden md:block text-slate-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">DFPI Partner</h3>
                <p className="text-sm text-slate-600">Holds funds in segregated account</p>
              </div>

              <div className="hidden md:block text-slate-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Landlord</h3>
                <p className="text-sm text-slate-600">Receives release when conditions met</p>
              </div>
            </div>

            <div className="mt-12 bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Release Conditions</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• 21-day deadline compliance documented in Fairvia</li>
                <li>• Itemized deductions with receipts and photos uploaded</li>
                <li>• Tenant acknowledgment or dispute period expired</li>
                <li>• Fairvia generates release packet and initiates transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Security Practices</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Encryption</h3>
                <p className="text-sm text-slate-600">
                  All data is encrypted in transit using TLS 1.3 and at rest using AES-256.
                  Personal information is stored with additional encryption layers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Access Control</h3>
                <p className="text-sm text-slate-600">
                  Role-based access ensures landlords only see their properties, tenants only see their cases,
                  and support staff have limited, audited access.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Data Retention</h3>
                <p className="text-sm text-slate-600">
                  Case records are retained for 3+ years as required by California law.
                  Personal data is deleted when legally permissible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Clarity */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Legal Clarity</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-amber-900 mb-3">What Fairvia Is Not</h3>
              <ul className="space-y-2 text-amber-800">
                <li>• <strong>Not a bank:</strong> We do not hold deposits or provide banking services</li>
                <li>• <strong>Not an escrow agent:</strong> Licensed partners provide escrow services</li>
                <li>• <strong>Not a law firm:</strong> We provide process tools, not legal advice</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-900 mb-3">What Fairvia Provides</h3>
              <ul className="space-y-2 text-emerald-800">
                <li>• <strong>Process automation:</strong> Deadline tracking, photo workflows, message templates</li>
                <li>• <strong>Documentation tools:</strong> Compliant forms, receipt organization, timeline records</li>
                <li>• <strong>Integration services:</strong> Connect landlords and tenants with licensed escrow partners</li>
                <li>• <strong>Compliance support:</strong> Structured workflows designed around California requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip with Key Points */}
      <section className="bg-slate-900 py-16">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Trust Points</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {SECURITY_POINTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-700 bg-slate-800/60 p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-300 text-sm mb-2">
                Deposits held by DFPI-licensed partners • Shared timeline and receipts • Same packet for landlord and tenant
              </p>
              <p className="text-slate-500 text-xs">
                Fairvia is not a bank, escrow agent, or law firm. Deposits are held by DFPI-licensed partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}
