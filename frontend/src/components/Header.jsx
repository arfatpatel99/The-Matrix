import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled 
          ? 'rgba(17, 17, 19, 0.95)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none'
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 
              className="text-2xl md:text-3xl font-black tracking-tight"
              style={{
                color: 'var(--accent-primary)',
                textShadow: '0 0 20px rgba(218, 255, 1, 0.5)',
                letterSpacing: '0.05em'
              }}
            >
              THE MATRIX
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('learn')}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Learn
            </button>
            <button 
              onClick={() => scrollToSection('ai-dropshipping')}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              AI Systems
            </button>
            <button 
              onClick={() => scrollToSection('course')}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Program
            </button>
            <button 
              onClick={() => scrollToSection('payment')}
              className="btn-primary text-sm px-6 py-3"
            >
              Join Now
            </button>
            <a 
              href="/premium"
              className="text-sm font-medium transition-colors duration-200"
              style={{ 
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                marginLeft: '16px'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Members
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ 
              background: 'var(--bg-secondary)',
              color: 'var(--accent-primary)'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden py-6 border-t animate-fade-in"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ 
                  color: 'var(--text-secondary)',
                  background: 'transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--accent-bg)';
                  e.target.style.color = 'var(--accent-primary)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('learn')}
                className="text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ 
                  color: 'var(--text-secondary)',
                  background: 'transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--accent-bg)';
                  e.target.style.color = 'var(--accent-primary)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                What You Learn
              </button>
              <button 
                onClick={() => scrollToSection('ai-dropshipping')}
                className="text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ 
                  color: 'var(--text-secondary)',
                  background: 'transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--accent-bg)';
                  e.target.style.color = 'var(--accent-primary)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                AI Systems
              </button>
              <button 
                onClick={() => scrollToSection('course')}
                className="text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ 
                  color: 'var(--text-secondary)',
                  background: 'transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--accent-bg)';
                  e.target.style.color = 'var(--accent-primary)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                Program
              </button>
              <button 
                onClick={() => scrollToSection('payment')}
                className="btn-primary w-full text-sm py-3"
              >
                Join Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
