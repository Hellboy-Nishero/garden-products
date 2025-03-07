import React from 'react';
import "./HomeBanner.scss";
import Button from "./Button.jsx"

const Banner = () => {
  return (
    <header className='banner'>
      <div className="container">
        <div className="content">
          <img src="/Banner.png" alt="" className='banner__image' />
          <div className="banner__content">
            <h1 className='title'>Amazing Discounts <span>on Garden Products!</span></h1>
              <Button className='btn-default-size'>Check out</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Banner;
