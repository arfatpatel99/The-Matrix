import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

const Auth = () => {
  return (
    <section id="auth" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl border" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <LogIn size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold">Member Login</h3>
            </div>
            
            <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
              Access your dashboard and continue your journey
            </p>

            <div className="space-y-4">
              <input type="email" placeholder="Email address" className="input-field" disabled />
              <input type="password" placeholder="Password" className="input-field" disabled />
              <button className="btn-primary w-full" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                <LogIn size={20} />
                Login (Coming Soon)
              </button>
            </div>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm" style={{ color: 'var(--accent-primary)' }}>Forgot password?</a>
            </div>
          </div>

          <div className="p-8 rounded-2xl border" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <UserPlus size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold">Join The Matrix</h3>
            </div>
            
            <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
              Start your transformation today
            </p>

            <div className="space-y-4">
              <input type="text" placeholder="Full name" className="input-field" disabled />
              <input type="email" placeholder="Email address" className="input-field" disabled />
              <input type="password" placeholder="Create password" className="input-field" disabled />
              <button className="btn-primary w-full" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                <UserPlus size={20} />
                Sign Up (Coming Soon)
              </button>
            </div>

            <div className="mt-6 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
              By signing up, you agree to our Terms of Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
