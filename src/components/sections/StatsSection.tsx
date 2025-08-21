'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const stats = [
    { 
      label: 'Success Rate', 
      value: 100, 
      suffix: '%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      description: 'On-time, on-budget'
    },
    { 
      label: 'Projects Shipped', 
      value: 47, 
      suffix: '+',
      icon: <Users className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Happy clients worldwide'
    },
    { 
      label: 'Avg Response', 
      value: 2, 
      suffix: 'hrs',
      icon: <Clock className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Lightning fast support'
    },
    { 
      label: 'Client Rating', 
      value: 5.0, 
      suffix: '/5',
      icon: <Star className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500',
      description: 'Perfect satisfaction'
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          y: backgroundY 
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-subtle opacity-5" />
      
      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light text-white mb-3">Proven Excellence</h2>
          <p className="text-white/60">Numbers that speak louder than words</p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -5 }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon with gradient background */}
                <motion.div 
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </motion.div>
                
                {/* Animated counter */}
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  {isInView && (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                
                {/* Label */}
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-xs text-white/40">
                  {stat.description}
                </div>
                
                {/* Animated underline */}
                <motion.div
                  className={`h-[2px] bg-gradient-to-r ${stat.color} mt-4`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2500;
    const steps = 75;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {typeof value === 'number' && value % 1 !== 0 
        ? count.toFixed(1) 
        : Math.floor(count)}
      <span className="text-3xl md:text-4xl">{suffix}</span>
    </motion.span>
  );
}
