import React from 'react';
import { Rocket } from 'lucide-react';

const TradingRoom = () => {
  return (
    <section id="trading-room" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, var(--accent-bg) 0%, var(--bg-tertiary) 100%)',
              border: '2px solid var(--accent-primary)'
            }}>
              <Rocket size={40} style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Trading Room</h2>
          
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-primary)'
          }}>
            <span className="text-sm font-bold tracking-wider" style={{ color: 'var(--accent-primary)' }}>
              COMING SOON
            </span>
          </div>

          <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A live trading environment where members watch real-time analysis, share ideas, and learn from experienced traders in action.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Live Market Analysis</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Real-Time Trade Alerts</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Community Chat</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Daily Sessions</div>
            </div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: 'var(--bg-primary)', border: '2px dashed var(--border-primary)' }}>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              We're putting the final touches on The Trading Room. It will be worth the wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingRoom;
