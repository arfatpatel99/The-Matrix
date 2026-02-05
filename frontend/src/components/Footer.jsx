import React from 'react';
import { Twitter, Instagram, Youtube, MessageCircle, AlertTriangle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--accent-primary)' }}>The Matrix</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              Trading Education & Mindset Development
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#learn" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>What You Learn</a></li>
              <li><a href="#course" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>The Course</a></li>
              <li><a href="#trading-room" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Trading Room</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Risk Disclosure</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact Us</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Twitter</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Instagram</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl border mb-8" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h5 className="font-semibold mb-2 text-sm" style={{ color: 'var(--accent-primary)' }}>Important Disclaimer</h5>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                This platform is for educational purposes only. We do not provide financial advice. Trading involves risk and may not be suitable for all investors. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} The Matrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
