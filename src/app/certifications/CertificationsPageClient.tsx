'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { certifications } from '@/lib/data/certifications';

const layerOrder = ['leadership', 'ai', 'reliability'] as const;

export default function CertificationsPageClient() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,100,255,0.08),transparent)]" />
          <Image
            src="/images/generated/topo-band.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>

        <div className="container-custom relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
              {certifications.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] text-white mb-5 leading-[1.1]">
              {certifications.headline}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              {certifications.subhead}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom max-w-4xl space-y-14">
          {layerOrder.map((key, layerIndex) => {
            const layer = certifications.layers[key];
            const items = certifications.items.filter((c) => c.layer === key);

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: layerIndex * 0.06 }}
              >
                <div className="mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="text-[11px] text-[#0084ff]/80 uppercase tracking-[0.16em] mb-2">
                    {String(layerIndex + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-2xl text-white font-light mb-1.5">{layer.label}</h2>
                  <p className="text-sm text-white/40 max-w-xl">{layer.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {items.map((cert) => (
                    <div
                      key={cert.name}
                      className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-colors"
                    >
                      <div className="text-white/85 text-[15px] font-medium mb-1.5 leading-snug">
                        {cert.name}
                      </div>
                      <div className="text-[12px] text-white/35">
                        {cert.issuer}
                        {cert.year ? ` · ${cert.year}` : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="pb-28 border-t border-white/[0.05] pt-16">
        <div className="container-custom max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Credentials support delivery — they don&apos;t replace it.
          </h2>
          <p className="text-white/45 mb-8 leading-relaxed">
            We still ship in fixed-scope sprints with written acceptance criteria. These
            credentials are how the team stays sharp on AI, monitoring, and production reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-premium inline-flex items-center gap-2 group">
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/cases" className="btn-secondary inline-flex items-center gap-2">
              See selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
