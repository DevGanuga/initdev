'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showText?: boolean;
}

export function Logo({ 
  variant = 'default', 
  size = 'md', 
  animated = true,
  showText = true 
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    sm: { icon: 32, text: 16, subtext: 8 },
    md: { icon: 40, text: 20, subtext: 9 },
    lg: { icon: 56, text: 28, subtext: 11 }
  };

  const currentSize = sizes[size];

  return (
    <div 
      className="flex items-center gap-3 cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Icon - Clean, Modern, Minimal */}
      <motion.div 
        className="relative"
        style={{ width: currentSize.icon, height: currentSize.icon }}
        whileHover={animated ? { scale: 1.05 } : {}}
        whileTap={animated ? { scale: 0.95 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            opacity: isHovered ? 0.2 : 0.1
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at center, #0084ff, transparent 70%)',
            filter: 'blur(8px)'
          }}
        />

        {/* Main logo - Abstract brackets representing code/development */}
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <motion.stop 
                offset="0%" 
                stopColor="#0084ff"
                animate={{ stopColor: isHovered ? '#00a6ff' : '#0084ff' }}
                transition={{ duration: 0.3 }}
              />
              <motion.stop 
                offset="100%" 
                stopColor="#0066cc"
                animate={{ stopColor: isHovered ? '#0084ff' : '#0066cc' }}
                transition={{ duration: 0.3 }}
              />
            </linearGradient>
            <linearGradient id="logo-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <motion.rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            fill="url(#logo-gradient)"
            fillOpacity="0.1"
            stroke="url(#logo-gradient)"
            strokeWidth="1"
            strokeOpacity="0.3"
            animate={{
              strokeOpacity: isHovered ? 0.5 : 0.3,
              fillOpacity: isHovered ? 0.15 : 0.1
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Left bracket < */}
          <motion.path
            d="M15 14L10 20L15 26"
            stroke="url(#logo-gradient-light)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              x: isHovered ? -1 : 0,
              strokeWidth: isHovered ? 3 : 2.5
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Right bracket > */}
          <motion.path
            d="M25 14L30 20L25 26"
            stroke="url(#logo-gradient-light)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              x: isHovered ? 1 : 0,
              strokeWidth: isHovered ? 3 : 2.5
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Center dot - represents precision/focus */}
          <motion.circle
            cx="20"
            cy="20"
            r="2"
            fill="url(#logo-gradient)"
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? 1 : 0.8
            }}
            transition={{ 
              scale: { duration: 0.6, repeat: isHovered ? Infinity : 0 },
              opacity: { duration: 0.3 }
            }}
          />

          {/* Subtle connecting line */}
          <motion.line
            x1="16"
            y1="20"
            x2="24"
            y2="20"
            stroke="url(#logo-gradient)"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            strokeDasharray="2 2"
            animate={{
              strokeOpacity: isHovered ? 0.5 : 0.3,
              strokeDasharray: isHovered ? "4 2" : "2 2"
            }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <motion.div
            className="relative"
            animate={{
              y: animated && isHovered ? -1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Main text */}
            <span 
              className="font-semibold tracking-tight text-white"
              style={{ fontSize: currentSize.text }}
            >
              InitDev
            </span>
            
            {/* Subtext */}
            <motion.div
              className="absolute top-full left-0"
              initial={{ opacity: 0, y: -5 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : -5
              }}
              transition={{ duration: 0.2 }}
            >
              <span 
                className="text-[#0084ff] font-medium tracking-wider uppercase whitespace-nowrap"
                style={{ fontSize: currentSize.subtext }}
              >
                Elite Network
              </span>
            </motion.div>
          </motion.div>

          {/* Underline effect */}
          <motion.div
            className="h-[1px] bg-gradient-to-r from-[#0084ff] to-[#00a6ff] mt-1"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      )}
    </div>
  );
}