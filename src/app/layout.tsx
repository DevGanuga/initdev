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
    default: 'InitDev | Elite Developers for Exceptional Projects',
    template: '%s | InitDev'
  },
  description: "Find genius-level developers who actually ship. More focused than Upwork, more reliable than freelancers. We connect you with technical partners who deliver.",
  keywords: "elite developers, technical partners, MVP development, rapid prototyping, senior engineers, project rescue, exceptional delivery, software development, web development, mobile development",
  authors: [{ name: "InitDev" }],
  creator: 'InitDev',
  publisher: 'InitDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InitDev | Elite Developers. Exceptional Delivery.",
    description: "Connect with genius-level developers who turn ambitious visions into production-ready systems.",
    url: "https://initdev.com",
    siteName: "InitDev",
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InitDev - Elite Developers for Exceptional Projects',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InitDev | Elite Developer Network",
    description: "Genius developers. Exceptional delivery. Real results.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable}`}
      >
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}