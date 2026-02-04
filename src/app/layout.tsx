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
    default: 'InitDev | Full Stack Development Agency',
    template: '%s | InitDev'
  },
  description: "Full stack development agency built for sprint-based delivery of custom software. SaaS platforms, internal tools, and AI-assisted products.",
  keywords: "full stack development, SaaS development, internal tools, AI integration, sprint delivery, software agency, production systems, custom software",
  authors: [{ name: "InitDev" }],
  creator: 'InitDev',
  publisher: 'InitDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InitDev | Full Stack Development Agency",
    description: "Sprint-based delivery of SaaS platforms, internal tools, and AI-assisted products. Production ready.",
    url: "https://initdev.com",
    siteName: "InitDev",
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InitDev - Full Stack Development Agency',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InitDev | Full Stack Development Agency",
    description: "Sprint-based delivery. SaaS, internal tools, AI products. Production ready.",
    images: ['/twitter-image.jpg'],
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