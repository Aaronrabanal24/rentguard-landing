import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  title?: string;
}

export function PageContainer({ children, title }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-16 mx-auto max-w-4xl sm:px-6 lg:px-8">
        {title && <h1 className="mb-8 text-4xl font-bold text-gray-900">{title}</h1>}
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
    </div>
  );
}
