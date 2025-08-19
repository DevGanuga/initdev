'use client';

import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Shield, Users, Target, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.1] tracking-[-0.02em] mb-8 text-white">
                The Future of
                <span className="block text-[#0084ff]">Development</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                We understand the frustration of brilliant ideas lost in translation. Traditional development often means compromise – trading vision for feasibility, speed for quality, innovation for safety.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                <span className="text-white font-medium">InitDev was born from a simple belief:</span> exceptional ideas deserve exceptional execution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About InitDev Section */}
        <section className="py-20 px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl font-light text-white mb-6">What Sets Us Apart</h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  We&apos;ve reimagined how elite development teams operate. No bureaucratic overhead. No junior developers learning on your investment. No technical compromises that limit your potential.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Instead, we&apos;ve created something different: a collective of industry veterans who combine deep technical mastery with an obsession for delivering solutions that truly scale.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: Users, title: "Senior-Only Team", desc: "Every engineer brings 5+ years of production experience" },
                  { icon: Zap, title: "4-Week Delivery", desc: "From concept to production in record time" },
                  { icon: Shield, title: "100% Success Rate", desc: "Every project delivered on time and on budget" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0084ff]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#0084ff]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-white mb-4 text-center">
                Our Philosophy
              </h2>
              <p className="text-xl text-[#0084ff] text-center mb-16">
                Precision. Excellence. Impact.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "PRECISION",
                    desc: "Every decision is deliberate. We architect solutions that solve not just today's challenges, but anticipate tomorrow's opportunities."
                  },
                  {
                    title: "EXCELLENCE",
                    desc: "We don't ship code; we craft platforms. Every system we build reflects our commitment to technical mastery and long-term sustainability."
                  },
                  {
                    title: "IMPACT",
                    desc: "Success isn't measured in deliverables – it's measured in the growth, efficiency, and competitive advantage our solutions enable."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                  >
                    <h3 className="text-[#0084ff] font-medium mb-4 tracking-wider">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The InitDev Advantage */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-white mb-12">The InitDev Advantage</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Elite Technical Expertise",
                    desc: "Our team consists exclusively of senior engineers and architects with proven track records in scaling complex systems.",
                    icon: Code2
                  },
                  {
                    title: "Streamlined Excellence",
                    desc: "We've eliminated inefficiencies without sacrificing quality. Every process, every interaction, every line of code serves your objectives.",
                    icon: Target
                  },
                  {
                    title: "Strategic Partnership",
                    desc: "You're not hiring contractors; you're gaining technical co-founders who are invested in your long-term success.",
                    icon: Users
                  },
                  {
                    title: "Future-Ready Solutions",
                    desc: "We build with tomorrow in mind, ensuring your platform evolves gracefully as your organization grows.",
                    icon: Rocket
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group p-8 bg-black/30 backdrop-blur-sm rounded-lg border border-white/5 hover:border-[#0084ff]/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <item.icon className="w-8 h-8 text-[#0084ff] mb-4" />
                    <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner With Excellence CTA */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black/50 to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-white mb-4">Partner With Excellence</h2>
              <p className="text-xl text-white/60 mb-12">Let&apos;s Build Something Exceptional Together</p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    title: "Strategic Consultation",
                    desc: "60-minute technical strategy session to explore your vision and outline implementation pathways. Complimentary for qualified projects.",
                    cta: "Book Session"
                  },
                  {
                    title: "Innovation Sprint",
                    desc: "Transform your concept into a working prototype in 2 weeks. Experience our methodology and see your ideas come to life.",
                    cta: "Start Sprint"
                  },
                  {
                    title: "Technical Assessment",
                    desc: "Comprehensive evaluation of your current platform with actionable recommendations for optimization and scaling.",
                    cta: "Get Assessment"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                  >
                    <div className="p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300 h-full flex flex-col">
                      <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                      <p className="text-white/60 mb-6 flex-grow">{item.desc}</p>
                      <button className="w-full px-4 py-2 bg-[#0084ff]/10 text-[#0084ff] rounded-lg border border-[#0084ff]/20 hover:bg-[#0084ff]/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                        {item.cta}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}