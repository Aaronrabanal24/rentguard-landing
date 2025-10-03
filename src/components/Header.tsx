import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/fairvia-logo.svg"
              alt="Fairvia"
              width={140}
              height={36}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <Button size="sm" variant="secondary" className="hidden sm:inline-flex">
              Watch Demo
            </Button>
            <Button size="sm" variant="primary">Join the Pilot</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
