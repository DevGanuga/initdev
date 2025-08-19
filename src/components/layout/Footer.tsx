'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const footerLinks = {
  Services: [
    { label: 'Zero to MVP', href: '/services#mvp' },
    { label: 'Project Rescue', href: '/services#rescue' },
    { label: 'Scale & Optimize', href: '/services#scale' },
    { label: 'AI Integration', href: '/services#ai' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Support', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,132,255,0.05)] to-transparent" />
      </div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo size="md" animated showText />
            </Link>
            <p className="text-sm text-white/60 mb-6">
              Elite developers who actually ship. More focused than agencies, more reliable than freelancers.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-[#0084ff]/30 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-[#0084ff] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                {category}
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} InitDev. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
                          <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}