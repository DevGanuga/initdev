'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const metrics = [
  { value: '30+', label: 'Production Systems Shipped', sublabel: 'SaaS, internal tools, AI products' },
  { value: '96%', label: 'On-Time Delivery Rate', sublabel: 'Sprint commitments met' },
  { value: '<2wk', label: 'Average Sprint Cycle', sublabel: 'Spec to deployed code' },
  { value: '0', label: 'Projects Abandoned Mid-Build', sublabel: 'We finish what we start' },
];

const signals = [
  {
    quote: 'Shipped our entire platform rebuild in 8 weeks. The codebase they handed off was cleaner than what our internal team had written.',
    author: 'CTO',
    company: 'Series A SaaS',
    context: 'Platform Rebuild',
  },
  {
    quote: 'First agency we\'ve worked with that actually delivers on sprint commitments. No scope creep, no surprise delays.',
    author: 'VP Engineering',
    company: 'Enterprise Client',
    context: 'Staff Augmentation',
  },
  {
    quote: 'They built our AI pipeline from scratch and it handled 10x the load we projected on launch day. Zero downtime.',
    author: 'Founder',
    company: 'AI Startup',
    context: 'AI Product Build',
  },
];

export function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080810] to-[#050505]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Proven Delivery
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We don&apos;t have a portfolio of 500 projects. We have systems running in production.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center group hover:border-[#0084ff]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-3xl md:text-4xl font-light text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-white/70 font-medium mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-white/40">
                {metric.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.company}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#0084ff]/20 hover:bg-white/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              {/* Context badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#0084ff] font-medium px-3 py-1 rounded-full bg-[#0084ff]/10">
                  {signal.context}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#0084ff]/60 transition-colors" />
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                &ldquo;{signal.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="border-t border-white/[0.06] pt-4">
                <div className="text-white/80 text-sm font-medium">{signal.author}</div>
                <div className="text-white/40 text-xs">{signal.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
