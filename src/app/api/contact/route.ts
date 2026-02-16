import { NextResponse } from 'next/server';
import { z } from 'zod';

// ─── Validation ─────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email is required'),
  company: z.string().optional(),
  message: z.string().min(5, 'Tell us a bit more about your project'),
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

  const hubspotPayload = {
    fields: [
      { objectTypeId: '0-1', name: 'firstname', value: firstName },
      { objectTypeId: '0-1', name: 'lastname', value: lastName },
      { objectTypeId: '0-1', name: 'email', value: data.email },
      ...(data.company
        ? [{ objectTypeId: '0-1', name: 'company', value: data.company }]
        : []),
      { objectTypeId: '0-1', name: 'message', value: data.message },
    ],
    context: {
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

    // Submit to HubSpot (or log locally if not configured)
    try {
      const hsResult = await submitToHubSpot(data, pageUri);
      if (hsResult) {
        console.log('[Contact] HubSpot submission successful');
      } else {
        // HubSpot not configured — log lead locally so nothing is lost
        console.log('[Contact] Lead captured (no HubSpot):', {
          name: data.name,
          email: data.email,
          company: data.company || '—',
          message: data.message.slice(0, 100),
          timestamp: new Date().toISOString(),
        });
      }
    } catch (hubspotError) {
      // HubSpot failed but we don't want to lose the lead
      console.error('[Contact] HubSpot error (lead still captured):', hubspotError);
      console.log('[Contact] Fallback lead capture:', {
        name: data.name,
        email: data.email,
        company: data.company || '—',
        message: data.message.slice(0, 100),
        timestamp: new Date().toISOString(),
      });
    }

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
