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
  description: "Hire a senior custom software development team. PM, engineers, QA, and security shipping production-ready SaaS, internal tools, and AI products in fixed-scope sprints. Engagements from $10k.",
  keywords: "hire custom software development team, custom software development company, dedicated development team, MVP development company, SaaS development agency, full stack development, AI product development",
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
    description: "A senior dev team that ships production-ready software in fixed-scope sprints. SaaS, internal tools, and AI products. Engagements from $10k.",
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
    title: "InitDev | Hire a Custom Software Development Team",
    description: "A senior dev team that ships in fixed-scope sprints. SaaS, internal tools, AI products. From $10k.",
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