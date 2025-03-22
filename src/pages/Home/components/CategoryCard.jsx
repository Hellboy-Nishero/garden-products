import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, title, image }) => {
  return (
    <Link to={`/categories/${title}`} className="categoryCard">
      <div className="categoryCard__image">

          <img src={`https://exam-server-5c4e.onrender.com/${image}`} alt="" />

      </div>
      <h3 className="categoryCard__title">{title}</h3>
      </Link>
  );
};
export default CategoryCard;