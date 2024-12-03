import React from "react";
import "../CommanButton/CommanStyles.css";
import { Link } from "react-router-dom";

const CommanButton = ({ label, onClick, className, style, link, disabled }) => {
  return (
    <Link to={link}>
      <span className={`GeneralButton ${className}`} onClick={onClick}>
        <button type="submit" style={style} disabled={disabled}>
          {label}{" "}
        </button>
      </span>
    </Link>
  );
};
export default CommanButton;
