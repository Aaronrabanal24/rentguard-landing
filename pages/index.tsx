import Hero from "../components/Hero";
import ValueAndForm from "../components/ValueAndForm";
import FAQSchema from "../components/FAQSchema";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueAndForm />
      <FAQSchema />

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="col-span-2">
              <h3 className="mb-4 text-2xl font-bold">RentMatch</h3>
              <p className="mb-4 text-gray-400">
                Transforming the rental experience through direct connections and smart technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RentMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
