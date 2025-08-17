'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'Philosophy' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/work', label: 'Work' },
    { href: '/team', label: 'Collective' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-obsidian/95 backdrop-blur-xl border-b border-charcoal/50' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-volt rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-obsidian font-black text-xl">I</span>
              </div>
              <div className="absolute inset-0 bg-volt/20 rounded-lg blur-xl group-hover:bg-volt/30 transition-colors"></div>
            </div>
            <span className="text-pearl font-bold text-xl">InitDev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver hover:text-pearl transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="small" href="/contact">
              Let&apos;s Talk
            </Button>
            <Button variant="primary" size="small" href="/start">
              Start Building
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
          >
            <span className={`block w-6 h-0.5 bg-pearl transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-pearl my-1 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-pearl transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-20 bg-obsidian/95 backdrop-blur-xl border-b border-charcoal/50 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="container-custom py-8">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-silver hover:text-pearl transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Let&apos;s Talk
                </Button>
                <Button variant="primary" href="/start" onClick={() => setIsMobileMenuOpen(false)}>
                  Start Building
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
