'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MessageSquare,
  Shield,
  Loader2,
  AlertCircle,
} from 'lucide-react';

// ─── Schema ─────────────────────────────────────────────────
const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z
    .string()
    .email('Enter a valid email')
    .refine(
      (val) => !val.endsWith('@gmail.com') && !val.endsWith('@yahoo.com') && !val.endsWith('@hotmail.com'),
      { message: 'Please use your work email' }
    ),
  company: z.string().optional(),
  message: z.string().min(5, 'Give us a sentence or two about your project'),
});

type LeadFormData = z.infer<typeof leadSchema>;

// ─── Component ──────────────────────────────────────────────
export function CTASection() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setSubmitStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080812] to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,100,255,0.06),transparent)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* ─── Left: Copy ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
              Get Started
            </span>

            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light text-white mb-5 leading-[1.15]">
              Get a Free
              <span className="block text-gradient-blue font-normal">Technical Assessment</span>
            </h2>

            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Tell us what you&apos;re building. We&apos;ll respond with honest technical feedback,
              a rough scope estimate, and whether we&apos;re the right team for it.
              No sales deck. No obligations.
            </p>

            {/* Value props */}
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: Clock,
                  title: 'Response within 2 hours',
                  desc: 'During business hours, EST',
                },
                {
                  icon: MessageSquare,
                  title: 'Free 30-min strategy call',
                  desc: 'With a senior engineer, not a sales rep',
                },
                {
                  icon: Shield,
                  title: 'No pitch, just answers',
                  desc: 'Honest feedback on feasibility, timeline, and cost',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-[#0084ff]/10">
                    <item.icon className="w-4 h-4 text-[#0084ff]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.title}</p>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct email fallback */}
            <p className="text-sm text-white/30">
              Prefer email?{' '}
              <a
                href="mailto:success@initdev.co"
                className="text-[#0084ff]/70 hover:text-[#0084ff] transition-colors underline underline-offset-2"
              >
                success@initdev.co
              </a>
            </p>
          </motion.div>

          {/* ─── Right: Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      We&apos;ve got your details
                    </h3>
                    <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
                      A senior engineer will review your project and get back to you
                      within a few hours. Check your inbox.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="cta-name"
                        className="block text-sm font-medium text-white/70 mb-1.5"
                      >
                        Your name
                      </label>
                      <input
                        {...register('name')}
                        id="cta-name"
                        type="text"
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#0084ff]/40 focus:ring-2 focus:ring-[#0084ff]/10 focus:outline-none transition-all text-sm"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400/90 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="cta-email"
                        className="block text-sm font-medium text-white/70 mb-1.5"
                      >
                        Work email
                      </label>
                      <input
                        {...register('email')}
                        id="cta-email"
                        type="email"
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#0084ff]/40 focus:ring-2 focus:ring-[#0084ff]/10 focus:outline-none transition-all text-sm"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400/90 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Company (optional) */}
                    <div>
                      <label
                        htmlFor="cta-company"
                        className="block text-sm font-medium text-white/70 mb-1.5"
                      >
                        Company{' '}
                        <span className="text-white/30 font-normal">(optional)</span>
                      </label>
                      <input
                        {...register('company')}
                        id="cta-company"
                        type="text"
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#0084ff]/40 focus:ring-2 focus:ring-[#0084ff]/10 focus:outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="cta-message"
                        className="block text-sm font-medium text-white/70 mb-1.5"
                      >
                        What do you need built?
                      </label>
                      <textarea
                        {...register('message')}
                        id="cta-message"
                        rows={3}
                        placeholder="E.g. &quot;We need an MVP for a SaaS product that does X, aiming to launch in 6 weeks...&quot;"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#0084ff]/40 focus:ring-2 focus:ring-[#0084ff]/10 focus:outline-none transition-all text-sm resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400/90 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Error message */}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <p className="text-sm text-red-400/90">
                          Something went wrong. Try again or{' '}
                          <a
                            href="mailto:success@initdev.co"
                            className="underline underline-offset-2"
                          >
                            email us directly
                          </a>
                          .
                        </p>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white shadow-lg shadow-[#0084ff]/20 hover:shadow-xl hover:shadow-[#0084ff]/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get Your Free Assessment
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    {/* Privacy note */}
                    <p className="text-xs text-white/25 text-center leading-relaxed">
                      We respect your privacy. No spam, no selling your data.
                      Unsubscribe anytime.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
