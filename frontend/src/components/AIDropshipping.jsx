import React from 'react';
import { TrendingUp, Store, Target, Sparkles } from 'lucide-react';

const AIDropshipping = () => {
  return (
    <section id="ai-dropshipping" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            AUTOMATED WEALTH CREATION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI & Dropshipping Systems</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Learn how to build automated online businesses using AI tools, winning products, and smart systems that work while you sleep.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 p-8 rounded-2xl" style={{ 
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-subtle)'
        }}>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>10x</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Faster Product Research</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>80%</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Time Saved on Operations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>24/7</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Automated Systems Running</div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="feature-card">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
              <TrendingUp size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h3 className="text-xl font-bold mb-3">Product Research with AI</h3>
            <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Use AI-powered tools to discover winning products before they saturate the market.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI trend prediction algorithms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Automated competitor analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Real-time market scanning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Profit margin calculators</span>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
              <Store size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h3 className="text-xl font-bold mb-3">Store Automation</h3>
            <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Build high-converting stores that run on autopilot with smart automation systems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Automated order processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI-powered product descriptions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Smart inventory management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Dynamic pricing optimization</span>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
              <Target size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h3 className="text-xl font-bold mb-3">Marketing & Scaling</h3>
            <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Scale your business exponentially with AI-driven marketing and optimization strategies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI ad targeting optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Automated email sequences</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Customer behavior prediction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>ROI maximization systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border-subtle)' }}>
            <img 
              src="https://images.unsplash.com/photo-1639389016105-2fb11199fb6b"
              alt="AI Dropshipping"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold">The Future is Automated</h3>
            </div>
            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Stop trading time for money. Build systems that generate income 24/7. AI handles the research, automation handles the operations, and you focus on scaling.
            </p>
            <div className="p-6 rounded-xl mb-6" style={{ 
              background: 'var(--bg-primary)',
              borderLeft: '4px solid var(--accent-primary)'
            }}>
              <p className="italic mb-3" style={{ color: 'var(--text-primary)' }}>
                "The Matrix showed me how to combine dropshipping with AI automation. I went from zero to $50K/month in 4 months. The systems do the heavy lifting."
              </p>
              <div className="text-sm" style={{ color: 'var(--accent-primary)' }}>
                — Matrix Member
              </div>
            </div>
            <button className="btn-primary">
              Learn AI Systems
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDropshipping;
