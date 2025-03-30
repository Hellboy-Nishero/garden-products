import React from "react";
import "./Categories.scss";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Link } from "react-router-dom"; // Importing Link for navigation
import { useSelector } from "react-redux"; // Importing useSelector to access Redux state
import SmallButton from "../SmallButton/SmallButton";
import Button from "../../../../components/Button/Button";

const Categories = () => {
  // Extracting category data from Redux state
  const categoriesState = useSelector(
    (state) => state.category.categories // Selecting categories from Redux store
  );

  return (
    <div className="categories-home">
      <div className="container">
        {/* Small button for navigating to the categories page */}
        <div className="container__position">
          <SmallButton
            path="/categories"
            title="Categories"
            children={"All categories"}
          />
        </div>

        {/* Displaying a limited number of category cards (first 4 items) */}
        <div className="container__list">
          {categoriesState.slice(0, 4).map((product) => (
            <CategoryCard key={product.id} {...product} />
          ))}
        </div>

        {/* Button for viewing all categories */}
        <div className="container__btn-2-position">
          <Link to={`/categories`}>
            <Button type={"secondary"} className="container__btn-2">All categories</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;