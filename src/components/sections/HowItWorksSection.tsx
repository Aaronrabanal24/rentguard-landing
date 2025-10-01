import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { howItWorksContent } from "@/data/content";
import dynamic from "next/dynamic";

const TimelineMockup = dynamic(() => import("@/components/mockups/TimelineMockup"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />,
});

const ROIBoardMockup = dynamic(() => import("@/components/mockups/ROIBoardMockup"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />,
});

const DepositMockup = dynamic(() => import("@/components/mockups/DepositMockup"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />,
});

const MobileRenterMockup = dynamic(() => import("@/components/mockups/MobileRenterMockup"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />,
});

const SECTIONS = [
  {
    title: howItWorksContent.sections[0].title, // "List and capture"
    items: howItWorksContent.sections[0].items,
    Mockup: MobileRenterMockup, // Smart unit link with QR, Trust page
  },
  {
    title: howItWorksContent.sections[1].title, // "Show proof to owners"
    items: howItWorksContent.sections[1].items,
    Mockup: ROIBoardMockup, // ROI board
  },
  {
    title: howItWorksContent.sections[2].title, // "Deposit closeout"
    items: howItWorksContent.sections[2].items,
    Mockup: DepositMockup, // Templates, itemized letters
  },
  {
    title: howItWorksContent.sections[3].title, // "Renter experience"
    items: howItWorksContent.sections[3].items,
    Mockup: TimelineMockup, // Timeline view
  },
];

export default function HowItWorksSection() {
  const handleCTA = () => {
    const ctaSection = document.querySelector('#get-started');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          {SECTIONS.map((section) => (
            <motion.div
              key={section.title}
              className="grid gap-8 lg:grid-cols-2 lg:gap-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    size="md"
                    onClick={handleCTA}
                    className="min-h-[44px] min-w-[44px] px-6"
                    aria-label="Start your free unit"
                  >
                    Start free unit
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <section.Mockup />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
