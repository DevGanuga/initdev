import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

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
  title: "InitDev | Elite Developers for Exceptional Projects",
  description: "Find genius-level developers who actually ship. More focused than Upwork, more reliable than freelancers. We connect you with technical partners who deliver.",
  keywords: "elite developers, technical partners, MVP development, rapid prototyping, senior engineers, project rescue, exceptional delivery",
  authors: [{ name: "InitDev" }],
  openGraph: {
    title: "InitDev | Elite Developers. Exceptional Delivery.",
    description: "Connect with genius-level developers who turn ambitious visions into production-ready systems.",
    url: "https://initdev.com",
    siteName: "InitDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InitDev | Elite Developer Network",
    description: "Genius developers. Exceptional delivery. Real results.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-void`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}