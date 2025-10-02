import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { howItWorksContent } from "@/data/content";
import dynamic from "next/dynamic";

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
    title: howItWorksContent.sections[0].title,
    description: howItWorksContent.sections[0].description,
    benefit: howItWorksContent.sections[0].benefit,
    items: howItWorksContent.sections[0].items,
    Mockup: MobileRenterMockup,
  },
  {
    title: howItWorksContent.sections[1].title,
    description: howItWorksContent.sections[1].description,
    benefit: howItWorksContent.sections[1].benefit,
    items: howItWorksContent.sections[1].items,
    Mockup: DepositMockup,
  },
  {
    title: howItWorksContent.sections[2].title,
    description: howItWorksContent.sections[2].description,
    benefit: howItWorksContent.sections[2].benefit,
    items: howItWorksContent.sections[2].items,
    Mockup: ROIBoardMockup,
  },
];

export default function HowItWorksSection() {
  const handleCTA = () => {
    const ctaSection = document.querySelector('#get-started');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-transparent py-16 sm:py-24" id="how-it-works" style={{ zIndex: 1 }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent sm:text-4xl">
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
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <p className="mt-2 text-lg text-slate-300">{section.description}</p>
                <div className="mt-3 inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm px-3 py-1">
                  <span className="text-sm font-semibold text-emerald-300">→ {section.benefit}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-300">{item}</span>
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
