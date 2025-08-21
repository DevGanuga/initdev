'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Server, Cloud, Sparkles } from 'lucide-react';

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      label: 'Frontend',
      icon: <Code2 className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500',
      techs: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind', 'Three.js']
    },
    backend: {
      label: 'Backend',
      icon: <Server className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500',
      techs: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL', 'Redis']
    },
    cloud: {
      label: 'Cloud & DevOps',
      icon: <Cloud className="w-4 h-4" />,
      color: 'from-green-500 to-teal-500',
      techs: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    emerging: {
      label: 'Emerging Tech',
      icon: <Sparkles className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500',
      techs: ['AI/ML', 'Blockchain', 'IoT', 'AR/VR', 'Web3', 'Edge Computing']
    }
  };

  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Built with the Best
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, performant solutions that stand the test of time
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group relative px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                activeCategory === key
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background */}
              {activeCategory === key && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-20`}
                  layoutId="activeTab"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              
              {/* Content */}
              <span className="relative flex items-center gap-2">
                {category.icon}
                {category.label}
              </span>
              
              {/* Border */}
              <div className={`absolute inset-0 rounded-xl border ${
                activeCategory === key 
                  ? 'border-blue-500/50' 
                  : 'border-white/10 group-hover:border-white/20'
              }`} />
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {techCategories[activeCategory as keyof typeof techCategories].techs.map((tech, index) => (
            <motion.div
              key={tech}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {/* Card */}
              <div className="relative glass-card p-6 text-center h-full hover:border-blue-500/30 transition-all">
                <span className="text-white font-light text-lg">{tech}</span>
                
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  techCategories[activeCategory as keyof typeof techCategories].color
                } opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Technologies Mastered', value: '50+' },
            { label: 'Years Combined Experience', value: '100+' },
            { label: 'Production Deployments', value: '200+' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-light text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
