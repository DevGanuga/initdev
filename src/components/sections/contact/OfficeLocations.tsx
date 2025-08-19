'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const offices = [
  {
    id: 'sf',
    city: 'San Francisco',
    country: 'USA',
    type: 'Headquarters',
    address: '123 Market Street, Suite 500',
    zipCode: 'San Francisco, CA 94105',
    phone: '+1 (415) 555-0123',
    email: 'sf@initdev.com',
    timezone: 'PST (UTC-8)',
    team: 6,
    coordinates: { lat: 37.7749, lng: -122.4194 },
    specialties: ['AI/ML', 'Full-Stack'],
  },
  {
    id: 'nyc',
    city: 'New York',
    country: 'USA',
    type: 'East Coast Hub',
    address: '456 Broadway, Floor 12',
    zipCode: 'New York, NY 10013',
    phone: '+1 (212) 555-0124',
    email: 'nyc@initdev.com',
    timezone: 'EST (UTC-5)',
    team: 4,
    coordinates: { lat: 40.7128, lng: -74.0060 },
    specialties: ['FinTech', 'Enterprise'],
  },
  {
    id: 'london',
    city: 'London',
    country: 'UK',
    type: 'European Hub',
    address: '789 King\'s Road',
    zipCode: 'London SW3 5ES',
    phone: '+44 20 7555 0125',
    email: 'london@initdev.com',
    timezone: 'GMT (UTC+0)',
    team: 3,
    coordinates: { lat: 51.5074, lng: -0.1278 },
    specialties: ['Cybersecurity', 'Compliance'],
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    type: 'APAC Hub',
    address: '10 Marina Boulevard',
    zipCode: 'Singapore 018983',
    phone: '+65 6555 0126',
    email: 'sg@initdev.com',
    timezone: 'SGT (UTC+8)',
    team: 2,
    coordinates: { lat: 1.3521, lng: 103.8198 },
    specialties: ['Data Engineering', 'DevOps'],
  },
];

export default function OfficeLocations() {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices across 4 continents, we&apos;re always within reach – 
            delivering round-the-clock support and regional expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 relative min-h-[400px]"
          >
            {/* Placeholder for map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-700 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-600 mt-2">
                  Click on office locations to view details
                </p>
              </div>
            </div>
            
            {/* Office markers */}
            <div className="relative z-10">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOffice(office)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all ${
                    selectedOffice.id === office.id
                      ? 'bg-blue-600 ring-4 ring-blue-200 scale-150'
                      : 'bg-purple-600 hover:scale-125'
                  }`}
                  style={{
                    top: `${Math.random() * 60 + 20}%`,
                    left: `${Math.random() * 60 + 20}%`,
                  }}
                  aria-label={office.city}
                />
              ))}
            </div>
          </motion.div>

          {/* Office List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOffice(office)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    selectedOffice.id === office.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`text-lg font-bold ${
                        selectedOffice.id === office.id ? 'text-white' : 'text-gray-900'
                      }`}>
                        {office.city}, {office.country}
                      </h3>
                      <p className={`text-sm ${
                        selectedOffice.id === office.id ? 'text-blue-100' : 'text-blue-600'
                      }`}>
                        {office.type}
                      </p>
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded ${
                      selectedOffice.id === office.id 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {office.team} Engineers
                    </span>
                  </div>
                  
                  {selectedOffice.id === office.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 space-y-2 text-sm"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-blue-200">📍</span>
                        <div>
                          <div>{office.address}</div>
                          <div>{office.zipCode}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-200">📞</span>
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-200">✉️</span>
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-200">🕐</span>
                        <span>{office.timezone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-200">💡</span>
                        <div className="flex flex-wrap gap-1">
                          {office.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="px-2 py-1 bg-blue-500 text-xs rounded"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visit Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Want to Visit Us?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Schedule an in-person meeting at any of our offices. We&apos;ll arrange everything – 
            just pick your preferred location and time.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Office Visit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
