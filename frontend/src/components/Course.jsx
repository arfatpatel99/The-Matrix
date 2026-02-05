import React from 'react';
import { BookOpen, Video, FileText, Users, BarChart3, Award } from 'lucide-react';

const Course = () => {
  return (
    <section id="course" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            YOUR PATH TO FINANCIAL FREEDOM
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Matrix Course</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A comprehensive program designed to transform beginners into confident traders and elevate experienced traders to the next level.
          </p>
        </div>

        {/* Course Overview with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border-subtle)' }}>
              <img 
                src="https://images.unsplash.com/photo-1639754390580-2e7437267698"
                alt="Trading Course"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <BookOpen size={20} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Structured Curriculum</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Step-by-step lessons from basics to advanced strategies</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Video size={20} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Video Training</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>High-quality recorded sessions you can watch anytime</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <FileText size={20} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Trading Guides</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Downloadable PDFs, checklists, and strategy templates</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Users size={20} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Community Access</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Connect with like-minded traders on the same journey</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <BarChart3 size={20} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Real Examples</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Live market analysis and real trade breakdowns</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <Award size={20} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Lifetime Access</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Learn at your own pace with unlimited course access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="p-8 rounded-2xl text-center" style={{ 
            background: 'var(--bg-tertiary)',
            border: '2px solid var(--border-subtle)'
          }}>
            <div className="text-5xl font-black mb-4" style={{ color: 'var(--accent-primary)' }}>01</div>
            <h4 className="text-xl font-bold mb-3">Trading Mastery</h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Master technical analysis, risk management, and market psychology to trade with precision.
            </p>
          </div>

          <div className="p-8 rounded-2xl text-center" style={{ 
            background: 'var(--bg-tertiary)',
            border: '2px solid var(--border-subtle)'
          }}>
            <div className="text-5xl font-black mb-4" style={{ color: 'var(--accent-primary)' }}>02</div>
            <h4 className="text-xl font-bold mb-3">Dropshipping Empire</h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Build automated online stores that generate passive income with winning products and proven systems.
            </p>
          </div>

          <div className="p-8 rounded-2xl text-center" style={{ 
            background: 'var(--bg-tertiary)',
            border: '2px solid var(--border-subtle)'
          }}>
            <div className="text-5xl font-black mb-4" style={{ color: 'var(--accent-primary)' }}>03</div>
            <h4 className="text-xl font-bold mb-3">AI Automation</h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Leverage AI tools for product research, marketing automation, and scaling your business exponentially.
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl" style={{ 
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
          border: '1px solid var(--border-subtle)'
        }}>
          <h3 className="text-3xl font-bold mb-4">Master 3 Income Streams, Control Your Future</h3>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Stop relying on a single source. Build wealth through Trading, Dropshipping, and AI Automation. Diversify like the elite.
          </p>
          <button className="btn-primary text-lg px-12">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
