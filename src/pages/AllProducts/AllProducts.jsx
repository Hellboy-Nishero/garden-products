import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/api/productApi";  
import Filtration from "../../components/Filtration/Filtration";
import "./AllProducts.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/ProductList/ProductList";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);  

  useEffect(() => {
    if(products.length === 0){
      dispatch(fetchProducts()); 
    }    
  }, [dispatch, products]);
  
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