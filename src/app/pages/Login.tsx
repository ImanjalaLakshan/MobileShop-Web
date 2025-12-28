import React, { useState } from 'react';

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login functionality will be implemented with backend integration.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ 
            maxWidth: '450px', 
            margin: '0 auto',
            background: 'var(--bg-white)',
            padding: 'var(--spacing-2xl)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <h1 style={{ 
                fontSize: '2rem', 
                fontWeight: 700,
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Welcome Back
              </h1>
              <p style={{ color: 'var(--text-gray)' }}>
                Sign in to your account to continue
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: 'var(--spacing-md)'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" />
                  <span style={{ fontSize: '0.875rem' }}>Remember me</span>
                </label>
                <a href="#forgot" style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--primary-blue)',
                  textDecoration: 'none'
                }}>
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </form>

            <div style={{ 
              textAlign: 'center', 
              marginTop: 'var(--spacing-lg)',
              paddingTop: 'var(--spacing-lg)',
              borderTop: '1px solid var(--border-color)'
            }}>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>
                Don't have an account?{' '}
                <a href="#signup" style={{ 
                  color: 'var(--primary-blue)', 
                  textDecoration: 'none',
                  fontWeight: 600
                }}>
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
