'use client';

import { useEffect } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

interface UseScrollAnimationOptions extends IntersectionOptions {
  delay?: number;
  animateOnce?: boolean;
}

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  controls: AnimationControls;
  inView: boolean;
}

export function useScrollAnimation({
  threshold = 0.1,
  delay = 0,
  animateOnce = true,
  ...options
}: UseScrollAnimationOptions = {}): UseScrollAnimationReturn {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: animateOnce,
    ...options,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        controls.start('visible');
      }, delay);
      return () => clearTimeout(timer);
    } else if (!animateOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, delay, animateOnce]);

  return { ref, controls, inView };
}
