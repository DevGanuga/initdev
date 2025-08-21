'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnnouncementBannerProps {
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  storageKey?: string;
  onDismiss?: () => void;
}

export function AnnouncementBanner({
  message = "🚀 Limited spots available for Q1 2025 projects",
  ctaText = "Reserve Your Spot",
  ctaLink = "/contact",
  dismissible = true,
  storageKey = 'announcement-dismissed-q1-2025',
  onDismiss
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if announcement was previously dismissed
    const isDismissed = localStorage.getItem(storageKey);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(storageKey, 'true');
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      exit={{ y: -48 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white h-12 shadow-lg"
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
              <motion.a
                href={ctaLink}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-blue-700 hover:bg-white/95 rounded-full text-xs font-semibold transition-all group shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="hidden sm:inline">{ctaText}</span>
                <span className="sm:hidden">Reserve</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            )}

            {dismissible && (
              <motion.button
                onClick={handleDismiss}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/90 hover:text-white"
                aria-label="Dismiss announcement"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}