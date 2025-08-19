import { Variants } from 'framer-motion';

// Unified animation timing
export const ANIMATION_DURATION = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.2,
} as const;

export const ANIMATION_DELAY = {
  none: 0,
  stagger: 0.1,
  short: 0.2,
  medium: 0.4,
  long: 0.6,
} as const;

export const EASING = {
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.45, 0, 0.55, 1],
  spring: [0.43, 0.13, 0.23, 0.96],
  bounce: [0.68, -0.55, 0.265, 1.55],
} as const;

// Reusable animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_DELAY.stagger,
      delayChildren: ANIMATION_DELAY.short,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

// Hover animations
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    },
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: ANIMATION_DURATION.instant,
    },
  },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 0 30px rgba(187, 247, 108, 0.3)',
    transition: {
      duration: ANIMATION_DURATION.fast,
    },
  },
};

// Scroll-triggered animations
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: EASING.easeOut,
    },
  },
};

// Floating animation for background elements
export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Pulse animation for highlights
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
