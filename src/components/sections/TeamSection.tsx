'use client';

import { motion } from 'framer-motion';
import { Code2, Cloud, Brain } from 'lucide-react';

export function TeamSection() {
  const teamCategories = [
    {
      title: 'System Architects',
      description: 'Visionaries who design scalable, future-ready technical foundations',
      icon: Brain,
      members: [
        { name: 'Senior Architect', expertise: '10+ years scaling distributed systems' },
        { name: 'Cloud Architect', expertise: 'AWS/Azure certified, 100+ deployments' }
      ]
    },
    {
      title: 'Senior Engineers',
      description: 'Craftspeople who transform complex requirements into elegant, maintainable code',
      icon: Code2,
      members: [
        { name: 'Full-Stack Lead', expertise: 'React/Node expert, 50+ production apps' },
        { name: 'Backend Specialist', expertise: 'Go/Rust systems, microservices architect' }
      ]
    },
    {
      title: 'Infrastructure Specialists',
      description: 'Experts who ensure your platform performs flawlessly under any conditions',
      icon: Cloud,
      members: [
        { name: 'DevOps Engineer', expertise: 'K8s certified, CI/CD automation expert' },
        { name: 'Security Engineer', expertise: 'Zero-trust architecture, compliance specialist' }
      ]
    }
  ];

  const commitments = [
    {
      title: 'Senior-Level Expertise',
      description: 'Every team member brings 5+ years of production system experience'
    },
    {
      title: 'Direct Collaboration',
      description: 'You work directly with the engineers building your solution'
    },
    {
      title: 'Transparent Communication',
      description: 'Regular updates, honest timelines, and proactive problem-solving'
    },
    {
      title: 'Technical Integrity',
      description: 'We build sustainable solutions that support long-term growth'
    }
  ];

  return (
    <section className="py-24 bg-black/50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Meet the Collective
          </h2>
          <p className="text-2xl text-[#0084ff] font-light mb-4">
            Our Distinguished Team
          </p>
          <p className="text-white/60 leading-relaxed">
            A collective of industry veterans united by a shared commitment to technical excellence and client success.
          </p>
        </motion.div>

        {/* Team Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {teamCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#0084ff]/30 transition-all duration-300 h-full">
                <category.icon className="w-10 h-10 text-[#0084ff] mb-4" />
                <h3 className="text-xl font-medium text-white mb-3">{category.title}</h3>
                <p className="text-white/60 text-sm mb-6 italic">{category.description}</p>
                
                <div className="space-y-4">
                  {category.members.map((member, idx) => (
                    <div key={idx} className="border-l-2 border-[#0084ff]/20 pl-4">
                      <p className="text-white/80 font-medium text-sm">{member.name}</p>
                      <p className="text-white/50 text-xs">{member.expertise}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-light text-white mb-12 text-center">Our Commitment to Excellence</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-2 h-2 bg-[#0084ff] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-2">{commitment.title}</h4>
                  <p className="text-white/60 text-sm">{commitment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-12 bg-gradient-to-r from-[#0084ff]/5 via-[#0066cc]/5 to-[#0084ff]/5 rounded-lg border border-[#0084ff]/10"
        >
          <h3 className="text-2xl font-light text-white mb-8 text-center">Client Success Stories</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "InitDev transformed our technical vision into a platform that scales with our growth. Their expertise saved us years of development iteration.",
                author: "Technology Startup, Series A Success"
              },
              {
                quote: "Working with InitDev felt like gaining a technical co-founder. They understood both the technology and the business implications.",
                author: "Enterprise Innovation Director"
              },
              {
                quote: "The quality and speed of delivery exceeded our expectations. InitDev delivered a complex integration in weeks, not months.",
                author: "SaaS Platform Leader"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                <div className="text-[#0084ff] text-4xl leading-none mb-2">&ldquo;</div>
                <p className="text-white/70 text-sm mb-4 italic">{testimonial.quote}</p>
                <p className="text-white/40 text-xs">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}