import React from "react";
import "./Categories.scss";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SmallButton from "./SmallButton";

const Categories = () => {
  const categoriesState = useSelector(
    //извлекаем данные из состояния хранилища
    (state) => state.category.categories
    //ф-ция (state) указывает useSelector, какую часть состояния нужно извлечь.
  );

  return (
    <div className="categories-home">
      <div className="container">
        <div className="container__position">
          <SmallButton
            path="/categories"
            title="Categories"
            children={"All categories"}
          />
        </div>
        <div className="container__list">
          {categoriesState.slice(0, 4).map((product) => (
            <CategoryCard key={product.id} {...product} />
          ))}
        </div>
        <div className="container__btn-2-position">
          <Link to={`/categories`}>
            <button className="container__btn-2">All categories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;