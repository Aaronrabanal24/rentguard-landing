import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RentMatch Transform Your Rental Experience</title>
        <meta
          name="description"
          content="Connect directly with verified renters and landlords. No fees, no middlemen, just seamless rental experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rentguard-landing.vercel.app/" />
        <meta property="og:title" content="RentMatch Transform Your Rental Experience" />
        <meta
          property="og:description"
          content="Connect directly with verified renters and landlords. No fees, no middlemen, just seamless rental experiences."
        />
        <meta property="og:image" content="https://rentguard-landing.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rentguard-landing.vercel.app/" />
        <meta name="twitter:title" content="RentMatch Transform Your Rental Experience" />
        <meta
          name="twitter:description"
          content="Connect directly with verified renters and landlords. No fees, no middlemen, just seamless rental experiences."
        />
        <meta name="twitter:image" content="https://rentguard-landing.vercel.app/og-image.jpg" />

        {/* Plausible Analytics — replace domain if needed */}
        <script defer data-domain="rentguard-landing.vercel.app" src="https://plausible.io/js/script.js" />
        {/* GA4 optional:
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
