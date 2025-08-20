'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Target, ArrowRight, ArrowLeft, Lightbulb } from 'lucide-react';
import { FormData } from '@/app/contact/page';

interface ProjectDetailsStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
}

export function ProjectDetailsStep({ formData, setFormData, onNext, onBack, isValid }: ProjectDetailsStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-light text-white mb-2">Tell us more</h2>
      <p className="text-white/60 mb-8">The more details, the better we can help</p>
      
      <div className="space-y-6 mb-8">
        {/* Project Description */}
        <div>
          <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#0084ff]" />
            Describe your project
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="What are you building? What problem does it solve? Who are your users?"
            className="w-full h-32 px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#0084ff] focus:outline-none transition-all resize-none"
          />
          <p className="text-xs text-white/40 mt-2">
            Min 10 characters • {formData.description.length} / 500
          </p>
        </div>

        {/* Technical Challenges */}
        <div>
          <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-[#0084ff]" />
            Current challenges (optional)
          </label>
          <textarea
            value={formData.challenges}
            onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
            placeholder="Any technical challenges? Existing codebase? Integration requirements?"
            className="w-full h-24 px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#0084ff] focus:outline-none transition-all resize-none"
          />
        </div>

        {/* Pro Tips */}
        <motion.div 
          className="p-4 bg-[#0084ff]/10 rounded-lg border border-[#0084ff]/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#0084ff] mt-0.5" />
            <div className="text-sm">
              <p className="text-white/80 font-medium mb-1">Pro tips for better matches:</p>
              <ul className="text-white/60 space-y-1">
                <li>• Include your tech stack preferences</li>
                <li>• Mention any deadlines or launch dates</li>
                <li>• Share links to similar products you like</li>
              </ul>
            </div>
          </div>
        </motion.div>
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
