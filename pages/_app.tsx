import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>RentGuard — Trusted Rentals, Verified Matches</title>
        <meta
          name="description"
          content="Connect directly with verified renters and landlords. No fees, no middlemen, just seamless rental experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rentguard-landing.vercel.app/" />
        <meta property="og:title" content="RentGuard — Trusted Rentals, Verified Matches" />
        <meta
          property="og:description"
          content="Connect directly with verified renters and landlords. No fees, no middlemen, just seamless rental experiences."
        />
        <meta property="og:image" content="https://rentguard-landing.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rentguard-landing.vercel.app/" />
        <meta name="twitter:title" content="RentGuard — Trusted Rentals, Verified Matches" />
        <meta
          name="twitter:description"
          content="Connect directly with verified renters and landlords. No fees, no middlemen, just seamless rental experiences."
        />
        <meta name="twitter:image" content="https://rentguard-landing.vercel.app/og-image.jpg" />
      </Head>
      {isProduction && (
        <Script
          strategy="lazyOnload"
          data-domain="rentguard-landing.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      )}
      {/* GA4 optional:
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `,
        }}
      /> */}
      <Component {...pageProps} />
    </>
  );
}
