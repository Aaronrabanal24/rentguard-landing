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

        <div className="mt-16 sm:mt-20 space-y-24 sm:space-y-32">
          {SECTIONS.map((section, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={section.title}
                className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {/* Text Content */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-purple-500 text-white font-black text-lg shadow-lg shadow-sky-500/50">
                      {index + 1}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-sky-300">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent leading-tight">
                    {section.title}
                  </h3>

                  <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
                    {section.description}
                  </p>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/15 border-2 border-emerald-400/40 backdrop-blur-sm px-4 py-2.5 shadow-lg shadow-emerald-500/10">
                    <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-bold text-emerald-300">{section.benefit}</span>
                  </div>

                  <ul className="space-y-4 pt-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <svg
                          className="mt-1 h-6 w-6 flex-shrink-0 text-sky-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base sm:text-lg text-slate-200 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      onClick={handleCTA}
                      className="min-h-[48px] px-8 py-3 text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      aria-label="Start your free unit"
                    >
                      Start free unit →
                    </Button>
                  </div>
                </div>

                {/* Image/Mockup - Alternates sides based on index */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex items-center justify-center`}>
                  <div className="relative w-full max-w-lg">
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        index === 0 ? 'from-sky-500/20 to-cyan-500/20' :
                        index === 1 ? 'from-purple-500/20 to-pink-500/20' :
                        'from-emerald-500/20 to-teal-500/20'
                      } blur-3xl opacity-40 animate-pulse`}
                      aria-hidden="true"
                    />

                    <div className="relative transform transition-transform duration-500 hover:scale-105">
                      <section.Mockup />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
