export function ProcessSection() {
  const weeks = [
    {
      number: '0',
      color: 'bg-volt',
      textColor: 'text-obsidian',
      outputColor: 'text-volt',
      title: 'Week 0: Reality Check',
      description: "Before we write code, we validate your hypothesis. Who's your customer? What problem are you solving? How will you know if you've succeeded?",
      output: 'Technical specification, architecture diagram, success metrics defined'
    },
    {
      number: '1',
      color: 'bg-azure',
      textColor: 'text-obsidian',
      outputColor: 'text-azure',
      title: 'Week 1: Foundation Sprint',
      description: "Database design, API structure, authentication, deployment pipeline. The boring stuff that breaks if you don't get it right early.",
      output: 'Core infrastructure live, CI/CD pipeline running, first features deployed'
    },
    {
      number: '2',
      color: 'bg-gold',
      textColor: 'text-obsidian',
      outputColor: 'text-gold',
      title: 'Week 2: Feature Velocity',
      description: 'Core features built and deployed daily. Real user testing begins. Analytics tracking everything that matters.',
      output: 'MVP feature-complete, user feedback collected, iteration plan created'
    },
    {
      number: '3',
      color: 'bg-crimson',
      textColor: 'text-white',
      outputColor: 'text-crimson',
      title: 'Week 3: Polish & Optimize',
      description: "UI that doesn't look like a hackathon project. Performance optimization. Mobile responsiveness. Error handling that doesn't lose data.",
      output: 'Production-ready application, load tested, security audited'
    },
    {
      number: '4',
      color: 'bg-success',
      textColor: 'text-white',
      outputColor: 'text-success',
      title: 'Week 4: Launch',
      description: 'Production deployment. Monitoring configured. Documentation complete. Your product is live, with real users, generating real data.',
      output: 'Live product, analytics dashboard, 30-day support plan'
    }
  ];

  return (
    <section className="section bg-midnight">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-micro text-steel mb-4 block">THE PROCESS</span>
          <h2 className="text-hero mb-6">Zero to Launch in 4 Weeks</h2>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            While others are still writing requirements documents, 
            you&apos;ll have real users using your real product.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {weeks.map((week, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${week.color} rounded-full flex items-center justify-center`}>
                    <span className={`${week.textColor} font-bold text-xl`}>{week.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{week.title}</h3>
                  <p className="text-silver mb-4">
                    {week.description}
                  </p>
                  <div className="bg-charcoal/30 rounded-lg p-4">
                    <p className="text-sm text-silver">
                      <span className={week.outputColor}>Output:</span> {week.output}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
