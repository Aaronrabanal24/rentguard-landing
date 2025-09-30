import { useEffect, type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />

      <div className="safe-top safe-bottom safe-inline relative flex h-full w-full max-w-md flex-col overflow-hidden rounded-none bg-white px-4 py-5 shadow-2xl transition-all sm:h-auto sm:rounded-2xl sm:px-6 sm:py-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{title}</h3>
          <button
            onClick={onClose}
            className="tap flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-gray-500 transition hover:-translate-y-[1px] hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pr-1 sm:pr-0">{children}</div>
      </div>
    </div>
  );
}
