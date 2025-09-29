import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="min-h-full bg-white text-slate-900">
      <Head />
      <body className="min-h-full bg-white text-slate-900 antialiased">
        <Main />
        <div id="portal-root" />
        <NextScript />
      </body>
    </Html>
  );
}
