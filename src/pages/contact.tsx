import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";

export default function ContactPage() {
  return (
    <PageContainer title="Contact Fairvia" includeFooter>
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
              Contact
            </span>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Talk to the Fairvia team within one business day</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Need pilot access, compliance guidance, or partnership info? A Fairvia specialist—not a generic support bot—will respond within one business day.
            </p>
          </div>
          <motion.div
            className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-lg font-semibold text-slate-900">Choose the best contact path</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-800">Landlord pilot seats:</span> <a className="text-sky-600" href="mailto:pilot@fairvia.com">pilot@fairvia.com</a>
                <p className="mt-1 text-xs text-slate-500">We hold 30-minute calls within one business day to map your current process and show the compliance ROI.</p>
              </li>
              <li>
                <span className="font-semibold text-slate-800">Compliance & workflow questions:</span> <a className="text-sky-600" href="mailto:hello@fairvia.com">hello@fairvia.com</a>
                <p className="mt-1 text-xs text-slate-500">Ask anything about 21-day deadlines, AB 2801 readiness, or tenant communication. We'll share the templates other landlords use.</p>
              </li>
              <li>
                <span className="font-semibold text-slate-800">Partners, media, investors:</span> <a className="text-sky-600" href="mailto:partners@fairvia.com">partners@fairvia.com</a>
                <p className="mt-1 text-xs text-slate-500">Expect a tailored response within two business days from our leadership team.</p>
              </li>
            </ul>
            <p className="mt-6 text-xs text-slate-500">Prefer a quick intro call? Mention your availability and we'll send a calendar link with your pilot next steps.</p>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
}
