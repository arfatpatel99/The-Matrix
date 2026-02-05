import React from 'react';
import { Rocket } from 'lucide-react';
import { tradingRoomData } from '../data/mock';

const TradingRoom = () => {
  return (
    <section id="trading-room" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, var(--accent-bg) 0%, var(--bg-tertiary) 100%)',
              border: '2px solid var(--accent-primary)'
            }}>
              <Rocket size={40} style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{tradingRoomData.title}</h2>
          
          {/* Subtitle Badge */}
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-primary)'
          }}>
            <span className="text-sm font-bold tracking-wider" style={{ color: 'var(--accent-primary)' }}>
              {tradingRoomData.subtitle}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {tradingRoomData.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {tradingRoomData.features.map((feature, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl" 
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {feature}
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="p-8 rounded-2xl" style={{ 
            background: 'var(--bg-primary)',
            border: '2px dashed var(--border-primary)'
          }}>
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
