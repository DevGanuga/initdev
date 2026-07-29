import { NextResponse } from 'next/server';
import { z } from 'zod';
import { leadValueFromBudget } from '@/lib/analytics';
import { getSupabaseAdmin } from '@/lib/supabase/server';

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
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  referralSource: z.string().optional(),
  // TCPA: lead must explicitly opt in before the SMS agent texts them
  smsConsent: z.boolean().optional().default(false),
  message: z.string().min(5, 'Tell us a bit more about your project'),
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
 * cannot reach it. Deliberately named `lead_submitted_server` rather than
 * reusing `generate_lead` to avoid double-counting with the client event.
 */
async function sendServerConversion(data: ContactData, value: number) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const apiSecret = process.env.GA_MEASUREMENT_API_SECRET;
  const clientId = data.attribution?.gaClientId;

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

// ─── Supabase Lead Capture ──────────────────────────────────
async function saveLeadToSupabase(data: ContactData, sourcePage?: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const { data: lead, error } = await supabase
    .from('leads')
    .insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      project_type: data.projectType || null,
      budget: data.budget || null,
      timeline: data.timeline || null,
      message: data.message,
      referral_source: data.referralSource || null,
      sms_consent: data.smsConsent ?? false,
      status: 'new',
      source_page: sourcePage || null,
    })
    .select('id')
    .single();

  if (error) {
    console.error('[Contact] Supabase insert failed:', error.message);
    throw new Error(`Supabase insert failed: ${error.message}`);
  }

  return lead;
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

    // Persist to Supabase first (source of truth for SMS agent). Failures
    // must not block HubSpot / conversion tracking.
    try {
      const lead = await saveLeadToSupabase(data, pageUri);
      if (lead) {
        console.log('[Contact] Lead saved to Supabase:', lead.id);
      }
    } catch (supabaseError) {
      console.error('[Contact] Supabase error (continuing):', supabaseError);
    }

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
