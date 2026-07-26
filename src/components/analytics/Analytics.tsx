'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import {
  CONSENT_COOKIE,
  CONSENT_REQUIRED_COUNTRIES,
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  PRIMARY_TAG_ID,
  isTaggingEnabled,
  pageview,
} from '@/lib/analytics';
import { captureAttribution } from '@/lib/attribution';

/**
 * Consent defaults, written straight into the document so they execute before
 * gtag.js loads. Google requires defaults to be set first, otherwise the first
 * hit goes out under the wrong assumptions.
 *
 * Denied in the EEA/UK/CH until the banner is answered; granted elsewhere. The
 * returning-visitor replay reads the cookie in plain JS rather than being
 * interpolated from React state, which keeps the markup identical on server
 * and client and avoids a hydration mismatch.
 *
 * url_passthrough keeps the gclid attached across navigation when cookies are
 * denied, and ads_data_redaction strips identifiers from ad requests in that
 * same state — together they preserve modelled conversions without cookies.
 */
const CONSENT_BOOTSTRAP = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'granted',ad_user_data:'granted',
  ad_personalization:'granted',analytics_storage:'granted'
});
gtag('consent','default',{
  region:${JSON.stringify(CONSENT_REQUIRED_COUNTRIES)},
  ad_storage:'denied',ad_user_data:'denied',
  ad_personalization:'denied',analytics_storage:'denied',
  wait_for_update:500
});
var __c = document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=(granted|denied)/);
if (__c) {
  gtag('consent','update',{
    ad_storage:__c[1],ad_user_data:__c[1],
    ad_personalization:__c[1],analytics_storage:__c[1]
  });
}
gtag('set','url_passthrough',true);
gtag('set','ads_data_redaction',true);
gtag('js', new Date());
`.trim();

/**
 * Records the campaign that brought this visit and, when tagging is live,
 * sends the page view. Both run on every App Router navigation — the router
 * never reloads the document, so gtag.js would otherwise see only one page.
 */
function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    captureAttribution();
    const query = searchParams.toString();
    pageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  return (
    <>
      {isTaggingEnabled && PRIMARY_TAG_ID && (
        <>
          <script
            id="consent-bootstrap"
            dangerouslySetInnerHTML={{ __html: CONSENT_BOOTSTRAP }}
          />

          <Script
            id="gtag-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${PRIMARY_TAG_ID}`}
          />

          <Script
            id="gtag-config"
            strategy="afterInteractive"
            // send_page_view is off because RouteTracker owns every view.
            dangerouslySetInnerHTML={{
              __html: [
                GA_MEASUREMENT_ID &&
                  `gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false});`,
                GOOGLE_ADS_ID && `gtag('config','${GOOGLE_ADS_ID}');`,
              ]
                .filter(Boolean)
                .join('\n'),
            }}
          />
        </>
      )}

      {/*
        Rendered whether or not tag IDs exist. Attribution capture has value on
        its own — leads carry their source into HubSpot from day one, before
        any Google property is configured.
        useSearchParams needs a Suspense boundary to keep pages static.
      */}
      <Suspense fallback={null}>
        <RouteTracker />
      </Suspense>
    </>
  );
}
