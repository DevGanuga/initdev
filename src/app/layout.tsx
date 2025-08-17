import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "InitDev | Ship Fast. Scale Smart. Win Markets.",
  description: "Technical co-founders as a service. We're senior engineers who build MVPs in 4 weeks. Full-stack development, B2B automation, cybersecurity, AI integration – all under one roof.",
  keywords: "MVP development, startup technical co-founder, rapid prototyping, B2B automation, cybersecurity, AI integration, full-stack development",
  authors: [{ name: "InitDev" }],
  openGraph: {
    title: "InitDev | Your Startup's Technical Co-Founder",
    description: "From MVP to product-market fit in weeks, not months. We're senior engineers who've built and sold startups.",
    url: "https://initdev.com",
    siteName: "InitDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InitDev | Ship Fast. Scale Smart. Win Markets.",
    description: "Technical co-founders as a service. 4-week MVPs that actually ship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
