'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, Trophy } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    client: 'Series A FinTech',
    title: 'Payment Infrastructure MVP',
    challenge: 'Build PCI-compliant payment processing in 4 weeks',
    solution: 'Architected secure microservices, integrated Stripe & Plaid, built React dashboard',
    results: [
      '$3M processed in first month',
      '99.99% uptime',
      'SOC2 compliant'
    ],
    timeline: '4 weeks',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    client: 'YC Startup',
    title: 'AI-Powered SaaS Platform',
    challenge: 'Launch before Demo Day with full LLM integration',
    solution: 'Built RAG pipeline, custom chat interface, usage analytics dashboard',
    results: [
      '500+ signups on launch',
      '10ms response time',
      'Raised $2M seed'
    ],
    timeline: '3 weeks',
    tech: ['React', 'Python', 'OpenAI', 'Pinecone', 'Vercel'],
    gradient: 'from-green-500/20 to-blue-500/20'
  },
  {
    id: 3,
    client: 'Enterprise Client',
    title: 'Legacy System Rescue',
    challenge: 'Failing Node.js app handling 1M daily requests',
    solution: 'Refactored architecture, optimized database, implemented caching',
    results: [
      '100x performance gain',
      '90% cost reduction',
      'Zero downtime migration'
    ],
    timeline: '6 weeks',
    tech: ['Go', 'Redis', 'Kubernetes', 'PostgreSQL', 'Grafana'],
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
              <Trophy className="w-4 h-4 text-[#0084ff]" />
              <span className="text-sm text-white/70">Proven Results</span>
            </div>
            
            <h1 className="text-6xl font-light text-white mb-6">
              Case
              <span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Real projects. Real deadlines. Real results.
              <span className="block mt-2 text-white/80">Every project shipped on time.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative p-8 md:p-12 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-[#0084ff]/30 transition-all duration-300">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5 rounded-2xl`} />
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8">
                    {/* Left side - Project info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-white/40">{study.client}</span>
                        <div className="flex items-center gap-2 text-[#0084ff]">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{study.timeline}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-light text-white mb-4">{study.title}</h2>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Challenge</p>
                          <p className="text-white/60">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Solution</p>
                          <p className="text-white/60">{study.solution}</p>
                        </div>
                      </div>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/60 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right side - Results */}
                    <div className="flex flex-col justify-center">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Results</p>
                      <div className="space-y-3">
                        {study.results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            viewport={{ once: true }}
                          >
                            <Zap className="w-5 h-5 text-[#0084ff] flex-shrink-0 mt-0.5" />
                            <p className="text-lg text-white">{result}</p>
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
              These results aren&apos;t exceptions. They&apos;re our standard.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)] hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
