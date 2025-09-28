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
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">We’re here to help</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Reach out for pilot enrollment, compliance questions, or product partnerships.
            </p>
          </div>
          <motion.div
            className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-lg font-semibold text-slate-900">Get in touch</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-800">Email:</span> <a className="text-sky-600" href="mailto:hello@fairvia.com">hello@fairvia.com</a>
              </li>
              <li>
                <span className="font-semibold text-slate-800">Pilot support:</span> <a className="text-sky-600" href="mailto:pilot@fairvia.com">pilot@fairvia.com</a>
              </li>
              <li>
                <span className="font-semibold text-slate-800">Media & partnerships:</span> <a className="text-sky-600" href="mailto:partners@fairvia.com">partners@fairvia.com</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
}
