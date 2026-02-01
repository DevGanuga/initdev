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
      title: "Timeline Clarity",
      description: "We set realistic deadlines and stick to them. Regular updates keep you informed.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Clear scope, clear pricing. No surprises, no hidden costs.",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Senior Engineers",
      description: "Experienced developers who've built production systems before.",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Code built for the long term. Easy to maintain, easy to extend.",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Talk directly to the people building your software. No middlemen.",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Quality Focus",
      description: "Proper testing, documentation, and code reviews on every project.",
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
              Common Challenges
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Problems We
            <span className="block text-gradient-blue">Help You Avoid</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Software projects can go sideways for many reasons.
            Here&apos;s what we focus on preventing:
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
            This is what we focus on for every project.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
