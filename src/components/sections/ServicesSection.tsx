'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Brain, 
  Cpu,
  Shield
} from 'lucide-react';

export function ServicesSection() {
  const coreServices = [
    {
      icon: Code2,
      title: 'Full-Stack Foundations',
      items: [
        'Modern web applications that scale from day one',
        'Cloud-native architectures built for growth',
        'API ecosystems designed for expansion',
        'Database structures that evolve with your business'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Command Centers',
      items: [
        'Native iOS and Android applications',
        'Cross-platform solutions that don\'t compromise',
        'Progressive web apps that feel native everywhere',
        'Real-time features that keep users engaged'
      ]
    },
    {
      icon: Cloud,
      title: 'Infrastructure That Scales',
      items: [
        'DevOps pipelines that deploy without drama',
        'Cloud architectures that scale automatically',
        'Monitoring systems that prevent problems',
        'Security frameworks built from the ground up'
      ]
    }
  ];

  const advancedServices = [
    {
      icon: Brain,
      title: 'AI/ML Integration',
      items: [
        'Custom machine learning models',
        'AI-powered features that actually work',
        'Data pipelines that turn information into insight',
        'Intelligent automation that saves time and money'
      ]
    },
    {
      icon: Shield,
      title: 'Blockchain & Web3',
      items: [
        'Smart contracts that do what they promise',
        'DeFi protocols built for real use',
        'NFT platforms beyond the hype',
        'Decentralized applications users actually want'
      ]
    },
    {
      icon: Cpu,
      title: 'IoT & Edge Computing',
      items: [
        'Connected devices that stay connected',
        'Edge processing that responds in real-time',
        'Sensor networks that scale to thousands',
        'Industrial IoT that drives real ROI'
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            From foundation to innovation, we build the technology that drives your business forward.
          </p>
        </motion.div>

        {/* Core Platform Development */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-light text-[#0084ff] mb-2">Core Platform Development</h3>
          <p className="text-white/50 mb-12 italic">The foundation of your digital transformation</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300 h-full">
                  <service.icon className="w-10 h-10 text-[#0084ff] mb-4" />
                  <h4 className="text-xl font-medium text-white mb-4">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-[#0084ff] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Innovation Solutions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-light text-[#0084ff] mb-2">Advanced Innovation Solutions</h3>
          <p className="text-white/50 mb-12 italic">Specialized capabilities that drive competitive advantage</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advancedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300 h-full">
                  <service.icon className="w-10 h-10 text-[#0084ff] mb-4" />
                  <h4 className="text-xl font-medium text-white mb-4">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-[#0084ff] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}