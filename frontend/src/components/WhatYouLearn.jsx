import React from 'react';
import { Package, Sparkles, Zap, Bot, Brain } from 'lucide-react';

const WhatYouLearn = () => {
  return (
    <section id="learn" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            THE COMPLETE SYSTEM
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What You Will Master</h2>
        </div>

        {/* Modules Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 2 modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Package size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Dropshipping Fundamentals</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Master the complete dropshipping business model from store setup to order fulfillment and customer acquisition.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Store Setup & Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Supplier Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Customer Acquisition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Order Fulfillment</span>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Sparkles size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Product Research</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Use cutting-edge AI tools to discover winning products before the market saturates. Data-driven product selection.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI Product Finders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Trend Prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Competitor Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Market Intelligence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 3 modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Zap size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Store Automation</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Automate every aspect of your store to run 24/7 without constant manual intervention.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Auto Order Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Email Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Inventory Sync</span>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Bot size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Marketing</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Deploy AI-powered marketing campaigns that optimize themselves for maximum ROI.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI Ad Targeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Auto-Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Content Generation</span>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                <Brain size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Scaling Strategies</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Learn proven strategies to scale from $0 to $10K+ per month systematically.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Growth Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Profit Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Team Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to build an AI-powered dropshipping empire? Master the complete system.
          </p>
          <button className="btn-primary">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
