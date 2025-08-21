'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const footerLinks = {
  Solutions: [
    { label: 'Enterprise Development', href: '/services#enterprise' },
    { label: 'MVP Launch', href: '/services#mvp' },
    { label: 'AI Integration', href: '/services#ai' },
    { label: 'Cloud Architecture', href: '/services#cloud' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'Careers', href: '/careers' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Support', href: '/support' },
    { label: 'Status', href: '/status' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '/security' },
    { label: 'Compliance', href: '/compliance' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container-custom py-20 relative">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">ID</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-light">InitDev</h3>
                  <p className="text-gray-500 text-xs">Enterprise Development Solutions</p>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Building next-generation software solutions for ambitious companies. 
              From concept to scale, we deliver excellence.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <a href="mailto:hello@initdev.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-smooth group">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@initdev.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-white transition-smooth group">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/5 hover:border-blue-500/30 transition-smooth group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-smooth" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
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
                        className="text-gray-400 hover:text-white text-sm transition-smooth inline-flex items-center gap-1 group"
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

        {/* Newsletter section */}
        <div className="card-premium p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-xl font-light mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest insights on technology and development</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-smooth flex-1 md:w-64"
              />
              <button
                type="submit"
                className="btn-premium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} InitDev. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-500 text-sm">All systems operational</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-smooth">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-smooth">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-smooth">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}