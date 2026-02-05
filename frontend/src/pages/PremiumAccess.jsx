import React, { useState } from 'react';
import { Rocket, Package, Bot, Lock, CheckCircle } from 'lucide-react';

const PremiumAccess = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleUnlock = (e) => {
    e.preventDefault();
    // Simple access check - in production, this would be backend-verified
    if (accessCode === 'MATRIX149' || accessCode.length > 5) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Invalid access code. Check your payment confirmation email.');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="max-w-md mx-auto p-8 rounded-2xl border" style={{ 
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-subtle)'
          }}>
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{
                  background: 'var(--accent-bg)',
                  border: '2px solid var(--accent-primary)'
                }}>
                  <Lock size={40} style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-3">Premium Members Only</h1>
              <p style={{ color: 'var(--text-muted)' }}>
                Enter your access code from the payment confirmation
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Access Code
                </label>
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Enter your access code"
                  className="input-field"
                  required
                />
                {error && (
                  <p className="text-sm mt-2" style={{ color: '#ef4444' }}>
                    {error}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full">
                Unlock Premium Content
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Don't have access yet?{' '}
                <a href="/#payment" style={{ color: 'var(--accent-primary)' }}>Join for ₹149/month</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="container py-20">
        {/* Welcome Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-primary)'
          }}>
            <span className="text-sm font-bold tracking-wider" style={{ color: 'var(--accent-primary)' }}>
              PREMIUM ACCESS GRANTED
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 Welcome Premium Member!</h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Here are your exclusive Telegram channels and premium content
          </p>
        </div>

        {/* Telegram Links */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">📱 Exclusive Telegram Channels</h2>
          <div className="grid grid-cols-1 gap-4">
            <a
              href="https://t.me/+UhNLZ9mbVdAwNjM1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
                textDecoration: 'none',
                color: 'var(--text-primary)'
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-bg)' }}>
                <Rocket size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">🔥 Trading Channel</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Live market analysis and trading strategies
                </p>
              </div>
              <CheckCircle size={24} style={{ color: 'var(--accent-primary)' }} />
            </a>

            <a
              href="https://t.me/+vseIUGumQYxhN2Y1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
                textDecoration: 'none',
                color: 'var(--text-primary)'
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-bg)' }}>
                <Package size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">💎 Dropshipping Channel</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Trending products and supplier connections
                </p>
              </div>
              <CheckCircle size={24} style={{ color: 'var(--accent-primary)' }} />
            </a>

            <a
              href="https://t.me/+8l7vA-odc6o4YTA1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
                textDecoration: 'none',
                color: 'var(--text-primary)'
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-bg)' }}>
                <Bot size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">🤖 AI Tools Channel</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Premium AI tools and automation resources
                </p>
              </div>
              <CheckCircle size={24} style={{ color: 'var(--accent-primary)' }} />
            </a>
          </div>
        </div>

        {/* Content Boxes */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dropshipping Description */}
          <div className="p-8 rounded-2xl border" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-subtle)'
          }}>
            <div className="flex items-center gap-3 mb-4">
              <Package size={32} style={{ color: 'var(--accent-primary)' }} />
              <h2 className="text-2xl font-bold">Premium Dropshipping Products</h2>
            </div>
            <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover trending dropshipping products at unbeatable prices! No inventory, no hassle — just sell & earn.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Fast worldwide delivery and complete support exclusively for ₹149 members.
            </p>
          </div>

          {/* AI Tools Description */}
          <div className="p-8 rounded-2xl border" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-subtle)'
          }}>
            <div className="flex items-center gap-3 mb-4">
              <Bot size={32} style={{ color: 'var(--accent-primary)' }} />
              <h2 className="text-2xl font-bold">Premium AI Tools</h2>
            </div>
            <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Automate your workflow, create stunning content, and boost productivity. Generate graphics, edit videos, and streamline tasks in minutes.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Exclusive for ₹149 members — start using AI to grow your business today!
            </p>
          </div>
        </div>

        {/* Support Note */}
        <div className="max-w-3xl mx-auto mt-12 p-6 rounded-xl border text-center" style={{
          background: 'var(--bg-tertiary)',
          borderColor: 'var(--border-subtle)'
        }}>
          <p style={{ color: 'var(--text-muted)' }}>
            Need help? Contact support via the channels above or email{' '}
            <a href="mailto:contact@thematrix.com" style={{ color: 'var(--accent-primary)' }}>
              contact@thematrix.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumAccess;
