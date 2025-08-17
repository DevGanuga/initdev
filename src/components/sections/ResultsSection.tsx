import { Button } from '@/components/ui/Button';

export function ResultsSection() {
  const metrics = [
    {
      value: '127',
      label: 'MVPs Launched',
      detail: 'Average time to market: 4.2 weeks'
    },
    {
      value: '$47M',
      label: 'Funding Raised',
      detail: "By startups we've built for"
    },
    {
      value: '73%',
      label: 'Hit Product-Market Fit',
      detail: 'Within 6 months of launch'
    }
  ];

  return (
    <section className="section bg-obsidian">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-micro text-steel mb-4 block">RESULTS</span>
          <h2 className="text-hero mb-6">Built for Founders Who Ship</h2>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            We don&apos;t do vanity metrics. These are real startups with real traction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="card-glass p-8 text-center">
              <div className="text-4xl font-bold text-volt mb-2">{metric.value}</div>
              <div className="text-silver mb-4">{metric.label}</div>
              <p className="text-sm text-steel">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="secondary" size="large" href="/case-studies">
            Read the Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
