import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="px-4 py-12 border-t border-slate-700">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/fairvia-logo.svg"
                alt="Fairvia"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">Plain form, trust by design</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fairvia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
