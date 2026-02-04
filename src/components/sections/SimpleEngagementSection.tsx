'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, Users, Zap } from 'lucide-react';

const engagementModels = [
  {
    icon: Zap,
    title: 'Sprint Project',
    duration: '2-8 weeks',
    description: 'Fast, focused delivery for specific objectives. Perfect for MVPs, automation setup, or system integration.',
    includes: [
      'Fixed scope & timeline',
      'Daily progress updates',
      'Weekly demos',
      'Complete documentation'
    ],
    ideal: 'Startups, product launches, specific features'
  },
  {
    icon: Calendar,
    title: 'Monthly Retainer',
    duration: 'Ongoing',
    description: 'Continuous partnership with flexible priorities. Adapt quickly to market changes and opportunities.',
    includes: [
      'Dedicated hours per month',
      'Priority support',
      'Flexible scope',
      'Strategic consulting'
    ],
    ideal: 'Growing companies, continuous improvement'
  },
  {
    icon: Users,
    title: 'Embedded Team',
    duration: '3+ months',
    description: 'Senior experts integrated with your team. Scale your capabilities without the hiring overhead.',
    includes: [
      'Full-time dedication',
      'Direct collaboration',
      'Knowledge transfer',
      'Long-term ownership'
    ],
    ideal: 'Major initiatives, digital transformation'
  },
  {
    icon: Clock,
    title: 'Emergency Response',
    duration: '24-72 hours',
    description: 'Rapid intervention for critical issues. When your systems are down or deadlines are at risk.',
    includes: [
      'Immediate assessment',
      'Crisis resolution',
      'System stabilization',
      'Prevention planning'
    ],
    ideal: 'Production issues, security incidents'
  }
];

export function SimpleEngagementSection() {
  return (
    <section className="section bg-void">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            className="text-micro text-stone uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Engagement Models
          </motion.p>
          <motion.h2
            className="text-hero mb-6 text-pearl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Flexible Ways to Work Together
          </motion.h2>
          <motion.p
            className="text-lg text-ash"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From quick sprints to long-term partnerships. Choose the model that fits your timeline and budget.
          </motion.p>
        </div>

        {/* Engagement models grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.title}
              className="bg-obsidian border border-midnight p-8 hover:border-charcoal transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-midnight flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <model.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-pearl mb-1">{model.title}</h3>
                  <p className="text-sm text-accent">{model.duration}</p>
                </div>
              </div>
              
              <p className="text-ash mb-6">{model.description}</p>
              
              <div className="space-y-2 mb-6">
                {model.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-stone">
                    <span className="w-1 h-1 bg-accent-muted" />
                    {item}
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-charcoal">
                <p className="text-xs text-stone">
                  <span className="font-medium text-ash">Best for:</span> {model.ideal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <motion.div
          className="mt-16 p-8 bg-obsidian border border-midnight text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-pearl mb-3">Transparent Pricing</h3>
          <p className="text-ash max-w-2xl mx-auto">
            Every project is unique. We provide clear, upfront pricing based on scope and complexity. 
            No hidden fees, no surprises. Honest value for transformative work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}