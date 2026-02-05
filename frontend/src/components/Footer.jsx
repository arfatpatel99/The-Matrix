import React from 'react';
import { Twitter, Instagram, Youtube, MessageCircle, AlertTriangle } from 'lucide-react';
import { footerData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ 
      background: 'var(--bg-secondary)',
      borderColor: 'var(--border-subtle)'
    }}>
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--accent-primary)' }}>
              {footerData.brand}
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              {footerData.tagline}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
              >
                <Youtube size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                      onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
                      onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-6 rounded-xl border mb-8" style={{ 
          background: 'var(--bg-primary)',
          borderColor: 'var(--border-subtle)'
        }}>
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h5 className="font-semibold mb-2 text-sm" style={{ color: 'var(--accent-primary)' }}>
                Important Disclaimer
              </h5>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {footerData.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {footerData.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
