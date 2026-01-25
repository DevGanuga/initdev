'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
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
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks: NavItem[] = [
    { 
      label: 'Services',
      dropdown: [
        { 
          label: 'MVP Development', 
          href: '/services#mvp',
          description: 'Launch in weeks, not months'
        },
        { 
          label: 'Enterprise Solutions', 
          href: '/services#enterprise',
          description: 'Scale to millions of users'
        },
        { 
          label: 'AI Integration', 
          href: '/services#ai',
          description: 'Custom ML & AI solutions'
        }
      ]
    },
    { label: 'Process', href: '/process' },
    { label: 'Cases', href: '/cases' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/1966510796844172572-removebg-preview.png"
                  alt="InitDev"
                  width={280}
                  height={100}
                  className="h-24 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-smooth py-2 text-[15px] font-light">
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div 
                            className="absolute top-full left-0 mt-4 w-[280px]"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="card-premium p-2">
                              {link.dropdown.map((item, index) => (
                                <motion.div
                                  key={item.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={item.href}
                                    className="block p-3 rounded-lg hover:bg-white/5 transition-smooth"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="text-white font-medium text-sm mb-1">
                                      {item.label}
                                    </div>
                                    {item.description && (
                                      <div className="text-gray-500 text-xs">
                                        {item.description}
                                      </div>
                                    )}
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
                      className="relative text-gray-400 hover:text-white transition-smooth py-2 text-[15px] font-light group"
                    >
                      <span>{link.label}</span>
                      <motion.span 
                        className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: pathname === link.href ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </Link>
                  )}
                </div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" className="btn-premium group">
                  <span>Start Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[55] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="fixed right-0 top-[72px] bottom-0 w-[85%] max-w-sm glass z-[56] lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-white font-light text-lg">Menu</span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <nav className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.dropdown ? (
                        <div>
                          <button
                            className="flex items-center justify-between w-full text-gray-400 hover:text-white transition-smooth text-base font-light"
                            onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          >
                            {link.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                              activeDropdown === link.label ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.div 
                                className="mt-4 space-y-3 pl-4"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-gray-500 hover:text-white transition-smooth text-sm"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    <div className="font-medium mb-1">{item.label}</div>
                                    {item.description && (
                                      <div className="text-xs opacity-60">{item.description}</div>
                                    )}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href!}
                          className="block text-gray-400 hover:text-white transition-smooth text-base font-light"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="pt-6 border-t border-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      href="/contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-premium w-full justify-center"
                    >
                      Start Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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