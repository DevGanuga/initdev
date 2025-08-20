'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Users, Code2, Rocket, Trophy } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Ship in weeks, not months. We move at startup speed with enterprise quality.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Battle Tested',
      description: 'Senior engineers only. Every line of code is production-ready from day one.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Direct Access',
      description: 'No project managers. Talk directly to the developers building your product.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Maintainable, documented, tested. Code your team can actually work with.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scale Ready',
      description: 'Built for growth from the start. Handle millions of users without rewrites.',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: '100% project success rate. We deliver what we promise, every time.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Why Elite Teams Choose Us
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We&apos;re not another dev shop. We&apos;re the technical partners you wish you had from the start.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]} 0%, ${feature.gradient.split(' ')[3]} 100%)`
                }}
              />
              
              <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
