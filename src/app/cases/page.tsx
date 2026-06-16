'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Code2, Layers, Zap, Globe, Rocket, FlaskConical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, foundry, studioStats } from '@/lib/data/projects';

const heroStats = [
  { value: studioStats.shipped, label: 'Production apps shipped' },
  { value: studioStats.sprint, label: 'Average time to first release' },
  { value: studioStats.ownership, label: 'Code & IP you own' },
  { value: studioStats.reply, label: 'Typical reply time' },
];

const capabilities = [
  {
    title: 'Web & Product Engineering',
    description: 'Full-stack web and mobile products built with modern frameworks — from complex dashboards to customer-facing platforms.',
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: 'AI & Data Systems',
    description: 'LLM features, RAG pipelines, and data infrastructure that hold up in production — not just in a demo.',
    tech: ['Python', 'OpenAI', 'LangChain', 'Postgres', 'Redis'],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: 'APIs & Integrations',
    description: 'Scalable REST and GraphQL APIs, payment flows, and third-party integrations with clean, maintainable architecture.',
    tech: ['Node.js', 'Go', 'GraphQL', 'Stripe', 'AWS'],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: 'Infrastructure & Security',
    description: 'Cloud architecture, CI/CD, hardening, and monitoring — secure systems your team can run long after handoff.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'SOC 2'],
    icon: <Code2 className="w-5 h-5" />,
  },
];

export default function CasesPage() {
  return (
    <motion.main
      className="bg-[#050505] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/generated/hero-aurora.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,100,255,0.10),transparent)]" />

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <Rocket className="w-4 h-4 text-[#0084ff]" />
              <span className="text-sm text-white/70">A development studio · 13+ apps shipped</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-[-0.02em]">
              The work speaks{' '}
              <span className="text-gradient-blue">for the studio</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              We&apos;ve shipped 13+ production applications — SaaS, AI products, consumer apps, and
              enterprise platforms. Below is a selected few you can open and use right now.
            </p>
          </motion.div>

          {/* Stat row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-4xl mx-auto mt-14 rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.04]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-[#070707] px-5 py-7 text-center">
                <div className="text-3xl md:text-4xl font-light text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-white/45 mt-2 leading-snug">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Backed by The Dravidor Foundry */}
      <section className="py-12">
        <div className="container-custom">
          <motion.article
            className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Generated radial accent behind the copy */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none opacity-30 hidden lg:block">
              <Image
                src="/images/generated/node-orbit.png"
                alt=""
                fill
                sizes="520px"
                className="object-contain"
              />
            </div>
            <div className="relative grid lg:grid-cols-2">
              <a
                href={foundry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-black group"
              >
                <Image
                  src={foundry.image}
                  alt={`${foundry.name} — ${foundry.tagline}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
              </a>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4 self-start px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#0084ff] bg-[#0084ff]/10 rounded-full">
                  <FlaskConical className="w-3.5 h-3.5" />
                  Our R&D Foundry
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-white mb-1">{foundry.name}</h2>
                <p className="text-white/80 text-lg font-light mb-4">{foundry.tagline}</p>
                <p className="text-white/50 leading-relaxed mb-6">{foundry.summary}</p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {foundry.ventures.map((v) => (
                    <span
                      key={v}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        v === 'InitDev'
                          ? 'bg-[#0084ff]/15 text-[#0084ff] border-[#0084ff]/30'
                          : 'bg-white/[0.04] text-white/55 border-white/[0.08]'
                      }`}
                    >
                      {v}
                    </span>
                  ))}
                </div>

                <a
                  href={foundry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#0084ff] transition-colors self-start group/link"
                >
                  Visit {foundry.domain}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Portfolio — alternating feature rows */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-3 block">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                A few of the products we ship
              </h2>
            </div>
            <p className="text-white/45 text-sm max-w-sm md:text-right">
              A live slice of the 13+ we&apos;ve shipped. Every one is in production and open to the
              public — click through and try them.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-[#0084ff]/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.05 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  {/* Screenshot */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[16/10] overflow-hidden bg-black [direction:ltr]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 mix-blend-screen z-10 pointer-events-none`} />
                    <Image
                      src={project.image}
                      alt={`${project.name} — ${project.tagline}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 z-20" />
                  </a>

                  {/* Details */}
                  <div className="p-8 md:p-10 flex flex-col justify-center [direction:ltr]">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#0084ff] bg-[#0084ff]/10 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-light text-white mb-1">{project.name}</h2>
                    <p className="text-white/80 text-lg font-light mb-4">{project.tagline}</p>
                    <p className="text-white/50 leading-relaxed mb-6">{project.summary}</p>

                    <ul className="space-y-2.5 mb-6">
                      {project.built.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#0084ff] flex-shrink-0 mt-1" />
                          <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/[0.04] text-white/55 text-xs rounded-full border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#0084ff] transition-colors self-start group/link"
                    >
                      Visit {project.domain}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* What we build — capability band */}
      <section className="py-20 border-t border-white/5 mt-12">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              End-to-end across the stack
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#0084ff]/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex p-2.5 rounded-xl bg-[#0084ff]/10 text-[#0084ff] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/55 leading-relaxed mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/[0.04] text-white/55 text-xs rounded-full border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container-custom">
          <motion.div
            className="relative text-center overflow-hidden rounded-3xl border border-white/[0.07] px-6 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/images/generated/topo-band.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/70" />
            </div>
            <div className="relative">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Have something worth building?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Tell us what you&apos;re after. We&apos;ll come back with scope, timeline, and a fixed
              price — usually within a few days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,132,255,0.4)] hover:scale-[1.02]"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
