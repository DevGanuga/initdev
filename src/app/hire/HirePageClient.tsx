'use client';

import { useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Mail,
  Download,
  Star,
  Linkedin,
  Check,
  Copy,
  FileText,
  ExternalLink,
  Briefcase,
  Code2,
  Cpu,
  Server,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import {
  person,
  roleTypes,
  stats,
  capabilities,
  credentials,
  testimonials,
  priorRoles,
} from './data';
import { DeliveryRecord } from './DeliveryRecord';
import { CommandPalette } from './CommandPalette';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function useCopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  }, []);
  return { copied, copy };
}

export function HirePageClient() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#0084ff]/30">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-[#0084ff] origin-left z-[60]"
        style={{ scaleX: progress }}
      />

      <SiteHeader />
      <Hero />
      <StatsBar />

      <Section id="record" index="01" title="delivery record" kicker="every cycle, on a real time axis">
        <p className="text-white/45 max-w-2xl mb-8 leading-relaxed">
          seven products in eleven months, each a 30 to 90 day cycle from domain model to
          production. click any bar to read how it was built.
        </p>
        <DeliveryRecord />
      </Section>

      <Section id="proof" index="02" title="references" kicker="verified client reviews">
        <References />
      </Section>

      <Section id="capabilities" index="03" title="capabilities" kicker="what i actually reach for">
        <Capabilities />
      </Section>

      <Section id="credentials" index="04" title="Harvard. Stanford. IBM." kicker="formal backing">
        <Credentials />
      </Section>

      <Section id="fit" index="05" title="role fit" kicker="what i'm looking for">
        <RoleFit />
      </Section>

      <Section id="contact" index="06" title="let's talk." kicker="contact" last>
        <Contact />
      </Section>

      <SiteFooter />
    </main>
  );
}

/* ─────────────────────────── chrome ─────────────────────────── */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/85 border-b border-white/[0.06]">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/1966510796844172572-removebg-preview.png"
            alt="InitDev"
            width={80}
            height={26}
            className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[11px] text-white/30 font-mono border-l border-white/10 pl-3 tracking-wide">
            talent
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <CommandPalette />
          <a
            href={person.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-white/60 hover:text-white rounded-lg border border-white/[0.08] hover:border-white/20 transition-colors"
          >
            <Star className="w-3.5 h-3.5" />
            upwork
          </a>
          <a
            href={person.resume}
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-[#0084ff] text-white hover:bg-[#0074e0] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            resume
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="container-custom flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-white/30">
          Dev Ganugapenta · senior product engineer at{' '}
          <Link href="/" className="text-white/50 hover:text-white transition-colors">
            initdev
          </Link>
        </p>
        <p className="text-xs text-white/25 font-mono">
          press <kbd className="px-1 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">⌘K</kbd> anywhere
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── layout ─────────────────────────── */

function Section({
  id,
  index,
  title,
  kicker,
  children,
  last,
}: {
  id: string;
  index: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-24 ${last ? '' : 'border-b'} border-white/[0.05]`}
    >
      <div className="container-custom">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-mono text-white/20">{index}</span>
            <span className="h-px w-8 bg-white/10" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-[#0084ff]">
              {kicker}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ─────────────────────────── hero ─────────────────────────── */

function Hero() {
  const { copied, copy } = useCopyEmail();

  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(0,132,255,0.09),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                <Image
                  src="/images/dev/pfp.png"
                  alt="Dev Ganugapenta"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs text-emerald-400 font-medium">{person.status}</span>
              </span>
            </motion.div>

            <motion.h1
              className="text-[clamp(2.6rem,6.5vw,4.6rem)] font-extralight tracking-[-0.035em] text-white leading-[1.02] mb-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Dev Ganugapenta
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              <span className="text-lg md:text-xl text-gradient-blue font-light">
                {person.title}
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <span className="text-sm text-white/35 font-mono">{person.location}</span>
            </motion.div>

            <motion.p
              className="text-base md:text-[17px] text-white/55 max-w-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
            >
              {person.summary}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-1.5 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              {roleTypes.map((r) => (
                <span
                  key={r}
                  className="px-2.5 py-1 text-[11px] rounded-full bg-white/[0.035] border border-white/[0.07] text-white/45"
                >
                  {r}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href={`mailto:${person.email}`} className="btn-premium inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                get in touch
              </a>
              <a
                href={person.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#14a800] text-white text-sm font-medium hover:bg-[#118f00] transition-colors"
              >
                <Star className="w-4 h-4 fill-white" />
                upwork profile
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/[0.08] text-sm text-white/55 hover:text-white hover:border-white/20 transition-colors"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {person.email}
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/5]">
              <Image
                src="/images/dev/cv-photo.png"
                alt="Dev Ganugapenta working"
                fill
                className="object-cover object-[65%_center]"
                priority
                sizes="380px"
              />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505]/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505]/85 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -left-4 bg-[#0a0a0a] border border-white/[0.09] rounded-xl px-4 py-2.5 shadow-xl">
              <p className="text-[10px] text-white/30 font-mono mb-0.5">current focus</p>
              <p className="text-xs text-white/70 font-mono">next.js · ai · postgres</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── stats ─────────────────────────── */

function StatsBar() {
  return (
    <section className="border-y border-white/[0.05] bg-white/[0.012]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.05]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="py-7 px-5 first:pl-0 lg:last:pr-0"
            >
              <div className="text-3xl md:text-4xl font-extralight text-gradient-blue mb-1.5">
                {s.value}
              </div>
              <div className="text-xs text-white/50 leading-snug mb-0.5">{s.label}</div>
              <div className="text-[11px] text-white/25">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── references ─────────────────────────── */

function References() {
  return (
    <>
      <motion.a
        href={person.upwork}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card p-5 flex flex-wrap items-center justify-between gap-4 mb-5 hover:border-[#14a800]/35 transition-colors group"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#14a800]/12 border border-[#14a800]/25 flex items-center justify-center">
            <Star className="w-4 h-4 text-[#14a800] fill-[#14a800]" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-sm text-white/85 font-medium">upwork</span>
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 font-medium">
                top rated plus
              </span>
            </div>
            <p className="text-xs text-white/35 font-mono">
              100% job success · 500+ hours · every review 5.0
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs text-[#14a800] font-medium">
          view verified profile
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </motion.a>

      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.project}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card p-6 flex flex-col hover:border-blue-500/20 transition-colors"
          >
            <div className="flex items-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-sm text-white/65 leading-relaxed flex-1 mb-4">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="pt-4 border-t border-white/[0.05]">
              <p className="text-xs text-white/45 mb-2">{t.project}</p>
              <div className="flex flex-wrap gap-1">
                {t.endorsements.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/[0.08] border border-blue-500/15 text-blue-400/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </>
  );
}

/* ─────────────────────────── capabilities ─────────────────────────── */

function Capabilities() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {capabilities.map((c, i) => (
        <motion.div
          key={c.key}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass-card p-6 hover:border-blue-500/20 transition-colors"
        >
          <h3 className="text-white text-base font-medium mb-1">{c.label}</h3>
          <p className="text-xs text-white/35 mb-5">{c.line}</p>
          <ul className="space-y-2">
            {c.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/50">
                <span className="mt-[7px] w-1 h-1 rounded-full bg-blue-500/50 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────── credentials ─────────────────────────── */

function Credentials() {
  return (
    <>
      <p className="text-white/45 max-w-xl mb-8 -mt-4">the formal backing behind the shipped work.</p>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mb-10">
        {credentials.map((c, i) => (
          <motion.div
            key={c.institution}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card p-6 hover:border-blue-500/20 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-2.5">
              <h3 className="text-xl md:text-[22px] text-white font-light leading-tight">
                {c.institution}
              </h3>
              <span className="text-[11px] text-white/30 font-mono bg-white/[0.04] px-2.5 py-1 rounded-full flex-shrink-0">
                {c.year}
              </span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed">{c.credential}</p>
            <p className="text-xs text-white/25 mt-1.5">{c.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Prior roles, compact */}
      <div className="max-w-4xl">
        <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/25 mb-4">
          before engineering full time
        </p>
        <div className="space-y-3">
          {priorRoles.map((r, i) => (
            <motion.div
              key={r.org}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 border-b border-white/[0.05]"
            >
              <span className="text-sm text-white/75">{r.title}</span>
              <span className="text-sm text-white/35">{r.org}</span>
              <span className="text-[11px] text-white/25 font-mono ml-auto">{r.period}</span>
              <p className="w-full text-xs text-white/40 leading-relaxed">
                {r.bullets.join(' · ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────── role fit ─────────────────────────── */

const fitItems = [
  {
    icon: <Briefcase className="w-4 h-4" />,
    label: 'role level',
    value: 'senior / staff product engineer or architect, ic track',
  },
  {
    icon: <Code2 className="w-4 h-4" />,
    label: 'stack',
    value: 'typescript / next.js / postgres, or adjacent',
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    label: 'domain',
    value: 'ai product, b2b saas, developer tools, fintech',
  },
  {
    icon: <Server className="w-4 h-4" />,
    label: 'stage',
    value: 'seed through series b',
  },
];

function RoleFit() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-white/55 text-sm leading-relaxed"
      >
        <p>
          i want to own a product surface, not a backlog column. my value is the full arc:
          understand the domain, model it into architecture, ship it. i want a role where that
          arc stays intact.
        </p>
        <p>
          i&apos;m best where ai is core to the product rather than bolted on. i&apos;ve shipped
          five distinct ai integrations to production and i architect from the assumption that
          models fail: retries, fallbacks, deduplication, and billing that stays correct through
          all of it.
        </p>
        <p>
          small to mid product team where engineers sit in product decisions. not a team of 200
          where architecture is someone else&apos;s job.
        </p>
      </motion.div>

      <div className="space-y-3">
        {fitItems.map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card p-5 flex items-center gap-4 hover:border-blue-500/20 transition-colors"
          >
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="text-[11px] text-white/30 mb-0.5">{item.label}</div>
              <div className="text-sm text-white/75">{item.value}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── contact ─────────────────────────── */

function Contact() {
  const { copied, copy } = useCopyEmail();

  return (
    <div className="max-w-2xl -mt-4">
      <p className="text-white/50 mb-8 leading-relaxed">
        i respond to every message. if the role is a good fit i&apos;ll say so clearly. if
        it&apos;s not, i&apos;ll say that too.
      </p>

      <div className="glass-card p-5 flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-white/80 font-medium">Dev Ganugapenta, resume</p>
            <p className="text-xs text-white/35 mt-0.5">
              two pages, ats-friendly, every product dated
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={person.resume}
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-[#0084ff] text-white hover:bg-[#0074e0] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            download pdf
          </a>
          <Link
            href="/hire/resume"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-white/[0.05] text-white/70 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            view online
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <a href={`mailto:${person.email}`} className="btn-premium inline-flex items-center gap-2 group">
          <Mail className="w-4 h-4" />
          {person.email}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <button
          onClick={copy}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/[0.08] text-sm text-white/55 hover:text-white hover:border-white/20 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          {copied ? 'copied' : 'copy'}
        </button>
        <a
          href={person.upwork}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#14a800] text-white text-sm font-medium hover:bg-[#118f00] transition-colors"
        >
          <Star className="w-4 h-4 fill-white" />
          hire on upwork
        </a>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          <Linkedin className="w-4 h-4" />
          linkedin
        </a>
        <a
          href={person.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          <Github className="w-4 h-4" />
          github
        </a>
      </div>
    </div>
  );
}
