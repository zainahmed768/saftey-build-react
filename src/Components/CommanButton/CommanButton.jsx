import React from "react";
import "../CommanButton/CommanStyles.css";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const CommanButton = ({
  label,
  onClick,
  className,
  style,
  link,
  disabled,
  loading,
}) => {
  return (
    <Link to={link}>
      <span className={`GeneralButton ${className}`} onClick={onClick}>
        <button type="submit" style={style} disabled={disabled}>
          {loading ? <Spin /> : label}
        </button>
      </span>
    </Link>
  );
};
export default CommanButton;
