'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Shield, Users, Target, Rocket, Star, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section with Enhanced Design */}
        <section className="relative pt-32 pb-20 overflow-hidden">
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
            <motion.div
              className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{
                duration: 12,
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
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 glass-subtle rounded-full mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Star className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400 font-medium">
                  Redefining Technical Excellence Since 2020
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1]">
                We Build the
                <span className="block text-gradient-blue mt-2">Future</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                Where visionary ideas meet flawless execution. We&apos;re not just developers – 
                we&apos;re architects of digital transformation, partners in innovation, and 
                catalysts for unprecedented growth.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  { label: 'Projects Delivered', value: '200+' },
                  { label: 'Success Rate', value: '100%' },
                  { label: 'Avg. Delivery Time', value: '6 Weeks' }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="text-2xl font-light text-blue-400 mb-1">{stat.value}</div>
                    <div className="text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
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
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                  Born from <span className="text-gradient-blue">Frustration</span>,
                  <br />Built for <span className="text-gradient-blue">Excellence</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  We&apos;ve been where you are – watching brilliant visions get watered down by
                  mediocre execution, seeing deadlines slip, and quality compromised.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  That&apos;s why we created InitDev: a collective of senior engineers who&apos;ve 
                  built systems at scale for Fortune 500s and unicorn startups. We know what 
                  excellence looks like, and we deliver it every time.
                </p>
                
                <div className="space-y-4">
                  {[
                    'No junior developers learning on your dime',
                    'Direct access to the engineers building your product',
                    'Production-ready code from day one',
                    'Built to scale from MVP to millions of users'
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
                  { number: '200+', label: 'Projects Shipped', icon: Rocket },
                  { number: '100%', label: 'Success Rate', icon: Award },
                  { number: '50+', label: 'Happy Clients', icon: Users },
                  { number: '4-6', label: 'Week Delivery', icon: Zap }
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
                    <div className="text-3xl font-light text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
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
                Core Values
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Principles That Drive Excellence
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Every line of code, every decision, every interaction is guided by these unwavering principles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Precision First",
                  description: "Thoughtful architecture that scales elegantly",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Shield,
                  title: "Uncompromising Quality",
                  description: "Production-ready from the first commit",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: TrendingUp,
                  title: "Built for Growth",
                  description: "Systems that evolve with your ambition",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  icon: Users,
                  title: "True Partnership",
                  description: "Your success is our only metric",
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

        {/* Team Section */}
        <section className="py-24 relative">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                The Team
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Senior Engineers Only
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Every member of our team has shipped production systems at scale.
                No juniors, no outsourcing, just proven expertise.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  role: "Frontend Architecture",
                  expertise: "React, Next.js, TypeScript",
                  experience: "10+ years",
                  projects: "50+ production apps"
                },
                {
                  role: "Backend Systems",
                  expertise: "Node.js, Python, Go",
                  experience: "8+ years",
                  projects: "100M+ requests/day"
                },
                {
                  role: "DevOps & Cloud",
                  expertise: "AWS, Kubernetes, CI/CD",
                  experience: "12+ years",
                  projects: "99.99% uptime"
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
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Experience</span>
                        <span className="text-gray-300">{member.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Track Record</span>
                        <span className="text-gray-300">{member.projects}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center p-8 glass-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-4">
                Our team includes alumni from
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'].map((company) => (
                  <span key={company} className="text-white text-lg font-light">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
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
                Ready to Build Something
                <span className="block text-gradient-blue mt-2">Extraordinary?</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Join the founders and innovators who trust InitDev to bring their
                most ambitious projects to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="btn-premium inline-flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <motion.a
                  href="/process"
                  className="btn-secondary inline-flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn Our Process</span>
                </motion.a>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-4">
                  Trusted by innovative companies worldwide
                </p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600">
                  {['Startup', 'Scale-up', 'Enterprise', 'Fortune 500'].map((type, idx) => (
                    <motion.span
                      key={type}
                      className="text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      {type}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </>
  );
}