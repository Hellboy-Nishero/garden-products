import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import "./HomeBanner.scss"; // Importing styles for the banner
import Button from '../../../../components/Button/Button'; // Importing a custom Button component

const Banner = () => {
  return (
    <header className='banner'>
      {/* Main container for the banner */}
      <div className="container">
        {/* Content section of the banner */}
        <div className="content">
          {/* Banner image */}
          <img src="/Banner.png" alt="Promotional Banner" className='banner__image' />
          
          {/* Banner text and button container */}
          <div className="banner__content">
            {/* Main title of the banner */}
            <h1 className='title'>
              Amazing Discounts on Garden Products!
            </h1>
            
            {/* Navigation button linking to the "All Products" page */}
            <Link to="/all-products">
              <Button type={"primary"} className={"btn-banner"}>Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;