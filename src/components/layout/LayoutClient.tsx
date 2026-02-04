'use client';

import { useState, useEffect } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { AnnouncementBanner } from "@/components/ui/AnnouncementBanner";

const ANNOUNCEMENT_STORAGE_KEY = 'announcement-dismissed-q1-2026';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [hasAnnouncement, setHasAnnouncement] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage to determine if announcement should show
    const isDismissed = localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY);
    if (!isDismissed) {
      setHasAnnouncement(true);
    }
  }, []);

  const handleDismiss = () => {
    setHasAnnouncement(false);
    localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, 'true');
  };

  // Only show announcement after client-side mount to avoid hydration mismatch
  const showAnnouncement = mounted && hasAnnouncement;

  const announcementContent = showAnnouncement ? (
    <AnnouncementBanner 
      message="Limited spots available for Q1 2026 projects"
      ctaText="Reserve Your Spot"
      ctaLink="/contact"
      onDismiss={handleDismiss}
    />
  ) : null;

  return (
    <>
      <SkipToContent />
      <Header 
        hasAnnouncement={showAnnouncement} 
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