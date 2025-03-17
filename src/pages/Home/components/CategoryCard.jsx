import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, title, image }) => {
  return (
    <div className="categoryCard">
      <div className="categoryCard__image">
        <Link to={`/categories/${id}`}>
          <img src={`https://exam-server-5c4e.onrender.com/${image}`} alt="" />
        </Link>
      </div>
      <h3 className="categoryCard__title">{title}</h3>
    </div>
  );
};
export default CategoryCard;