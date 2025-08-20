'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, Zap, Award } from 'lucide-react';

export function CaseStudyPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const caseStudies = [
    {
      id: 'fintech-startup',
      client: 'PayFlow',
      industry: 'Fintech',
      logo: '💳',
      challenge: 'Build a secure B2B payment platform that could handle enterprise-scale transactions in 6 weeks.',
      solution: 'Developed a PCI DSS compliant payment infrastructure with real-time processing, automated KYC/AML, and white-label capabilities.',
      timeline: '6 weeks',
      investment: '$45K',
      results: [
        { icon: <DollarSign />, metric: '$2.3M', label: 'Processed in Month 1' },
        { icon: <TrendingUp />, metric: '400%', label: 'Faster Than Planned' },
        { icon: <Users />, metric: '127', label: 'Enterprise Clients' },
        { icon: <Clock />, metric: '47ms', label: 'Avg Response Time' }
      ],
      testimonial: {
        quote: 'InitDev delivered in 6 weeks what our previous team couldn&apos;t in 6 months. They&apos;re now our permanent technical partners.',
        author: 'Sarah Chen',
        role: 'CEO, PayFlow',
        image: '👩‍💼'
      },
      technologies: ['Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'React'],
      bgGradient: 'from-blue-500/10 to-purple-500/10'
    },
    {
      id: 'ecommerce-platform',
      client: 'StyleHub',
      industry: 'E-commerce',
      logo: '🛍️',
      challenge: 'Rebuild a failing e-commerce platform handling Black Friday traffic with zero downtime migration.',
      solution: 'Created a headless commerce architecture with edge caching, real-time inventory, and AI-powered recommendations.',
      timeline: '8 weeks',
      investment: '$65K',
      results: [
        { icon: <Zap />, metric: '99.99%', label: 'Uptime During Black Friday' },
        { icon: <TrendingUp />, metric: '3.2x', label: 'Conversion Rate Increase' },
        { icon: <Users />, metric: '1M+', label: 'Concurrent Users' },
        { icon: <DollarSign />, metric: '$12M', label: 'GMV First Quarter' }
      ],
      testimonial: {
        quote: 'The platform handled 10x our normal traffic without breaking a sweat. InitDev&apos;s architecture saved our Black Friday.',
        author: 'Mike Torres',
        role: 'CTO, StyleHub',
        image: '👨‍💻'
      },
      technologies: ['Next.js', 'Shopify', 'Redis', 'Vercel', 'TypeScript'],
      bgGradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      id: 'ai-saas',
      client: 'DataMind AI',
      industry: 'AI/SaaS',
      logo: '🤖',
      challenge: 'Launch an AI-powered analytics platform before a major competitor&apos;s product release.',
      solution: 'Built a real-time ML pipeline with custom models, automated training, and white-label API for enterprise clients.',
      timeline: '10 weeks',
      investment: '$85K',
      results: [
        { icon: <Award />, metric: '$5M', label: 'Series A Raised' },
        { icon: <Zap />, metric: '2B+', label: 'API Calls/Month' },
        { icon: <Users />, metric: '450', label: 'Enterprise Accounts' },
        { icon: <TrendingUp />, metric: '92%', label: 'Prediction Accuracy' }
      ],
      testimonial: {
        quote: 'InitDev didn&apos;t just build our product—they built our competitive advantage. We beat our competitor to market by 3 months.',
        author: 'Emma Watson',
        role: 'Founder, DataMind AI',
        image: '👩‍🔬'
      },
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Kubernetes', 'React'],
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light text-white mb-6 leading-tight">
            Real Results for
            <span className="block bg-gradient-to-r from-[#0084ff] via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See how we&apos;ve helped startups and enterprises 
            ship faster, scale smarter, and win their markets.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Background decoration */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} rounded-3xl opacity-20 blur-3xl`}
                style={{ y: parallax }}
              />

              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{study.logo}</div>
                    <div>
                      <h3 className="text-2xl font-medium text-white">{study.client}</h3>
                      <p className="text-white/60">{study.industry}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-[#0084ff] uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-white/80">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-white/80">{study.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Investment & Timeline */}
                  <div className="flex gap-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-white/40 text-sm">Investment</p>
                      <p className="text-2xl font-light text-white">{study.investment}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">Timeline</p>
                      <p className="text-2xl font-light text-white">{study.timeline}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Results Side */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <div className="flex items-center gap-2 mb-2 text-[#0084ff]">
                          {result.icon}
                          <span className="text-3xl font-light text-white">{result.metric}</span>
                        </div>
                        <p className="text-sm text-white/60">{result.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <motion.div
                    className="p-6 bg-gradient-to-br from-[#0084ff]/10 to-purple-500/10 rounded-2xl border border-[#0084ff]/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-lg text-white/90 italic mb-4">&ldquo;{study.testimonial.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{study.testimonial.image}</div>
                      <div>
                        <p className="text-white font-medium">{study.testimonial.author}</p>
                        <p className="text-white/60 text-sm">{study.testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 mb-6">Ready to become our next success story?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white font-medium rounded-lg shadow-xl shadow-[#0084ff]/25 hover:shadow-2xl hover:shadow-[#0084ff]/30 transition-all duration-300"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}