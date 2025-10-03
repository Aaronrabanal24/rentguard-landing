import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/Button";

export function CTASection() {
  return (
    <section className="px-4 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to bring transparency to your properties?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join property managers who are building trust through clear, compliant deposit management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" className="min-w-[200px]">
              Join the Pilot →
            </Button>
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
