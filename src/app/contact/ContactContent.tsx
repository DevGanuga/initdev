'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ProjectTypeStep } from '@/components/sections/contact/ProjectTypeStep';
import { BudgetTimelineStep } from '@/components/sections/contact/BudgetTimelineStep';
import { ProjectDetailsStep } from '@/components/sections/contact/ProjectDetailsStep';
import { ContactInfoStep } from '@/components/sections/contact/ContactInfoStep';
import { FormProgress } from '@/components/sections/contact/FormProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { trackLead } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';
import { trackEvent, trackFormError, trackFormStart, trackFormStep } from '@/lib/events';
import type { ContactFormData } from '@/lib/types/contact';

const FORM_ID = 'contact_page';
const STEP_NAMES = ['project_type', 'budget_timeline', 'project_details', 'contact_info'];

export function ContactContent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    challenges: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    smsConsent: false,
  });

  const totalSteps = 4;

  // Fires once, the moment any field is first filled. Step 1 is a click-to-
  // select, so there is no focus event to hang this on.
  const startedRef = useRef(false);
  useEffect(() => {
    if (startedRef.current) return;
    if (!Object.values(formData).some(Boolean)) return;
    startedRef.current = true;
    trackFormStart(FORM_ID);
  }, [formData]);

  /**
   * Step-level funnel. On a four-step form this is the difference between
   * knowing the form converts badly and knowing *which* question loses people
   * — usually the budget step.
   */
  const handleNext = () => {
    if (currentStep < totalSteps) {
      const next = currentStep + 1;
      // The step being completed, not the one being entered.
      trackFormStep(FORM_ID, currentStep, STEP_NAMES[currentStep - 1]);
      setCurrentStep(next);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      // Going backwards signals hesitation on the step being left.
      trackEvent('form_step_back', {
        form_id: FORM_ID,
        step: currentStep,
        step_name: STEP_NAMES[currentStep - 1],
      });
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitStatus('submitting');
    // The final step completes on submit rather than via handleNext.
    trackFormStep(FORM_ID, totalSteps, STEP_NAMES[totalSteps - 1]);

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
          phone: formData.phone || '',
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          smsConsent: formData.smsConsent,
          message: messageBody,
          attribution: getAttribution(),
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      // Only after the server confirms — firing on click would report leads
      // that were never actually captured.
      await trackLead({
        formId: 'contact_page',
        email: formData.email,
        budget: formData.budget,
        params: {
          project_type: formData.projectType,
          timeline: formData.timeline,
        },
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('[Contact] Submission error:', error);
      trackFormError(FORM_ID, error instanceof Error ? error.message : 'unknown');
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
                <Link href="/" className="btn-secondary">
                  Back to Home
                </Link>
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
