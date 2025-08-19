'use client';

import { motion } from 'framer-motion';

interface SectionTransitionProps {
  variant?: 'wave' | 'fade' | 'tech';
}

export function SectionTransition({ variant = 'wave' }: SectionTransitionProps) {
  if (variant === 'wave') {
    return (
      <div className="relative h-32 -mt-1">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <motion.path
            d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z"
            fill="url(#wave-gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 132, 255, 0.05)" />
              <stop offset="50%" stopColor="rgba(0, 166, 255, 0.08)" />
              <stop offset="100%" stopColor="rgba(0, 132, 255, 0.05)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'tech') {
    return (
      <div className="relative py-16">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-[#0084ff]/20 to-transparent" />
          </div>
        </div>
        <div className="relative flex justify-center">
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#0084ff] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  // Fade variant
  return (
    <div className="relative h-px">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
}
