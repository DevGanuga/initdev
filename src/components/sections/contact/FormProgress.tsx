'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const steps = [
    'Project Type',
    'Budget & Timeline',
    'Project Details',
    'Contact Info'
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between relative">
        {/* Progress line background */}
        <div className="absolute left-0 right-0 top-5 h-[2px] bg-white/10" />
        
        {/* Active progress line */}
        <motion.div
          className="absolute left-0 top-5 h-[2px] bg-[#0084ff]"
          initial={{ width: '0%' }}
          animate={{ 
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` 
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Step circles */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="relative z-10 flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                  isActive 
                    ? 'bg-[#0084ff] text-white shadow-lg shadow-[#0084ff]/30' 
                    : isCompleted 
                    ? 'bg-[#0084ff] text-white'
                    : 'bg-[#0a0a0a] text-white/30 border-2 border-white/10'
                }`}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  stepNumber
                )}
              </motion.div>
              
              <span className={`text-xs mt-2 whitespace-nowrap ${
                isActive ? 'text-white' : 'text-white/40'
              }`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
