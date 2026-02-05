import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Payment = () => {
  return (
    <section id="payment" className="section-spacing" style={{ 
      background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
    }}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Main Payment Card */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full mb-6" style={{
              background: 'var(--accent-bg)',
              border: '1px solid var(--accent-primary)'
            }}>
              <span className="text-sm font-bold tracking-wider" style={{ color: 'var(--accent-primary)' }}>
                LIMITED ENROLLMENT OPEN
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join The Matrix Today</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
              Start building your AI-powered dropshipping empire
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto p-12 rounded-3xl border-2 mb-12" style={{ 
            background: 'var(--bg-secondary)',
            borderColor: 'var(--accent-primary)',
            boxShadow: '0 20px 60px rgba(218, 255, 1, 0.2)'
          }}>
            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-black" style={{ color: 'var(--accent-primary)' }}>₹149</span>
                <span className="text-2xl" style={{ color: 'var(--text-muted)' }}>/month</span>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Cancel anytime. No hidden fees.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="text-center mb-8 p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                Secure Payment via Razorpay
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Cards · UPI · Net Banking
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href="https://razorpay.me/@arfatfauzanpatel" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button className="btn-primary w-full text-xl py-6">
                Join Now · Pay ₹149
                <ArrowRight size={24} />
              </button>
            </a>

            {/* Access Note */}
            <div className="mt-6 p-4 rounded-xl border" style={{ 
              background: 'var(--bg-primary)',
              borderColor: 'var(--border-subtle)'
            }}>
              <p className="text-sm text-center" style={{ color: 'var(--text-muted)' }}>
                ✓ After payment, access details will be shared manually within 24 hours
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                  <Shield size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Secure Payment</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Powered by Razorpay - India's trusted payment gateway
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                  <Clock size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Instant Access</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Get course details and community invite within 24 hours
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                  <Users size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Join Elite Community</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Access to exclusive AI tools and automation strategies
              </p>
            </div>
          </div>

          {/* FAQ Quick */}
          <div className="mt-12 max-w-3xl mx-auto p-8 rounded-2xl" style={{ 
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 className="text-2xl font-bold mb-6 text-center">What You Get</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'var(--accent-primary)' }}>
                  <span className="text-xs font-bold" style={{ color: 'var(--bg-primary)' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Complete AI Dropshipping Course</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Step-by-step video training from zero to scale</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'var(--accent-primary)' }}>
                  <span className="text-xs font-bold" style={{ color: 'var(--bg-primary)' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">AI Tools & Templates</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Premium AI tools for product research and automation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'var(--accent-primary)' }}>
                  <span className="text-xs font-bold" style={{ color: 'var(--bg-primary)' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Community Access</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Connect with entrepreneurs building AI-powered businesses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'var(--accent-primary)' }}>
                  <span className="text-xs font-bold" style={{ color: 'var(--bg-primary)' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Monthly Updates</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Stay ahead with latest AI strategies and winning products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
