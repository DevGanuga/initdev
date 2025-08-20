'use client';

import { motion } from 'framer-motion';
import { DollarSign, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { FormData } from '@/app/contact/page';

interface BudgetTimelineStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
}

export function BudgetTimelineStep({ formData, setFormData, onNext, onBack, isValid }: BudgetTimelineStepProps) {
  const budgetRanges = [
    { id: '10-25', label: '$10k - $25k', description: 'Perfect for MVPs' },
    { id: '25-50', label: '$25k - $50k', description: 'Standard projects' },
    { id: '50-100', label: '$50k - $100k', description: 'Complex systems' },
    { id: '100-250', label: '$100k - $250k', description: 'Enterprise grade' },
    { id: '250+', label: '$250k+', description: 'Large scale platforms' },
    { id: 'flexible', label: 'Flexible', description: 'Let&apos;s discuss' }
  ];

  const timelines = [
    { id: 'asap', label: 'ASAP', description: 'Start immediately' },
    { id: '1-week', label: 'Within a week', description: 'Quick start' },
    { id: '2-weeks', label: 'Within 2 weeks', description: 'Short planning' },
    { id: 'month', label: 'Within a month', description: 'Standard timeline' },
    { id: 'quarter', label: 'This quarter', description: 'Planned project' },
    { id: 'flexible', label: 'I\'m flexible', description: 'No rush' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-light text-white mb-2">Budget & Timeline</h2>
      <p className="text-white/60 mb-8">Help us understand your constraints</p>
      
      <div className="space-y-8 mb-8">
        {/* Budget Selection */}
        <div>
          <label className="text-white text-sm font-medium mb-4 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[#0084ff]" />
            What&apos;s your budget range?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {budgetRanges.map((range) => (
              <motion.button
                key={range.id}
                onClick={() => setFormData({ ...formData, budget: range.id })}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  formData.budget === range.id
                    ? 'bg-[#0084ff]/10 border-[#0084ff] text-white'
                    : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-medium mb-1">{range.label}</div>
                <div className="text-xs opacity-60">{range.description}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Timeline Selection */}
        <div>
          <label className="text-white text-sm font-medium mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#0084ff]" />
            When do you need it?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {timelines.map((timeline) => (
              <motion.button
                key={timeline.id}
                onClick={() => setFormData({ ...formData, timeline: timeline.id })}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  formData.timeline === timeline.id
                    ? 'bg-[#0084ff]/10 border-[#0084ff] text-white'
                    : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-medium mb-1">{timeline.label}</div>
                <div className="text-xs opacity-60">{timeline.description}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <motion.button
          onClick={onBack}
          className="px-6 py-3 rounded-lg font-medium bg-white/5 text-white hover:bg-white/10 flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

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
