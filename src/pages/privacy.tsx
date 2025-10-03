import { PageContainer } from "@/components/PageContainer";
import { COMPANY } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <PageContainer title="Privacy Policy">
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              {COMPANY.name} is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our deposit management platform.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Information We Collect</h2>
            <p className="leading-relaxed text-slate-600 mb-4">
              We collect information necessary to provide compliant deposit management services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-6">
              <li>Account information (name, email, phone number)</li>
              <li>Property information for listing profiles</li>
              <li>Deposit transaction data processed through DFPI-licensed escrow partners</li>
              <li>Communication logs and timeline events (California compliance requirement)</li>
              <li>Move-in/move-out photo documentation (AB 2801 compliance)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed text-slate-600 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-6">
              <li>Manage security deposits in compliance with California law</li>
              <li>Generate AB 2801-compliant documentation and timelines</li>
              <li>Facilitate communication between landlords and renters</li>
              <li>Provide 21-day deadline tracking and automated reminders</li>
              <li>Create court-ready export archives as requested</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Data Sharing and Security</h2>
            <p className="leading-relaxed text-slate-600 mb-4">
              Your deposit funds are held by DFPI-licensed escrow partners (state-regulated financial institutions), not by {COMPANY.name}.
              Timeline and communication data is shared only with parties involved in the deposit case (landlord, renter, and authorized advisors).
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              We use industry-standard encryption and security measures to protect your data. We never sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Your Rights</h2>
            <p className="leading-relaxed text-slate-600 mb-4">
              Under California law, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-6">
              <li>Access your personal information and case data</li>
              <li>Request correction of inaccurate information</li>
              <li>Export your case archives (PDF and JSON formats)</li>
              <li>Request deletion of your account (after all active cases are closed)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Data Retention</h2>
            <p className="leading-relaxed text-slate-600 mb-6">
              Case files and documentation are retained for 3 years after case closure to comply with California statute of limitations for deposit disputes.
              You can export your data at any time during this period.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Contact Us</h2>
            <p className="leading-relaxed text-slate-600 mb-4">
              If you have questions about this Privacy Policy or your data, please contact us at:
            </p>
            <p className="leading-relaxed text-slate-600 mb-2">
              Email: privacy@fairvia.com
            </p>

            <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Important:</strong> {COMPANY.name} is not a bank, law firm, or escrow agent.
                All escrow accounts are managed by licensed California partners. Lease templates are reviewed for California compliance
                but do not substitute for legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
