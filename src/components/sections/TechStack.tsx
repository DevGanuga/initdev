'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      label: 'Frontend',
      techs: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind', 'Three.js']
    },
    backend: {
      label: 'Backend',
      techs: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL', 'Redis']
    },
    cloud: {
      label: 'Cloud & DevOps',
      techs: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    emerging: {
      label: 'Emerging Tech',
      techs: ['AI/ML', 'Blockchain', 'IoT', 'AR/VR', 'Web3', 'Edge Computing']
    }
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Modern Tech Stack
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We use the right tool for the job, not just the trendy one
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-full p-1">
            {Object.entries(techCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-[#0084ff] text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {techCategories[activeCategory as keyof typeof techCategories].techs.map((tech, index) => (
            <motion.div
              key={tech}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:border-[#0084ff]/50 hover:bg-white/10 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-white font-medium">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
