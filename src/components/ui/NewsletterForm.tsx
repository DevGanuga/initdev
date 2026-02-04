'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [gdprAccepted, setGdprAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !gdprAccepted) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Newsletter signup failed');
      }
      
      setSubmitStatus('success');
      setEmail('');
      setGdprAccepted(false);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 border-b border-charcoal/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-pearl mb-2">Stay Ahead of the Curve</h2>
        <p className="text-silver mb-6">Get weekly insights on startup tech, scaling strategies, and industry trends.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-charcoal/50 border border-charcoal text-pearl placeholder:text-steel rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/20 transition-all"
              required
              disabled={isSubmitting}
              aria-describedby={submitStatus !== 'idle' ? 'newsletter-status' : undefined}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !gdprAccepted}
            className="px-6 py-3 bg-volt text-obsidian font-semibold rounded-lg hover:bg-volt/90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Subscribing...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        
        {/* GDPR Checkbox */}
        <div className="mt-4 flex items-start justify-center">
          <input
            id="gdpr-consent"
            type="checkbox"
            checked={gdprAccepted}
            onChange={(e) => setGdprAccepted(e.target.checked)}
            className="mt-1 mr-2 rounded border-charcoal text-volt focus:ring-volt accent-volt"
            required
          />
          <label htmlFor="gdpr-consent" className="text-sm text-steel">
            I agree to receive emails and accept the <Link href="/privacy" className="text-volt hover:underline">Privacy Policy</Link>
          </label>
        </div>
        
        {/* Status Messages */}
        {submitStatus !== 'idle' && (
          <div
            id="newsletter-status"
            role="status"
            aria-live="polite"
            className={`mt-4 text-sm animate-fade-in ${
              submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {submitStatus === 'success'
              ? '✓ Successfully subscribed! Check your email for confirmation.'
              : '✗ Something went wrong. Please try again or contact support.'}
          </div>
        )}
      </div>
    </div>
  );
}
