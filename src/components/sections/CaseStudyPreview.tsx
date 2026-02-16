'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Code2, Layers, Zap, Globe } from 'lucide-react';

const capabilities = [
  {
    key: 'saas',
    icon: <Code2 className="w-5 h-5" />,
    title: 'SaaS Platforms',
    headline: 'Multi-tenant systems built to handle real users.',
    description:
      'Role-based access, complex workflows, billing integrations, and the kind of reliability requirements where things cannot break once clients are live. We handle the hard parts so you can focus on growth.',
    points: [
      'Multi-tenant architecture with data isolation',
      'Subscription billing & usage metering',
      'Role-based access control & permissions',
      'Real-time dashboards & analytics',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
  },
  {
    key: 'tools',
    icon: <Layers className="w-5 h-5" />,
    title: 'Internal Tools',
    headline: 'Custom software that replaces your spreadsheet workflows.',
    description:
      'Admin panels, operational dashboards, and workflow automation. The tools your team actually needs, built to your exact specs — not shoehorned into a no-code platform.',
    points: [
      'Custom admin panels & dashboards',
      'Workflow automation & approvals',
      'Data pipelines & reporting',
      'Integration with existing systems',
    ],
    technologies: ['React', 'GraphQL', 'Python', 'Go', 'AWS', 'PostgreSQL'],
  },
  {
    key: 'ai',
    icon: <Zap className="w-5 h-5" />,
    title: 'AI-Assisted Products',
    headline: 'AI that works in production, not just in demos.',
    description:
      'LLM integrations, RAG pipelines, intelligent document processing, and AI-powered features baked into real products. We build the infrastructure around the model so it actually scales.',
    points: [
      'RAG pipelines & knowledge bases',
      'LLM-powered features & workflows',
      'Document processing & extraction',
      'Evaluation, monitoring & guardrails',
    ],
    technologies: ['OpenAI', 'LangChain', 'Pinecone', 'Python', 'Next.js', 'Redis'],
  },
  {
    key: 'infra',
    icon: <Globe className="w-5 h-5" />,
    title: 'Infrastructure',
    headline: 'Deploy with confidence. Scale without scrambling.',
    description:
      'CI/CD pipelines, cloud architecture, containerized deployments, and infrastructure-as-code. We set up systems that your team can maintain long after we hand them off.',
    points: [
      'CI/CD pipelines & automated testing',
      'Container orchestration & scaling',
      'Infrastructure-as-code',
      'Monitoring, logging & alerting',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Vercel', 'GitHub Actions'],
  },
];

export function CaseStudyPreview() {
  const [active, setActive] = useState('saas');
  const activeCap = capabilities.find((c) => c.key === active)!;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Production Systems
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Full stack platforms, internal tools, and AI products. Production ready, not demos.
          </p>
        </motion.div>

        {/* Tab Pills — same pattern as TechStack */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {capabilities.map((cap) => (
            <button
              key={cap.key}
              onClick={() => setActive(cap.key)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                active === cap.key
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {active === cap.key && (
                <motion.div
                  className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-xl"
                  layoutId="buildTab"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {active !== cap.key && (
                <div className="absolute inset-0 border border-white/[0.06] rounded-xl" />
              )}
              <span className="relative flex items-center gap-2">
                {cap.icon}
                {cap.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left: Description */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0084ff]/10 text-[#0084ff]">
                      {activeCap.icon}
                    </div>
                    <h3 className="text-2xl font-medium text-white">
                      {activeCap.title}
                    </h3>
                  </div>

                  <p className="text-white/80 text-lg font-light mb-4 leading-relaxed">
                    {activeCap.headline}
                  </p>

                  <p className="text-white/50 leading-relaxed">
                    {activeCap.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {activeCap.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/[0.04] text-white/60 text-sm rounded-full border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Feature points */}
                <div className="flex flex-col justify-center">
                  <ul className="space-y-4">
                    {activeCap.points.map((point, i) => (
                      <motion.li
                        key={point}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0084ff] flex-shrink-0" />
                        <span className="text-white/70 leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white font-medium rounded-xl shadow-xl shadow-[#0084ff]/20 hover:shadow-2xl hover:shadow-[#0084ff]/30 hover:scale-[1.02] transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
