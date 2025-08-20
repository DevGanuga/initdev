'use client';

import { useEffect } from 'react';

export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Press '/' to focus search (if exists)
      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const searchInput = document.querySelector<HTMLInputElement>('[data-search-input]');
        if (searchInput && document.activeElement !== searchInput) {
          e.preventDefault();
          searchInput.focus();
        }
      }

      // Press 'Escape' to close modals/dropdowns
      if (e.key === 'Escape') {
        // Close any open modals
        const closeButton = document.querySelector<HTMLButtonElement>('[data-close-modal]');
        if (closeButton) {
          closeButton.click();
        }
        
        // Blur active element if it's an input
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
          activeElement.blur();
        }
      }

      // Alt + H to go home
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.location.href = '/';
      }

      // Alt + C to go to contact
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        window.location.href = '/contact';
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}
