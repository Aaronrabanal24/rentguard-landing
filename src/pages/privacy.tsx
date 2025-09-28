import { PageContainer } from "@/components/layout/PageContainer";

export default function PrivacyPage() {
  return (
    <PageContainer title="Fairvia Privacy Policy" includeFooter>
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Fairvia respects the privacy of landlords and renters who participate in our pilot program. We collect the minimum amount of information needed to provide escrow workflows, document compliance, and communicate status updates.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-600 sm:text-base">
            <p>
              We never sell personal data. Access to deposit records, inspection notes, and tenant communications is restricted to authorized users within your organization and Fairvia employees who provide support. All data in transit is encrypted with HTTPS and stored using encryption at rest.
            </p>
            <p>
              If you have questions about data handling or would like to request deletion, contact us at <a className="text-sky-600" href="mailto:privacy@fairvia.com">privacy@fairvia.com</a>.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
