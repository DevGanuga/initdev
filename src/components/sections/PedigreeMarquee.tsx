'use client';

import { motion } from 'framer-motion';
import { engineeringPedigree } from '@/lib/data/certifications';

/**
 * Full-width scrolling strip of enterprise environments where our senior
 * engineers have operated. Sits directly under the hero so the names are the
 * first trust signal a visitor scrolls into.
 */
export function PedigreeMarquee() {
  const companies = engineeringPedigree.companies;

  return (
    <section className="relative py-14 md:py-16 bg-[#040409] border-y border-white/[0.05] overflow-hidden">
      {/* Ambient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(0,100,255,0.05),transparent)] pointer-events-none" />

      <div className="relative z-10">
        {/* Statement */}
        <motion.p
          className="text-center text-sm md:text-base text-white/50 mb-8 px-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {engineeringPedigree.statement}
        </motion.p>

        {/* Scrolling names */}
        <div className="relative">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#040409] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#040409] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max items-baseline gap-12 md:gap-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          >
            {[...companies, ...companies].map((company, i) => (
              <div key={`${company.name}-${i}`} className="flex items-baseline gap-2.5 shrink-0">
                <span className="text-2xl md:text-4xl font-extralight tracking-tight text-white/75 whitespace-nowrap">
                  {company.name}
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#0084ff]/60 whitespace-nowrap">
                  {company.sector}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Honest framing — keeps the flex credible */}
        <motion.p
          className="text-center text-[11px] text-white/25 mt-8 px-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {engineeringPedigree.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
