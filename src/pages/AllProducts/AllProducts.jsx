import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Filtration from "../../components/Filtration/Filtration";
import "./AllProducts.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/ProductList/ProductList";

const AllProducts = () => {
  const products = useSelector((state) => state.products.currentProducts);  

  
  return (
    <div className="all-products">
      <Breadcrumbs />
      <h1 className="page-title">All products</h1>
      <Filtration discounted={true} />
      <ProductList products={products}/>
    </div>
  );
};

export default AllProducts;
