'use client';

import { X, ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function AnnouncementBanner({
  message = "Limited spots available for Q1 2026 projects",
  ctaText = "Reserve Your Spot",
  ctaLink = "/contact",
  dismissible = true,
  onDismiss
}: AnnouncementBannerProps) {
  return (
    <div 
      className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white h-12"
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {message}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {ctaText && ctaLink && (
              <a
                href={ctaLink}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-blue-700 hover:bg-white/95 rounded-full text-xs font-semibold transition-all group shadow-md"
              >
                <span className="hidden sm:inline">{ctaText}</span>
                <span className="sm:hidden">Reserve</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}

            {dismissible && (
              <button
                onClick={onDismiss}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/90 hover:text-white"
                aria-label="Dismiss announcement"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}