/**
 * Lead source attribution.
 *
 * Captures the click identifiers and campaign parameters from the landing URL
 * and holds them until a form is submitted, so a lead that arrives days after
 * the click still carries the campaign that paid for it.
 *
 * Two touches are stored:
 *   first — written once, never overwritten. What originally found them.
 *   last  — rewritten on every campaign-bearing visit. What closed them.
 *
 * The gclid is the field that matters most: it is the key for uploading
 * offline conversions back into Google Ads once a lead becomes a real
 * opportunity, which is how bidding learns to chase qualified conversations
 * rather than form fills.
 */

const STORAGE_KEY = 'initdev_attribution';
const TTL_DAYS = 90;

/** Google click identifiers. gbraid/wbraid replace gclid in privacy-restricted contexts. */
const CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid'] as const;

const CAMPAIGN_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export interface Touch {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
  timestamp?: string;
}

export interface Attribution {
  first?: Touch;
  last?: Touch;
  /** HubSpot's own tracking cookie, which links this submission to their timeline. */
  hubspotutk?: string;
  /** GA4 client id, so the server-side lead event joins the same user. */
  gaClientId?: string;
  /** GA4 session id, so it also joins the same session rather than starting one. */
  gaSessionId?: string;
}

interface StoredAttribution {
  first?: Touch;
  last?: Touch;
  expires: number;
}

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

function readStore(): StoredAttribution | undefined {
  if (typeof localStorage === 'undefined') return undefined;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as StoredAttribution;
    if (!parsed.expires || parsed.expires < Date.now()) {
      localStorage.removeItem(STORAGE_KEY);
      return undefined;
    }
    return parsed;
  } catch {
    return undefined;
  }
}

function writeStore(store: StoredAttribution) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Private browsing or a full quota. Attribution is best-effort by design;
    // losing it must never take the form down with it.
  }
}

/** Reads the current URL into a touch. Returns undefined if nothing to record. */
function touchFromLocation(): Touch | undefined {
  if (typeof window === 'undefined') return undefined;

  const params = new URLSearchParams(window.location.search);
  const touch: Touch = {};

  for (const key of CLICK_ID_PARAMS) {
    const value = params.get(key);
    if (value) touch[key] = value;
  }
  for (const key of CAMPAIGN_PARAMS) {
    const value = params.get(key);
    if (value) touch[key] = value;
  }

  const hasCampaignData = Object.keys(touch).length > 0;

  // A bare organic visit is worth recording as a first touch, but must never
  // overwrite an existing one — that would hand credit for a paid click to a
  // later direct return visit.
  if (!hasCampaignData && readStore()) return undefined;

  touch.landing_page = window.location.pathname + window.location.search;
  touch.referrer = document.referrer || undefined;
  touch.timestamp = new Date().toISOString();

  return touch;
}

/**
 * Record the current visit. Safe to call on every page load — only entries
 * carrying campaign data (or the very first visit) mutate the store.
 */
export function captureAttribution() {
  const touch = touchFromLocation();
  if (!touch) return;

  const existing = readStore();
  writeStore({
    first: existing?.first ?? touch,
    last: touch,
    expires: Date.now() + TTL_DAYS * 24 * 60 * 60 * 1000,
  });
}

/**
 * GA4 writes `_ga` as `GA1.1.<clientId>` where clientId is itself dotted, e.g.
 * `GA1.1.1234567890.1700000000` → client id `1234567890.1700000000`.
 */
function readGaClientId(): string | undefined {
  const raw = readCookie('_ga');
  if (!raw) return undefined;
  const parts = raw.split('.');
  return parts.length >= 4 ? `${parts[2]}.${parts[3]}` : undefined;
}

/**
 * Session id lives in the per-stream cookie `_ga_<STREAM>`, formatted
 * `GS1.1.<sessionId>.<sessionNumber>....`. The stream suffix is unknown here,
 * so match on the prefix rather than hardcoding a measurement id.
 */
function readGaSessionId(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('_ga_'));
  if (!cookie) return undefined;
  const parts = cookie.split('=')[1]?.split('.');
  return parts && parts.length >= 3 ? parts[2] : undefined;
}

/** Everything known about how this visitor got here, for the form payload. */
export function getAttribution(): Attribution {
  const store = readStore();
  return {
    first: store?.first,
    last: store?.last,
    hubspotutk: readCookie('hubspotutk'),
    gaClientId: readGaClientId(),
    gaSessionId: readGaSessionId(),
  };
}
