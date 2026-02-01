'use client';

import { motion } from 'framer-motion';
import { Code2, Shield, Zap, Users } from 'lucide-react';

export function TestimonialsSection() {
  const values = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Senior Engineers Only',
      description: 'Every project is built by experienced developers. No juniors learning on your project.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Production-Ready Code',
      description: 'Clean, tested, documented code that your team can maintain and extend.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Direct Communication',
      description: 'Talk directly with the engineers building your product. No layers of management.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Long-Term Partnership',
      description: 'We build relationships, not just software. Here when you need us.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Built Different
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We do things differently than typical agencies
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-3 rounded-xl bg-[#0084ff]/10 text-[#0084ff] w-fit mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{value.title}</h3>
              <p className="text-white/60 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
