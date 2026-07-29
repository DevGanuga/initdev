'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { engineeringPedigree, companyLogo, type PedigreeCompany } from '@/lib/data/certifications';

/**
 * Full-width enterprise pedigree strip with real company marks.
 * Two counter-scrolling rows sit directly under the hero so the logos are the
 * first trust signal a visitor scrolls into.
 */

function CompanyCard({ company }: { company: PedigreeCompany }) {
  return (
    <div className="group flex items-center gap-3.5 shrink-0 px-5 py-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-[#0084ff]/25 hover:bg-white/[0.04] transition-all duration-300">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/[0.06] flex items-center justify-center overflow-hidden shrink-0">
        <img
          src={companyLogo(company.domain, 64)}
          alt={`${company.name} logo`}
          width={28}
          height={28}
          className="w-6 h-6 md:w-7 md:h-7 object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-base md:text-lg font-light tracking-tight text-white/80 group-hover:text-white whitespace-nowrap transition-colors">
          {company.name}
        </span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-[#0084ff]/60 whitespace-nowrap">
          {company.sector}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  companies,
  reverse = false,
  duration = 50,
}: {
  companies: readonly PedigreeCompany[];
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <motion.div
      className="flex w-max items-center gap-4 md:gap-5"
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {[...companies, ...companies].map((company, i) => (
        <CompanyCard key={`${company.name}-${i}`} company={company} />
      ))}
    </motion.div>
  );
}

export function PedigreeMarquee() {
  const companies = engineeringPedigree.companies;
  const half = Math.ceil(companies.length / 2);
  const rowOne = companies.slice(0, half);
  const rowTwo = companies.slice(half);

  return (
    <section className="relative py-16 md:py-20 bg-[#040409] border-y border-white/[0.05] overflow-hidden">
      {/* Ambient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(0,100,255,0.05),transparent)] pointer-events-none" />

      <div className="relative z-10">
        {/* Statement */}
        <motion.div
          className="text-center mb-10 px-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-xs font-medium tracking-[0.2em] uppercase mb-3 block">
            Team Pedigree
          </span>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            {engineeringPedigree.statement}
          </p>
        </motion.div>

        {/* Counter-scrolling logo rows */}
        <div className="relative space-y-4">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#040409] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#040409] to-transparent z-10 pointer-events-none" />

          <MarqueeRow companies={rowOne} duration={48} />
          <MarqueeRow companies={rowTwo} reverse duration={56} />
        </div>

        {/* Honest framing — keeps the flex credible */}
        <motion.p
          className="text-center text-[11px] text-white/25 mt-10 px-6 max-w-xl mx-auto"
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
