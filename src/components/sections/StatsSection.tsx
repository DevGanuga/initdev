'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: 'Success Rate', value: 100, suffix: '%' },
    { label: 'Projects Shipped', value: 47, suffix: '+' },
    { label: 'Avg Response Time', value: 2, suffix: 'hrs' },
    { label: 'Client Satisfaction', value: 5.0, suffix: '/5' }
  ];

  return (
    <section ref={ref} className="py-20 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                {isInView && (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm text-white/40 uppercase tracking-wider">
                {stat.label}
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
    const duration = 2000;
    const steps = 60;
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
    <>
      {typeof value === 'number' && value % 1 !== 0 
        ? count.toFixed(1) 
        : Math.floor(count)}
      {suffix}
    </>
  );
}
