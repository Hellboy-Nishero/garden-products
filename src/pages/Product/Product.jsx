import "./Product.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart } from 'lucide-react';
import Button from '../../components/Button/Button'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Product() {
  const { id } = useParams();
  const [readMore, setReadMore] = useState(false);
  let [count, setCount] = useState(1);
  let [modal, setModal] = useState(false);
  const { product,  loading } = useSelector((state) => state.products);

  
  const dispatch = useDispatch();

  const styleDescription = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: readMore ? "unset" : 3, // Показывает 3 строки, если readMore = false
    overflow: "hidden",
  };

  const openText = () => {
    setReadMore(!readMore);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  const counterIncrement = () => {
    setCount(++count);
  };
  const counterDecrement = () => {
    if (count > 0) {
      setCount(--count);
    }
  };
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const getSalePercent = (discountPrice, currentPrice) => {
    return Math.ceil(100 - discountPrice / (currentPrice / 100));
  };

  const salePercent = getSalePercent(product?.discont_price, product?.price);

  return (
     <div className="container__product">
        <div className="container__box">
  
         {product && (
          <div key={product?.id} className="item__box">
            <div className="title__heart">
              <h3 className="title">{product?.title}</h3>
              <img className="heart" src={Heart} alt="" />
            </div>
            <div className="product__box">
              <img
                onClick={openModal}
                className="product__img"
                src={`https://exam-server-5c4e.onrender.com/${product?.image}`}
                alt=""
              />
              <div
                onClick={closeModal}
                className={modal ? "modal__container__img" : "close__window"}
              >
                <img
                  className="modal__window__img"
                  src={`https://exam-server-5c4e.onrender.com/${product?.image}`}
                  alt=""
                />
              </div>
                <div className="info__container">
                  <div className="title__heart">
                    <h3 className="title">{product?.title}</h3>
  
                    <Heart
                      className="heart"
                    />
  
                  </div>
                  <div className="price__container">
                      <p className="price">
                        ${((product?.discont_price || product?.price) * count).toFixed(2)}
                      </p>
                      {product?.discont_price && (
                        <>
                          <p className="discount__price">${(product.price * count).toFixed(2)}</p>
                          <div className="sale">-${salePercent}%</div>
                        </>
                      )}
                    </div>
                    <p>{product?.price_discont}</p>
                      <div className="counter__container">
                        <div className="counter__box">
                          <button onClick={counterDecrement} className="counter__btn">-</button>
                          <span>{count}</span>
                          <button onClick={counterIncrement} className="counter__btn">+</button>
                        </div>
                      
                        <Button  onClick={() => addToCart(product)}
                          className="add__to">
                          Add to cart
                        </Button>
                      </div>
                      <div className="description__container">
                        <h5>Description</h5>
                        <p style={styleDescription} className="description">{product?.description}</p>
                        <p className="read__more" onClick={openText}>Read more</p>
                      </div>
                </div>
              </div>
            </div>
         )}
      </div>
     </div>
    );
  }


export default Product;