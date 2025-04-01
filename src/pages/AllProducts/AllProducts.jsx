import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Filtration from "../../components/Filtration/Filtration";
import "./AllProducts.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/ProductList/ProductList";

const AllProducts = () => {
  // Use the useSelector hook to retrieve the list of products from the Redux store state
  const products = useSelector((state) => state.products.currentProducts);  

  // Return the JSX structure for the AllProducts page
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
