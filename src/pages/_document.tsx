import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="min-h-full bg-white text-slate-900">
      <Head>
        {/* Ensure iOS safe-area insets are respected */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <body className="min-h-full bg-white text-slate-900 antialiased">
        <Main />
        <div id="portal-root" />
        <NextScript />
      </body>
    </Html>
  );
}
