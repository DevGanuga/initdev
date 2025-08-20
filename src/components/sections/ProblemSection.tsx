'use client';

import { motion } from 'framer-motion';
import { XCircle, Clock, TrendingDown, Users, AlertTriangle, DollarSign } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Months of Delays",
      description: "Your competitors are shipping while you're still in meetings with agencies.",
      stat: "67%",
      statLabel: "of projects run over deadline"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Budget Overruns",
      description: "Hidden costs, scope creep, and endless revisions drain your resources.",
      stat: "2.5x",
      statLabel: "average cost overrun"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Wrong Talent",
      description: "Junior devs learning on your dime, managed by non-technical PMs.",
      stat: "73%",
      statLabel: "have wrong skill match"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Technical Debt",
      description: "Quick fixes that become permanent problems, costing millions later.",
      stat: "$85K",
      statLabel: "average refactor cost"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Communication Chaos",
      description: "Lost in translation between you, PMs, and the actual developers.",
      stat: "5",
      statLabel: "layers of communication"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Failed Launches",
      description: "Products that don't work, don't scale, or don't match requirements.",
      stat: "40%",
      statLabel: "of projects fail completely"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,0,0,.1) 35px, rgba(255,0,0,.1) 70px)`
        }} />
      </div>

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-red-500 text-sm font-medium tracking-wider uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Why Most Dev Projects
            <span className="block text-red-400">Fail Miserably</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            You've been there. The endless meetings, the missed deadlines, the "unexpected" costs.
            Here's what's really happening behind the scenes:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                    {problem.icon}
                  </div>
                  <div className="text-right ml-auto">
                    <div className="text-2xl font-bold text-red-400">{problem.stat}</div>
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
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-white/80 font-medium">
            Sound familiar? You're not alone.
          </p>
          <p className="text-white/60 mt-2">
            But it doesn't have to be this way...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
