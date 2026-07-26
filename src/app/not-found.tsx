import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

const suggestions = [
  { href: '/services', label: 'Services', description: 'Custom software, AI, and secure infrastructure' },
  { href: '/cases', label: 'Selected Work', description: 'Products we have shipped, live in production' },
  { href: '/process', label: 'Process', description: 'How a sprint runs, from spec to handover' },
  { href: '/about', label: 'About', description: 'How the studio is put together' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-32">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-7xl md:text-8xl font-extralight text-gradient-blue mb-6">404</div>

          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">Page not found</h1>

          <p className="text-lg text-white/60 leading-relaxed mb-10">
            This page doesn&apos;t exist, or it did once and no longer does. Everything
            below is still where you&apos;d expect it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/" className="btn-premium">
              <span>Back to home</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Start a project</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {suggestions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-card p-5 hover:border-[#0084ff]/30 transition-colors"
              >
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-sm text-white/50 leading-relaxed">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
