'use client';

import React, { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[60vh] flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8 text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              
              <h2 className="text-2xl font-medium text-white mb-2">
                Oops! Something went wrong
              </h2>
              
              <p className="text-white/60 mb-6">
                We encountered an unexpected error. Don&apos;t worry, our team has been notified.
              </p>

              {this.state.error && process.env.NODE_ENV === 'development' && (
                <details className="mb-6 text-left">
                  <summary className="text-sm text-white/40 cursor-pointer hover:text-white/60">
                    Error details (dev only)
                  </summary>
                  <pre className="mt-2 p-3 bg-black/50 rounded-lg text-xs text-red-400 overflow-x-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}

              <div className="flex gap-3 justify-center">
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0084ff] text-white rounded-lg hover:bg-[#0066cc] transition-all"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
