'use client';

import { useState } from 'react';


import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ProjectTypeStep } from '@/components/sections/contact/ProjectTypeStep';
import { BudgetTimelineStep } from '@/components/sections/contact/BudgetTimelineStep';
import { ProjectDetailsStep } from '@/components/sections/contact/ProjectDetailsStep';
import { ContactInfoStep } from '@/components/sections/contact/ContactInfoStep';
import { FormProgress } from '@/components/sections/contact/FormProgress';
import { AnimatePresence } from 'framer-motion';

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
    console.log('Form submitted:', formData);
    // Handle actual submission here
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

      <main className="min-h-screen bg-[#0a0a0a]">
        <ContactHero />
        
        <section className="py-12 pb-20">
          <div className="container-custom">
            <FormProgress currentStep={currentStep} totalSteps={totalSteps} />
            
            <div className="max-w-3xl mx-auto mt-12">
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
                    isValid={isStepValid()}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
