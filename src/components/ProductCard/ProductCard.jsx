import React from 'react';
import "./ProductCard.scss";
import {Heart, ShoppingBag} from 'lucide-react'
import { Link } from 'react-router';

const ProductCard = ({discont, image, title, price, oldPrice}) => {
  return (
    <div className="product-card">
    {discont && (
      <div className="discont-badge">-{discont}%</div>
    )}
       <Link>
       <img className="product-image" src={`https://exam-server-5c4e.onrender.com${image}`} alt={title} />
       </Link>
        
        <div className="product-icons">
        <Heart className="icon" />
        <ShoppingBag className="icon" />
        </div>

        <div className='card_footer'>
            <h3 className="product-title">{title}</h3>
            <div className="product-price">
            <span className="current-price">${price.toFixed(2)}</span>
            {oldPrice && (
                <span className="old-price">${oldPrice}</span>
            )}
            </div>
        </div>
  </div>
  )
}

export default ProductCard