import React from 'react';
import "./ProductCard.scss";
import {Heart, ShoppingBag} from 'lucide-react'

const ProductCard = ({discont_price, image, title, price}) => {
  return (
    <div className="product-card">
    {discont_price && (
      <div className="discont-badge">-{Math.round ((price - discont_price) / price * 100)}%</div>
    )}
        <img className="product-image" src={`https://exam-server-5c4e.onrender.com${image}`} alt={title} />
        
        <div className="product-icons">
        <Heart className="icon" />
        <ShoppingBag className="icon" />
        </div>

        <div className='card_footer'>
            <h3 className="product-title">{title}</h3>
            <div className="product-price">
            <span className="current-price">${discont_price ? discont_price.toFixed(2) : price.toFixed(2)}</span>
            {discont_price && (
                <span className="old-price">${price.toFixed(2)}</span>
            )}  
            </div>
        </div>
  </div>
  )
}

export default ProductCard
