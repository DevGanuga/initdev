export function ServicesSection() {
  const services = [
    {
      icon: '⚡',
      iconBg: 'bg-volt/10',
      title: 'Full-Stack Development',
      description: 'Modern web apps that scale from 10 to 10 million users. React, Next.js, Node.js, Python – we speak all the languages that matter.',
      features: [
        'React/Next.js frontends',
        'Node.js/Python backends',
        'PostgreSQL/MongoDB databases',
        'Real-time features with WebSockets'
      ]
    },
    {
      icon: '🔄',
      iconBg: 'bg-azure/10',
      title: 'B2B Automation',
      description: 'The unsexy stuff that makes money. Connect everything, automate everything, scale everything.',
      features: [
        'Salesforce/HubSpot integration',
        'Workflow automation',
        'API orchestration',
        'Data pipeline architecture'
      ]
    },
    {
      icon: '🛡️',
      iconBg: 'bg-crimson/10',
      title: 'Cybersecurity',
      description: 'Security-first architecture from day one. Pass due diligence, win enterprise deals, sleep at night.',
      features: [
        'SOC2/HIPAA compliance',
        'Zero-trust architecture',
        'Penetration testing',
        'Incident response planning'
      ]
    },
    {
      icon: '🤖',
      iconBg: 'bg-gold/10',
      title: 'AI/ML Integration',
      description: 'Beyond the ChatGPT wrapper. Custom models, real intelligence, actual ROI.',
      features: [
        'OpenAI/Anthropic integration',
        'Custom model training',
        'Computer vision solutions',
        'Predictive analytics'
      ]
    },
    {
      icon: '☁️',
      iconBg: 'bg-success/10',
      title: 'Cloud & DevOps',
      description: 'Infrastructure that scales automatically, deploys continuously, and never goes down.',
      features: [
        'AWS/GCP/Azure architecture',
        'Kubernetes orchestration',
        'CI/CD pipelines',
        'Cost optimization'
      ]
    },
    {
      icon: '📊',
      iconBg: 'bg-info/10',
      title: 'Data Engineering',
      description: 'Turn data chaos into competitive advantage. Real insights, real-time, real money.',
      features: [
        'Real-time data pipelines',
        'Data warehouse architecture',
        'ETL/ELT development',
        'Business intelligence dashboards'
      ]
    }
  ];

  return (
    <section className="section bg-obsidian">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-micro text-steel mb-4 block">WHAT WE BUILD</span>
          <h2 className="text-hero mb-6">One Team. Every Skill.</h2>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            No handoffs, no silos, no &quot;that&apos;s not our department.&quot; 
            Every project gets our full stack of expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 hover:border-volt/30 transition-all">
              <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-heading mb-4">{service.title}</h3>
              <p className="text-silver mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-silver">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
