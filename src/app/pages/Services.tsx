import React from 'react';
import { services } from '../../data/products';

export const Services: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Professional mobile repair and support services you can trust
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <h2 className="section-title">Extended Warranty Plans</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--spacing-lg)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Basic Plan */}
            <div style={{ 
              background: 'var(--bg-light)', 
              padding: 'var(--spacing-xl)', 
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              border: '2px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: 'var(--spacing-sm)', 
                color: 'var(--text-dark)' 
              }}>
                Basic
              </h3>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                marginBottom: 'var(--spacing-md)',
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                $49/year
              </div>
              <ul style={{ 
                listStyle: 'none', 
                textAlign: 'left', 
                marginBottom: 'var(--spacing-lg)' 
              }}>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Hardware failure coverage</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Free diagnostics</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ 24/7 phone support</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ 1-year coverage</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: '100%' }}>
                Choose Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div style={{ 
              background: 'var(--primary-gradient)', 
              color: 'white',
              padding: 'var(--spacing-xl)', 
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              transform: 'scale(1.05)',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)', 
                padding: '0.25rem 1rem', 
                borderRadius: 'var(--radius-md)',
                display: 'inline-block',
                marginBottom: 'var(--spacing-sm)',
                fontWeight: 600
              }}>
                Most Popular
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
                Premium
              </h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                $99/year
              </div>
              <ul style={{ 
                listStyle: 'none', 
                textAlign: 'left', 
                marginBottom: 'var(--spacing-lg)' 
              }}>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Everything in Basic</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Accidental damage coverage</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ 2 screen replacements/year</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Priority repair service</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Loaner device included</li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Choose Plan
              </button>
            </div>

            {/* Ultimate Plan */}
            <div style={{ 
              background: 'var(--bg-light)', 
              padding: 'var(--spacing-xl)', 
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              border: '2px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: 'var(--spacing-sm)', 
                color: 'var(--text-dark)' 
              }}>
                Ultimate
              </h3>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                marginBottom: 'var(--spacing-md)',
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                $149/year
              </div>
              <ul style={{ 
                listStyle: 'none', 
                textAlign: 'left', 
                marginBottom: 'var(--spacing-lg)' 
              }}>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Everything in Premium</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Loss & theft protection</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Unlimited repairs</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Same-day service</li>
                <li style={{ padding: 'var(--spacing-xs) 0' }}>✓ Free accessories coverage</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: '100%' }}>
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: 'var(--primary-gradient)', 
            padding: 'var(--spacing-2xl)', 
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>
              Need a Repair Right Now?
            </h2>
            <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-lg)', opacity: 0.95 }}>
              Walk into any of our service centers or book an appointment online
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">
                Book Appointment
              </button>
              <button className="btn btn-secondary">
                Find Service Center
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
