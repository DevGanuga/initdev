'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, BarChart3, Users, Cpu, TestTube2, LayoutList } from 'lucide-react';
import { useRef } from 'react';

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const capabilities = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Sprint-Based Delivery",
      description: "Written specs, sprint scope, and clear acceptance criteria on every project.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Defined Delivery Models",
      description: "We scale capacity up or down when demand spikes. Predictable output.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Full Team Structure",
      description: "PM, backend, frontend, QA, performance, and security. All coordinated.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Native Workflow",
      description: "Cursor AI IDE with scoped MCP tools per project. Consistent context across the codebase.",
    },
    {
      icon: <TestTube2 className="w-6 h-6" />,
      title: "E2E Testing Standard",
      description: "Playwright testing tied to sprint requirements. Regression coverage and CI checks.",
    },
    {
      icon: <LayoutList className="w-6 h-6" />,
      title: "Linear-Driven Process",
      description: "Product and delivery managed through Linear. Single source of truth for specs and planning.",
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black" />

      <motion.div
        className="container-custom relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            How We Operate
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Built for Complex Systems
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Multi-tenant systems, role-based access, complex workflows. Things that cannot break once clients are live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#0084ff]/20 hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="p-2 rounded-lg bg-[#0084ff]/10 text-[#0084ff] w-fit mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-lg text-white/70 font-medium mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Not a freelancer collective. A structured team that handles real delivery pressure.
        </motion.p>
      </motion.div>
    </section>
  );
}
