import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../../data/products';

interface ProductsProps {
  onAddToCart: (productId: number) => void;
}

export const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Smartphones', 'Accessories'];

  return (
    <div>
      {/* Page Header */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our Products</h1>
          <p className="hero-subtitle">
            Browse our extensive collection of smartphones and accessories
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: 'var(--spacing-xl)',
            flexWrap: 'wrap'
          }}>
            {categories.map(category => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(category)}
                style={{ minWidth: '120px' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Count */}
          <p style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--spacing-md)', 
            color: 'var(--text-gray)' 
          }}>
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <div style={{ 
                padding: 'var(--spacing-2xl)', 
                background: 'var(--bg-white)', 
                borderRadius: 'var(--radius-xl)',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>🔍</div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>No Products Found</h3>
                <p style={{ color: 'var(--text-gray)' }}>
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
