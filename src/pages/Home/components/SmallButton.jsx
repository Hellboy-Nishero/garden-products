import React from "react";
import { Link } from "react-router-dom";
import "./SmallButton.scss";
import Button from "../../../components/Button/Button";
const SmallButton = ({
  title = "",
  className = "",
  children,
  path = ""
}) => {
  return (
    <div className="smallButton">
      <h2 className="smallButton__title">{title}</h2>
      <div className="smallButton__btn-line"></div>
      <Link to={path}>
        <Button type={"secondary"} className={`smallButton__btn-small ${className} `}>
          {children}
        </Button>
      </Link>
    </div>
  );
};
export default SmallButton;