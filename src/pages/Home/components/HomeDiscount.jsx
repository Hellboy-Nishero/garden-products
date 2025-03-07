import React, { useState } from "react";
import "./HomeDiscount.scss";

function HomeDiscount() {
  const [sendingDiscount, setSendingDiscount] = useState(false);

  return (
    <div>
      <div className="discount__container">
        <div className="discount__container_box">
          <h1>5% off on the first order</h1>
          <div className="form__box">
            <img className="img" src="./discountImg.png" alt="" />
              <div className="container__send">
                <p className="text__send">
                  The discount has been successfully sent by email
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDiscount;