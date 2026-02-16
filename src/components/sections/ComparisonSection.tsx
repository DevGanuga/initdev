'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Users, Building2, Briefcase, Check, X, Minus } from 'lucide-react';

type Rating = 'yes' | 'no' | 'partial';

interface Alternative {
  key: string;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  ratings: Record<string, Rating>;
  bottomLine: string;
}

const criteria = [
  { key: 'speed', label: 'Ship in under 2 weeks' },
  { key: 'quality', label: 'Production-grade code' },
  { key: 'team', label: 'Structured team (PM, QA, DevOps)' },
  { key: 'scale', label: 'Scale capacity on demand' },
  { key: 'handoff', label: 'Clean handoff to your team' },
  { key: 'cost', label: 'Predictable, fixed pricing' },
];

const alternatives: Alternative[] = [
  {
    key: 'freelancers',
    label: 'Freelancers',
    icon: <Users className="w-5 h-5" />,
    tagline: 'Cheap and fast, until they\'re not.',
    ratings: {
      speed: 'partial',
      quality: 'partial',
      team: 'no',
      scale: 'no',
      handoff: 'partial',
      cost: 'partial',
    },
    bottomLine: 'Great for small tasks. Falls apart on anything complex or multi-sprint.',
  },
  {
    key: 'inhouse',
    label: 'Hiring In-House',
    icon: <Building2 className="w-5 h-5" />,
    tagline: 'The right long-term play. Brutal short-term.',
    ratings: {
      speed: 'no',
      quality: 'yes',
      team: 'partial',
      scale: 'no',
      handoff: 'yes',
      cost: 'no',
    },
    bottomLine: '3–6 months to hire, onboard, and ship. We can bridge the gap while you build.',
  },
  {
    key: 'agency',
    label: 'Big Agencies',
    icon: <Briefcase className="w-5 h-5" />,
    tagline: 'Enterprise process. Enterprise overhead.',
    ratings: {
      speed: 'no',
      quality: 'yes',
      team: 'yes',
      scale: 'yes',
      handoff: 'partial',
      cost: 'no',
    },
    bottomLine: '6-figure minimums. Layers of project managers. Your project gets the junior bench.',
  },
];

function RatingIcon({ rating }: { rating: Rating }) {
  if (rating === 'yes') {
    return <Check className="w-4 h-4 text-green-400" />;
  }
  if (rating === 'no') {
    return <X className="w-4 h-4 text-red-400/70" />;
  }
  return <Minus className="w-4 h-4 text-yellow-400/70" />;
}

export function ComparisonSection() {
  const [active, setActive] = useState('freelancers');
  const activeAlt = alternatives.find((a) => a.key === active)!;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#030308] to-[#050505]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Alternatives
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Why Not Just...
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            You have options. Here&apos;s an honest look at the trade-offs.
          </p>
        </motion.div>

        {/* Tab Pills — same shared pattern */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {alternatives.map((alt) => (
            <button
              key={alt.key}
              onClick={() => setActive(alt.key)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                active === alt.key
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {active === alt.key && (
                <motion.div
                  className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-xl"
                  layoutId="compTab"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {active !== alt.key && (
                <div className="absolute inset-0 border border-white/[0.06] rounded-xl" />
              )}
              <span className="relative flex items-center gap-2">
                {alt.icon}
                {alt.label}
              </span>
            </button>
          ))}
        </div>

        {/* Comparison Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
              {/* Tagline */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#0084ff]/10 text-[#0084ff]">
                  {activeAlt.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{activeAlt.label}</h3>
                  <p className="text-white/50 text-sm">{activeAlt.tagline}</p>
                </div>
              </div>

              {/* Criteria comparison */}
              <div className="space-y-0 mb-6">
                {criteria.map((c, i) => (
                  <motion.div
                    key={c.key}
                    className={`flex items-center justify-between py-3 ${
                      i < criteria.length - 1 ? 'border-b border-white/[0.04]' : ''
                    }`}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-sm text-white/60">{c.label}</span>
                    <div className="flex items-center gap-6">
                      {/* Them */}
                      <div className="flex items-center gap-2 w-24 justify-end">
                        <span className="text-xs text-white/30">Them</span>
                        <RatingIcon rating={activeAlt.ratings[c.key]} />
                      </div>
                      {/* Us */}
                      <div className="flex items-center gap-2 w-20 justify-end">
                        <span className="text-xs text-[#0084ff]/60">Us</span>
                        <Check className="w-4 h-4 text-[#0084ff]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom line */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-sm text-white/70 leading-relaxed">
                  <span className="text-white/90 font-medium">Bottom line: </span>
                  {activeAlt.bottomLine}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
