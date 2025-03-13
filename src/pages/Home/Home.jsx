import React from "react";
import Banner from "./components/HomeBanner.jsx";
import "./Home.scss";
import HomeDiscount from "./components/HomeDiscount.jsx";

const MainPage = () => {
  return (
    <>
      <Banner />
      <HomeDiscount />
    </>
  );
};

export default MainPage;
