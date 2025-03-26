import React, { useState } from "react";
import { useDispatch } from "react-redux"; // ✅ Добавляем useDispatch
import "./HomeDiscount.scss";
import "./CheckoutForm";
import CheckoutForm from "./CheckoutForm";
import { useEffect } from "react";
function HomeDiscount() {
  const [sendingDiscount, setSendingDiscount] = useState(false);
  const dispatch = useDispatch(); // ✅ Инициализируем dispatch

  const handleSendDiscount = () => {
  
    setSendingDiscount(true);
  };
  useEffect(() => {}, [sendingDiscount])
  return (
      <div className="discount__container">
        <div className="discount__container_box">
          <h1>5% off on the first order</h1>
          <div className="form__box">
            <img className="img" src="./discountImg.png" alt="" />
            <CheckoutForm sendingdiscount={sendingDiscount}/>
          </div>
        </div>
      </div>
  );
}

export default HomeDiscount;