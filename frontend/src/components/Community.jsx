import React from 'react';
import { Users } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, var(--accent-bg) 0%, var(--bg-tertiary) 100%)',
              border: '2px solid var(--accent-primary)'
            }}>
              <Users size={40} style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">The AI Empire Community</h2>
          
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-primary)'
          }}>
            <span className="text-sm font-bold tracking-wider" style={{ color: 'var(--accent-primary)' }}>
              COMING SOON
            </span>
          </div>

          <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A private community where members share AI tools, winning products, automation strategies, and scale their businesses together.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>AI Tool Library</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Product Database</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Automation Scripts</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Weekly Live Sessions</div>
            </div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: 'var(--bg-primary)', border: '2px dashed var(--border-primary)' }}>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Join the waitlist to be first in line when The AI Empire Community launches. Network with serious entrepreneurs building AI-powered businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
