'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { ChevronDown, Code2, Rocket, Shield, Brain } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollDirection, scrollY } = useScrollDirection();
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const { scrollYProgress } = useScroll();
  
  // Smoother visibility logic with buffer zone
  const isNavVisible = scrollY < 20 || (scrollDirection === 'up' && scrollY > 20);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest > 0.01);
  });
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks: NavItem[] = [
    { 
      label: 'Services',
      dropdown: [
        { 
          label: 'Zero to MVP', 
          href: '/services#mvp',
          description: 'Launch in weeks, not months',
          icon: <Rocket className="w-4 h-4" />
        },
        { 
          label: 'Project Rescue', 
          href: '/services#rescue',
          description: 'Fix what others couldn\'t',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'Scale & Optimize', 
          href: '/services#scale',
          description: 'Handle millions of users',
          icon: <Code2 className="w-4 h-4" />
        },
        { 
          label: 'AI Integration', 
          href: '/services#ai',
          description: 'Custom ML solutions',
          icon: <Brain className="w-4 h-4" />
        }
      ]
    },
    { label: 'Process', href: '/process' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'About', href: '/about' },
  ];
  
  const isActiveLink = (href?: string) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname === href.split('#')[0];
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ 
          y: isNavVisible ? 0 : -100,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Progress bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0084ff] to-[#00a6ff] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
        
        <div className="container-custom relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative z-10"
              aria-label="InitDev home"
            >
              <Logo size="md" animated showText />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className="relative text-white/70 hover:text-white transition-all duration-200 text-sm font-medium flex items-center gap-1 py-2 group"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 ${
                          activeDropdown === link.label ? 'rotate-180 text-[#0084ff]' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div 
                            className="absolute top-full left-0 mt-2 w-72 overflow-hidden"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 300,
                              damping: 25
                            }}
                          >
                            <div className="bg-black/95 backdrop-blur-2xl rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                              {link.dropdown.map((item, index) => (
                                <motion.div
                                  key={item.href}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    delay: index * 0.03,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                  }}
                                >
                                  <Link
                                    href={item.href}
                                    className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-all duration-200 group/item"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {item.icon && (
                                      <div className="mt-0.5 text-white/40 group-hover/item:text-[#0084ff] transition-colors">
                                        {item.icon}
                                      </div>
                                    )}
                                    <div className="flex-1">
                                      <div className="text-white font-medium text-sm group-hover/item:text-[#0084ff] transition-colors">
                                        {item.label}
                                      </div>
                                      {item.description && (
                                        <div className="text-white/50 text-xs mt-0.5">
                                          {item.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href!}
                      className="relative text-white/70 hover:text-white transition-all duration-200 text-sm font-medium py-2 group"
                    >
                      <span className="relative">
                        {link.label}
                        <motion.div
                          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0084ff] to-[#00a6ff]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isActiveLink(link.href) ? 1 : 0 }}
                          transition={{ 
                            duration: 0.3, 
                            ease: "easeInOut" 
                          }}
                          style={{ originX: 0.5 }}
                        />
                        <motion.div
                          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0084ff] to-[#00a6ff] opacity-0 group-hover:opacity-100"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            ease: "easeInOut" 
                          }}
                          style={{ originX: 0.5 }}
                        />
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] rounded-lg blur-lg opacity-50" />
                <Button 
                  variant="primary" 
                  size="small" 
                  href="/contact"
                  className="relative"
                >
                  Start a Project
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center z-10 group"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span 
                  className="block h-0.5 bg-white origin-left"
                  animate={isMobileMenuOpen ? {
                    rotate: 45,
                    y: -2,
                    scaleX: 1.14
                  } : {
                    rotate: 0,
                    y: 0,
                    scaleX: 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="block h-0.5 bg-white"
                  animate={isMobileMenuOpen ? {
                    opacity: 0,
                    scaleX: 0
                  } : {
                    opacity: 1,
                    scaleX: 1
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="block h-0.5 bg-white origin-left"
                  animate={isMobileMenuOpen ? {
                    rotate: -45,
                    y: 2,
                    scaleX: 1.14
                  } : {
                    rotate: 0,
                    y: 0,
                    scaleX: 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div 
              className="fixed top-20 inset-x-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-5rem)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            >
              <div className="container-custom py-8">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                    >
                      {link.dropdown ? (
                        <>
                          <button
                            className={`w-full text-left text-white/70 hover:text-white transition-colors font-medium text-lg flex items-center justify-between group ${
                              activeDropdown === link.label ? 'text-white' : ''
                            }`}
                            onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          >
                            {link.label}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === link.label ? 'rotate-180 text-[#0084ff]' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.div 
                                className="mt-3 space-y-1 overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-start gap-3 py-3 px-4 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {item.icon && (
                                      <div className="mt-0.5 text-white/40">
                                        {item.icon}
                                      </div>
                                    )}
                                    <div>
                                      <div className="font-medium">{item.label}</div>
                                      {item.description && (
                                        <div className="text-sm opacity-60 mt-0.5">{item.description}</div>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href!}
                          className={`text-white/70 hover:text-white transition-colors font-medium text-lg ${
                            isActiveLink(link.href) ? 'text-white' : ''
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: navLinks.length * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                  >
                    <Button 
                      variant="primary" 
                      href="/contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full"
                    >
                      Start a Project
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}