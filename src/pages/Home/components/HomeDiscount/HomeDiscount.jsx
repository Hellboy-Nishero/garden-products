import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
import { useDispatch } from "react-redux"; // Import useDispatch from Redux
import "./HomeDiscount.scss"; // Import styles for HomeDiscount component
import CheckoutForm from "../CheckoutForm/CheckoutForm"; // Import CheckoutForm component

function HomeDiscount() {
  const [sendingDiscount, setSendingDiscount] = useState(false); // State to track discount sending status

  const handleSendDiscount = () => {
    setSendingDiscount(true); // Set state to true when discount is sent
  };

  useEffect(() => {}, [sendingDiscount]); // Effect triggered when sendingDiscount changes

  return (
      <div className="discount__container">
        <div className="discount__container_box">
          <h1>5% off on the first order</h1> {/* Discount offer text */}
          <div className="form__box">
            <div className="img-container">
              <img className="img" src="./discountImg.png" alt="Discount Offer" /> {/* Discount image */}
            </div>
            <CheckoutForm sendingdiscount={sendingDiscount} handleSendDiscount={handleSendDiscount} /> {/* Checkout form with discount status */}
          </div>
        </div>
      </div>
  );
}

export default HomeDiscount; // Export HomeDiscount component