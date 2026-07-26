import { NextResponse } from 'next/server';
import { z } from 'zod';
import { leadValueFromBudget } from '@/lib/analytics';

// ─── Validation ─────────────────────────────────────────────

/**
 * Attribution is passthrough data, not user input we act on, so it is parsed
 * leniently: a malformed or missing block must never cost us the lead.
 */
const touchSchema = z
  .object({
    gclid: z.string().optional(),
    gbraid: z.string().optional(),
    wbraid: z.string().optional(),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
    landing_page: z.string().optional(),
    referrer: z.string().optional(),
    timestamp: z.string().optional(),
  })
  .partial();

const attributionSchema = z
  .object({
    first: touchSchema.optional(),
    last: touchSchema.optional(),
    hubspotutk: z.string().optional(),
    gaClientId: z.string().optional(),
    gaSessionId: z.string().optional(),
  })
  .optional()
  .catch(undefined);

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email is required'),
  company: z.string().optional(),
  message: z.string().min(5, 'Tell us a bit more about your project'),
  /** Sent as its own field so it can drive conversion value and CRM routing. */
  budget: z.string().optional(),
  attribution: attributionSchema,
});

type ContactData = z.infer<typeof contactSchema>;

// ─── HubSpot Submission ─────────────────────────────────────
async function submitToHubSpot(data: ContactData, pageUri?: string) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  if (!portalId || !formGuid) {
    console.warn(
      '[Contact] HubSpot not configured — set HUBSPOT_PORTAL_ID and HUBSPOT_FORM_GUID in .env.local'
    );
    return null;
  }

  // Split name into first/last for HubSpot contact properties
  const nameParts = data.name.trim().split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  const attribution = data.attribution;
  const last = attribution?.last;
  const first = attribution?.first;

  /**
   * The gclid is the field that matters most here: it is the join key for
   * uploading offline conversions back into Google Ads once a lead turns into
   * a real opportunity. Without it stored against the contact, bidding can
   * only ever learn to chase form fills.
   *
   * These map to custom contact properties in HubSpot — see .env.example for
   * the internal names to create before they will persist.
   */
  const attributionFields: Array<[string, string | undefined]> = [
    ['budget_range', data.budget],
    ['gclid', last?.gclid || first?.gclid],
    ['gbraid', last?.gbraid || first?.gbraid],
    ['wbraid', last?.wbraid || first?.wbraid],
    ['utm_source', last?.utm_source],
    ['utm_medium', last?.utm_medium],
    ['utm_campaign', last?.utm_campaign],
    ['utm_term', last?.utm_term],
    ['utm_content', last?.utm_content],
    ['first_touch_source', first?.utm_source],
    ['first_touch_campaign', first?.utm_campaign],
    ['first_touch_landing_page', first?.landing_page],
    ['first_touch_referrer', first?.referrer],
    ['first_touch_timestamp', first?.timestamp],
  ];

  const hubspotPayload = {
    fields: [
      { objectTypeId: '0-1', name: 'firstname', value: firstName },
      { objectTypeId: '0-1', name: 'lastname', value: lastName },
      { objectTypeId: '0-1', name: 'email', value: data.email },
      ...(data.company
        ? [{ objectTypeId: '0-1', name: 'company', value: data.company }]
        : []),
      { objectTypeId: '0-1', name: 'message', value: data.message },
      ...attributionFields
        .filter((entry): entry is [string, string] => Boolean(entry[1]))
        .map(([name, value]) => ({ objectTypeId: '0-1', name, value })),
    ],
    context: {
      // Ties the submission to HubSpot's own tracking timeline for this visitor.
      ...(attribution?.hubspotutk ? { hutk: attribution.hubspotutk } : {}),
      pageUri: pageUri || 'https://initdev.co',
      pageName: 'InitDev — Contact Form',
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hubspotPayload),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('[Contact] HubSpot submission failed:', response.status, errorBody);
    throw new Error(`HubSpot submission failed: ${response.status}`);
  }

  return response.json();
}

// ─── Server-side conversion (GA4 Measurement Protocol) ──────

/**
 * Sends the lead from the server, where ad blockers and tracking prevention
 * cannot reach it. Client-side conversion tracking typically loses a
 * meaningful share of events; this is the reliable copy.
 *
 * Deliberately named `lead_submitted_server` rather than reusing
 * `generate_lead`: firing both under one name would double-count every lead.
 * Run the two side by side, measure the gap, and once you trust the server
 * number, make it the key event in GA4.
 *
 * Fire-and-forget — the Measurement Protocol accepts anything and reports
 * nothing, so its failure must never affect the visitor's response.
 */
async function sendServerConversion(data: ContactData, value: number) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const apiSecret = process.env.GA_MEASUREMENT_API_SECRET;
  const clientId = data.attribution?.gaClientId;

  // Without a client id the event cannot be joined to the visitor's session
  // and would land as a phantom one-page user, which is worse than nothing.
  if (!measurementId || !apiSecret || !clientId) return;

  const last = data.attribution?.last;

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: 'lead_submitted_server',
              params: {
                value,
                currency: 'USD',
                // Marks the hit as belonging to an existing session rather
                // than opening a new one.
                session_id: data.attribution?.gaSessionId,
                engagement_time_msec: 1,
                has_gclid: Boolean(last?.gclid || data.attribution?.first?.gclid),
                utm_source: last?.utm_source,
                utm_campaign: last?.utm_campaign,
              },
            },
          ],
        }),
      }
    );
  } catch (error) {
    console.error('[Contact] Measurement Protocol send failed:', error);
  }
}

// ─── Route Handler ──────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 });
    }

    const data = parsed.data;
    const pageUri = request.headers.get('referer') || undefined;

    /**
     * WARNING: when HubSpot is unconfigured or failing, the only record of the
     * lead is this log line — and serverless logs expire. The visitor is still
     * told we received their message. Wiring an email fallback here is the one
     * remaining gap in the capture path.
     */
    const leadRecord = {
      name: data.name,
      email: data.email,
      company: data.company || '—',
      message: data.message.slice(0, 100),
      gclid: data.attribution?.last?.gclid || data.attribution?.first?.gclid || '—',
      source: data.attribution?.last?.utm_source || 'direct/organic',
      campaign: data.attribution?.last?.utm_campaign || '—',
      timestamp: new Date().toISOString(),
    };

    try {
      const hsResult = await submitToHubSpot(data, pageUri);
      if (hsResult) {
        console.log('[Contact] HubSpot submission successful', {
          gclid: leadRecord.gclid,
          source: leadRecord.source,
        });
      } else {
        console.error('[Contact] LEAD AT RISK — HubSpot not configured:', leadRecord);
      }
    } catch (hubspotError) {
      console.error('[Contact] LEAD AT RISK — HubSpot rejected submission:', hubspotError);
      console.error('[Contact] Lead payload:', leadRecord);
    }

    // Awaited so the serverless function is not frozen mid-flight, but its
    // own failures are swallowed internally and cannot fail the request.
    await sendServerConversion(data, leadValueFromBudget(data.budget));

    return NextResponse.json(
      {
        success: true,
        message: "We've received your message. Expect to hear from us within a few hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
