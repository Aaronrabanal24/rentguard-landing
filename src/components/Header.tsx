import { Button } from "./ui/Button";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-white">Fairvia</span>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="secondary">Watch Demo</Button>
            <Button size="sm" variant="primary">Join the Pilot</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
