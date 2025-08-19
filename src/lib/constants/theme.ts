// Unified theme constants for InitDev website
export const theme = {
  // Colors
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },

  // Typography
  typography: {
    fonts: {
      sans: 'var(--font-inter)',
      mono: 'var(--font-mono)',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  // Spacing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  // Border radius
  radius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },

  // Animation
  animation: {
    durations: {
      fast: '200ms',
      normal: '300ms',
      slow: '600ms',
    },
    easings: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Common gradient classes
export const gradients = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
  secondary: 'bg-gradient-to-br from-blue-50 to-purple-50',
  dark: 'bg-gradient-to-r from-gray-900 to-gray-800',
  light: 'bg-gradient-to-b from-gray-50 to-white',
  success: 'bg-gradient-to-r from-green-50 to-blue-50',
  hero: 'bg-gradient-to-br from-blue-100 to-purple-100',
};

// Common button styles
export const buttonStyles = {
  primary: 'px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors',
  secondary: 'px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors',
  gradient: 'px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all',
  ghost: 'px-8 py-4 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors',
};

// Common card styles
export const cardStyles = {
  default: 'bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow',
  bordered: 'bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-500 transition-colors',
  gradient: 'bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg',
};

// Common section styles
export const sectionStyles = {
  default: 'py-20 px-6 lg:px-8',
  alternate: 'py-20 px-6 lg:px-8 bg-gray-50',
  hero: 'relative pt-32 pb-20 px-6 lg:px-8',
};

// Common container styles
export const containerStyles = {
  default: 'max-w-7xl mx-auto',
  narrow: 'max-w-4xl mx-auto',
  wide: 'max-w-screen-2xl mx-auto',
};

// Export utility functions
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
