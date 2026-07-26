'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CONSENT_REOPEN_EVENT,
  getStoredConsent,
  needsConsentPrompt,
  setConsent,
  type ConsentChoice,
} from '@/lib/analytics';

/**
 * Consent Mode v2 prompt. Shown only to visitors in the EEA, UK, and
 * Switzerland — determined from the country cookie proxy.ts stamps on the
 * response — and only until they answer.
 *
 * Everyone else already defaults to granted and never sees this.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<ConsentChoice | undefined>();

  useEffect(() => {
    // Deferred to an effect so the server-rendered markup is identical for
    // every visitor and the page stays static.
    setVisible(needsConsentPrompt());
    setCurrent(getStoredConsent());

    // Reopened from the footer. Shown to anyone who asks, regardless of
    // region — a visitor outside the EEA who wants to opt out should be able
    // to, even though their default is granted.
    const reopen = () => {
      setCurrent(getStoredConsent());
      setVisible(true);
    };
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
    setCurrent(choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/95 backdrop-blur-md p-5 sm:p-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-sm text-white/70 leading-relaxed">
                  We use cookies to measure how people find this site and whether our
                  ads work. Decline and we&apos;ll only count you anonymously — the
                  site works exactly the same either way.
                </p>
                {current && (
                  <p className="text-xs text-white/40 mt-2">
                    Current setting: analytics and advertising cookies{' '}
                    <span className="text-white/60">
                      {current === 'granted' ? 'accepted' : 'declined'}
                    </span>
                    .
                  </p>
                )}
              </div>

              <div className="flex gap-3 shrink-0">
                <button
                  onClick={() => choose('denied')}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white border border-white/[0.08] hover:border-white/20 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={() => choose('granted')}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-[#0084ff] hover:bg-[#0084ff]/90 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
