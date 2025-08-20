'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8 text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          
          <h1 className="text-3xl font-medium text-white mb-2">
            Something went wrong!
          </h1>
          
          <p className="text-white/60 mb-6">
            We encountered an unexpected error while processing your request. 
            Our team has been notified and we&apos;re working on a fix.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6 text-left">
              <summary className="text-sm text-white/40 cursor-pointer hover:text-white/60">
                Error details (development only)
              </summary>
              <div className="mt-2 p-3 bg-black/50 rounded-lg">
                <p className="text-xs text-red-400 font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-white/40 mt-2">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            </details>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white rounded-lg hover:shadow-lg hover:shadow-[#0084ff]/25 transition-all"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>
        </div>

        {/* Additional help text */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm">
            Need immediate assistance?
          </p>
          <Link
            href="/contact"
            className="text-[#0084ff] hover:text-[#00a6ff] text-sm transition-colors"
          >
            Contact our support team →
          </Link>
        </div>
      </div>
    </div>
  );
}
