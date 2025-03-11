// import React, { useEffect, useState } from 'react';
// import Filtration from '../../components/Filtration/Filtration';
// import './AllProducts.scss';
// import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
// import ProductList from '../../components/ProductList/ProductList';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data);
//         setFilteredProducts(data);
//       } catch (err) {
//         console.error('Error loading products:', err);
//       }
//     };
  
//     fetchProducts();
//   }, []);
  

//   return (
//     <div className="all-products">
//       <Breadcrumbs />
//       <h1 className="page-title">All products</h1>
//       <Filtration discounted={true} />
//       <ProductList products={filteredProducts}/>
//     </div>
//   );
// };

// export default AllProducts;


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
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  useEffect(() => {
    console.log(products); 
  }, [products]);

 

  return (
    <div className="all-products">
      <Breadcrumbs />
      <h1 className="page-title">All products</h1>
      <Filtration discounted={true} />
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;