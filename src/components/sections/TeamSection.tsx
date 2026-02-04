'use client';

import { motion } from 'framer-motion';
import { Award, Code2, Rocket, Shield } from 'lucide-react';
import { useState } from 'react';

export function TeamSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const team = [
    {
      id: 'alex-chen',
      name: 'Alex Chen',
      role: 'Technical Architect',
      category: 'leadership',
      avatar: '👨‍💻',
      bio: 'Former CTO who scaled a fintech startup to $50M exit. Expert in distributed systems and cloud architecture.',
      expertise: ['System Design', 'Microservices', 'AWS', 'DevOps'],
      experience: '15+ years',
      achievements: [
        { icon: <Rocket />, text: '$50M acquisition by Oracle' },
        { icon: <Code2 />, text: 'Scaled platform to 10M users' },
        { icon: <Award />, text: '3 successful startup exits' }
      ]
    },
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      role: 'Full-Stack Lead',
      category: 'engineering',
      avatar: '👩‍💻',
      bio: 'Built and launched 5 YC-backed startups. Specializes in rapid MVP development and product-market fit.',
      expertise: ['React', 'Node.js', 'TypeScript', 'Product Strategy'],
      experience: '12+ years',
      achievements: [
        { icon: <Rocket />, text: '5 YC startups launched' },
        { icon: <Code2 />, text: '100+ production apps' },
        { icon: <Award />, text: 'Google Dev Expert' }
      ]
    },
    {
      id: 'michael-park',
      name: 'Michael Park',
      role: 'AI/ML Engineer',
      category: 'engineering',
      avatar: '🧑‍💻',
      bio: 'PhD in Machine Learning. Built AI systems processing 1B+ requests daily at Meta.',
      expertise: ['Machine Learning', 'Python', 'TensorFlow', 'NLP'],
      experience: '10+ years',
      achievements: [
        { icon: <Shield />, text: 'Ex-Meta AI Research' },
        { icon: <Code2 />, text: '20+ published papers' },
        { icon: <Award />, text: 'AI Innovation Award 2023' }
      ]
    },
    {
      id: 'emma-davis',
      name: 'Emma Davis',
      role: 'DevOps Architect',
      category: 'infrastructure',
      avatar: '👩‍🔬',
      bio: 'Infrastructure expert who designed systems handling Black Friday traffic for Fortune 500 companies.',
      expertise: ['Kubernetes', 'CI/CD', 'Terraform', 'Security'],
      experience: '13+ years',
      achievements: [
        { icon: <Shield />, text: '99.99% uptime achieved' },
        { icon: <Code2 />, text: 'Managed 1000+ containers' },
        { icon: <Rocket />, text: 'Zero security breaches' }
      ]
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      role: 'Blockchain Engineer',
      category: 'engineering',
      avatar: '🧑‍🚀',
      bio: 'Early Ethereum contributor. Built DeFi protocols managing $500M+ in TVL.',
      expertise: ['Solidity', 'Web3', 'Smart Contracts', 'DeFi'],
      experience: '8+ years',
      achievements: [
        { icon: <Shield />, text: '$500M TVL managed' },
        { icon: <Code2 />, text: '50+ audited contracts' },
        { icon: <Award />, text: 'ETH Denver Winner' }
      ]
    },
    {
      id: 'lisa-wong',
      name: 'Lisa Wong',
      role: 'Mobile Lead',
      category: 'engineering',
      avatar: '👩‍🎨',
      bio: 'Shipped #1 apps on App Store. Expert in React Native and native iOS/Android development.',
      expertise: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
      experience: '11+ years',
      achievements: [
        { icon: <Rocket />, text: '3 apps with 1M+ downloads' },
        { icon: <Award />, text: 'App Store Editor&apos;s Choice' },
        { icon: <Code2 />, text: '4.9★ average rating' }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Team', count: team.length },
    { id: 'leadership', label: 'Leadership', count: team.filter(m => m.category === 'leadership').length },
    { id: 'engineering', label: 'Engineering', count: team.filter(m => m.category === 'engineering').length },
    { id: 'infrastructure', label: 'Infrastructure', count: team.filter(m => m.category === 'infrastructure').length }
  ];

  const filteredTeam = activeCategory === 'all' 
    ? team 
    : team.filter(member => member.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a]">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0084ff]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Team
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light text-white mb-6 leading-tight">
            Meet The Builders Behind
            <span className="block bg-gradient-to-r from-[#0084ff] to-purple-500 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Senior engineers and architects who&apos;ve been where you want to go. 
            No juniors, no outsourcing. Battle-tested experts only.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white shadow-lg shadow-[#0084ff]/25'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredTeam.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              layout
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#0084ff]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0084ff]/10">
                {/* Avatar and Basic Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{member.avatar}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                    <p className="text-[#0084ff] text-sm font-medium mb-1">{member.role}</p>
                    <p className="text-white/40 text-xs">{member.experience}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-white/5 text-white/70 text-xs rounded-full border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {member.achievements.slice(0, 2).map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="text-[#0084ff] w-4 h-4">{achievement.icon}</span>
                      {achievement.text}
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-[#0084ff]/10 to-purple-500/10 rounded-2xl border border-[#0084ff]/20">
            <h3 className="text-2xl font-light text-white mb-3">
              Work With Industry Veterans
            </h3>
            <p className="text-white/60 mb-6 max-w-md">
              Get direct access to senior engineers who&apos;ve built and scaled successful products. 
              No middlemen, no juniors. Results only.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0084ff] to-[#00a6ff] text-white font-medium rounded-lg shadow-lg shadow-[#0084ff]/25 hover:shadow-xl hover:shadow-[#0084ff]/30 transition-all duration-300"
            >
              Start Building With Us
              <Rocket className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}