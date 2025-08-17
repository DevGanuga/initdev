import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: '/about', label: 'Philosophy' },
      { href: '/team', label: 'The Collective' },
      { href: '/manifesto', label: 'Manifesto' },
      { href: '/careers', label: 'Join Us' },
    ],
    services: [
      { href: '/services#core', label: 'Core Ecosystems' },
      { href: '/services#niche', label: 'Niche Expansions' },
      { href: '/process', label: 'Our Process' },
      { href: '/work', label: 'Case Studies' },
    ],
    resources: [
      { href: '/blog', label: 'Technical Blog' },
      { href: '/docs/technical_philosophy', label: 'Tech Philosophy' },
      { href: '/docs/process_methodology', label: 'Methodology' },
      { href: '/open-source', label: 'Open Source' },
    ],
    connect: [
      { href: 'https://github.com/initdev', label: 'GitHub', external: true },
      { href: 'https://twitter.com/initdev', label: 'Twitter', external: true },
      { href: 'https://linkedin.com/company/initdev', label: 'LinkedIn', external: true },
      { href: 'mailto:hello@initdev.com', label: 'Email', external: true },
    ],
  };

  return (
    <footer className="bg-obsidian border-t border-charcoal/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      
      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-volt rounded-lg flex items-center justify-center">
                <span className="text-obsidian font-black text-xl">I</span>
              </div>
              <span className="text-pearl font-bold text-xl">InitDev</span>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Skip the Corporate BS.<br />
              Build Your Empire.
            </p>
            <div className="mt-6">
              <p className="text-micro text-steel mb-2">READY TO BUILD?</p>
              <Link href="/start" className="text-volt hover:text-volt/80 font-semibold transition-colors">
                Start Your Project →
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-micro text-steel mb-4">COMPANY</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-silver hover:text-pearl transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-micro text-steel mb-4">SERVICES</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-silver hover:text-pearl transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-micro text-steel mb-4">RESOURCES</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-silver hover:text-pearl transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-micro text-steel mb-4">CONNECT</h3>
              <ul className="space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-silver hover:text-pearl transition-colors text-sm"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="text-silver hover:text-pearl transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-charcoal/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-steel text-sm">
                © {currentYear} InitDev. Built different.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="text-steel hover:text-silver text-sm transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-steel hover:text-silver text-sm transition-colors">
                  Terms
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-steel text-sm">Status:</span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-volt rounded-full animate-pulse-glow"></div>
                <span className="text-volt text-sm font-medium">Operational</span>
              </span>
            </div>
          </div>
        </div>

        {/* Easter Egg Comment */}
        <div className="hidden">
          {/* 
            Hey there, code explorer! 👋
            If you're reading this, you're exactly the kind of person we want to work with.
            Drop us a line with the subject "Found the easter egg" for a special surprise.
            - The InitDev Collective
          */}
        </div>
      </div>
    </footer>
  );
}
