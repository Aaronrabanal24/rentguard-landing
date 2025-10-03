import { PageContainer } from "@/components/PageContainer";

export default function SecurityPage() {
  return (
    <PageContainer title="Security - Fairvia">
      <section className="bg-white py-16">
        <div className="container-tight max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Security at Fairvia</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            We take security seriously because your business depends on it. Here&apos;s how we protect your data and your renters&apos; information.
          </p>

          <div className="space-y-12">
            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Protection</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Encrypted in transit and at rest.</strong> All data sent between your browser and our servers uses industry-standard TLS encryption. Data stored on our servers is encrypted using AES-256.
                </p>
                <p>
                  <strong>Secure hosting.</strong> We use Google Cloud Platform with data centers in the United States. Access is restricted to authorized personnel only.
                </p>
                <p>
                  <strong>Regular backups.</strong> Your data is backed up daily and stored in multiple geographic locations to prevent data loss.
                </p>
              </div>
            </div>

            {/* Deposit Handling */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Deposit Handling</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>DFPI-licensed escrow partners.</strong> Security deposits are held by California Department of Financial Protection and Innovation (DFPI) licensed escrow companies, including North American Title Company and Pacific Escrow Services.
                </p>
                <p>
                  <strong>No commingling.</strong> Deposits are held in segregated trust accounts and never mixed with operating funds.
                </p>
                <p>
                  <strong>Audit trails.</strong> Every deposit action is logged with timestamps and user identification for complete transparency and compliance.
                </p>
              </div>
            </div>

            {/* Access Control */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Access Control</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Role-based permissions.</strong> Control who can view, edit, or manage units and deposits based on their role in your organization.
                </p>
                <p>
                  <strong>Secure authentication.</strong> Passwords are hashed using bcrypt. We support two-factor authentication for added security (Enterprise plan).
                </p>
                <p>
                  <strong>Session management.</strong> Automatic logout after inactivity and secure session tokens that expire regularly.
                </p>
              </div>
            </div>

            {/* Compliance */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Compliance & Standards</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>California deposit law (AB 2801).</strong> Built-in compliance with California&apos;s 21-day deposit return requirement and itemized deduction standards.
                </p>
                <p>
                  <strong>WCAG 2.1 AA accessibility.</strong> Our platform meets accessibility standards to ensure everyone can use it effectively.
                </p>
                <p>
                  <strong>Regular security reviews.</strong> We conduct quarterly security audits and penetration testing to identify and fix vulnerabilities.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Transparency & Reporting</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Incident disclosure.</strong> In the unlikely event of a security breach, we will notify affected customers within 72 hours and provide clear information about impact and remediation steps.
                </p>
                <p>
                  <strong>Export your data anytime.</strong> You can export complete archives of your unit data, timelines, and documentation at any time. Your data belongs to you.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Have a security question?</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                We&apos;re happy to discuss our security practices in detail. If you discover a security vulnerability, please report it to us immediately.
              </p>
              <p className="text-sm text-slate-700">
                Contact: <a href="mailto:security@fairvia.com" className="text-sky-600 hover:text-sky-700 font-medium">security@fairvia.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
