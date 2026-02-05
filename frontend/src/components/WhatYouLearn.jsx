import React from 'react';
import { LineChart, Brain, Shield, Zap } from 'lucide-react';

const WhatYouLearn = () => {
  return (
    <section id="learn" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            THE COMPLETE ARSENAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What You Will Learn</h2>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="feature-card group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
              <LineChart size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Trading Fundamentals</h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Master chart patterns, technical analysis, and market structure. Understand what moves markets and how to capitalize on it.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Price Action</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Support & Resistance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Trend Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Market Psychology</span>
              </div>
            </div>
          </div>

          <div className="feature-card group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
              <Brain size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Elite Mindset</h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Develop the mental fortitude of professional traders. Control emotions, manage stress, and think like the top 1%.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Emotional Control</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Discipline Training</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Winning Mentality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Focus & Clarity</span>
              </div>
            </div>
          </div>

          <div className="feature-card group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
              <Shield size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Risk Management</h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Protect your capital like a vault. Learn position sizing, stop-loss strategies, and portfolio management that keeps you in the game.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Position Sizing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Stop Loss Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Capital Preservation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Portfolio Balance</span>
              </div>
            </div>
          </div>

          <div className="feature-card group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
              <Zap size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Execution Excellence</h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Perfect your entry and exit timing. Learn to execute trades with confidence and precision under any market condition.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Entry Strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Exit Timing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Trade Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Performance Tracking</span>
              </div>
            </div>
          </div>
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
