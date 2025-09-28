import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>Fairvia — Professional Deposit Management</title>
        <meta
          name="description"
          content="Fairvia gives California landlords a professional, tenant-friendly deposit workflow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rentguard-landing.vercel.app/" />
        <meta property="og:title" content="Fairvia — Professional Deposit Management" />
        <meta
          property="og:description"
          content="Fairvia keeps deposits neutral, compliant, and transparent for California rentals."
        />
        <meta property="og:image" content="https://rentguard-landing.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rentguard-landing.vercel.app/" />
        <meta name="twitter:title" content="Fairvia — Professional Deposit Management" />
        <meta
          name="twitter:description"
          content="Fairvia keeps deposits neutral, compliant, and transparent for California rentals."
        />
        <meta name="twitter:image" content="https://rentguard-landing.vercel.app/og-image.jpg" />
        {isProduction && (
          <>
            <script
              defer
              data-domain="rentguard-landing-git-main-aaron-rabanals-projects.vercel.app"
              src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
            />
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }",
              }}
            />
          </>
        )}
      </Head>
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
