import React, { useEffect, useState } from 'react'
import "./Cart.scss";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus, X } from 'lucide-react';
import Input from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import ModalWindow from './components/ModalWindow';
import { decreaseProduct, deleteProduct, increaseProduct } from '../../store/slices/cartSlice';
import { toggleWindow } from '../../store/slices/modalSlice';

const Cart = () => {

  const cart = useSelector(state => state.cart.cart);

  const count = useSelector(state => state.cart.count);

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm();

  const [width, setWidth] = useState(window.innerWidth);

  const onSubmit = async (data) => {
    const res = await fetch("https://exam-server-5c4e.onrender.com/order/send",{
      method: "POST",
      body: JSON.stringify(data)
    }
    )
    if(res.ok){
      dispatch(toggleWindow());
    }
  }

  const handleIncrease = (product) => {
    dispatch(increaseProduct(product));
  }

  const handleDescrease = (product) => {
    dispatch(decreaseProduct(product));
  }

  const handleDelete = (product) => {
    dispatch(deleteProduct(product));
  }

  const handleBackToStore = () => {
    navigate("/all-products");
  }

  useEffect(() => {
    setTotal(cart.reduce((acc, product) => {
      acc += product.subtotal;
      return acc;
    }, 0))
  }, [cart]);

  useEffect(() => {
    if(isSubmitSuccessful){
      reset();
    }
  }, [isSubmitSuccessful])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])



  return (
    <div className='cart'>
      <div className="cart-header">
        <h1 className="page-title">Shopping cart</h1>
        {
          width > 360 &&
          <Button type={"secondary"} className={"btn-back"} onClick={handleBackToStore}>Back to the store</Button>
        }
      </div>
      {
        cart.length !== 0 ?
        <div className='cart__content'>
          <div className="cart__items">
            {cart.map(product => 
              <div className="cart__product" key={product.id}>
                <div className="cart__product-left">
                  <img src={`https://exam-server-5c4e.onrender.com/${product.image}`} alt={product.title} className="cart__image" />
                </div>
                <div className="cart__product-right">
                  <div className="cart__product-header">
                    <h3 className="cart__product-title">{product.title}</h3>
                    <X className='icon' onClick={() => handleDelete(product)} />
                  </div>
                  <div className="cart__product-footer">
                    <div className="cart__product-controlls">
                      <button className='cart__controll-btn' onClick={() => handleDescrease(product)}><Minus /></button>
                      <input 
                      type="number" value={product.count} 
                      readOnly={true}
                      className='cart__counter'/>
                      <button className='cart__controll-btn' onClick={() => handleIncrease(product)}><Plus /></button>
                    </div>
                    <div className="cart__prices">
                      <span className="price">${product.discont_price ? product.discont_price.toFixed(2).replace(".", ",") : product.price.toFixed(2).replace(".", ",")}</span>
                      {
                        product.discont_price && 
                        <span className="oldPrice">${product.price.toFixed(2).replace(".", ",")}</span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="cart__form">
            <h3 className="cart__form-title">Order details</h3>
            <div className="cart__form-info">
              <span className="cart__form-counter">{count} items</span>
              <span className="cart__form-price">Total <h3 className='cart__totalPrice'>${total.toFixed(2).replace(".", ",")}</h3></span>
            </div>
            <div className="cart__form-inputs">
              {errors.name && <p className='error'>{errors.name.message}</p> }
              <Input placeholder={"Name"} register={register} name={"name"} rules={{
                  required: {
                    value: true,
                    message: "Name is required"
                  },
                  minLength: {
                    value: 3,
                    message: "Name should contain at least 3 characters"
                  },
                  maxLength: {
                    value: 24,
                    message: "Name should not contain more then 24 characters"
                  },
                  pattern: {
                    value: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
                    message: "Name can contain only letter and special characters like: ', -"
                  }
              }} />
              {errors.phone && <p className='error'>{errors.phone.message}</p> }
              <Input placeholder={"Phone number"} register={register} name={"phone"} rules={{
                required: {
                  value: true,
                  message: "Phone number is required"
                },
                minLength: {
                  value: 8,
                  message: "Phone number should contain at least 8 characters"
                },
                maxLength: {
                  value: 12,
                  message: "Phone number should not contain more then 12 characters"
                },
                pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                  message: "Phone number should contain numbers only"
                }
              }} />
              {errors.email && <p className='error'>{errors.email.message}</p> }
              <Input placeholder={"Email"} register={register} name={"email"} rules={{
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern:  {
                  value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email is incorrect"
                }
              }} />
              <Button type={"primary"}>Order</Button> 
            </div>
          </form>
        </div>
        : <>
                <p className='cart-empty'>Looks like you have no items in your basket currently.</p>
                <Button className={"btn-cart"} onClick={handleBackToStore}>Continue Shopping</Button>
        </>
      }
      {
        width <= 360 &&
        <Button type={"secondary"} className={"btn-back"} onClick={handleBackToStore}>Back to the store</Button>
      }
      <ModalWindow />
    </div>
  )
}

export default Cart