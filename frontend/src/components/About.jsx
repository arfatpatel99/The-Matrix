import React from 'react';
import { Sparkles, Zap, TrendingUp, Target } from 'lucide-react';
import { aboutData } from '../data/mock';

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
          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Sparkles size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Research</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Use artificial intelligence to find winning products before they saturate
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Zap size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automation Over Manual Work</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Build systems that run 24/7 while you focus on scaling
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <TrendingUp size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Let algorithms and analytics guide your business strategy
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Target size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scale Over Grind</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Leverage technology to multiply results without multiplying effort
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-2xl" style={{ 
          background: 'var(--bg-secondary)',
          borderLeft: '4px solid var(--accent-primary)'
        }}>
          <p className="text-xl md:text-2xl font-medium italic" style={{ color: 'var(--text-primary)' }}>
            "The future belongs to those who automate. While others manually grind, you build systems that scale infinitely with AI."
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
