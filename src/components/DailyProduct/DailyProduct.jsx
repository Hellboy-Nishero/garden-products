import React, { useEffect } from 'react'
import "./DailyProduct.scss";
import { useDispatch, useSelector } from 'react-redux';
import { Heart, X } from 'lucide-react';
import Button from '../Button/Button';
import { closeDailyProduct } from '../../store/slices/productSlice';
import { addToCart } from '../../store/slices/cartSlice';

const DailyProduct = () => {
    const product = useSelector(state => state.products.dailyProduct);
    const isActive = useSelector(state => state.products.dailyProductActive);
    const dispatch = useDispatch();

    const handleCloseWindow = () => {
        dispatch(closeDailyProduct())
    }

    const handleAddToCart = () => {
        dispatch(addToCart({...product, count: 1}));
    }

    useEffect(() => {
        isActive 
        ? document.body.classList.add("modal-open")
        : document.body.classList.remove("modal-open"); 
    }, [isActive])


  return (
    <div className={`modalWindow ${isActive ? "shown" : ""}`}>
        <div className="productContainer">
            <div className="productContainer__header">
                <h2 className="dailyProduct__title">50% discount on product of the day!</h2>
                <X className='icon' onClick={handleCloseWindow}/>
            </div>
            <div className="dailyProduct">
                <div className="dailyProduct__header">
                    <span className="dailyProduct__discount">-50%</span>
                    <Heart className='icon' />
                </div>
                <img className="dailyProduct__image" src={`https://exam-server-5c4e.onrender.com${product.image}`}></img>
                <div className="dailyProduct__footer">
                    <h3 className="dailyProduct__name">{product.title}</h3>
                    <div className="dailyProduct__prices">
                        <span className="dailyProduct__current-price">${product.discont_price.toFixed(2)}</span>
                        <span className="dailyProduct__old-price">${(product.price).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <Button type={"secondary"} className={"btn-daily"} onClick={handleAddToCart}>Add to cart</Button>
        </div>
    </div>
  )
}

export default DailyProduct