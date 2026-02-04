'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Shield, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-8 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
            <motion.div
              className="absolute top-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container-custom relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1]">
                About <span className="text-gradient-blue">InitDev</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                A full stack development agency built for sprint-based delivery of custom software.
                We operate as a structured team that plugs into existing workflows.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                  Our Approach
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                  Software Development
                  {' '}<br /><span className="text-gradient-blue">Done Right</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  All work is driven from written specs, sprint scope, and clear acceptance criteria.
                  We operate inside defined delivery models and scale capacity up or down when demand spikes.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Our team includes a dedicated product manager, backend and frontend engineers, QA, 
                  performance engineers, and cybersecurity professionals.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Sprint-based delivery with clear acceptance criteria',
                    'Playwright E2E testing and CI checks on every project',
                    'Linear-driven specs, planning, and delivery tracking',
                    'AI-native workflow with scoped MCP tools per project'
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {[
                  { label: 'Full-Stack', description: 'Web & Mobile', icon: Code2 },
                  { label: 'APIs', description: 'REST & GraphQL', icon: Zap },
                  { label: 'Cloud', description: 'AWS & GCP', icon: Shield },
                  { label: 'Teams', description: 'Small & Focused', icon: Users }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card p-6 text-center group hover:border-blue-500/30 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-xl font-light text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-500">{stat.description}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <SectionWrapper className="py-24 bg-gradient-to-b from-black to-black/50">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                How We Work
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Our Principles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The values that guide every project we take on
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Reliability Focus",
                  description: "Systems where things cannot break once clients are live.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Shield,
                  title: "Structured Delivery",
                  description: "Written specs, sprint scope, and clear acceptance criteria.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Process",
                  description: "We scale capacity up or down when client demand spikes.",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  icon: Users,
                  title: "Long-Term Partnership",
                  description: "A2A partnerships where we integrate and support over time.",
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="glass-card p-8 h-full hover:border-blue-500/30 transition-all group-hover:translate-y-[-4px]">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.gradient} bg-opacity-10 mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* What We Do Section */}
        <section className="py-24 relative">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                What We Build
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Full-stack development across the modern web stack
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  role: "Frontend",
                  expertise: "React, Next.js, TypeScript",
                  description: "Modern, responsive interfaces"
                },
                {
                  role: "Backend",
                  expertise: "Node.js, Python, Go",
                  description: "Scalable APIs and services"
                },
                {
                  role: "Infrastructure",
                  expertise: "AWS, Docker, CI/CD",
                  description: "Reliable deployment pipelines"
                }
              ].map((member, idx) => (
                <motion.div
                  key={member.role}
                  className="glass-card p-8 relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-medium text-white mb-2">
                      {member.role}
                    </h3>
                    
                    <p className="text-blue-400 text-sm mb-4">
                      {member.expertise}
                    </p>
                    
                    <p className="text-gray-400 text-sm">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
          
          <div className="container-custom relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 glass-subtle rounded-full mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400 font-medium">
                  Limited Availability for Q1 2025
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                Let&apos;s Build Something
                {' '}<span className="block text-gradient-blue mt-2">Together</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Have a project in mind? We&apos;d love to hear about it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="btn-premium inline-flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <motion.a
                  href="/services"
                  className="btn-secondary inline-flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>See Our Services</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </>
  );
}