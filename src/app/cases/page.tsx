'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Code2, Layers, Zap, Globe, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';

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
              <span className="text-sm text-white/70">Selected Work</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-[-0.02em]">
              Products we&apos;ve shipped{' '}
              <span className="text-gradient-blue">to production</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Every product below is live and in the hands of real users — SaaS, AI tools, consumer
              apps, and enterprise platforms. Click through and see for yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio — alternating feature rows */}
      <section className="py-12">
        <div className="container-custom">
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
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-8">
              Have something you want built right? Let&apos;s talk through scope, timeline, and cost.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,132,255,0.4)] hover:scale-[1.02]"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
