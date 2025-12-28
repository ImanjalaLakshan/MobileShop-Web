import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import '../styles/index.css';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (productId: number) => {
    setCartCount(prevCount => prevCount + 1);
    // Show a simple notification
    const notification = document.createElement('div');
    notification.textContent = 'Product added to cart! 🎉';
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      z-index: 9999;
      animation: slideIn 0.3s ease;
      font-weight: 600;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar cartCount={cartCount} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      `}</style>
    </Router>
  );
}
