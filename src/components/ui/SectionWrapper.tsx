'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  parallax?: boolean;
  fadeIn?: boolean;
}

export function SectionWrapper({ 
  children, 
  className = '',
  parallax = false,
  fadeIn = true
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [100, -100] : [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], fadeIn ? [0, 1, 1, 0] : [1, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], fadeIn ? [0.9, 1, 1, 0.9] : [1, 1, 1, 1]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ y, opacity, scale }}
      initial={fadeIn ? { opacity: 0 } : {}}
      whileInView={fadeIn ? { opacity: 1 } : {}}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
