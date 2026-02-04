'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Zap, Globe } from 'lucide-react';

export function CaseStudyPreview() {
  const capabilities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'SaaS Platforms',
      description: 'Multi-tenant systems with role-based access, complex workflows, and reliability requirements.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Internal Tools',
      description: 'Custom dashboards, admin panels, and operational tools that streamline your business.',
      technologies: ['REST', 'GraphQL', 'Python', 'Go', 'AWS'],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Assisted Products',
      description: 'Production-ready AI integrations. Systems that work reliably at scale.',
      technologies: ['OpenAI', 'LangChain', 'Vector DBs', 'RAG', 'Fine-tuning'],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Infrastructure & DevOps',
      description: 'CI/CD pipelines, cloud architecture, and deployment systems that scale with demand.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Vercel'],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Build
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light text-white mb-6 leading-tight">
            Production Systems
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We build full stack SaaS platforms, internal tools, and AI-assisted products. 
            Production ready, not demos.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#0084ff]/10 text-[#0084ff]">
                  {capability.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">{capability.title}</h3>
                  <p className="text-white/60">{capability.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {capability.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 mb-6">Ready to start a pilot sprint?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white font-medium rounded-lg shadow-xl shadow-[#0084ff]/25 hover:shadow-2xl hover:shadow-[#0084ff]/30 transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}