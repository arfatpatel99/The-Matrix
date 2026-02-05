import React from 'react';
import { BookOpen, Video, FileText, Users, BarChart3, Award } from 'lucide-react';
import { courseData } from '../data/mock';

const Course = () => {
  return (
    <section id="course" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            {courseData.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{courseData.title}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {courseData.description}
          </p>
        </div>

        {/* Course Overview with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border-subtle)' }}>
              <img 
                src={courseData.image}
                alt="AI Dropshipping Program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-4">
            {courseData.features.map((feature, index) => {
              const icons = { BookOpen, Video, FileText, Users, BarChart3, Award };
              const IconComponent = icons[feature.icon];
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1" 
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                    <IconComponent size={20} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl" style={{ 
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
          border: '1px solid var(--border-subtle)'
        }}>
          <h3 className="text-3xl font-bold mb-4">Build Your Automated Income Machine</h3>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Stop trading time for money. Build AI-powered systems that generate income 24/7 while you sleep.
          </p>
          <button className="btn-primary text-lg px-12">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
