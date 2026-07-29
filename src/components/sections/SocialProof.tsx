'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { domainExperience, companyLogo } from '@/lib/data/certifications';

const metrics = [
  { value: '13+', label: 'Production Apps Shipped', sublabel: 'SaaS, AI, consumer, enterprise' },
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080810] to-[#050505]" />
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/generated/aurora-soft.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-14"
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
            Working software first. Clear scope. And seniors who&apos;ve kept checkout,
            payments, and clinical systems alive inside Citi, Kroger, Target, and more.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="relative p-5 md:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center hover:border-[#0084ff]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -2 }}
            >
              <div className="text-3xl md:text-4xl font-extralight text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-white/70 font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-white/35">{metric.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Domain experience — folded into shipped-work narrative */}
        <motion.div
          className="mb-10 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-white text-lg font-medium mb-1">
                Systems our seniors have run under real load
              </h3>
              <p className="text-sm text-white/40 max-w-xl">
                Career engagements of the engineers on this team — the production experience
                behind every InitDev sprint.
              </p>
            </div>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors shrink-0"
            >
              Team certifications
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {domainExperience.map((d, i) => (
              <motion.div
                key={d.label}
                className="group px-4 py-4 rounded-xl border border-white/[0.05] bg-black/20 hover:border-[#0084ff]/20 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
              >
                {/* Company marks */}
                <div className="flex items-center gap-1.5 mb-2.5">
                  {d.domains.map((domain) => (
                    <span
                      key={domain}
                      className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={companyLogo(domain, 32)}
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </span>
                  ))}
                </div>
                <div className="text-sm text-white/80 font-medium mb-1">{d.label}</div>
                <div className="text-[13px] text-[#4da3ff]/90 font-light mb-1.5 leading-snug">
                  {d.names}
                </div>
                <div className="text-[11px] text-white/35 leading-snug">{d.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitments */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {commitments.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#0084ff]/20 hover:bg-white/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#0084ff] font-medium px-2.5 py-1 rounded-full bg-[#0084ff]/10">
                  {item.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/15 group-hover:text-[#0084ff]/50 transition-colors" />
              </div>
              <p className="text-white/65 leading-relaxed text-sm md:text-[15px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
