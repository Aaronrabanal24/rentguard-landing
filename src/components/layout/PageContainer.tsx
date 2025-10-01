import Head from "next/head";
import { motion } from "@/lib/motion";
import type { PropsWithChildren } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface PageContainerProps {
  title: string;
  description?: string;
  includeHeader?: boolean;
  includeFooter?: boolean;
  animateMain?: boolean;
}

export function PageContainer({
  title,
  description = "Fairvia keeps California security deposits neutral, compliant, and transparent.",
  includeHeader = true,
  includeFooter = true,
  animateMain = true,
  children,
}: PropsWithChildren<PageContainerProps>) {
  return (
    <div className="min-dvh-100 bg-slate-50 text-slate-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      {includeHeader && <Header />}

      {animateMain ? (
        <motion.main
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      ) : (
        <main>{children}</main>
      )}

      {includeFooter && <Footer />}
    </div>
  );
}
