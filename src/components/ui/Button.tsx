'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0084ff]/50';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white hover:shadow-[0_0_30px_rgba(0,132,255,0.5)] hover:scale-105',
    secondary: 'bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
    ghost: 'bg-transparent text-white/60 hover:text-white hover:bg-white/5',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none',
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}