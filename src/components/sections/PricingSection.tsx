'use client';

import { motion } from 'framer-motion';
import { Check, X, Zap, Star, ArrowRight, Info } from 'lucide-react';
import { useState } from 'react';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');

  const plans = [
    {
      id: 'starter',
      name: 'Rapid MVP',
      tagline: 'Perfect for validating your idea',
      price: {
        project: '$25,000',
        monthly: '$8,500/mo',
        period: 'one-time',
        timeline: '4-6 weeks'
      },
      features: [
        { text: 'Full-stack web application', included: true },
        { text: 'User authentication & payments', included: true },
        { text: 'Admin dashboard', included: true },
        { text: 'Basic analytics integration', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'AWS/Vercel deployment', included: true },
        { text: '30 days post-launch support', included: true },
        { text: 'Native mobile apps', included: false },
        { text: 'Advanced AI features', included: false },
        { text: 'Enterprise integrations', included: false }
      ],
      highlights: [
        'Ship in 4 weeks',
        'Production-ready code',
        'Investor pitch deck'
      ],
      cta: 'Start Building',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'growth',
      name: 'Scale-Up',
      tagline: 'For funded startups ready to grow',
      price: {
        project: '$75,000',
        monthly: '$15,000/mo',
        period: 'project',
        timeline: '10-12 weeks'
      },
      popular: true,
      features: [
        { text: 'Everything in Rapid MVP', included: true },
        { text: 'Native iOS & Android apps', included: true },
        { text: 'Advanced admin dashboard', included: true },
        { text: 'Real-time features (WebSockets)', included: true },
        { text: 'AI/ML integration', included: true },
        { text: 'Multi-tenant architecture', included: true },
        { text: 'Advanced analytics & BI', included: true },
        { text: '3 months post-launch support', included: true },
        { text: 'Performance optimization', included: true },
        { text: 'Security audit & compliance', included: true }
      ],
      highlights: [
        'Complete platform',
        'Mobile + Web + API',
        'Scale to millions'
      ],
      cta: 'Scale Your Startup',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'Mission-critical systems at scale',
      price: {
        project: 'Custom',
        monthly: 'Custom',
        period: 'custom',
        timeline: '3-6 months'
      },
      features: [
        { text: 'Everything in Scale-Up', included: true },
        { text: 'Microservices architecture', included: true },
        { text: 'Enterprise SSO & security', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Dedicated DevOps setup', included: true },
        { text: 'SLA guarantees', included: true },
        { text: '24/7 monitoring & support', included: true },
        { text: 'Compliance (HIPAA, SOC2, etc)', included: true },
        { text: 'Dedicated team of 4-8 engineers', included: true },
        { text: 'Ongoing partnership', included: true }
      ],
      highlights: [
        'Dedicated team',
        'Custom architecture',
        'Enterprise SLA'
      ],
      cta: 'Contact Sales',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const addOns = [
    { name: 'AI Agent Development', price: '$15K+', description: 'Custom LLM integration' },
    { name: 'Blockchain Integration', price: '$20K+', description: 'Smart contracts & Web3' },
    { name: 'Performance Audit', price: '$5K', description: 'Optimization & scaling' },
    { name: 'Security Audit', price: '$8K', description: 'Penetration testing & fixes' },
    { name: 'Design System', price: '$10K', description: 'Complete UI/UX overhaul' },
    { name: 'Data Migration', price: '$7K+', description: 'Legacy system migration' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-black">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0084ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light text-white mb-6 leading-tight">
            Investment That
            <span className="block bg-gradient-to-r from-[#0084ff] via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Pays for Itself
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            No hidden fees, no surprises. Just transparent pricing for exceptional development.
            100% money-back guarantee if we don&apos;t deliver on time.
          </p>

          {/* Billing Toggle */}
          <motion.div
            className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'project'
                  ? 'bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Project Based
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white text-sm font-medium rounded-full shadow-lg shadow-[#0084ff]/25">
                    <Star className="w-4 h-4 fill-white" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`relative h-full p-8 bg-white/5 backdrop-blur-sm rounded-2xl border ${
                plan.popular ? 'border-[#0084ff]/50 shadow-xl shadow-[#0084ff]/10' : 'border-white/10'
              } hover:border-[#0084ff]/30 transition-all duration-500`}>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-white">
                      {plan.price[billingCycle]}
                    </span>
                    {plan.price.period !== 'custom' && (
                      <span className="text-white/40 text-sm">
                        {billingCycle === 'monthly' ? '/month' : ''}
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-sm mt-2">
                    Timeline: {plan.price.timeline}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {plan.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-gradient-to-r from-[#0084ff]/10 to-purple-500/10 text-[#0084ff] text-xs font-medium rounded-full border border-[#0084ff]/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-white/20 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-white/80' : 'text-white/30 line-through'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.price.period === 'custom' ? '/contact?plan=enterprise' : `/contact?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white shadow-lg shadow-[#0084ff]/25 hover:shadow-xl hover:shadow-[#0084ff]/30'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-light text-white mb-6 text-center">
            Power-Up Your Project
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300"
              >
                <Zap className="w-5 h-5 text-[#0084ff] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{addon.name}</span>
                    <span className="text-[#0084ff] text-sm">{addon.price}</span>
                  </div>
                  <p className="text-white/40 text-xs mt-1">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
            <Info className="w-5 h-5" />
            <span className="font-medium">100% Money-Back Guarantee</span>
            <span className="text-emerald-400/80">• On-time delivery or full refund</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
