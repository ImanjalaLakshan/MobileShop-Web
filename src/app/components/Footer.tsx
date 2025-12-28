import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>MobileShop</h3>
            <p>Your trusted destination for the latest smartphones and accessories. Quality products, excellent service.</p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                f
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                𝕏
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                📷
              </a>
              <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                ▶
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <a href="#shipping">Shipping Info</a>
            <a href="#returns">Returns & Exchanges</a>
            <a href="#warranty">Warranty</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 123 Tech Street, colombo 05</p>
            <p>📞 +94 776893730</p>
            <p>✉️ Lakshan@mobileshop.com</p>
            <p>🕒 Mon-Sat: 9AM-8PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 MobileShop. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};
