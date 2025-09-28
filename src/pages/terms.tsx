import { PageContainer } from "@/components/layout/PageContainer";

export default function TermsPage() {
  return (
    <PageContainer title="Fairvia Terms of Service" includeFooter>
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-semibold sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            These terms govern your use of Fairvia's pilot escrow workflow platform. By requesting access, you agree to operate in compliance with California landlord-tenant regulations and to provide accurate information during onboarding.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-600 sm:text-base">
            <p>
              Fairvia supplies software tools and coordinates with licensed escrow partners; we are not a law firm, escrow agent, or financial institution. You are responsible for ensuring any deductions, communications, and releases comply with applicable laws.
            </p>
            <p>
              We may update these terms as the product evolves. Continued use of Fairvia after updates constitutes acceptance of the revised terms. Contact <a className="text-sky-600" href="mailto:legal@fairvia.com">legal@fairvia.com</a> with any questions.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
