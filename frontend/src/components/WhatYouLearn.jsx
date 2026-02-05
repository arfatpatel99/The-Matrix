import React from 'react';
import { LineChart, Brain, Shield, Zap, Package, Sparkles } from 'lucide-react';

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

        {/* Modules Grid - Now 5 modules in asymmetric layout */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 2 modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <LineChart size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Trading Fundamentals</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Master chart patterns, technical analysis, and market structure. Understand what moves markets and capitalize on it.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Price Action</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Technical Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Risk Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Market Psychology</span>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Package size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Dropshipping Business Model</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Build a profitable online store from scratch. Learn product selection, supplier sourcing, and customer acquisition systems.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Winning Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Store Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Supplier Networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Order Fulfillment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 3 modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Sparkles size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Tools for Product Research</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Leverage AI to find viral products before the competition. Automate market research and trend analysis.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI Product Finders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Trend Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Competitor Research</span>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Zap size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Automation for Scaling</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Scale your business with AI-powered automation. Let technology multiply your results exponentially.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Automated Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI Chatbots</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Smart Fulfillment</span>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Brain size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mindset & Discipline</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Develop the mental edge that 99% lack. Master emotional control and strategic thinking.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Elite Mentality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Emotional Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Strategic Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to master Trading, Dropshipping, and AI Automation? Build multiple income streams.
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
