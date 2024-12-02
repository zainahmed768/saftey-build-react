import React from "react";
import "../CommanButton/CommanStyles.css";
import { Link } from "react-router-dom";

const CommanButton = ({ label, onClick, className, style, link }) => {
  return (
    <Link to={link}>
      <span className={`GeneralButton ${className}`} onClick={onClick}>
        <button type="submit" style={style}>
          {label}{" "}
        </button>
      </span>
    </Link>
  );
};
export default CommanButton;
