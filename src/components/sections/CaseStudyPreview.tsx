'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock, Star } from 'lucide-react';

export function CaseStudyPreview() {
  return (
    <section className="py-20 relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Latest Success Story
          </h2>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image/Preview Side */}
            <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-[#0084ff]/20 to-[#00a6ff]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/20 mb-4">FINTECH</div>
                  <div className="text-2xl text-white/40">Platform Launch</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">Live Project</span>
              </div>

              <h3 className="text-3xl font-light text-white mb-4">
                Payment Processing Platform
              </h3>

              <p className="text-white/60 mb-8 leading-relaxed">
                Built a complete payment infrastructure handling $2M+ in daily transactions. 
                From zero to production in 6 weeks with 99.9% uptime since launch.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#0084ff]" />
                  <div>
                    <div className="text-2xl font-light text-white">400%</div>
                    <div className="text-xs text-white/40">Growth in 3 months</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#0084ff]" />
                  <div>
                    <div className="text-2xl font-light text-white">50K+</div>
                    <div className="text-xs text-white/40">Active users</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#0084ff]" />
                  <div>
                    <div className="text-2xl font-light text-white">6 weeks</div>
                    <div className="text-xs text-white/40">Time to market</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#0084ff]" />
                  <div>
                    <div className="text-2xl font-light text-white">5.0</div>
                    <div className="text-xs text-white/40">Client rating</div>
                  </div>
                </div>
              </div>

              {/* Tech used */}
              <div className="mb-8">
                <div className="text-xs text-white/40 mb-3">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/cases"
                className="inline-flex items-center gap-2 text-[#0084ff] hover:text-[#00a6ff] transition-colors group"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
