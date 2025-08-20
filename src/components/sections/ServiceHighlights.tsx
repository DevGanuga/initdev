'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Zap, Shield, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';

export function ServiceHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const services = [
    {
      id: 'mvp',
      icon: <Rocket className="w-6 h-6" />,
      title: 'MVP Development',
      tagline: 'From Idea to Launch in 4 Weeks',
      description: 'Get your product to market before competitors even finish planning.',
      features: [
        'Full-stack application',
        'User authentication & payments',
        'Admin dashboard',
        'Analytics integration'
      ],
      price: '$25K',
      timeline: '4 weeks',
      highlight: true,
      badge: 'MOST POPULAR',
      color: 'from-[#0084ff] to-[#00a6ff]'
    },
    {
      id: 'enterprise',
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Platform',
      tagline: 'Scale-Ready Infrastructure',
      description: 'Production-grade systems built for millions of users.',
      features: [
        'Microservices architecture',
        'Advanced security',
        'Real-time capabilities',
        'DevOps & CI/CD'
      ],
      price: '$75K',
      timeline: '12 weeks',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ai',
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Integration',
      tagline: 'Intelligent Automation',
      description: 'Transform your business with custom AI solutions.',
      features: [
        'Custom ML models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      price: '$35K',
      timeline: '6 weeks',
      badge: 'NEW',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'automation',
      icon: <Target className="w-6 h-6" />,
      title: 'B2B Automation',
      tagline: 'Streamline Operations',
      description: 'Automate workflows and integrate your entire tech stack.',
      features: [
        'API integrations',
        'Workflow automation',
        'Data pipelines',
        'Custom dashboards'
      ],
      price: '$15K',
      timeline: '2 weeks',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0084ff]/5 via-transparent to-purple-500/5" />
      </div>

      <motion.div 
        className="container-custom relative"
        style={{ scale, opacity }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light text-white mb-6 leading-tight">
            Pick Your Path to
            <span className="block bg-gradient-to-r from-[#0084ff] via-[#00a6ff] to-purple-500 bg-clip-text text-transparent">
              Market Domination
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Whether you need an MVP in 4 weeks or enterprise infrastructure that scales to millions, 
            we&apos;ve got the expertise and track record to deliver.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Highlight glow for featured service */}
              {service.highlight && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm" />
              )}
              
              <div className={`relative p-8 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-2xl border ${
                service.highlight ? 'border-[#0084ff]/50' : 'border-white/10'
              } hover:border-[#0084ff]/50 transition-all duration-500`}>
                {/* Badge */}
                {service.badge && (
                  <span className={`absolute -top-3 right-8 px-3 py-1 text-xs font-medium rounded-full ${
                    service.badge === 'MOST POPULAR' 
                      ? 'bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white' 
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {service.badge}
                  </span>
                )}

                {/* Content */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-medium text-white mb-1">{service.title}</h3>
                    <p className="text-[#0084ff] text-sm font-medium">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-white/60 mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex gap-6">
                    <div>
                      <span className="text-white/40 text-sm">Starting at</span>
                      <p className="text-2xl font-light text-white">{service.price}</p>
                    </div>
                    <div>
                      <span className="text-white/40 text-sm">Timeline</span>
                      <p className="text-2xl font-light text-white">{service.timeline}</p>
                    </div>
                  </div>
                  <motion.button
                    className={`p-3 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/60 mb-4">Not sure which service fits your needs?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Users className="w-5 h-5" />
            Let&apos;s discuss your project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
