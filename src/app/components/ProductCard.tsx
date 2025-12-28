import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    badge: string | null;
    description: string;
  };
  onAddToCart: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star' : 'star empty'}>
        ★
      </span>
    ));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.badge && <div className="product-badge">{product.badge}</div>}
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {renderStars(product.rating)}
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price-container">
          <span className="product-price">${product.price}</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
