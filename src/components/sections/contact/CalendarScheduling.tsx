'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
];

const consultationTypes = [
  {
    id: 'strategy',
    title: '30-Min Strategy Call',
    description: 'Quick assessment of your project and roadmap discussion',
    duration: '30 minutes',
    icon: '📞',
  },
  {
    id: 'technical',
    title: 'Technical Deep Dive',
    description: 'Detailed technical architecture and implementation planning',
    duration: '60 minutes',
    icon: '🔧',
  },
  {
    id: 'discovery',
    title: 'Discovery Workshop',
    description: 'Comprehensive project scoping and requirements gathering',
    duration: '90 minutes',
    icon: '🎯',
  },
];

export default function CalendarScheduling() {
  const [selectedType, setSelectedType] = useState('strategy');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      console.log('Scheduling:', { type: selectedType, date: selectedDate, time: selectedTime });
      // Handle scheduling logic
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule a Call</h2>
      
      {/* Consultation Type Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Consultation Type</h3>
        <div className="space-y-3">
          {consultationTypes.map((type) => (
            <label
              key={type.id}
              className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedType === type.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="consultationType"
                value={type.id}
                checked={selectedType === type.id}
                onChange={(e) => setSelectedType(e.target.value)}
                className="sr-only"
              />
              <div className="text-2xl">{type.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{type.title}</div>
                <div className="text-sm text-gray-600">{type.description}</div>
                <div className="text-xs text-blue-600 mt-1">{type.duration}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Date</h3>
        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`p-2 text-sm rounded-lg transition-all ${
                selectedDate?.toDateString() === date.toDateString()
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {formatDate(date)}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Time (PST)</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 text-sm rounded-lg transition-all ${
                  selectedTime === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Schedule Button */}
      {selectedDate && selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={handleSchedule}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Confirm Scheduling
          </button>
          <p className="text-sm text-gray-600 text-center mt-3">
            You&apos;ll receive a calendar invite and confirmation email immediately
          </p>
        </motion.div>
      )}

      {/* Alternative Options */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Prefer Other Options?</h3>
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">📅</span>
            <div>
              <div className="font-medium text-gray-900">Book via Calendly</div>
              <div className="text-sm text-gray-600">Use our Calendly integration</div>
            </div>
          </a>
          <a
            href="mailto:hello@initdev.com"
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">✉️</span>
            <div>
              <div className="font-medium text-gray-900">Email Directly</div>
              <div className="text-sm text-gray-600">hello@initdev.com</div>
            </div>
          </a>
          <a
            href="tel:+1-555-0123"
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">📱</span>
            <div>
              <div className="font-medium text-gray-900">Call Us</div>
              <div className="text-sm text-gray-600">+1 (555) 0123</div>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
