'use client';

/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code2, Server, Cloud } from 'lucide-react';

type Tech = { name: string; logo: string; invert?: boolean };

const categories: {
  key: string;
  label: string;
  icon: React.ReactNode;
  techs: Tech[];
}[] = [
  {
    key: 'frontend',
    label: 'Frontend',
    icon: <Code2 className="w-4 h-4" />,
    techs: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    icon: <Server className="w-4 h-4" />,
    techs: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
      { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    ],
  },
  {
    key: 'infrastructure',
    label: 'Infrastructure',
    icon: <Cloud className="w-4 h-4" />,
    techs: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert: true },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
    ],
  },
];

export function TechStack() {
  const [active, setActive] = useState('frontend');
  const activeCategory = categories.find((c) => c.key === active)!;

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Our Stack
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            The tools we ship production systems with.
          </p>
        </motion.div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                active === cat.key
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {/* Active background pill */}
              {active === cat.key && (
                <motion.div
                  className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-xl"
                  layoutId="techTab"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Inactive border */}
              {active !== cat.key && (
                <div className="absolute inset-0 border border-white/[0.06] rounded-xl" />
              )}

              <span className="relative flex items-center gap-2">
                {cat.icon}
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3 md:gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory.techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col items-center gap-3 p-5 md:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#0084ff]/30 hover:bg-white/[0.05] transition-all duration-300">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    className={`w-9 h-9 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${
                      tech.invert ? 'brightness-0 invert' : ''
                    }`}
                    loading="lazy"
                  />
                  <span className="text-xs md:text-sm text-white/50 group-hover:text-white/80 transition-colors font-medium text-center">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
