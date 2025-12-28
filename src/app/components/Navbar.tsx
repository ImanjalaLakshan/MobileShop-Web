import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MobileShop
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          ☰
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={`navbar-link ${isActive('/')}`} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={`navbar-link ${isActive('/products')}`} onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/services" className={`navbar-link ${isActive('/services')}`} onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`navbar-link ${isActive('/contact')}`} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <div className="cart-icon">
              🛒
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </li>
          <li>
            <Link to="/login" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
