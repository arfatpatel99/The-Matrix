import React, { useState } from 'react';
import { Send, Mail, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { contactData } from '../data/mock';

const getIcon = (iconName) => {
  switch(iconName) {
    case 'Twitter': return Twitter;
    case 'Instagram': return Instagram;
    case 'Youtube': return Youtube;
    case 'MessageCircle': return MessageCircle;
    default: return MessageCircle;
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple frontend validation
    if (formData.name && formData.email && formData.message) {
      // Mock submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold mb-3 tracking-wider" style={{ color: 'var(--accent-primary)' }}>
            {contactData.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{contactData.title}</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {contactData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl border" style={{ 
            background: 'var(--bg-primary)',
            borderColor: 'var(--border-subtle)'
          }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                  style={{ background: 'var(--accent-bg)' }}>
                  <Send size={32} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className="input-field"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="p-6 rounded-xl" style={{ background: 'var(--bg-primary)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                  <Mail size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a href={`mailto:${contactData.email}`} style={{ color: 'var(--accent-primary)' }}>
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl" style={{ background: 'var(--bg-primary)' }}>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="grid grid-cols-2 gap-4">
                {contactData.socialLinks.map((social, index) => {
                  const IconComponent = getIcon(social.icon);
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                      style={{ 
                        background: 'var(--bg-secondary)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <IconComponent size={20} style={{ color: 'var(--accent-primary)' }} />
                      <span className="text-sm font-medium">{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Note */}
            <div className="p-6 rounded-xl border" style={{ 
              background: 'var(--bg-tertiary)',
              borderColor: 'var(--border-subtle)'
            }}>
              <p className="text-sm" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                💡 <strong style={{ color: 'var(--text-primary)' }}>Response Time:</strong> We typically respond within 24-48 hours. For urgent inquiries, reach out via our social media channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
