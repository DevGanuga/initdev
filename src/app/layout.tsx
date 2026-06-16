import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "@/components/layout/LayoutClient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://initdev.co'),
  title: {
    default: 'InitDev | Custom Software Development Studio',
    template: '%s | InitDev'
  },
  description: "InitDev is a software development studio with 13+ production apps shipped. A senior team — PM, engineers, QA, and security — building custom software, AI products, and secure infrastructure in fixed-scope sprints. Engagements from $10k.",
  keywords: "software development studio, custom software development, dedicated development team, AI product development, SaaS development, full stack development, network and cybersecurity services, secure infrastructure",
  authors: [{ name: "InitDev" }],
  creator: 'InitDev',
  publisher: 'InitDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InitDev | Custom Software Development Studio",
    description: "A software development studio with 13+ apps shipped. Senior team building custom software, AI products, and secure infrastructure in fixed-scope sprints. From $10k.",
    url: "https://initdev.co",
    siteName: "InitDev",
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/images/generated/og-cover.png',
        width: 1216,
        height: 640,
        alt: 'InitDev — Custom software, AI & secure infrastructure',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InitDev | Custom Software Development Studio",
    description: "A development studio with 13+ apps shipped. Custom software, AI products, secure infrastructure — in fixed-scope sprints. From $10k.",
    images: ['/images/generated/og-cover.png'],
    creator: '@initdev',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InitDev',
  url: 'https://initdev.co',
  description:
    'A software development studio. A senior team building custom software, AI products, and secure infrastructure in fixed-scope sprints.',
  email: 'success@initdev.co',
  parentOrganization: {
    '@type': 'Organization',
    name: 'The Dravidor Foundry',
    url: 'https://www.thedravidorfoundry.org',
  },
  knowsAbout: [
    'Custom Software Development',
    'AI Product Development',
    'SaaS Platforms',
    'Network & Cybersecurity',
    'Cloud Infrastructure',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}