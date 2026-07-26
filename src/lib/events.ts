/**
 * Event taxonomy.
 *
 * One place where every event name and parameter is defined, so reporting
 * stays consistent and GA4 does not fill up with three spellings of the same
 * idea. GA4 caps a property at 500 distinct event names and silently drops
 * events past the limit, so new names belong here rather than inline.
 *
 * Nothing here sends personally identifying data. See scrubParams below —
 * putting an email address into a GA4 event parameter violates Google's terms
 * and can get a property purged. Hashed identifiers for Google Ads enhanced
 * conversions go through trackLead() in analytics.ts instead, which is the
 * mechanism actually designed for it.
 */

import { gtag, isTaggingEnabled } from './analytics';

// GA4 hard limits.
const MAX_PARAM_NAME = 40;
const MAX_PARAM_VALUE = 100;
const MAX_PARAMS = 25;

const EMAIL_PATTERN = /[^\s@]+@[^\s@]+\.[^\s@]+/;
const LONG_DIGIT_RUN = /\d[\d\s().-]{8,}\d/;

const DEBUG_KEY = 'initdev_analytics_debug';

/** Enable by visiting any page with ?_dbg=1 — persists for the tab. */
export function isDebugEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    if (new URLSearchParams(window.location.search).get('_dbg') === '1') {
      sessionStorage.setItem(DEBUG_KEY, '1');
    }
    return sessionStorage.getItem(DEBUG_KEY) === '1';
  } catch {
    return false;
  }
}

export type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Drops anything resembling an email address or phone number, and clamps
 * names and values to GA4's limits so parameters are not silently discarded.
 */
function scrubParams(params: EventParams): EventParams {
  const clean: EventParams = {};
  let count = 0;

  for (const [rawName, rawValue] of Object.entries(params)) {
    if (rawValue === undefined || rawValue === '') continue;
    if (count >= MAX_PARAMS) break;

    if (typeof rawValue === 'string') {
      if (EMAIL_PATTERN.test(rawValue) || LONG_DIGIT_RUN.test(rawValue)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`[analytics] dropped "${rawName}" — looks like personal data`);
        }
        continue;
      }
    }

    const name = rawName.slice(0, MAX_PARAM_NAME);
    clean[name] =
      typeof rawValue === 'string' ? rawValue.slice(0, MAX_PARAM_VALUE) : rawValue;
    count += 1;
  }

  return clean;
}

/** Every event in the app goes through here. */
export function trackEvent(name: string, params: EventParams = {}) {
  const clean = scrubParams(params);

  if (isDebugEnabled()) {
    console.log(`%c[analytics] ${name}`, 'color:#0084ff;font-weight:bold', clean);
  }

  if (!isTaggingEnabled) return;
  gtag('event', name, clean);
}

// ─── Forms ──────────────────────────────────────────────────

/** First real interaction with a form. The denominator for form drop-off. */
export function trackFormStart(formId: string) {
  trackEvent('form_start', { form_id: formId });
}

/** Multi-step progress. Reveals which step is bleeding people. */
export function trackFormStep(formId: string, step: number, stepName: string) {
  trackEvent('form_step', { form_id: formId, step, step_name: stepName });
}

/** Client-side validation rejections — which field is the friction. */
export function trackFormValidationError(formId: string, fields: string[]) {
  trackEvent('form_validation_error', {
    form_id: formId,
    fields: fields.join(','),
    field_count: fields.length,
  });
}

/**
 * A submission that reached the server and failed. Distinct from a validation
 * error: this one means a lead was probably lost and nobody would otherwise know.
 */
export function trackFormError(formId: string, reason: string) {
  trackEvent('form_error', { form_id: formId, reason });
}

// ─── Engagement ─────────────────────────────────────────────

export function trackScrollDepth(percent: number, pagePath: string) {
  trackEvent('scroll_depth', { percent, page_path: pagePath });
}

export function trackEngagedTime(seconds: number, pagePath: string) {
  trackEvent('engaged_time', { seconds, page_path: pagePath });
}

export function trackOutboundClick(url: string, linkText: string) {
  let domain = '';
  try {
    domain = new URL(url).hostname;
  } catch {
    domain = url;
  }
  trackEvent('outbound_click', { link_url: url, link_domain: domain, link_text: linkText });
}

/** mailto: and tel: clicks — high intent, invisible in form-only tracking. */
export function trackContactClick(method: 'email' | 'phone') {
  trackEvent('contact_click', { method });
}

export function trackCtaClick(label: string, location: string) {
  trackEvent('cta_click', { cta_label: label, cta_location: location });
}

/** Which objection someone needed answered before converting. */
export function trackFaqOpen(question: string, index: number) {
  trackEvent('faq_open', { question, faq_index: index });
}

/** Which service or comparison someone actually cared about. */
export function trackTabView(section: string, tab: string) {
  trackEvent('tab_view', { section, tab });
}

// ─── Performance ────────────────────────────────────────────

/**
 * Core Web Vitals. Values are rounded because GA4 metrics are integers —
 * CLS is scaled by 1000 to survive the rounding.
 */
export function trackWebVital(name: string, value: number, rating: string, id: string) {
  trackEvent('web_vitals', {
    metric_name: name,
    metric_value: Math.round(name === 'CLS' ? value * 1000 : value),
    metric_rating: rating,
    metric_id: id,
  });
}
