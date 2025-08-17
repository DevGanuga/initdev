# Component Architecture & Implementation Guide

## Architecture Overview

```
/src
├── components/
│   ├── layout/          # Core layout components
│   ├── sections/        # Page sections
│   ├── ui/             # Reusable UI components
│   ├── forms/          # Form components
│   ├── animations/     # Animation wrappers
│   └── data/           # Data display components
├── lib/
│   ├── api/            # API utilities
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   ├── constants/      # App constants
│   └── types/          # TypeScript types
├── styles/
│   ├── globals.css     # Global styles
│   ├── variables.css   # CSS variables
│   └── animations.css  # Animation keyframes
└── data/
    ├── content.ts      # Static content
    ├── navigation.ts   # Nav structure
    └── mock.ts         # Mock data
```

## Core Components Implementation

### 1. Enhanced Navigation Component

```tsx
// components/layout/Navigation.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useScrollDirection } from '@/lib/hooks/useScrollDirection';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { Button } from '@/components/ui/Button';
import { navigation } from '@/data/navigation';

interface NavigationProps {
  transparent?: boolean;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  transparent = false,
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  
  const isHidden = scrollDirection === 'down' && scrollPosition > 100;
  const isScrolled = scrollPosition > 50;
  const isTransparent = transparent && !isScrolled && !isOpen;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`
        nav-container fixed top-0 left-0 right-0 z-50
        ${isTransparent ? 'nav-transparent' : 'nav-solid'}
        ${isScrolled ? 'nav-scrolled' : ''}
        ${className}
      `}
    >
      <div className="nav-inner container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nav-content flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="nav-logo flex items-center space-x-2">
            <div className="nav-logo-mark w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg" />
            <span className="nav-logo-text font-bold text-xl">InitDev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="nav-item relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="nav-dropdown absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-800"
                    >
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3">
                          {item.dropdown.title}
                        </h3>
                        {item.dropdown.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="nav-dropdown-item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <div className="nav-dropdown-icon mt-1 text-blue-400">
                              {subItem.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-white">
                                  {subItem.title}
                                </span>
                                {subItem.badge && (
                                  <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-400 mt-1">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="nav-actions flex items-center space-x-4">
            <Button
              variant="primary"
              size="md"
              className="hidden sm:block"
              onClick={() => {/* Handle CTA */}}
            >
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-toggle lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="nav-toggle-icon">
                <span className={`nav-toggle-line ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`nav-toggle-line ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`nav-toggle-line ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile lg:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-6">
              {navigation.map((item) => (
                <div key={item.label} className="nav-mobile-item mb-4">
                  <Link
                    href={item.href}
                    className="nav-mobile-link text-lg text-white block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="nav-mobile-dropdown ml-4 mt-2 space-y-2">
                      {item.dropdown.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="nav-mobile-sublink text-gray-400 block py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                className="mt-6"
                onClick={() => {/* Handle CTA */}}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
```

### 2. Hero Section with Advanced Animation

```tsx
// components/sections/HeroSection.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AnimatedText } from '@/components/animations/AnimatedText';
import { ParticleBackground } from '@/components/animations/ParticleBackground';
import { StatCounter } from '@/components/data/StatCounter';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const stats = [
    { value: 27, label: "Days to MVP", suffix: "" },
    { value: 94, label: "Client Satisfaction", suffix: "%" },
    { value: 3.2, label: "ROI Multiple", suffix: "x", decimals: 1 }
  ];

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <ParticleBackground className="absolute inset-0" />
      <div className="hero-gradient absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
      
      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="hero-content relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="hero-inner max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
            <span className="text-sm text-blue-400">Accepting New Projects</span>
          </motion.div>

          {/* Headline */}
          <AnimatedText
            text="Your Startup's Technical Co-Founder"
            className="hero-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            delay={0.2}
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-subheadline text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Senior engineers who've built and sold startups. We transform your vision 
            into market-ready products in weeks, not months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              variant="primary"
              size="xl"
              icon={<ArrowRightIcon />}
              onClick={() => scrollToSection('contact')}
            >
              Schedule Strategy Call
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection('results')}
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat text-center">
                <div className="hero-stat-value text-4xl font-bold text-white mb-2">
                  <StatCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2}
                  />
                </div>
                <div className="hero-stat-label text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="hero-trust mt-20"
          >
            <p className="text-sm text-gray-500 mb-6">Trusted by founders and enterprises</p>
            <div className="hero-logos flex items-center justify-center space-x-8 opacity-50">
              {/* Add client logos here */}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
```

### 3. Service Card Component

```tsx
// components/ui/ServiceCard.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  service: {
    id: string;
    category: 'core' | 'advanced';
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    technologies: Array<{
      name: string;
      logo: string;
      proficiency: 1 | 2 | 3;
    }>;
    estimatedTimeline: string;
    startingPrice?: string;
  };
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="service-card group"
    >
      <div className="service-card-inner bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="service-card-header p-8">
          {/* Icon */}
          <div className="service-card-icon w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-green-400/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
            {service.icon}
          </div>

          {/* Title & Category */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="service-card-title text-2xl font-bold text-white">
              {service.title}
            </h3>
            {service.category === 'core' && (
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                CORE
              </span>
            )}
          </div>

          {/* Description */}
          <p className="service-card-description text-gray-400 mb-6">
            {service.description}
          </p>

          {/* Quick Info */}
          <div className="service-card-info flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4 text-gray-500" />
              <span className="text-gray-300">{service.estimatedTimeline}</span>
            </div>
            {service.startingPrice && (
              <div className="flex items-center space-x-2">
                <CurrencyDollarIcon className="w-4 h-4 text-gray-500" />
                <span className="text-gray-300">{service.startingPrice}</span>
              </div>
            )}
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="service-card-expand mt-6 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View Details</span>
            <ChevronDownIcon 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="service-card-details border-t border-gray-800"
            >
              <div className="p-8">
                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Technologies We Use
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="service-card-tech flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-lg"
                      >
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-5 h-5"
                        />
                        <span className="text-sm text-gray-300">{tech.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i < tech.proficiency ? 'bg-green-400' : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={() => {/* Handle service inquiry */}}
                  >
                    Get Started with {service.title}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
```

### 4. Process Timeline Component

```tsx
// components/sections/ProcessSection.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const processPhases = [
  {
    week: "Week 1",
    title: "The War Room",
    subtitle: "Strategy & Architecture",
    description: "We lock ourselves in and emerge with a battle plan",
    activities: [
      "Requirements deep-dive",
      "Technical architecture",
      "Design sprint",
      "Risk assessment"
    ],
    deliverables: [
      "Technical specification",
      "System architecture diagram",
      "Sprint roadmap"
    ],
    color: "from-blue-500 to-purple-500"
  },
  {
    week: "Weeks 2-8",
    title: "Code Like Spartans",
    subtitle: "Build & Iterate",
    description: "Daily deployments, weekly demos, zero excuses",
    activities: [
      "Core feature development",
      "API integration",
      "Testing & QA",
      "Performance optimization"
    ],
    deliverables: [
      "Working MVP",
      "API documentation",
      "Admin dashboard"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    week: "Week 9+",
    title: "Scale Like Emperors",
    subtitle: "Launch & Growth",
    description: "Your empire is ready to conquer markets",
    activities: [
      "Production deployment",
      "Monitoring setup",
      "Team training",
      "Growth optimization"
    ],
    deliverables: [
      "Live product",
      "Analytics dashboard",
      "Scaling playbook"
    ],
    color: "from-pink-500 to-orange-500"
  }
];

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="process-section py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="process-header text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-6"
          >
            The InitDev Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            No BS. Maximum results. From idea to empire in weeks.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="process-timeline relative">
          {/* Progress Line */}
          <div className="process-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-orange-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Phases */}
          <div className="process-phases space-y-32">
            {processPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`process-phase flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="process-phase-content w-1/2 px-12">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {/* Week Badge */}
                    <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-white text-sm font-semibold mb-4`}>
                      {phase.week}
                    </span>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-lg text-blue-400 mb-4">
                      {phase.subtitle}
                    </p>
                    <p className="text-gray-400 mb-6">
                      {phase.description}
                    </p>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Key Activities
                      </h4>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="text-gray-300 flex items-center space-x-2">
                            {index % 2 !== 0 && <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />}
                            <span>{activity}</span>
                            {index % 2 === 0 && <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {phase.deliverables.map((deliverable, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="process-node relative z-10">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} p-1`}>
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty Space */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="process-models mt-32"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="process-model bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-bold text-white mb-2">
                  {model.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {model.description}
                </p>
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {model.duration}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => {/* Handle model selection */}}
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
```

## Custom Hooks Library

```tsx
// lib/hooks/useScrollDirection.ts
import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll > prevScroll) {
        setScrollDirection('down');
      } else if (currentScroll < prevScroll) {
        setScrollDirection('up');
      }
      
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return scrollDirection;
};

// lib/hooks/useScrollPosition.ts
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

// lib/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (options: Options = {}) => {
  const { freezeOnceVisible = false, ...observerOptions } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isElementVisible = entry.isIntersecting;
      
      if (isElementVisible) {
        setIsVisible(true);
      } else if (!freezeOnceVisible) {
        setIsVisible(false);
      }
    }, observerOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, freezeOnceVisible, observerOptions]);

  return { elementRef, isVisible };
};

// lib/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};
```

## Animation Components

```tsx
// components/animations/AnimatedText.tsx
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.05
}) => {
  const words = text.split(' ');

  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + (index * stagger)
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// components/animations/ParticleBackground.tsx
import { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} pointer-events-none`}
    />
  );
};
```

## Form Components

```tsx
// components/forms/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  projectType: z.enum(['mvp', 'enterprise', 'automation', 'other']),
  budget: z.enum(['25k-50k', '50k-100k', '100k-250k', '250k+']),
  timeline: z.enum(['asap', '1month', '3months', 'flexible']),
  description: z.string().min(50, 'Please provide at least 50 characters')
    .max(1000, 'Please keep it under 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Submit to API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      // Show success message
      reset();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          {...register('name')}
          error={errors.name?.message}
          required
        />
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
        />
      </div>

      <Input
        label="Company"
        {...register('company')}
        error={errors.company?.message}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Project Type"
          {...register('projectType')}
          error={errors.projectType?.message}
          required
        >
          <option value="">Select project type</option>
          <option value="mvp">MVP Development</option>
          <option value="enterprise">Enterprise Solution</option>
          <option value="automation">B2B Automation</option>
          <option value="other">Other</option>
        </Select>

        <Select
          label="Budget Range"
          {...register('budget')}
          error={errors.budget?.message}
          required
        >
          <option value="">Select budget</option>
          <option value="25k-50k">$25K - $50K</option>
          <option value="50k-100k">$50K - $100K</option>
          <option value="100k-250k">$100K - $250K</option>
          <option value="250k+">$250K+</option>
        </Select>
      </div>

      <Select
        label="Timeline"
        {...register('timeline')}
        error={errors.timeline?.message}
        required
      >
        <option value="">Select timeline</option>
        <option value="asap">ASAP</option>
        <option value="1month">Within 1 month</option>
        <option value="3months">Within 3 months</option>
        <option value="flexible">Flexible</option>
      </Select>

      <Textarea
        label="Project Description"
        rows={6}
        {...register('description')}
        error={errors.description?.message}
        placeholder="Tell us about your project, challenges, and goals..."
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};
```

## Utility Functions

```tsx
// lib/utils/animations.ts
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const staggerDelay = (index: number, baseDelay: number = 0.1) => {
  return index * baseDelay;
};

export const formatNumber = (num: number, decimals: number = 0) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num);
};

// lib/utils/validation.ts
export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return re.test(phone);
};

// lib/utils/performance.ts
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
```

---

This comprehensive component architecture provides production-ready, reusable components with proper TypeScript typing, animations, and best practices. Each component is self-contained and follows the InitDev philosophy of shipping fast while maintaining quality. 🚀
