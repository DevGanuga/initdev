'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Custom Software', href: '/services' },
    { label: 'AI & Data Systems', href: '/services' },
    { label: 'Network & Cybersecurity', href: '/services' },
    { label: 'Cloud & Infrastructure', href: '/services' },
  ],
  Company: [
    { label: 'Selected Work', href: '/cases' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-black/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/1966510796844172572-removebg-preview.png"
                alt="InitDev"
                width={200}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              A software development studio building the products, AI, and secure systems companies
              actually run on. 90+ shipped. No fluff, no lock-in.
            </p>
            
            {/* Contact info */}
            <a 
              href="mailto:success@initdev.co" 
              className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">success@initdev.co</span>
            </a>

            {/* Backed by */}
            <a
              href="https://www.thedravidorfoundry.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors group"
            >
              <span className="uppercase tracking-wider">A studio of The Dravidor Foundry</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
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
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} InitDev. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="/contact" className="text-gray-500 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}