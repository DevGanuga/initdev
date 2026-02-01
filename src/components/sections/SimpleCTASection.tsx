'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Code2, Search } from 'lucide-react';
import Link from 'next/link';

export function SimpleCTASection() {
  const offerings = [
    {
      icon: MessageSquare,
      title: 'Initial Consultation',
      description: 'Let\'s discuss your project and see if we\'re a good fit. No pressure, just an honest conversation.'
    },
    {
      icon: Code2,
      title: 'Technical Assessment',
      description: 'Have existing code? We can review your architecture and provide actionable recommendations.'
    },
    {
      icon: Search,
      title: 'Project Scoping',
      description: 'We\'ll help define clear requirements and milestones before any development begins.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0084ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-6">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-xl text-white/60">
            Ready to get started? Here&apos;s how we can help.
          </p>
        </motion.div>

        {/* Offering Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300 h-full flex flex-col">
                <offering.icon className="w-10 h-10 text-[#0084ff] mb-4" />
                <h3 className="text-xl font-medium text-white mb-3">{offering.title}</h3>
                <p className="text-white/60 flex-grow">{offering.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)] hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link 
            href="/services"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View Our Services
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60">
            Or email us directly at <a href="mailto:hello@initdev.com" className="text-[#0084ff] hover:underline">hello@initdev.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}