import { Metadata } from 'next';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactMethods from '@/components/sections/contact/ContactMethods';
import OfficeLocations from '@/components/sections/contact/OfficeLocations';
import CalendarScheduling from '@/components/sections/contact/CalendarScheduling';
import FAQ from '@/components/sections/contact/FAQ';
import EmergencySupport from '@/components/sections/contact/EmergencySupport';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contact InitDev | Schedule Your Strategy Call',
  description: 'Ready to build your empire? Schedule a strategy call with InitDev\'s senior engineers and transform your vision into reality.',
  openGraph: {
    title: 'Contact InitDev | Let\'s Build Your Empire',
    description: 'Schedule a strategy call with our senior engineers. From MVP to product-market fit in weeks, not months.',
    url: 'https://initdev.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-obsidian">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-display text-pearl mb-6">
                Let&apos;s Build Your
                <span className="text-gradient-volt">
                  {' '}Empire
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-silver leading-relaxed">
                Schedule a strategy call with our senior engineers. We&apos;ll map out your MVP, 
                timeline, and path to product-market fit – all in 30 minutes.
              </p>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-volt">✓</span>
                  <span className="text-pearl">Response within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-volt">✓</span>
                  <span className="text-pearl">No BS, just results</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-volt">✓</span>
                  <span className="text-pearl">Senior engineers only</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Calendar Scheduling */}
              <CalendarScheduling />
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <ContactMethods />

        {/* Office Locations */}
        <OfficeLocations />

        {/* FAQ Section */}
        <FAQ />

        {/* Emergency Support */}
        <EmergencySupport />
      </main>
      <Footer />
    </>
  );
}
