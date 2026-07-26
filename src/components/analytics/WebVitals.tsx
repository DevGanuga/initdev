'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { trackWebVital } from '@/lib/events';

/**
 * Core Web Vitals into GA4.
 *
 * Uses Next's built-in reporter, so this costs no extra dependency and
 * measures real visitors rather than a lab run. Worth having before spending
 * on ads: landing page speed feeds Google's page experience signals, and a
 * slow hero is a bounce you would otherwise pay for twice.
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    trackWebVital(metric.name, metric.value, metric.rating ?? 'unknown', metric.id);
  });

  return null;
}
