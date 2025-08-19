'use client';

import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Chat with our team in real-time',
    availability: 'Available 9 AM - 6 PM PST',
    action: 'Start Chat',
    primary: true,
  },
  {
    icon: '📧',
    title: 'Email',
    description: 'Get a response within 2 hours',
    availability: 'hello@initdev.com',
    action: 'Send Email',
    primary: false,
  },
  {
    icon: '📞',
    title: 'Phone',
    description: 'Speak directly with an engineer',
    availability: '+1 (555) 0123',
    action: 'Call Now',
    primary: false,
  },
  {
    icon: '🎥',
    title: 'Video Call',
    description: 'Face-to-face consultation',
    availability: 'Schedule via calendar',
    action: 'Book Meeting',
    primary: false,
  },
];

const departments = [
  {
    name: 'Sales & New Projects',
    email: 'sales@initdev.com',
    phone: '+1 (555) 0123',
    responseTime: '< 2 hours',
  },
  {
    name: 'Technical Support',
    email: 'support@initdev.com',
    phone: '+1 (555) 0124',
    responseTime: '< 1 hour',
  },
  {
    name: 'Partnerships',
    email: 'partners@initdev.com',
    phone: '+1 (555) 0125',
    responseTime: '< 24 hours',
  },
  {
    name: 'Media & Press',
    email: 'press@initdev.com',
    phone: '+1 (555) 0126',
    responseTime: '< 24 hours',
  },
];

export default function ContactMethods() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us. Pick what works best for you.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-6 text-center ${
                method.primary
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${
                method.primary ? 'text-white' : 'text-gray-900'
              }`}>
                {method.title}
              </h3>
              <p className={`text-sm mb-3 ${
                method.primary ? 'text-white/90' : 'text-gray-600'
              }`}>
                {method.description}
              </p>
              <p className={`text-xs mb-4 ${
                method.primary ? 'text-white/80' : 'text-gray-500'
              }`}>
                {method.availability}
              </p>
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                method.primary
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {method.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Department Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Department Contacts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">{dept.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Email:</span>
                    <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Phone:</span>
                    <a href={`tel:${dept.phone}`} className="text-blue-600 hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Response:</span>
                    <span className="text-green-600 font-medium">{dept.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Response Time Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Response Time Guarantee
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-green-600">2 hrs</div>
              <div className="text-sm text-gray-600">Business inquiries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">1 hr</div>
              <div className="text-sm text-gray-600">Active client support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">15 min</div>
              <div className="text-sm text-gray-600">Emergency hotline</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
