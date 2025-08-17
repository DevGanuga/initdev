import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="section bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-hero mb-6">
            Your Competitors Are Building.
            <span className="block text-gradient-volt">What Are You Waiting For?</span>
          </h2>
          <p className="text-xl text-silver mb-12">
            60-minute strategy call. Honest technical assessment. 
            Clear path forward. No PowerPoints, no BS, just straight talk about 
            what it takes to win your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" href="/start">
              Book Strategy Call
            </Button>
            <Button variant="secondary" size="large" href="/48-hour-prototype">
              Try 48-Hour Prototype
            </Button>
          </div>
          <p className="text-sm text-steel mt-8">
            Average response time: 2 hours during business hours
          </p>
        </div>
      </div>
    </section>
  );
}
