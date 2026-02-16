'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.enum(['strategy', 'prototype', 'assessment', 'other']),
  budget: z.enum(['<25k', '25k-50k', '50k-100k', '100k+', 'not-sure']),
  timeline: z.enum(['asap', '1-month', '2-3-months', '3-6-months', 'flexible']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
  preselectedType?: 'strategy' | 'prototype' | 'assessment';
}

export function ContactForm({ variant = 'inline', onClose, preselectedType }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: preselectedType || 'other',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Compose a message string from all the structured fields
      const messageBody = [
        data.message,
        `\n---`,
        `Project Type: ${data.projectType}`,
        `Budget: ${data.budget}`,
        `Timeline: ${data.timeline}`,
        data.phone ? `Phone: ${data.phone}` : null,
      ].filter(Boolean).join('\n');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || '',
          message: messageBody,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
      
      setSubmitStatus('success');
      reset();
      
      // Auto-close modal after success
      if (variant === 'modal' && onClose) {
        setTimeout(onClose, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-charcoal/50 border border-charcoal focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20 transition-all";
  const labelClasses = "block text-sm font-medium mb-2 text-silver";
  const errorClasses = "text-xs text-crimson mt-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        variant === 'modal' && 'fixed inset-0 z-50 flex items-center justify-center p-4',
        variant === 'inline' && 'w-full'
      )}
    >
      {variant === 'modal' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onClose}
          className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
        />
      )}

      <motion.div
        className={cn(
          'relative bg-midnight rounded-2xl border border-charcoal p-8',
          variant === 'modal' && 'max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'
        )}
      >
        <AnimatePresence mode="wait">
          {submitStatus === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-volt mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-silver">We&apos;ll get back to you within 2 hours during business hours.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Let&apos;s Build Something Amazing</h3>
                <p className="text-silver">Tell us about your project and we&apos;ll get back to you ASAP.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={inputClasses}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className={inputClasses}
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={inputClasses}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="projectType" className={labelClasses}>
                    Project Type *
                  </label>
                  <select
                    {...register('projectType')}
                    id="projectType"
                    className={inputClasses}
                  >
                    <option value="strategy">Strategy Session</option>
                    <option value="prototype">Rapid Prototype</option>
                    <option value="assessment">Empire Assessment</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <p className={errorClasses}>{errors.projectType.message}</p>}
                </div>

                <div>
                  <label htmlFor="budget" className={labelClasses}>
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    id="budget"
                    className={inputClasses}
                  >
                    <option value="<25k">Less than $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                  {errors.budget && <p className={errorClasses}>{errors.budget.message}</p>}
                </div>

                <div>
                  <label htmlFor="timeline" className={labelClasses}>
                    Timeline *
                  </label>
                  <select
                    {...register('timeline')}
                    id="timeline"
                    className={inputClasses}
                  >
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.timeline && <p className={errorClasses}>{errors.timeline.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Project Details *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className={inputClasses}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
                {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
              </div>

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-crimson/10 border border-crimson/30 text-crimson"
                >
                  <AlertCircle className="w-4 h-4" />
                  <p className="text-sm">Something went wrong. Please try again.</p>
                </motion.div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'flex-1 py-3 px-6 rounded-lg font-semibold transition-all',
                    'bg-volt text-obsidian hover:bg-volt/90',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'flex items-center justify-center gap-2'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {variant === 'modal' && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 rounded-lg font-semibold bg-charcoal hover:bg-steel transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
