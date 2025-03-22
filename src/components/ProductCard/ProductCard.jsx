import React, { useEffect } from 'react';
import "./ProductCard.scss";
import {Heart, ShoppingBag} from 'lucide-react'
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleLike } from '../../store/slices/favoriteSlice';

const ProductCard = ({discont_price, image, title, price, product}) => {
  const currentPath = window.decodeURI(window.location.pathname); //gets current URL to build dynamic link for product
  //for example, if page link is "/all-products", then the link will be "/all-products/productName";

  const likedProducts = useSelector(state => state.favorite.liked);

  const isProductLiked = likedProducts.find(likedProduct => likedProduct.id === product.id);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({...product, count: 1}));
  }

  const handleToggleLike = (product) => {
    dispatch(toggleLike(product))
  }


  return (
    <div className="product-card">
    {discont_price && (
      <div className="discont-badge">-{Math.round ((price - discont_price) / price * 100)}%</div>
    )}

          <Link to={`${currentPath === "/" ? "all-sales" : currentPath}/${title}`}>
            <img className="product-image" src={`https://exam-server-5c4e.onrender.com${image}`} alt={title} />
          </Link>

        
        <div className="product-icons">
        <Heart className={`icon ${isProductLiked ? "liked" : ""}`} onClick={() => handleToggleLike(product)} />
        <ShoppingBag className="icon" onClick={() => handleAddToCart(product)} />
        </div>

        <Link to={`${currentPath}/${title}`}>
        <div className='card_footer'>
            <h3 className="product-title">{title}</h3>
            <div className="product-price">
            <span className="current-price">${discont_price ? discont_price.toFixed(2).replace(".", ",") : price.toFixed(2).replace(".", ",")}</span>
            {discont_price && (
                <span className="old-price">${price.toFixed(2).replace(".", ",")}</span>
            )}  
            </div>
        </div>
        </Link>
  </div>
  )
}

export default ProductCard
