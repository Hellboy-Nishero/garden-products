import React, { useEffect } from 'react';
import "./ProductCard.scss";
import {Heart, ShoppingBag} from 'lucide-react'
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleLike } from '../../store/slices/favoriteSlice';

// ProductCard component displays product details, discount badges, and interactive icons
const ProductCard = ({discont_price, image, title, price, product}) => {
  const currentPath = window.decodeURI(window.location.pathname); //gets current URL to build dynamic link for product
  //for example, if page link is "/all-products", then the link will be "/all-products/productName";

  // Retrieves the list of liked products from the Redux store
  const likedProducts = useSelector(state => state.favorite.liked);

  // Checks if the current product is in the liked products list
  const isProductLiked = likedProducts.find(likedProduct => likedProduct.id === product.id);

  const dispatch = useDispatch();

  // Adds the product to the shopping cart with an initial count of 1
  const handleAddToCart = (product) => {
    dispatch(addToCart({...product, count: 1}));
  }

  // Toggles the like status of the product in the Redux store
  const handleToggleLike = (product) => {
    dispatch(toggleLike(product))
  }


  return (
    <div className="product-card">
      {/* Displays discount badge if there is a discounted price */}
    {discont_price && (
      <div className="discont-badge">-{Math.round ((price - discont_price) / price * 100)}%</div>
    )}
           {/* Product image with a link to its details page */}
          <Link to={`${currentPath === "/" ? "all-sales" : currentPath}/${title}`}>
            <img className="product-image" src={`https://exam-server-5c4e.onrender.com${image}`} alt={title} />
          </Link>

        {/* Icons for liking a product and adding it to the cart */}
        <div className="product-icons">
        <Heart className={`icon ${isProductLiked ? "liked" : ""}`} onClick={() => handleToggleLike(product)} />
        <ShoppingBag className="icon" onClick={() => handleAddToCart(product)} />
        </div>


        {/* Product title and price details */}
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
