'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Zap, Globe } from 'lucide-react';

export function CaseStudyPreview() {
  const capabilities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web and mobile applications built with modern frameworks and best practices.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'API & Backend Systems',
      description: 'Scalable APIs, microservices, and backend infrastructure designed for growth.',
      technologies: ['REST', 'GraphQL', 'Python', 'Go', 'AWS'],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance & Optimization',
      description: 'System optimization, refactoring legacy code, and improving application performance.',
      technologies: ['Redis', 'Kubernetes', 'CI/CD', 'Monitoring', 'Testing'],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cloud & Infrastructure',
      description: 'Cloud architecture, DevOps setup, and deployment pipelines that scale.',
      technologies: ['AWS', 'GCP', 'Docker', 'Terraform', 'Vercel'],
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
            Custom Software
            <span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
              Built Right
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We specialize in building production-ready software that scales. 
            Here&apos;s what we can help you with.
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
          <p className="text-white/60 mb-6">Have a project in mind? Let&apos;s talk.</p>
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