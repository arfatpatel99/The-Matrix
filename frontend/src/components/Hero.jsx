import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroData.heroImage}
          alt="AI Automation"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)] to-[var(--bg-primary)]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center animate-fade-in" style={{ paddingTop: '80px' }}>
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{
            background: 'linear-gradient(to right, var(--text-primary), var(--accent-primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            {heroData.headline}
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: 'var(--text-secondary)' }}>
            {heroData.subheadline}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ 
            color: 'var(--text-muted)',
            lineHeight: '1.6'
          }}>
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-primary">
              {heroData.ctaText}
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={scrollToAbout}>
              {heroData.secondaryCtaText}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>AI-Powered</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Automation Systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>24/7</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Passive Income</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>Zero</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Inventory Needed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer animate-bounce"
        style={{ 
          background: 'transparent',
          border: 'none',
          color: 'var(--accent-primary)'
        }}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
