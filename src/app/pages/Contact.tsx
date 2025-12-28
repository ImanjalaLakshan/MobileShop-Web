import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            Have a question? We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form">
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 'var(--spacing-lg)',
            maxWidth: '900px',
            margin: '0 auto var(--spacing-xl)'
          }}>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Visit Us</h4>
                <p style={{ color: 'var(--text-gray)' }}>
                  123 Tech Street<br />
                  Digital City, DC 12345
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Call Us</h4>
                <p style={{ color: 'var(--text-gray)' }}>
                  +1 (555) 123-4567<br />
                  Mon-Sat: 9AM-8PM
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Email Us</h4>
                <p style={{ color: 'var(--text-gray)' }}>
                  support@mobileshop.com<br />
                  sales@mobileshop.com
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center">
            <a 
              href="https://wa.me/15551234567" 
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ fontSize: '1.5rem' }}>💬</span>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Find Our Store</h2>
          <div style={{ 
            width: '100%', 
            height: '400px', 
            background: 'var(--bg-light)', 
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-gray)',
            border: '2px dashed var(--border-color)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🗺️</div>
              <p>Interactive map placeholder</p>
              <p style={{ fontSize: '0.875rem' }}>
                (In production, integrate Google Maps or similar service)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
