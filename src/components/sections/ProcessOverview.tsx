'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';

export function ProcessOverview() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your vision and requirements',
      icon: <Search className="w-6 h-6" />,
      duration: 'Day 1-3'
    },
    {
      number: '02',
      title: 'Architecture',
      description: 'Design scalable systems that grow with you',
      icon: <Lightbulb className="w-6 h-6" />,
      duration: 'Week 1'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build with precision, test obsessively',
      icon: <Code2 className="w-6 h-6" />,
      duration: 'Week 2-6'
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Deploy, monitor, and iterate based on data',
      icon: <Rocket className="w-6 h-6" />,
      duration: 'Week 7-8'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0084ff]/5 to-transparent" />
      
      <div className="container-custom relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            From Idea to Impact in 8 Weeks
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Our battle-tested process delivers results, not excuses
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0084ff]/20 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="text-center group">
                  {/* Step number */}
                  <div className="relative inline-block mb-4">
                    <motion.div
                      className="w-20 h-20 bg-[#0084ff]/10 rounded-full flex items-center justify-center border-2 border-[#0084ff]/30 group-hover:border-[#0084ff] transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl font-light text-[#0084ff]">
                        {step.number}
                      </span>
                    </motion.div>
                    
                    {/* Icon overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ rotate: -180 }}
                      whileHover={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-2">
                    {step.description}
                  </p>
                  
                  <span className="text-xs text-[#0084ff] font-medium">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
