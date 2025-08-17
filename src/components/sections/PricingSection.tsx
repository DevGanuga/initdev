import { Button } from '@/components/ui/Button';

export function PricingSection() {
  const packages = [
    {
      badge: 'PROOF OF CONCEPT',
      badgeColor: 'text-volt',
      name: '2-Week Sprint',
      price: '$15K',
      features: [
        'Clickable prototype',
        'Core feature demo',
        'Technical feasibility',
        'Investor-ready deck'
      ],
      buttonText: 'Start Sprint',
      buttonVariant: 'ghost' as const,
      popular: false
    },
    {
      badge: 'MOST POPULAR',
      badgeColor: 'text-volt',
      name: '4-Week MVP',
      price: '$40-60K',
      features: [
        'Full MVP development',
        'User authentication',
        'Payment integration',
        'Analytics & monitoring',
        '30-day support'
      ],
      buttonText: 'Build MVP',
      buttonVariant: 'primary' as const,
      popular: true
    },
    {
      badge: 'SCALE',
      badgeColor: 'text-azure',
      name: '12-Week Build',
      price: '$150K+',
      features: [
        'Complete platform',
        'Enterprise features',
        'Advanced analytics',
        'API ecosystem',
        '90-day support'
      ],
      buttonText: "Let's Scale",
      buttonVariant: 'ghost' as const,
      popular: false
    },
    {
      badge: 'GROWTH',
      badgeColor: 'text-gold',
      name: 'Ongoing Team',
      price: '$50K/mo',
      features: [
        '3-5 engineers',
        'Continuous iteration',
        'DevOps & monitoring',
        '24/7 support',
        'Monthly strategy'
      ],
      buttonText: 'Hire Team',
      buttonVariant: 'ghost' as const,
      popular: false
    }
  ];

  return (
    <section className="section bg-midnight">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-micro text-steel mb-4 block">ENGAGEMENT MODELS</span>
          <h2 className="text-hero mb-6">Built for Your Stage</h2>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Whether you&apos;re validating an idea or scaling to Series B, 
            we have the right engagement model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`card p-6 hover:border-volt/30 transition-all ${
                pkg.popular ? 'border-volt/20' : ''
              }`}
            >
              <div className="mb-4">
                <span className={`text-micro ${pkg.badgeColor}`}>{pkg.badge}</span>
                <h3 className="text-2xl font-bold mt-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-pearl mt-4">{pkg.price}</div>
              </div>
              <ul className="space-y-2 text-sm text-silver mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <Button 
                variant={pkg.buttonVariant} 
                size="small" 
                href="/contact" 
                className="w-full"
              >
                {pkg.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
