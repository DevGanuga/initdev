'use client';

import { useState, useEffect } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { AnnouncementBanner } from "@/components/ui/AnnouncementBanner";

// Key is quarter-scoped so the banner re-appears each new quarter
function getCurrentQuarterKey(): string {
  const now = new Date();
  const quarter = Math.ceil((now.getMonth() + 1) / 3);
  return `announcement-dismissed-q${quarter}-${now.getFullYear()}`;
}

const ANNOUNCEMENT_STORAGE_KEY = getCurrentQuarterKey();

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [hasAnnouncement, setHasAnnouncement] = useState(false);

  useEffect(() => {
    // Check localStorage after mount to avoid hydration mismatch
    const isDismissed = localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY);
    if (!isDismissed) {
      setHasAnnouncement(true);
    }
  }, []);

  const handleDismiss = () => {
    setHasAnnouncement(false);
    localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, 'true');
  };

  const announcementContent = hasAnnouncement ? (
    <AnnouncementBanner 
      ctaText="Get a Free Assessment"
      ctaLink="/#contact"
      onDismiss={handleDismiss}
    />
  ) : null;

  return (
    <>
      <SkipToContent />
      <Header 
        hasAnnouncement={hasAnnouncement} 
        announcementContent={announcementContent}
      />
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