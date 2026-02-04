'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { XCircle, Clock, TrendingDown, Users, AlertTriangle, DollarSign } from 'lucide-react';
import { useRef } from 'react';

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Sprint-Based Delivery",
      description: "Written specs, sprint scope, and clear acceptance criteria on every project.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Defined Delivery Models",
      description: "We scale capacity up or down when demand spikes. Predictable output.",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Full Team Structure",
      description: "PM, backend, frontend, QA, performance, and security. All coordinated.",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "AI-Native Workflow",
      description: "Cursor AI IDE with scoped MCP tools per project. Consistent context across the codebase.",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "E2E Testing Standard",
      description: "Playwright testing tied to sprint requirements. Regression coverage and CI checks.",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Linear-Driven Process",
      description: "Product and delivery managed through Linear. Single source of truth for specs and planning.",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)`
      }} />

      <motion.div 
        className="container-custom relative"
        style={{ opacity, scale }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block mb-4">
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase">
              What We Do Best
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Built for Complex Systems
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Multi-tenant systems, role-based access, complex workflows. Things that cannot break once clients are live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="relative group"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`} />
              
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300 hover:bg-white/[0.07]">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className="p-2 rounded-lg bg-[#0084ff]/10 text-[#0084ff]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {problem.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-medium text-white mb-2">
                  {problem.title}
                </h3>
                
                <p className="text-sm text-white/60 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.p 
            className="text-lg text-white/80 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Not a freelancer collective. A structured team that handles real delivery pressure.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
