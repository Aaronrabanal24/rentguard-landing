import { MobileFrame } from "@/components/ui/ProductMockup";

export default function MobileRenterMockup() {
  return (
    <MobileFrame>
      <div className="p-6">
        {/* Image placeholder */}
        <div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-slate-100">
          <svg className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Property info */}
        <h3 className="text-lg font-bold text-slate-900">Oak Street - Unit 204</h3>
        <p className="mt-1 text-sm text-slate-600">2 Bed • 1 Bath • $2,400/mo</p>

        {/* CTA Buttons */}
        <button className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
          Ask a Question
        </button>

        <button className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
          Apply Now
        </button>

        <button className="mt-2 w-full rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
          Book a Tour
        </button>
      </div>
    </MobileFrame>
  );
}
