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
  metadataBase: new URL('https://initdev.com'),
  title: {
    default: 'InitDev | Hire a Custom Software Development Team',
    template: '%s | InitDev'
  },
  description: "Hire a senior custom software development team. PM, engineers, QA, and security shipping production-ready custom software, AI products, and secure infrastructure in fixed-scope sprints. Engagements from $10k.",
  keywords: "hire custom software development team, custom software development company, dedicated development team, AI product development, SaaS development agency, full stack development, network and cybersecurity services, secure infrastructure",
  authors: [{ name: "InitDev" }],
  creator: 'InitDev',
  publisher: 'InitDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InitDev | Hire a Custom Software Development Team",
    description: "A senior dev team that ships production-ready software in fixed-scope sprints. Custom software, AI products, and secure infrastructure. Engagements from $10k.",
    url: "https://initdev.com",
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
    title: "InitDev | Hire a Custom Software Development Team",
    description: "A senior dev team that ships in fixed-scope sprints. Custom software, AI products, secure infrastructure. From $10k.",
    images: ['/images/generated/og-cover.png'],
    creator: '@initdev',
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
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
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}