import React from 'react'; // Import React to create the component
import "./Home.scss"; // Import styles for the Home component
import Banner from "./components/HomeBanner/HomeBanner.jsx"; // Import the banner component
import HomeDiscount from "./components/HomeDiscount/HomeDiscount.jsx"; // Import the discount section
import Categories from './components/Categories/Categories.jsx'; // Import the categories section
import HomeSale from "./components/HomeSale/HomeSale.jsx"; // Import the sale section

const Home = () => {
  return (
    <>
      <Banner />  {/* Render the banner component */}
      <Categories/> {/* Render the categories section */}
      <HomeDiscount /> {/* Render the discount section */}
      <HomeSale /> {/* Render the sale section */}
    </>
  );
};

export default Home; // Export the Home component for use in other parts of the application
