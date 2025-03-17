import React from "react";
import { Link } from "react-router-dom";
import "./SmallButton.scss";
const SmallButton = ({
  title = "",
  className = "",
  children,
  path = "",
  ...props
}) => {
  return (
    <div className="smallButton">
      <h2 className="smallButton__title">{title}</h2>
      <div className="smallButton__btn-line"></div>
      <Link to={path}>
        <button className={`smallButton__btn-small ${className} `} {...props}>
          {children}
        </button>
      </Link>
    </div>
  );
};
export default SmallButton;