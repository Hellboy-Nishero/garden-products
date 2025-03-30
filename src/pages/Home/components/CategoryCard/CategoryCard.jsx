import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom"; // Importing Link for navigation

// CategoryCard component to display a category with an image and title
const CategoryCard = ({ title, image }) => {
  return (
    // Link component to navigate to the category-specific page
    <Link to={`/categories/${title}`} className="categoryCard">
      
      {/* Container for category image */}
      <div className="categoryCard__image">
        {/* Dynamically loading category image */}
        <img src={`https://exam-server-5c4e.onrender.com/${image}`} alt={title} />
      </div>

      {/* Category title */}
      <h3 className="categoryCard__title">{title}</h3>
      
    </Link>
  );
};

export default CategoryCard;