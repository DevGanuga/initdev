'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Zap, TrendingUp, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const solutions = [
  {
    id: 'build',
    icon: Zap,
    title: 'Build Fast',
    subtitle: 'For Startups & Innovators',
    description: 'Go from idea to market-ready product in weeks. We build MVPs that validate assumptions and secure funding.',
    features: [
      'Rapid MVP development (4-8 weeks)',
      'Full-stack applications with modern tech',
      'AI-powered features from day one',
      'Analytics and user feedback systems',
      'Investor-ready documentation'
    ],
    useCases: [
      { title: 'Pre-Seed Startup', description: 'Built and launched B2B SaaS MVP in 6 weeks, secured $2M seed funding' },
      { title: 'Corporate Innovation', description: 'Developed AI prototype for Fortune 500, validated with 10,000 users' }
    ],
    cta: 'Launch Your MVP',
    href: '/contact?solution=build'
  },
  {
    id: 'sell',
    icon: TrendingUp,
    title: 'Sell Smarter',
    subtitle: 'For Sales & Marketing Teams',
    description: 'Transform your sales process with automation that converts. From CRM optimization to AI-powered outreach.',
    features: [
      'CRM setup and optimization (HubSpot, Salesforce)',
      'Automated lead scoring and routing',
      'Multi-channel outreach sequences',
      'AI sales agents and chatbots',
      'Revenue operations dashboards'
    ],
    useCases: [
      { title: 'B2B SaaS Company', description: 'Increased qualified leads by 300% with automated outreach system' },
      { title: 'E-commerce Brand', description: 'Reduced cart abandonment by 45% with AI-powered recovery flows' }
    ],
    cta: 'Automate Your Sales',
    href: '/contact?solution=sell'
  },
  {
    id: 'scale',
    icon: Settings,
    title: 'Scale Better',
    subtitle: 'For Growing Operations',
    description: 'Eliminate bottlenecks with intelligent automation. Connect your tools, streamline workflows, scale efficiently.',
    features: [
      'Workflow automation (Zapier, Make, n8n)',
      'System integration and API development',
      'E-commerce automation (Shopify, WooCommerce)',
      'Data pipeline and ETL setup',
      'Process optimization consulting'
    ],
    useCases: [
      { title: 'E-commerce Operation', description: 'Saved 40 hours/week by automating order processing and inventory' },
      { title: 'Professional Services', description: 'Reduced project onboarding from 3 days to 30 minutes' }
    ],
    cta: 'Optimize Operations',
    href: '/contact?solution=scale'
  }
];

export default function SolutionsPage() {
  return (
    <main className="bg-void">
      {/* Hero Section */}
      <section className="pt-8 pb-16 border-b border-midnight">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-micro text-stone uppercase tracking-wider">Solutions</span>
            <h1 className="text-display mt-4 mb-6 text-pearl">
              Built for Your Stage of Growth
            </h1>
            <p className="text-xl text-ash">
              Whether you&apos;re launching your first product, optimizing sales, or scaling operations,
              we have the expertise to accelerate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left: Overview */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-muted flex items-center justify-center">
                        <solution.icon className="w-7 h-7 text-pearl" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-semibold text-pearl">{solution.title}</h2>
                        <p className="text-accent text-sm">{solution.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-ash mb-8">{solution.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-stone">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button size="large" href={solution.href}>
                      {solution.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  
                  {/* Right: Use Cases */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-sm font-semibold text-stone uppercase tracking-wider">Success Stories</h3>
                    {solution.useCases.map((useCase) => (
                      <div key={useCase.title} className="bg-obsidian border border-midnight p-6">
                        <h4 className="text-lg font-semibold text-pearl mb-2">{useCase.title}</h4>
                        <p className="text-stone">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-obsidian border-t border-midnight">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-pearl mb-8 text-center">Which Solution Fits Your Needs?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-charcoal">
                    <th className="text-left py-4 px-4 text-stone text-sm font-medium">If you need...</th>
                    <th className="text-left py-4 px-4 text-stone text-sm font-medium">Timeline</th>
                    <th className="text-left py-4 px-4 text-stone text-sm font-medium">Best for</th>
                    <th className="text-left py-4 px-4 text-stone text-sm font-medium">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal">
                  <tr>
                    <td className="py-4 px-4 text-ash">MVP or prototype</td>
                    <td className="py-4 px-4 text-ash">4-8 weeks</td>
                    <td className="py-4 px-4 text-ash">Startups, innovators</td>
                    <td className="py-4 px-4">
                      <span className="text-accent font-medium">Build Fast</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-ash">Sales automation</td>
                    <td className="py-4 px-4 text-ash">2-4 weeks</td>
                    <td className="py-4 px-4 text-ash">B2B, SaaS, eCommerce</td>
                    <td className="py-4 px-4">
                      <span className="text-accent font-medium">Sell Smarter</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-ash">Workflow optimization</td>
                    <td className="py-4 px-4 text-ash">1-3 weeks</td>
                    <td className="py-4 px-4 text-ash">Growing teams</td>
                    <td className="py-4 px-4">
                      <span className="text-accent font-medium">Scale Better</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-midnight">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero mb-6 text-pearl">
              Not sure which solution you need?
            </h2>
            <p className="text-lg text-ash mb-8">
              Let&apos;s discuss your challenges and find the right approach together.
            </p>
            <Button size="large" href="/contact">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
