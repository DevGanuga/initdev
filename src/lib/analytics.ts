/**
 * GA4 + Google Ads tagging.
 *
 * Every export here is a no-op when the corresponding env var is unset, so the
 * site behaves identically before the IDs exist. Nothing throws, nothing logs
 * to the user's console in production.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_ADS_LEAD_CONVERSION_LABEL;

/** True once at least one Google tag ID is configured. */
export const isTaggingEnabled = Boolean(GA_MEASUREMENT_ID || GOOGLE_ADS_ID);

/** The tag library is loaded under whichever ID is available. */
export const PRIMARY_TAG_ID = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Push straight to dataLayer rather than calling window.gtag. The array exists
 * from the inline bootstrap onward, so calls made before gtag.js finishes
 * loading are still queued and replayed instead of silently dropped.
 */
export function gtag(...args: unknown[]) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

// ─── Consent Mode v2 ────────────────────────────────────────

export type ConsentChoice = 'granted' | 'denied';

export const CONSENT_COOKIE = 'initdev_consent';
export const COUNTRY_COOKIE = 'initdev_country';

/**
 * EEA + UK + Switzerland. Consent defaults to denied in these regions and is
 * granted everywhere else, matching the banner's display logic.
 */
export const CONSENT_REQUIRED_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
  'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH',
];

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

/** Country stamped onto the response by proxy.ts. Empty off-Vercel. */
export function getVisitorCountry(): string {
  return (readCookie(COUNTRY_COOKIE) || '').toUpperCase();
}

export function needsConsentPrompt(): boolean {
  const country = getVisitorCountry();
  if (!country) return false;
  if (!CONSENT_REQUIRED_COUNTRIES.includes(country)) return false;
  return !readCookie(CONSENT_COOKIE);
}

/**
 * Reopens the consent prompt on demand.
 *
 * GDPR requires withdrawing consent to be as easy as giving it, and the banner
 * hides itself permanently once answered — so without this there is no way
 * back. Fired from a footer control and handled by ConsentBanner.
 */
export const CONSENT_REOPEN_EVENT = 'initdev:open-consent';

export function openConsentSettings() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}

export function getStoredConsent(): ConsentChoice | undefined {
  const value = readCookie(CONSENT_COOKIE);
  return value === 'granted' || value === 'denied' ? value : undefined;
}

/**
 * Record the visitor's choice and tell Google about it. Analytics and ad
 * storage move together — we do not offer a partial toggle, so a single
 * decision keeps the banner honest about what it controls.
 */
export function setConsent(choice: ConsentChoice) {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${CONSENT_COOKIE}=${choice}; path=/; max-age=${oneYear}; samesite=lax${
    location.protocol === 'https:' ? '; secure' : ''
  }`;

  gtag('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

// ─── Page views ─────────────────────────────────────────────

/**
 * The App Router does not reload the document between routes, so gtag.js never
 * sees the navigation. send_page_view is disabled at config time and every view
 * — including the first — is sent from here instead.
 */
export function pageview(url: string) {
  if (!isTaggingEnabled) return;
  gtag('event', 'page_view', {
    page_path: url,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
  });
}

// ─── Conversions ────────────────────────────────────────────

/** SHA-256 hex, for enhanced conversions. Returns undefined if unavailable. */
async function sha256Hex(value: string): Promise<string | undefined> {
  if (typeof crypto === 'undefined' || !crypto.subtle) return undefined;
  try {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  } catch {
    return undefined;
  }
}

/**
 * Budget selections map to a conversion value so Ads can bid toward the
 * engagements worth winning rather than treating every form fill alike.
 * Deliberately the bottom of each band — under-reporting is the safe error.
 *
 * Handles both shapes in use: the stepped form's ids ('50-100') and the
 * homepage select's labels ('$50k – $100k').
 */
export function leadValueFromBudget(budget?: string): number {
  if (!budget) return 10000;
  const digits = budget.replace(/[^0-9]/g, ' ').trim().split(/\s+/);
  const first = Number(digits[0]);
  if (!Number.isFinite(first) || first <= 0) return 10000;
  // Both shapes express the band's floor in thousands.
  return first * 1000;
}

export interface LeadConversionInput {
  /** Which form produced this, e.g. 'homepage_cta'. Sent as a GA4 param. */
  formId: string;
  email: string;
  budget?: string;
  /** Extra params merged into the GA4 event (project type, timeline, etc.). */
  params?: Record<string, unknown>;
}

/**
 * Fire the lead conversion. Call this only after the server has confirmed the
 * submission — firing on click reports leads that were never captured.
 */
export async function trackLead({ formId, email, budget, params }: LeadConversionInput) {
  if (!isTaggingEnabled) return;

  const value = leadValueFromBudget(budget);

  // Enhanced conversions: raise match rates by attaching a hashed identifier.
  // Requires enabling enhanced conversions for leads in the Ads UI first.
  const hashedEmail = await sha256Hex(email.trim().toLowerCase());
  if (hashedEmail) {
    gtag('set', 'user_data', { sha256_email_address: hashedEmail });
  }

  gtag('event', 'generate_lead', {
    form_id: formId,
    value,
    currency: 'USD',
    ...params,
  });

  if (GOOGLE_ADS_ID && ADS_LEAD_LABEL) {
    gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${ADS_LEAD_LABEL}`,
      value,
      currency: 'USD',
    });
  }
}
