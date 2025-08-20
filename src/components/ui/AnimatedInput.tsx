'use client';

import { motion } from 'framer-motion';
import { useState, InputHTMLAttributes } from 'react';

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export function AnimatedInput({ 
  label, 
  icon,
  error,
  type = 'text',
  ...props 
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      {icon && (
        <motion.div
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 z-10"
          animate={{
            color: isFocused ? '#0084ff' : 'rgba(255,255,255,0.4)',
            scale: isFocused ? 1.1 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      
      <input
        type={type}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== '');
          props.onChange?.(e);
        }}
        className={`
          w-full px-4 py-4 ${icon ? 'pl-12' : ''} 
          bg-white/5 border-2 border-white/10 rounded-lg 
          text-white placeholder-transparent
          focus:border-[#0084ff] focus:bg-white/10
          transition-all duration-300
          peer
        `}
      />
      
      <motion.label
        className={`
          absolute left-4 ${icon ? 'left-12' : ''}
          text-white/60 pointer-events-none
          transition-all duration-300
        `}
        animate={{
          top: isFocused || hasValue ? '0px' : '50%',
          y: isFocused || hasValue ? '-50%' : '-50%',
          scale: isFocused || hasValue ? 0.8 : 1,
          color: isFocused ? '#0084ff' : 'rgba(255,255,255,0.6)',
          backgroundColor: isFocused || hasValue ? '#0a0a0a' : 'transparent',
          paddingLeft: isFocused || hasValue ? '8px' : '0px',
          paddingRight: isFocused || hasValue ? '8px' : '0px',
        }}
      >
        {label}
      </motion.label>
      
      {/* Focus glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          boxShadow: isFocused 
            ? '0 0 0 2px rgba(0,132,255,0.2), 0 0 20px rgba(0,132,255,0.2)' 
            : '0 0 0 0px rgba(0,132,255,0)',
        }}
        transition={{ duration: 0.3 }}
      />
      
      {error && (
        <motion.p
          className="text-red-400 text-sm mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
