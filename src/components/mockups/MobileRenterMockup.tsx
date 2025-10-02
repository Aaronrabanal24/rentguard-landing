import { MobileFrame } from "@/components/ui/ProductMockup";

export default function MobileRenterMockup() {
  return (
    <MobileFrame>
      <div className="p-5 sm:p-6">
        {/* Image placeholder with gradient */}
        <div className="mb-5 flex h-44 sm:h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 border-2 border-slate-200/50">
          <svg className="h-14 w-14 sm:h-16 sm:w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Property info */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">Oak Street - Unit 204</h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">2 Bed • 1 Bath • <span className="text-emerald-600 font-bold">$2,400/mo</span></p>

        {/* Trust badge */}
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1.5">
          <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-semibold text-emerald-700">Verified listing</span>
        </div>

        {/* CTA Buttons */}
        <button className="mt-5 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3.5 text-sm sm:text-base font-bold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
          Ask a Question
        </button>

        <button className="mt-3 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3.5 text-sm sm:text-base font-bold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
          Apply Now
        </button>

        <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all">
          Book a Tour →
        </button>
      </div>
    </MobileFrame>
  );
}
