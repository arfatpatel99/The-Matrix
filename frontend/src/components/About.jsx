import React from 'react';
import { Target, TrendingUp, Shield, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            WHERE DISCIPLINE MEETS OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About The Matrix</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            The Matrix isn't just another trading course. It's a complete transformation of how you think about money, risk, and success. We don't promise overnight riches. We deliver the tools, mindset, and strategies that separate winners from dreamers.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Target size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discipline Over Emotion</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Learn to trade with ice-cold precision, not fear or greed
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
                <h3 className="text-xl font-semibold mb-2">Strategy Over Luck</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Master proven systems that work in any market condition
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Shield size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Protection Over Profits</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Risk management comes first. Profits follow discipline
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Brain size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mindset Over Everything</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Develop the mental edge that 99% of traders lack
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
