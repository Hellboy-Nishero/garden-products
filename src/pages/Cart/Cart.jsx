import React from 'react'
import "./Cart.scss";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';

const Cart = () => {

  const navigate = useNavigate();

  const handleBackToStore = () => {
    navigate("/all-products");
  }

  return (
    <div className='cart'>
      <div className="cart-header">
        <h1 className="page-title">Shopping cart</h1>
        <Button type={"secondary"} className={"btn-back"} onClick={handleBackToStore}>Back to the store</Button>
      </div>
      <p className='cart-empty'>Look like you have no items in your basket currently.</p>
      <Button className={"btn-cart"} onClick={handleBackToStore}>Continue Shopping</Button>
    </div>
  )
}

export default Cart