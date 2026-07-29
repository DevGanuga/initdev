'use client';

import { motion } from 'framer-motion';
import { User, Mail, Building, Phone, ArrowLeft, Send, Shield } from 'lucide-react';
import { ContactFormData } from '@/lib/types/contact';

interface ContactInfoStepProps {
  formData: ContactFormData;
  setFormData: (data: ContactFormData) => void;
  onSubmit: () => void;
  onBack: () => void;
  isValid: boolean;
}

export function ContactInfoStep({ formData, setFormData, onSubmit, onBack, isValid }: ContactInfoStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-light text-white mb-2">Almost done!</h2>
      <p className="text-white/60 mb-8">How can we reach you?</p>
      
      <div className="space-y-6 mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-[#0084ff]" />
              Your name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#0084ff] focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0084ff]" />
              Email address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#0084ff] focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-[#0084ff]" />
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Acme Inc. (optional)"
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#0084ff] focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0084ff]" />
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567 (optional)"
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#0084ff] focus:outline-none transition-all"
            />
          </div>
        </div>

        {formData.phone.trim() !== '' && (
          <motion.label
            htmlFor="smsConsent"
            className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border-2 border-white/10 cursor-pointer hover:border-[#0084ff]/40 transition-all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <input
              id="smsConsent"
              type="checkbox"
              checked={formData.smsConsent}
              onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
              className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-[#0084ff] focus:ring-[#0084ff]"
            />
            <span className="text-sm text-white/70">
              I agree to receive text messages from InitDev about my inquiry, including
              qualification and scheduling. Message &amp; data rates may apply. Reply STOP to
              opt out at any time.
            </span>
          </motion.label>
        )}

        <motion.div 
          className="p-4 bg-green-500/10 rounded-lg border border-green-500/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-green-400" />
            <p className="text-green-400 text-sm">
              Your information is secure and will only be used to discuss your project.
              We&apos;ll respond within 2 hours during business hours.
            </p>
          </div>
        </motion.div>
      </div>

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
          onClick={onSubmit}
          disabled={!isValid}
          className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 ${
            isValid
              ? 'bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white hover:shadow-lg hover:shadow-[#0084ff]/25'
              : 'bg-white/5 text-white/30 cursor-not-allowed'
          }`}
          whileHover={isValid ? { scale: 1.02 } : {}}
          whileTap={isValid ? { scale: 0.98 } : {}}
        >
          Submit Project
          <Send className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
