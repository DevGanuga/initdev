'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import {
  trackContactClick,
  trackCtaClick,
  trackEngagedTime,
  trackEvent,
  trackOutboundClick,
  trackScrollDepth,
} from '@/lib/events';

const SCROLL_MILESTONES = [25, 50, 75, 90];
const TIME_MILESTONES = [15, 30, 60, 120];

/**
 * Page-level engagement signals.
 *
 * Click tracking is delegated from the document rather than wired into each
 * component: outbound links, mailto/tel, and any element carrying data-track
 * are picked up automatically, so adding a tracked CTA later means adding an
 * attribute rather than an import.
 *
 * Everything resets on route change, because the App Router keeps this
 * component mounted across navigations.
 */
export function EngagementTracker() {
  const pathname = usePathname();

  // Refs rather than state — none of this should trigger a re-render.
  const firedScroll = useRef<Set<number>>(new Set());
  const firedTime = useRef<Set<number>>(new Set());
  const engagedSeconds = useRef(0);
  const maxScroll = useRef(0);

  // ─── Scroll depth + engaged time, reset per page ───
  useEffect(() => {
    firedScroll.current = new Set();
    firedTime.current = new Set();
    engagedSeconds.current = 0;
    maxScroll.current = 0;

    let ticking = false;

    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      // A page shorter than the viewport cannot be scrolled; reporting 100%
      // for it would make depth data meaningless.
      if (scrollable <= 0) return;

      const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      if (percent > maxScroll.current) maxScroll.current = percent;

      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !firedScroll.current.has(milestone)) {
          firedScroll.current.add(milestone);
          trackScrollDepth(milestone, pathname);
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    // Only counts time the tab is actually visible, so a page left open in a
    // background tab does not read as two hours of engagement.
    const tick = () => {
      if (document.visibilityState !== 'visible') return;
      engagedSeconds.current += 1;
      for (const milestone of TIME_MILESTONES) {
        if (engagedSeconds.current >= milestone && !firedTime.current.has(milestone)) {
          firedTime.current.add(milestone);
          trackEngagedTime(milestone, pathname);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = window.setInterval(tick, 1000);
    measure();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearInterval(timer);
    };
  }, [pathname]);

  // ─── Delegated click tracking, bound once ───
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest) return;

      // Explicit opt-in wins: data-track="cta_click" data-track-label="…"
      const tracked = target.closest<HTMLElement>('[data-track]');
      if (tracked) {
        const name = tracked.dataset.track;
        if (name === 'cta_click') {
          trackCtaClick(
            tracked.dataset.trackLabel || tracked.textContent?.trim().slice(0, 60) || 'unlabeled',
            tracked.dataset.trackLocation || 'unknown'
          );
        } else if (name) {
          trackEvent(name, {
            label: tracked.dataset.trackLabel,
            location: tracked.dataset.trackLocation,
          });
        }
      }

      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const text = link.textContent?.trim().slice(0, 60) || '';

      if (href.startsWith('mailto:')) {
        trackContactClick('email');
        return;
      }
      if (href.startsWith('tel:')) {
        trackContactClick('phone');
        return;
      }
      if (href.startsWith('#') || href.startsWith('/')) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) {
          trackOutboundClick(url.href, text);
        }
      } catch {
        // Not a parseable URL; nothing worth reporting.
      }
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
