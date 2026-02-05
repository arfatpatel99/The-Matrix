import React from 'react';
import { Target, TrendingUp, Shield, Brain } from 'lucide-react';
import { aboutData } from '../data/mock';

const iconMap = {
  Target: Target,
  TrendingUp: TrendingUp,
  Shield: Shield,
  Brain: Brain
};

const About = () => {
  return (
    <section id="about" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            {aboutData.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{aboutData.title}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {aboutData.description}
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aboutData.principles.map((principle, index) => {
            const IconComponent = iconMap[principle.icon];
            return (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                    <IconComponent size={24} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-2xl" style={{ 
          background: 'var(--bg-secondary)',
          borderLeft: '4px solid var(--accent-primary)'
        }}>
          <p className="text-xl md:text-2xl font-medium italic" style={{ color: 'var(--text-primary)' }}>
            "The difference between a successful trader and a failed one isn't intelligence or luck. It's discipline, mindset, and the willingness to do what others won't."
          </p>
          <div className="mt-4 text-sm" style={{ color: 'var(--accent-primary)' }}>
            — The Matrix Philosophy
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
