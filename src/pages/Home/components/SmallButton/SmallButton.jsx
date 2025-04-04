import React from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import "./SmallButton.scss"; // Importing styles
import Button from "../../../../components/Button/Button";

// SmallButton component for displaying a title and a button
const SmallButton = ({
  title,
  className,
  children, 
  path
}) => {
  return (
    <div className="smallButton">
      {/* Title text */}
      <h2 className="smallButton__title">{title}</h2>

      {/* Decorative line under the title */}
      <div className="smallButton__btn-line"></div>

      {/* Button wrapped in a Link for navigation */}
      <Link to={path}>
        <Button type={"secondary"} className={`smallButton__btn-small ${className}`}>
          {children}
        </Button>
      </Link>
    </div>
  );
};

export default SmallButton;