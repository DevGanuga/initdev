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
      title: "Months of Delays",
      description: "Your competitors are shipping while you're still in meetings with agencies.",
      stat: "67%",
      statLabel: "of projects run over deadline",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Budget Overruns",
      description: "Hidden costs, scope creep, and endless revisions drain your resources.",
      stat: "2.5x",
      statLabel: "average cost overrun",
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Wrong Talent",
      description: "Junior devs learning on your dime, managed by non-technical PMs.",
      stat: "73%",
      statLabel: "have wrong skill match",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Technical Debt",
      description: "Quick fixes that become permanent problems, costing millions later.",
      stat: "$85K",
      statLabel: "average refactor cost",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Communication Chaos",
      description: "Lost in translation between you, PMs, and the actual developers.",
      stat: "5+",
      statLabel: "layers of communication",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Failed Launches",
      description: "Products that don't work, don't scale, or don't match requirements.",
      stat: "40%",
      statLabel: "of projects fail completely",
      color: "from-gray-500/20 to-red-500/20"
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
            <span className="text-red-500 text-sm font-medium tracking-wider uppercase">
              The Harsh Reality
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Why Most Dev Projects
            <span className="block text-red-400">Fail Miserably</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            You&apos;ve been there. The endless meetings, the missed deadlines, the &ldquo;unexpected&rdquo; costs.
            Here&apos;s what&apos;s really happening behind the scenes:
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
              
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:bg-white/[0.07]">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className="p-2 rounded-lg bg-red-500/10 text-red-400"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {problem.icon}
                  </motion.div>
                  <div className="text-right ml-auto">
                    <motion.div 
                      className="text-2xl font-bold text-red-400"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {problem.stat}
                    </motion.div>
                    <div className="text-xs text-white/40">{problem.statLabel}</div>
                  </div>
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
            className="text-lg text-white/80 font-medium mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Sound familiar? You&apos;re not alone.
          </motion.p>
          <motion.p 
            className="text-white/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            But it doesn&apos;t have to be this way...
          </motion.p>
          
          {/* Animated arrow pointing down */}
          <motion.div
            className="mt-8 inline-block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
