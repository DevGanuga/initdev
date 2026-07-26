import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;
  
  // Add security headers
  const response = NextResponse.next();
  
  /**
   * Content Security Policy.
   *
   * The Google tag reaches more hosts than gtag.js alone: conversion pings go
   * to googleadservices/doubleclick, and GA4 uses regional analytics subdomains.
   * Omitting any of them fails silently — the tag loads, the hit never lands —
   * so this list is deliberately explicit.
   */
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://js.hs-scripts.com https://js.hsforms.net",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net https://api.hsforms.com https://forms.hscollectedforms.net",
    "media-src 'self' https://mybycketvercelprojecttest.s3.sa-east-1.amazonaws.com",
    "frame-src 'self' https://www.youtube.com https://td.doubleclick.net https://www.googletagmanager.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  /**
   * Stamp the visitor's country so the consent banner can decide client-side
   * whether this is an EEA/UK/CH visit, without making every page dynamic by
   * reading headers during render. Absent off-Vercel, which is why the banner
   * does not appear in local development.
   */
  const country = request.headers.get('x-vercel-ip-country') || '';
  if (country) {
    response.cookies.set('initdev_country', country, {
      path: '/',
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
    });
  }
  
  // Add performance headers
  response.headers.set('X-Robots-Tag', 'index, follow');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Handle trailing slashes
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
