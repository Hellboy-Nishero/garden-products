import "./Product.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { Heart, Plus, Minus } from 'lucide-react';
import Button from '../../components/Button/Button'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { addToCart } from "../../store/slices/cartSlice";
import { toggleLike } from "../../store/slices/favoriteSlice";

function Product() {
  const { productTitle } = useParams();
  const { currentProducts} = useSelector(state => state.products);
  const product = currentProducts.find(product => product.title === productTitle);
  const [readMore, setReadMore] = useState(false);
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const likedProducts = useSelector(state => state.favorite.liked);
  const [isProductLiked, setIsProductLiked] = useState(false);
  
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);


  const openText = () => {
    setReadMore(!readMore);
  };


  const counterIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const counterDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const toggleModal = () => setModal(!modal);

  const getSalePercent = (discountPrice, currentPrice) => {
    return Math.round(100 - discountPrice / (currentPrice / 100));
  };

  const addProduct = (product) => {
    dispatch(addToCart({...product, count: count}));
  }

  const toggleLikeProduct = (product) => {
    setIsProductLiked(!isProductLiked);
    dispatch(toggleLike(product));
  }

  const salePercent = getSalePercent(product?.discont_price, product?.price);



  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);

  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    if(product !== undefined){

      setIsProductLiked(likedProducts.some(likedProduct => likedProduct.id === product.id));
    }
  }, [product]);


  if(!product){
    return <div>Loading...</div>
  }

  return (
    <div className="product">
      <Breadcrumbs />
      <div key={product.id} className="product__container">
        {
          width <= 480 &&
          <div className="product__header">
          <h3 className="product__title">{product.title}</h3>
          <Heart className={`icon ${isProductLiked ? "liked" : ""}`} onClick={() => toggleLikeProduct(product)} />
        </div>
        }
        <div className="image__container">
          <img
            onClick={toggleModal}
            className="product__image"
            src={`https://exam-server-5c4e.onrender.com/${product.image}`}
            alt=""
          />
        </div>
        <div
          onClick={toggleModal}
          className={modal ? "modal__container__img" : "close__window"}
        >
          <img
            className="modal__window__img"
            src={`https://exam-server-5c4e.onrender.com/${product.image}`}
            alt=""
          />
        </div>
        <div className="product__info">
          {
            width > 480 &&
            <div className="product__header">
            <h3 className="product__title">{product.title}</h3>
            <Heart className={`icon ${isProductLiked ? "liked" : ""}`} onClick={() => toggleLikeProduct(product)} />
          </div>
          }

          <div className="prices">
            <span className="currentPrice">${product.discont_price ? product.discont_price.toFixed(2).replace(".", ",") : product.price.toFixed(2).replace(".", ",")}</span>
            {
              product.discont_price && 
              <span className="oldPrice">${product.price.toFixed(2).replace(".", ",")}</span>
            }
            {
              product.discont_price && 
              <span className="sales-badge">-{salePercent}%</span>
            }

          </div>
          <div className="counter__container">
            <div className="counter__box">
              <button onClick={counterDecrement} className="counter__btn"><Minus></Minus></button>
              <input type="number" className="counter" value={count} readOnly />
              <button onClick={counterIncrement} className="counter__btn"><Plus></Plus></button>
            </div>
          
            <Button  onClick={() => addProduct(product)}
              className="add__to">
              Add to cart
            </Button>
          </div>
          {
            width > 768 &&
              <div className="description__container">
              <h4 className="description__title">Description</h4>
              <p className="description">{product.description.length  > 200 && !readMore ? `${product.description.slice(0, 200)}...` : product.description}</p>
          {
            product.description.length > 200 && (
              <p className="read__more" onClick={openText}>{readMore ? "Show Less" : "Read more"}</p>
            )
          }
            </div>
          }
        </div>
      </div>
      {
          width <= 768 &&
          <div className="description__container">
          <h4 className="description__title">Description</h4>
          <p className="description">{product.description.length  > 200 && !readMore ? `${product.description.slice(0, 200)}...` : product.description}</p>
          {
            product.description.length > 200 && (
              <p className="read__more" onClick={openText}>{readMore ? "Show Less" : "Read more"}</p>
            )
          }
        </div>
        }
    </div>
    );
  }


export default Product;





