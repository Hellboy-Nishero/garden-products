import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
import { useParams } from "react-router";
>>>>>>> origin/nikita
import Filtration from "../../components/Filtration/Filtration";
import "./Category.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";
import ProductList from '../../components/ProductList/ProductList';


const Category = () => {
  const { name } = useParams(); // Получаем `name` из URL
  const [products, setProducts] = useState([]); // Все товары
  const categories = useSelector(state => state.category.categories);
  const category = categories.find((category) => category.name === name);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://exam-server-5c4e.onrender.com/products/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.filter(product => product.categoryId === category.id));
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="category">
      <Breadcrumbs />
      <h1 className="page-title">{category ? category.name : "Category Not Found"}</h1>
      <Filtration discounted={true} />
      <div className="category__list">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Category;
