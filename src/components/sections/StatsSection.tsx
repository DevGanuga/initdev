'use client';

import { TrendingUp, Users, Clock, Star } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { 
      label: 'Success Rate', 
      value: '100', 
      suffix: '%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      description: 'On-time, on-budget'
    },
    { 
      label: 'Projects Shipped', 
      value: '47', 
      suffix: '+',
      icon: <Users className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Happy clients worldwide'
    },
    { 
      label: 'Avg Response', 
      value: '2', 
      suffix: ' hrs',
      icon: <Clock className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Lightning fast support'
    },
    { 
      label: 'Client Rating', 
      value: '5.0', 
      suffix: '/5',
      icon: <Star className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500',
      description: 'Perfect satisfaction'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Static background gradient */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-subtle opacity-5" />
      
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-white mb-3">Proven Excellence</h2>
          <p className="text-white/60">Numbers that speak louder than words</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Static counter */}
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  {stat.value}<span className="text-3xl md:text-4xl">{stat.suffix}</span>
                </div>
                
                {/* Label */}
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-xs text-white/40">
                  {stat.description}
                </div>
                
                {/* Static underline */}
                <div className={`h-[2px] bg-gradient-to-r ${stat.color} mt-4`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
