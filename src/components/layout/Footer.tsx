'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Web Applications', href: '/services' },
    { label: 'API Development', href: '/services' },
    { label: 'Cloud Solutions', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Cases', href: '/cases' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/1966510796844172572-removebg-preview.png"
                alt="InitDev"
                width={160}
                height={56}
                className="h-12 w-auto"
              />
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Full stack development agency built for sprint-based delivery. 
              SaaS platforms, internal tools, and AI-assisted products.
            </p>
            
            <a 
              href="mailto:success@initdev.co" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              success@initdev.co
            </a>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium mb-4 text-sm">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 mb-12 border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Ready to start your project?</h3>
              <p className="text-gray-400 text-sm">Get in touch for a paid pilot sprint.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
            <Link href="/about" className="text-gray-500 hover:text-white text-sm transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}