'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const metrics = [
  { value: '6+', label: 'Products Live in Production', sublabel: 'SaaS, AI, consumer, enterprise' },
  { value: '2wk', label: 'Typical Sprint Cycle', sublabel: 'From signed spec to deployed code' },
  { value: '100%', label: 'Code You Own', sublabel: 'In your repos, no lock-in' },
  { value: '2h', label: 'Reply on New Projects', sublabel: 'A senior engineer, not a bot' },
];

const commitments = [
  {
    label: 'Senior-only team',
    text: 'The people who scope your project are the ones who build it. No junior bench, no quiet handoff to a team you never met.',
  },
  {
    label: 'Fixed scope, fixed price',
    text: 'Every sprint runs against a written spec and acceptance criteria. You approve the number before we write a line of code.',
  },
  {
    label: 'Built to hand over',
    text: 'Clean, documented, tested code that lives in your repositories. No black boxes — your team can take the wheel whenever you want.',
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
            Ground Rules
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            The standard we hold
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We&apos;d rather show you working software than a wall of logos. Here&apos;s what stays
            true on every engagement.
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

        {/* Commitment Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#0084ff]/20 hover:bg-white/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#0084ff] font-medium px-3 py-1 rounded-full bg-[#0084ff]/10">
                  {item.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#0084ff]/60 transition-colors" />
              </div>

              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
