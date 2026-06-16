'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredProjects } from '@/lib/data/projects';

export function SelectedWork() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-3">
              Live in production
            </h2>
            <p className="text-lg text-white/60 max-w-xl">
              A few of the 13+ products we&apos;ve shipped — real software with real users, not
              mockups. Open any of them in a new tab.
            </p>
          </div>

          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group whitespace-nowrap"
          >
            View all work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-[#0084ff]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 mix-blend-screen z-10 pointer-events-none`} />
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.tagline}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#0084ff]">
                    {project.categories[0]}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#0084ff] transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-white mb-1">{project.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{project.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
