'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
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

// Standalone printable documents rendered without the site chrome.
const BARE_ROUTES = ['/hire/resume'];

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
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

  if (pathname && BARE_ROUTES.includes(pathname)) {
    return <main id="main-content">{children}</main>;
  }

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
      
      <ErrorBoundary>
        <main id="main-content" className="relative">
          {children}
        </main>
      </ErrorBoundary>
      
      <Footer />
    </>
  );
}