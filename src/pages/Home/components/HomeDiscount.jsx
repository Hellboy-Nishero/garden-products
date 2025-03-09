import React, { useState } from "react";
import "./HomeDiscount.scss";
import Button from "../../../components/Button/Button";

function HomeDiscount() {
  const [sendingDiscount, setSendingDiscount] = useState(false);

  return (
      <div className="discount__container">
        <div className="discount__container_box">
          <h1>5% off on the first order</h1>
          <div className="form__box">
            <img className="img" src="./discountImg.png" alt="" />
                <Button type="submitted"></Button>
          </div>
        </div>
      </div>
  );
}

export default HomeDiscount;