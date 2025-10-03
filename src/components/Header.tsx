import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/fairvia-logo.svg"
              alt="Fairvia"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="secondary">Watch Demo</Button>
            <Button size="sm" variant="primary">Join the Pilot</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
