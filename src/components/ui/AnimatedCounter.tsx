'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ANIMATION_DURATION, EASING } from '@/lib/animations';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
  delay?: number;
  format?: (value: number) => string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
  decimals = 0,
  delay = 0,
  format,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const animationRef = useRef<number | undefined>(undefined);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const startValue = 0;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed - delay) / duration, 1);

      if (progress <= 0) {
        animationRef.current = requestAnimationFrame(updateCount);
        return;
      }

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (value - startValue) * easeOutQuart;

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateCount);
      } else {
        setHasAnimated(true);
      }
    };

    animationRef.current = requestAnimationFrame(updateCount);
  }, [value, duration, delay]);

  useEffect(() => {
    if (inView && !hasAnimated) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, hasAnimated, animate]);

  const displayValue = format 
    ? format(count)
    : decimals > 0 
      ? count.toFixed(decimals) 
      : Math.floor(count).toLocaleString();

  return (
    <motion.span 
      ref={ref} 
      className={cn('tabular-nums', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: ANIMATION_DURATION.normal,
        ease: EASING.easeOut,
      }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
}
