'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Zap, Shield } from 'lucide-react';

export function SimpleCTASection() {
  const offerings = [
    {
      icon: Calendar,
      title: 'Free Strategy Session',
      description: '60 minutes to assess your vision and architect your path forward. No sales pitch, just straight technical strategy.'
    },
    {
      icon: Zap,
      title: 'Rapid Prototype',
      description: 'Have an idea? We can build and deploy a working prototype in 2 weeks. See your vision in action before committing to full development.'
    },
    {
      icon: Shield,
      title: 'Empire Assessment',
      description: 'Already have a platform? We\'ll audit your current architecture and provide a roadmap for scaling your digital empire.'
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
            Ready to Build Your Empire?
          </h2>
          <p className="text-2xl text-[#0084ff] font-light">
            Let&apos;s Skip the Small Talk
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

        {/* The InitDev Manifesto Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#0084ff]/10 via-[#0066cc]/10 to-[#0084ff]/10 p-12 rounded-lg border border-[#0084ff]/20 mb-16"
        >
          <h3 className="text-2xl font-light text-white mb-6 text-center">The InitDev Manifesto</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-[#0084ff] font-medium mb-4">We believe:</h4>
              <ul className="space-y-2 text-white/60">
                <li>• Innovation happens in code, not in PowerPoints</li>
                <li>• The best documentation is working software</li>
                <li>• Technical debt is just debt – and debt kills empires</li>
                <li>• Speed and quality aren&apos;t mutually exclusive</li>
                <li>• Your success is our success</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#0084ff] font-medium mb-4">We promise:</h4>
              <ul className="space-y-2 text-white/60">
                <li>• No corporate BS, ever</li>
                <li>• Code you can be proud of</li>
                <li>• Honesty about timelines and challenges</li>
                <li>• Solutions that scale with your ambitions</li>
                <li>• A team that cares about your success as much as you do</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-white/80 text-lg font-light">
            InitDev: Where Empires Begin
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)] hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            View Our Work
          </button>
          <button className="px-8 py-4 bg-transparent text-white/60 font-medium hover:text-white transition-all duration-300">
            Meet the Team
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 mb-2">Ready to skip the corporate theater and start building something that matters?</p>
          <p className="text-white/60">
            <span className="font-medium">Email:</span> hello@initdev.com | 
            <span className="font-medium ml-2">Emergency Hotline:</span> For when your current dev team isn&apos;t cutting it
          </p>
        </motion.div>
      </div>
    </section>
  );
}