import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Growth & Demand Gen leader with 12+ years experience in B2B SaaS and D2C. Head of Growth at Jeeva AI. Managed $700K+/month media budget, drove 100x organic growth, CPL reduced 60%. Expert in PLG, SLG, paid media, SEO, and GenAI marketing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://moulikjain.com"),
  title: "Moulik Jain | Growth & Demand Gen Leader | Mumbai",
  description,
  keywords:
    "growth marketing, demand generation, B2B SaaS marketing, PLG, performance marketing, HubSpot, Mumbai, Moulik Jain, Jeeva AI, SEO, paid media, CMO",
  authors: [{ name: "Moulik Jain" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://moulikjain.com" },
  openGraph: {
    type: "website",
    url: "https://moulikjain.com",
    title: "Moulik Jain | Growth & Demand Gen Leader",
    description,
    siteName: "Moulik Jain",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moulik Jain | Growth & Demand Gen Leader",
    description,
    creator: "@moulikjain",
    images: ["/opengraph-image"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moulik Jain",
  jobTitle: "Head of Growth, Marketing & Demand Generation",
  url: "https://moulikjain.com",
  email: "jainmoulik@gmail.com",
  telephone: "+91-7073973939",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/in/moulik-jain",
    "https://github.com/jainmoulik",
  ],
  knowsAbout: [
    "Growth Marketing",
    "Demand Generation",
    "B2B SaaS",
    "PLG",
    "SEO",
    "Paid Media",
    "HubSpot",
    "Salesforce",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Moulik Jain",
  url: "https://moulikjain.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://moulikjain.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://moulikjain.com",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#hero", "#about"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BBZ5NBM');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5BBZ5NBM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
