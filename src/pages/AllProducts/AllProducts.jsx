import React, { useEffect, useState } from 'react';
import Filtration from '../../components/Filtration/Filtration';
import './AllProducts.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../../components/ProductList/ProductList';

const AllProducts = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error loading products:', err);
      }
    };
  
    fetchProducts();

  }, []);
  

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
