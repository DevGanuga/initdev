'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Zap, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    id: 1,
    title: 'Web Applications',
    description: 'Full-stack web applications built with modern frameworks. From complex dashboards to customer-facing platforms.',
    features: [
      'React & Next.js frontends',
      'Node.js & Python backends',
      'Real-time features',
      'Responsive design'
    ],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    title: 'API Development',
    description: 'Scalable REST and GraphQL APIs designed for performance. Clean architecture that your team can maintain.',
    features: [
      'RESTful & GraphQL APIs',
      'Authentication & authorization',
      'Rate limiting & caching',
      'Comprehensive documentation'
    ],
    tech: ['Node.js', 'Python', 'Go', 'Redis', 'AWS'],
    icon: <Layers className="w-6 h-6" />,
    gradient: 'from-green-500/20 to-blue-500/20'
  },
  {
    id: 3,
    title: 'System Architecture',
    description: 'Designing systems that scale. Whether you need microservices, event-driven architecture, or cloud infrastructure.',
    features: [
      'Microservices design',
      'Cloud infrastructure',
      'CI/CD pipelines',
      'Monitoring & observability'
    ],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    icon: <Zap className="w-6 h-6" />,
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

export default function CasesPage() {
  return (
    <motion.main 
      className="bg-[#0a0a0a] min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,132,255,0.1)] via-transparent to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <Rocket className="w-4 h-4 text-[#0084ff]" />
              <span className="text-sm text-white/70">What We Build</span>
            </div>
            
            <h1 className="text-6xl font-light text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We build custom software for companies that need it done right.
              <span className="block mt-2 text-white/80">Production-ready code, every time.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-12">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative p-8 md:p-12 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-[#0084ff]/30 transition-all duration-300">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 rounded-2xl`} />
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8">
                    {/* Left side - Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-[#0084ff]/10 text-[#0084ff]">
                          {item.icon}
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-light text-white mb-4">{item.title}</h2>
                      
                      <p className="text-white/60 mb-6">{item.description}</p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/60 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right side - Features */}
                    <div className="flex flex-col justify-center">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-4">What&apos;s Included</p>
                      <div className="space-y-3">
                        {item.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            viewport={{ once: true }}
                          >
                            <Code2 className="w-5 h-5 text-[#0084ff] flex-shrink-0 mt-0.5" />
                            <p className="text-lg text-white">{feature}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-8">
              Have a project in mind? Let&apos;s discuss how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)] hover:scale-105"
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
