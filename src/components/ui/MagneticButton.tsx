'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, MouseEvent, useRef } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

export function MagneticButton({ 
  children, 
  className = '',
  href,
  onClick,
  variant = 'primary',
  size = 'medium'
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.1);
    y.set(distanceY * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white shadow-lg shadow-[#0084ff]/25 hover:shadow-xl hover:shadow-[#0084ff]/30',
    secondary: 'bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
    ghost: 'text-white hover:text-[#0084ff]'
  };

  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={baseClasses}
      >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
        
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00a6ff] to-[#0084ff] opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Component>
    </motion.div>
  );
}
