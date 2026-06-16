'use client';

import { useState } from 'react';


import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ProjectTypeStep } from '@/components/sections/contact/ProjectTypeStep';
import { BudgetTimelineStep } from '@/components/sections/contact/BudgetTimelineStep';
import { ProjectDetailsStep } from '@/components/sections/contact/ProjectDetailsStep';
import { ContactInfoStep } from '@/components/sections/contact/ContactInfoStep';
import { FormProgress } from '@/components/sections/contact/FormProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

export interface FormData {
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  challenges: string;
  name: string;
  email: string;
  company: string;
  phone: string;
}

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    challenges: '',
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitStatus('submitting');

    const messageBody = [
      formData.description,
      formData.challenges ? `Challenges: ${formData.challenges}` : null,
      `---`,
      `Project Type: ${formData.projectType}`,
      `Budget: ${formData.budget}`,
      `Timeline: ${formData.timeline}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
    ].filter(Boolean).join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: messageBody,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitStatus('success');
    } catch (error) {
      console.error('[Contact] Submission error:', error);
      setSubmitStatus('error');
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== '';
      case 2:
        return formData.budget !== '' && formData.timeline !== '';
      case 3:
        return formData.description.length > 10;
      case 4:
        return formData.name !== '' && formData.email !== '';
      default:
        return false;
    }
  };

  return (
    <>

      <main className="min-h-screen bg-[#050505]">
        <ContactHero />
        
        <section className="py-12 pb-20">
          <div className="container-custom">
            {submitStatus === 'success' ? (
              <motion.div
                className="max-w-xl mx-auto text-center py-16"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-light text-white mb-4">
                  Your project brief is in
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  A senior engineer is reviewing your details now. You&apos;ll hear from us
                  within 2 hours during business hours — usually with a few clarifying
                  questions and a proposed time for your free strategy call.
                </p>
                <a href="/" className="btn-secondary">
                  Back to Home
                </a>
              </motion.div>
            ) : (
            <>
            <FormProgress currentStep={currentStep} totalSteps={totalSteps} />
            
            <div className="max-w-3xl mx-auto mt-12">
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400/90">
                    Submission failed. Please try again, or email us at{' '}
                    <a href="mailto:success@initdev.co" className="underline underline-offset-2">
                      success@initdev.co
                    </a>
                    .
                  </p>
                </motion.div>
              )}
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <ProjectTypeStep
                    formData={formData}
                    setFormData={setFormData}
                    onNext={handleNext}
                    isValid={isStepValid()}
                  />
                )}
                
                {currentStep === 2 && (
                  <BudgetTimelineStep
                    formData={formData}
                    setFormData={setFormData}
                    onNext={handleNext}
                    onBack={handleBack}
                    isValid={isStepValid()}
                  />
                )}
                
                {currentStep === 3 && (
                  <ProjectDetailsStep
                    formData={formData}
                    setFormData={setFormData}
                    onNext={handleNext}
                    onBack={handleBack}
                    isValid={isStepValid()}
                  />
                )}
                
                {currentStep === 4 && (
                  <ContactInfoStep
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                    onBack={handleBack}
                    isValid={isStepValid() && submitStatus !== 'submitting'}
                  />
                )}
              </AnimatePresence>
            </div>
            </>
            )}
          </div>
        </section>
      </main>

    </>
  );
}
