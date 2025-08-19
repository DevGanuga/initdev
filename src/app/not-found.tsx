import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-obsidian flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="text-9xl font-bold text-gradient-volt mb-8">
            404
          </div>
          
          <h1 className="text-hero text-pearl mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-silver mb-8">
            Looks like you&apos;ve ventured into uncharted territory. The page you&apos;re looking for 
            doesn&apos;t exist or has been moved.
          </p>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="btn btn-primary"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary"
            >
              Contact Support
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="card-hover p-8">
            <h2 className="text-2xl font-bold text-pearl mb-6">
              Perhaps you were looking for:
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <Link href="/blog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-charcoal/50 transition-colors">
                <span className="text-2xl">📚</span>
                <div>
                  <div className="font-semibold text-pearl">Blog</div>
                  <div className="text-sm text-silver">Engineering insights & tutorials</div>
                </div>
              </Link>
              <Link href="/about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-charcoal/50 transition-colors">
                <span className="text-2xl">👥</span>
                <div>
                  <div className="font-semibold text-pearl">About Us</div>
                  <div className="text-sm text-silver">Learn about our team</div>
                </div>
              </Link>
              <Link href="/#services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-charcoal/50 transition-colors">
                <span className="text-2xl">🛠️</span>
                <div>
                  <div className="font-semibold text-pearl">Services</div>
                  <div className="text-sm text-silver">What we can build for you</div>
                </div>
              </Link>
              <Link href="/#pricing" className="flex items-center gap-3 p-3 rounded-lg hover:bg-charcoal/50 transition-colors">
                <span className="text-2xl">💰</span>
                <div>
                  <div className="font-semibold text-pearl">Pricing</div>
                  <div className="text-sm text-silver">View our packages</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
