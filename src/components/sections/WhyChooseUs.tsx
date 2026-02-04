'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Users, Code2, Rocket, Trophy } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export function WhyChooseUs() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Sprint Delivery',
      description: 'Work driven from written specs, sprint scope, and clear acceptance criteria.',
      gradient: 'from-yellow-500 to-orange-500',
      color: '#FFA500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability Focus',
      description: 'Systems where things cannot break once clients are live. That is what we build.',
      gradient: 'from-blue-500 to-cyan-500',
      color: '#00BFFF'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Full Team',
      description: 'PM, engineers, QA, performance, and security. Coordinated delivery, not freelancers.',
      gradient: 'from-purple-500 to-pink-500',
      color: '#DA70D6'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'AI-Native',
      description: 'Cursor AI IDE with MCP tools scoped per project. Consistent context, faster output.',
      gradient: 'from-green-500 to-teal-500',
      color: '#00CED1'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scale On Demand',
      description: 'We scale capacity up or down when client demand spikes. Defined delivery models.',
      gradient: 'from-red-500 to-rose-500',
      color: '#FF6B6B'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Quality Gates',
      description: 'Playwright E2E, regression coverage, CI checks. Nothing ships without passing.',
      gradient: 'from-indigo-500 to-purple-500',
      color: '#6366F1'
    }
  ];

  return (
    <SectionWrapper className="py-20" fadeIn parallax>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Advantage
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Why Teams Choose Us
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We operate as a structured team that plugs into existing workflows and handles real delivery pressure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={feature.title} 
              index={index}
              glowColor={feature.color}
              className="h-full"
            >
              <div className="p-8">
                <motion.div 
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-4`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-medium text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Animated underline on hover */}
                <motion.div
                  className="h-[2px] bg-gradient-to-r mt-4"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${feature.color}, transparent)`
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}