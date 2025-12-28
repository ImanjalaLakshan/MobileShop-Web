import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../../data/products';

interface HomeProps {
  onAddToCart: (productId: number) => void;
}

export const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  // Get latest 4 smartphones for featured section
  const featuredProducts = products
    .filter(p => p.category === 'Smartphones')
    .slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MobileShop</h1>
          <p className="hero-subtitle">
            Discover the latest smartphones and accessories at unbeatable prices.
            Your perfect mobile experience starts here!
          </p>
          <div className="hero-cta">
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Smartphones</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <h2 className="section-title">Why Choose MobileShop?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3 className="service-title">Free Shipping</h3>
              <p className="service-description">
                Free delivery on orders over $100. Fast and reliable shipping nationwide.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3 className="service-title">Secure Payment</h3>
              <p className="service-description">
                100% secure payment processing. Your data is always protected.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">↩️</div>
              <h3 className="service-title">Easy Returns</h3>
              <p className="service-description">
                30-day hassle-free returns. No questions asked money-back guarantee.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3 className="service-title">24/7 Support</h3>
              <p className="service-description">
                Round-the-clock customer support. We're always here to help you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
