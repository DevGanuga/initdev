'use client';

import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Users, Code2, Brain, ArrowRight } from 'lucide-react';
import { FormData } from '@/app/contact/page';

interface ProjectTypeStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onNext: () => void;
  isValid: boolean;
}

export function ProjectTypeStep({ formData, setFormData, onNext, isValid }: ProjectTypeStepProps) {
  const projectTypes = [
    { 
      id: 'mvp', 
      label: 'Build an MVP', 
      icon: <Rocket className="w-6 h-6" />,
      description: 'Launch your product in 4-8 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'rescue', 
      label: 'Fix Broken Project', 
      icon: <Shield className="w-6 h-6" />,
      description: 'Rescue failing code & architecture',
      color: 'from-red-500 to-orange-500'
    },
    { 
      id: 'scale', 
      label: 'Scale System', 
      icon: <Zap className="w-6 h-6" />,
      description: 'Handle millions of users',
      color: 'from-yellow-500 to-green-500'
    },
    { 
      id: 'team', 
      label: 'Augment Team', 
      icon: <Users className="w-6 h-6" />,
      description: 'Add senior expertise fast',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'ai', 
      label: 'AI Integration', 
      icon: <Brain className="w-6 h-6" />,
      description: 'Custom ML & AI solutions',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      id: 'custom', 
      label: 'Custom Development', 
      icon: <Code2 className="w-6 h-6" />,
      description: 'Something else in mind',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-light text-white mb-2">What brings you here?</h2>
      <p className="text-white/60 mb-8">Select the type of help you need</p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {projectTypes.map((type) => (
          <motion.button
            key={type.id}
            onClick={() => setFormData({ ...formData, projectType: type.id })}
            className={`relative p-6 rounded-xl text-left transition-all overflow-hidden group ${
              formData.projectType === type.id
                ? 'bg-[#0084ff]/10 border-2 border-[#0084ff] text-white'
                : 'bg-white/5 border-2 border-white/10 text-white/70 hover:border-white/20'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            
            <div className="relative z-10 flex items-start gap-4">
              <div className={`p-2 rounded-lg ${
                formData.projectType === type.id 
                  ? 'bg-[#0084ff]/20 text-[#0084ff]' 
                  : 'bg-white/10 text-white/60'
              }`}>
                {type.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1 text-white">{type.label}</h3>
                <p className="text-sm opacity-60">{type.description}</p>
              </div>
            </div>
            
            {formData.projectType === type.id && (
              <motion.div
                className="absolute top-3 right-3 w-6 h-6 bg-[#0084ff] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Check className="w-4 h-4 text-white" />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-end">
        <motion.button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
            isValid
              ? 'bg-[#0084ff] text-white hover:bg-[#0066cc]'
              : 'bg-white/5 text-white/30 cursor-not-allowed'
          }`}
          whileHover={isValid ? { scale: 1.02 } : {}}
          whileTap={isValid ? { scale: 0.98 } : {}}
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

// Add Check icon since it's used
const Check = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
