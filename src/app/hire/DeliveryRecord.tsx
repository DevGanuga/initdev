'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Download, ArrowUpRight } from 'lucide-react';
import {
  engagements,
  TIMELINE_MONTHS,
  TIMELINE_SPAN,
  type Engagement,
} from './data';

const pct = (n: number) => `${(n / TIMELINE_SPAN) * 100}%`;

export function DeliveryRecord() {
  const [selectedId, setSelectedId] = useState(engagements[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selected = engagements.find((e) => e.id === selectedId) ?? engagements[0];

  return (
    <div>
      {/* ── Gantt ── */}
      <div className="glass-card p-5 sm:p-7 mb-5 overflow-x-auto">
        <div className="min-w-[680px]">
          {/* Month axis */}
          <div className="relative h-5 mb-3 ml-[152px]">
            {TIMELINE_MONTHS.map((m, i) => (
              <span
                key={m}
                className="absolute text-[10px] text-white/25 font-mono -translate-x-1/2"
                style={{ left: pct(i + 0.5) }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Rows */}
          <div className="relative">
            {/* Grid lines */}
            <div className="absolute inset-0 ml-[152px] pointer-events-none">
              {TIMELINE_MONTHS.map((m, i) => (
                <div
                  key={m}
                  className="absolute top-0 bottom-0 w-px bg-white/[0.04]"
                  style={{ left: pct(i) }}
                />
              ))}
              {/* "now" marker */}
              <div className="absolute top-0 bottom-0 right-0 w-px bg-[#0084ff]/40" />
              <span className="absolute -top-0.5 right-0 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0084ff]" />
            </div>

            <div className="relative space-y-1.5">
              {engagements.map((e, i) => {
                const isSelected = e.id === selectedId;
                const isHovered = e.id === hoveredId;
                const dim = hoveredId !== null && !isHovered && !isSelected;

                return (
                  <motion.div
                    key={e.id}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                  >
                    {/* Label */}
                    <button
                      onClick={() => setSelectedId(e.id)}
                      onMouseEnter={() => setHoveredId(e.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`w-[152px] pr-4 text-left text-xs truncate transition-colors ${
                        isSelected ? 'text-white' : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {e.name}
                    </button>

                    {/* Track */}
                    <div className="relative flex-1 h-8">
                      <button
                        onClick={() => setSelectedId(e.id)}
                        onMouseEnter={() => setHoveredId(e.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        aria-pressed={isSelected}
                        aria-label={`${e.name}, ${e.period}. view case study`}
                        className={`absolute top-1/2 -translate-y-1/2 h-7 rounded-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084ff] transition-all duration-300 ${
                          isSelected ? 'shadow-[0_0_18px_-2px_rgba(0,132,255,0.45)]' : ''
                        }`}
                        style={{
                          left: pct(e.start),
                          width: pct(e.end - e.start),
                          opacity: dim ? 0.3 : isSelected ? 1 : 0.62,
                          backgroundImage: e.ongoing
                            ? `linear-gradient(90deg, ${e.barFrom}, ${e.barTo} 72%, ${e.barTo}00)`
                            : `linear-gradient(90deg, ${e.barFrom}, ${e.barTo})`,
                        }}
                      >
                        <span className="absolute inset-0 flex items-center px-2.5">
                          <span className="text-[10px] font-medium text-white/95 truncate drop-shadow">
                            {e.duration}
                          </span>
                        </span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 ml-[152px] pt-4 border-t border-white/[0.05]">
            <span className="text-[10px] text-white/30">
              each bar is one delivery cycle, start to ship
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0084ff]" />
              today
            </span>
            <span className="text-[10px] text-white/30">
              overlapping bars ran in parallel
            </span>
          </div>
        </div>
      </div>

      {/* ── Case study ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CaseStudy e={selected} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function CaseStudy({ e }: { e: Engagement }) {
  return (
    <div className="glass-card overflow-hidden">
      {/* Accent */}
      <div
        className="h-0.5 w-full"
        style={{ backgroundImage: `linear-gradient(90deg, ${e.barFrom}, ${e.barTo})` }}
      />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: e.dot }} />
              <h3 className="text-2xl font-light text-white">{e.name}</h3>
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.05] border border-white/[0.08] text-white/45">
                {e.kind === 'client' ? 'client contract' : 'initdev studio'}
              </span>
            </div>
            <p className="text-sm text-white/45">
              {e.tagline} · {e.role}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/50 font-mono">{e.period}</p>
            <p className="text-[11px] text-emerald-400/70 mt-1">{e.statusLabel}</p>
          </div>
        </div>

        {/* Problem → approach → outcome */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <SectionLabel>the problem</SectionLabel>
            <p className="text-sm text-white/60 leading-relaxed mb-6">{e.problem}</p>

            <SectionLabel>outcome</SectionLabel>
            <p className="text-sm text-white/60 leading-relaxed">{e.outcome}</p>
          </div>

          <div>
            <SectionLabel>what i built</SectionLabel>
            <ul className="space-y-2.5 mb-6">
              {e.approach.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: e.dot }}
                  />
                  {a}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {e.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[10px] rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        {(e.url || e.github || e.pdf) && (
          <div className="flex flex-wrap items-center gap-3 mt-7 pt-5 border-t border-white/[0.05]">
            {e.url && (
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-white/[0.06] text-white/80 hover:bg-white/[0.1] hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                visit live site
                <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
            )}
            {e.github && (
              <a
                href={e.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/75 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                source
              </a>
            )}
            {e.pdf && (
              <a
                href={e.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400/60 hover:text-blue-400 transition-colors sm:ml-auto"
              >
                <Download className="w-3.5 h-3.5" />
                technical deep dive (pdf)
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/25 mb-2">
      {children}
    </p>
  );
}
