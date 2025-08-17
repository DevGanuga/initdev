import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center section bg-gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="text-micro text-volt">TECHNICAL CO-FOUNDERS AS A SERVICE</span>
          </div>
          <h1 className="text-display mb-6 animate-fade-in">
            Ship Fast.<br />
            <span className="text-gradient-volt">Scale Smart.</span><br />
            Win Markets.
          </h1>
          <p className="text-xl md:text-2xl text-silver mb-12 max-w-3xl mx-auto animate-fade-in">
            We&apos;re senior engineers who&apos;ve built and sold startups. 
            Full-stack development, B2B automation, cybersecurity, AI integration – 
            all under one roof. <span className="text-pearl font-semibold">From MVP to product-market fit in weeks, not months.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="large" href="/start">
              Start Your 4-Week MVP
            </Button>
            <Button variant="secondary" size="large" href="/case-studies">
              See What We&apos;ve Built
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-volt">4 Weeks</div>
              <div className="text-sm text-silver">Average MVP Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-volt">73%</div>
              <div className="text-sm text-silver">Achieve PMF</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-volt">$2.3M</div>
              <div className="text-sm text-silver">Avg. Seed Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
