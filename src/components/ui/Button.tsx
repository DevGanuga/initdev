import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'medium',
  href,
  external = false,
  children,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]';
  
  const variantClasses = {
    primary: 'bg-volt text-obsidian hover:bg-volt/90 shadow-lg shadow-volt/20',
    secondary: 'bg-charcoal text-pearl hover:bg-steel border border-steel/50',
    ghost: 'bg-transparent text-pearl hover:bg-charcoal/50 border border-charcoal',
    danger: 'bg-crimson text-white hover:bg-crimson/90 shadow-lg shadow-crimson/20',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
