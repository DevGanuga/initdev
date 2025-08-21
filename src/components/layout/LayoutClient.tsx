'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipToContent />
      <Header />
      <ScrollProgress />
      <CursorFollower />
      
      <ErrorBoundary>
        <main id="main-content" className="relative">
          {children}
        </main>
      </ErrorBoundary>
      
      <Footer />
    </>
  );
}