'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnnouncementBannerProps {
  message: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  storageKey?: string;
}

export function AnnouncementBanner({
  message,
  ctaText,
  ctaLink,
  dismissible = true,
  storageKey = 'announcement-dismissed'
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
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="relative bg-gradient-to-r from-[#0084ff] to-purple-600 text-white overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,white_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,white_0%,transparent_50%)]" />
          </div>

          <div className="container-custom relative">
            <div className="flex items-center justify-center gap-4 py-3 px-4">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              
              <p className="text-sm font-medium text-center">
                {message}
              </p>

              {ctaText && ctaLink && (
                <a
                  href={ctaLink}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs font-medium transition-colors whitespace-nowrap"
                >
                  {ctaText} →
                </a>
              )}

              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
