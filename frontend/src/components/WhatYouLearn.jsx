import React from 'react';
import { LineChart, Brain, Shield, Zap } from 'lucide-react';
import { learningData } from '../data/mock';

const iconMap = {
  LineChart: LineChart,
  Brain: Brain,
  Shield: Shield,
  Zap: Zap
};

const WhatYouLearn = () => {
  return (
    <section id="learn" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            {learningData.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{learningData.title}</h2>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {learningData.modules.map((module, index) => {
            const IconComponent = iconMap[module.icon];
            return (
              <div 
                key={index} 
                className="feature-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300" 
                  style={{ 
                    background: 'var(--accent-bg)',
                  }}>
                  <IconComponent size={32} style={{ color: 'var(--accent-primary)' }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{module.title}</h3>

                {/* Description */}
                <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {module.description}
                </p>

                {/* Topics */}
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to develop the skills that separate winners from the crowd?
          </p>
          <button className="btn-primary">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
