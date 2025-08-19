'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X, Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalendarWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  sessionType: 'strategy' | 'prototype' | 'assessment';
}

export function CalendarWidget({ isOpen, onClose, sessionType }: CalendarWidgetProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = getDaysInMonth(currentMonth);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0 || date.getDay() === 6; // Disable past dates and weekends
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Here you would integrate with your actual booking system
      console.log('Booking:', { date: selectedDate, time: selectedTime, type: sessionType });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 top-[50%] -translate-y-1/2 max-w-2xl mx-auto bg-midnight rounded-2xl border border-charcoal shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-charcoal">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-volt/10">
                    <Calendar className="w-5 h-5 text-volt" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Schedule Your Session</h3>
                    <p className="text-sm text-silver">Select a date and time that works for you</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-charcoal transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 rounded-lg hover:bg-charcoal transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <h4 className="font-semibold">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h4>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 rounded-lg hover:bg-charcoal transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-xs text-steel text-center py-1">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {days.map((date, index) => (
                      <button
                        key={index}
                        onClick={() => !isDateDisabled(date) && setSelectedDate(date)}
                        disabled={isDateDisabled(date)}
                        className={cn(
                          'aspect-square rounded-lg transition-all',
                          !date && 'invisible',
                          date && !isDateDisabled(date) && 'hover:bg-charcoal',
                          isDateDisabled(date) && 'opacity-30 cursor-not-allowed',
                          selectedDate?.toDateString() === date?.toDateString() &&
                            'bg-volt text-obsidian font-semibold'
                        )}
                      >
                        {date?.getDate()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-volt" />
                    Available Times
                  </h4>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            'p-3 rounded-lg border transition-all',
                            selectedTime === time
                              ? 'bg-volt text-obsidian border-volt font-semibold'
                              : 'border-charcoal hover:border-steel hover:bg-charcoal'
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-silver/60">
                      <p className="text-center">Select a date to see available times</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary & Book Button */}
              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-lg bg-charcoal/30 border border-charcoal"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-silver">Selected:</p>
                      <p className="font-semibold">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })} at {selectedTime}
                      </p>
                    </div>
                    <Check className="w-5 h-5 text-volt" />
                  </div>
                  <button
                    onClick={handleBooking}
                    className="w-full py-3 px-6 rounded-lg bg-volt text-obsidian font-semibold hover:bg-volt/90 transition-colors"
                  >
                    Confirm Booking
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
