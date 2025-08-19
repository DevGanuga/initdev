'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@/components/ui/SocialIcons';

export function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-volt text-obsidian rounded-full flex items-center justify-center shadow-lg hover:bg-volt/90 hover:scale-110 transition-all duration-300 ${
        showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}
