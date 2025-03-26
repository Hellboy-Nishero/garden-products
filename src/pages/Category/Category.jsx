import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Filtration from "../../components/Filtration/Filtration";
import "./Category.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";
import ProductList from '../../components/ProductList/ProductList';

const Category = () => {

  const { title } = useParams();
  const products = useSelector(state => state.products.currentProducts);
  const categories = useSelector(state => state.category.categories);
  const category = categories.find((category) => category.title === title);
  const currentProducts = products.filter(product => product.categoryId === category.id);

  return (
    <div className="category">
      <Breadcrumbs />
      <h1 className="page-title">{category ? category.name : "Category Not Found"}</h1>
      <Filtration discounted={true} />
      <div className="category__list">
        <ProductList products={currentProducts} />
      </div>
    </div>
  );
};

export default Category;
