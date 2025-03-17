import React from 'react'
import "./Home.scss";
import Banner from "./components/HomeBanner.jsx";
import HomeDiscount from "./components/HomeDiscount.jsx";
import Categories from './components/Categories.jsx';
import HomeSale from "./components/HomeSale.jsx"
const Home = () => {
  return (
    <>
      <Banner />  
      <Categories/>
      <HomeDiscount />
      <HomeSale />
    </>
  );
};

export default Home