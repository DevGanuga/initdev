'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield,
  Cpu,
  Layers
} from 'lucide-react';

export function TechnologySection() {
  const techStack = [
    {
      category: 'Frontend Mastery',
      icon: Code2,
      technologies: ['React', 'Vue', 'Angular', 'Next.js', 'Svelte', 'TypeScript', 'Progressive Web Apps'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend Excellence', 
      icon: Layers,
      technologies: ['Node.js', 'Python', 'Go', 'Rust', 'Java', '.NET', 'GraphQL', 'REST APIs', 'Microservices'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Cloud Platforms',
      icon: Cloud,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'Kubernetes', 'Docker', 'Edge Computing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Databases & Storage',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Time Series DBs', 'Distributed Systems'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Emerging Tech',
      icon: Cpu,
      technologies: ['AI/ML', 'Blockchain', 'IoT', 'AR/VR', 'Edge Computing', 'Quantum-Ready Architecture'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0084ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066cc]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Technology Arsenal
          </h2>
          <p className="text-2xl text-[#0084ff] font-light mb-4">
            Our Weapons of Choice
          </p>
          <p className="text-white/60 leading-relaxed">
            We don&apos;t just follow trends – we evaluate, experiment, and implement the technologies that will give you a competitive advantage.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid gap-8 mb-16">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0084ff]/10 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-6 h-6 text-[#0084ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white mb-2">{category.category}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.02 }}
                      className="px-4 py-2 bg-white/5 text-white/70 rounded-lg text-sm border border-white/10 hover:border-[#0084ff]/30 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 bg-gradient-to-r from-[#0084ff]/10 via-[#0066cc]/10 to-[#0084ff]/10 rounded-lg border border-[#0084ff]/20"
        >
          <h3 className="text-2xl font-light text-white mb-4">Always Learning, Always Leading</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            We don&apos;t just follow trends – we evaluate, experiment, and implement the technologies 
            that will give you a competitive advantage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}