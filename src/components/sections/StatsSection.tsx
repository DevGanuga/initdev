'use client';

import { Code2, Layers, Zap, Shield } from 'lucide-react';

export function StatsSection() {
  const capabilities = [
    { 
      label: 'Full-Stack', 
      description: 'End-to-end development',
      icon: <Code2 className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
    },
    { 
      label: 'Modern Stack', 
      description: 'React, Node, TypeScript',
      icon: <Layers className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
    },
    { 
      label: 'Fast Delivery', 
      description: 'Ship in weeks, not months',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
    },
    { 
      label: 'Production Ready', 
      description: 'Code built to last',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500',
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
          <h2 className="text-3xl font-light text-white mb-3">What We Bring</h2>
          <p className="text-white/60">Full-stack expertise across the modern web</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {capabilities.map((item) => (
            <div
              key={item.label}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 mb-4`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                
                {/* Label */}
                <div className="text-xl font-light text-white mb-2">
                  {item.label}
                </div>
                
                {/* Description */}
                <div className="text-sm text-white/60">
                  {item.description}
                </div>
                
                {/* Static underline */}
                <div className={`h-[2px] bg-gradient-to-r ${item.color} mt-4`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
