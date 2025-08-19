'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Rocket, Code, Users, Target, Shield } from 'lucide-react';

export function ProcessSection() {
  const methodology = [
    {
      week: 'Week 1',
      title: 'Strategic Architecture',
      description: 'We collaborate intensively to understand your vision, constraints, and objectives. Through focused sessions, we create a comprehensive technical roadmap that balances ambition with pragmatic execution.',
      icon: Target,
      highlights: ['Vision alignment', 'Technical roadmap', 'Resource planning']
    },
    {
      week: 'Weeks 2-8',
      title: 'Agile Excellence',
      description: 'Development proceeds in focused sprints with continuous client collaboration. You\'ll see tangible progress weekly, with opportunities to refine and optimize as we build.',
      icon: Code,
      highlights: ['Weekly progress', 'Continuous collaboration', 'Iterative refinement']
    },
    {
      week: 'Week 9+',
      title: 'Sustainable Growth',
      description: 'Launch is just the beginning. We ensure your platform is optimized for performance, scalability, and maintainability, with comprehensive documentation and knowledge transfer.',
      icon: Rocket,
      highlights: ['Performance optimization', 'Scalability assurance', 'Knowledge transfer']
    }
  ];

  const engagementModels = [
    {
      title: 'Platform Development',
      duration: '12-16 weeks',
      description: 'Comprehensive ecosystem development for transformative growth',
      details: 'Complete platform architecture and implementation',
      icon: Shield
    },
    {
      title: 'Rapid Innovation',
      duration: '4-8 weeks',
      description: 'Proof of concept to production-ready solution',
      details: 'Accelerated MVP development and deployment',
      icon: Rocket
    },
    {
      title: 'Technical Partnership',
      duration: '2-12 weeks',
      description: 'Specialized expertise for complex challenges',
      details: 'Strategic problem-solving and optimization',
      icon: Users
    },
    {
      title: 'Growth Partnership',
      duration: 'Monthly',
      description: 'Ongoing development and scaling collaboration',
      details: 'Continuous innovation and platform evolution',
      icon: Calendar
    }
  ];

  return (
    <section className="py-24 bg-black/50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            How We Work
          </h2>
          <p className="text-2xl text-[#0084ff] font-light mb-4">
            The InitDev Methodology: Clarity. Execution. Excellence.
          </p>
          <p className="text-white/60 leading-relaxed">
            Our proven approach delivers exceptional results through focused collaboration and technical excellence.
          </p>
        </motion.div>

        {/* Methodology Timeline */}
        <div className="mb-20">
          <div className="space-y-8">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-[#0084ff]/10 flex items-center justify-center">
                      <phase.icon className="w-7 h-7 text-[#0084ff]" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[#0084ff] text-sm font-medium">{phase.week}</span>
                        <h3 className="text-2xl font-light text-white mt-1">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/60 mb-4 leading-relaxed">{phase.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {phase.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {index < methodology.length - 1 && (
                  <div className="ml-7 mt-4 mb-4 h-12 w-[1px] bg-gradient-to-b from-[#0084ff]/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-light text-white mb-12">Our Engagement Models</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <model.icon className="w-8 h-8 text-[#0084ff]" />
                    <span className="text-[#0084ff] text-sm font-medium">{model.duration}</span>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2">{model.title}</h4>
                  <p className="text-white/60 mb-3">{model.description}</p>
                  <p className="text-white/40 text-sm italic">{model.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="group px-8 py-4 bg-[#0084ff] text-white font-medium rounded-lg transition-all duration-300 hover:bg-[#0066cc] hover:shadow-lg hover:shadow-[#0084ff]/25">
            <span className="flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}