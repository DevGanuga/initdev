'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  icon?: LucideIcon;
  title: string;
  highlight?: string;
  subtitle: string;
}

/**
 * Shared hero used across the marketing pages so every page opens with the
 * same rhythm: eyebrow pill, light display heading with a blue-gradient
 * highlight, supporting line, and a single top-down radial glow.
 */
export function PageHero({ eyebrow, icon: Icon, title, highlight, subtitle }: PageHeroProps) {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,100,255,0.10),transparent)]" />

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-sm rounded-full border border-white/10 mb-8">
            {Icon && <Icon className="w-4 h-4 text-[#0084ff]" />}
            <span className="text-sm text-white/70">{eyebrow}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-[-0.02em] leading-[1.08]">
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-gradient-blue">{highlight}</span>
              </>
            )}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
