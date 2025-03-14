import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Filtration from "../../components/Filtration/Filtration";
import "./Category.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";

import ProductList from '../../components/ProductList/ProductList';

const Category = () => {

  const { title } = useParams();

  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const categories = useSelector(state => state.category.categories); 
 


const category = categories.find((category) => category.title === title)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://exam-server-5c4e.onrender.com/products/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
     
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => product.categoryId === category.id);
    setFilteredProducts(filtered);
  }, [products, title]);


  return (
    <div className="category">
        <Breadcrumbs />
      <h1 className="page-title">{category ? category.title : "Category Not Found"}</h1>

      <Filtration discounted={true}/>

   <ProductList products={filteredProducts}/>
    </div>
  );
};

export default Category;
