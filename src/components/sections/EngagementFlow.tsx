'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Initial Call',
    duration: '30 minutes',
    description:
      'Tell us what you need. We ask about your product, timeline, and constraints. You ask us anything. No pitch deck, no NDAs — just a technical conversation.',
    outcome: 'You leave with clarity on whether we\'re the right fit.',
  },
  {
    number: '02',
    icon: <FileSearch className="w-6 h-6" />,
    title: 'Scoping & Proposal',
    duration: '3–5 days',
    description:
      'We write a detailed spec for the first sprint: features, architecture decisions, acceptance criteria, and delivery timeline. You see exactly what you\'re paying for.',
    outcome: 'A concrete proposal with fixed scope and fixed price.',
  },
  {
    number: '03',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Sprint Starts',
    duration: '1–2 weeks',
    description:
      'Development begins. You get async updates, access to Linear for tracking, and a staging environment. At sprint end: working, tested, deployed code.',
    outcome: 'Production-ready code shipped to your environment.',
  },
];

export function EngagementFlow() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050508] to-black" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            How to Start
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            From Call to Code in Days
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            No months of discovery. No 40-page RFPs. A clear path from first conversation to shipped code.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="group relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="flex gap-6 md:gap-8">
                  {/* Left: Step number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#0084ff]/10 border border-[#0084ff]/20 flex items-center justify-center text-[#0084ff] font-mono text-sm font-bold">
                      {step.number}
                    </div>
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-[#0084ff]/20 to-transparent mt-2 min-h-[40px]" />
                    )}
                  </div>

                  {/* Right: Content card */}
                  <div className="flex-1 pb-6">
                    <div className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#0084ff]/20 hover:bg-white/[0.04] transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#0084ff]/10 text-[#0084ff]">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-medium text-white">{step.title}</h3>
                        <span className="text-xs text-white/40 font-mono px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-white/60 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Outcome */}
                      <div className="flex items-start gap-2 pt-3 border-t border-white/[0.06]">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0084ff] flex-shrink-0" />
                        <span className="text-sm text-white/70 font-medium">
                          {step.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white font-medium rounded-xl shadow-xl shadow-[#0084ff]/20 hover:shadow-2xl hover:shadow-[#0084ff]/30 hover:scale-[1.02] transition-all duration-300"
            >
              Book Your Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-white/40 text-sm mt-3">Free. 30 minutes. No strings attached.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
