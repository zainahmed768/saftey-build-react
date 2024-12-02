import React from "react";
import "../CommanButtonDark/CommanStylesDark.css";
import { Link } from "react-router-dom";

const CommanButtonDark = ({ label, onClick, link }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <span className="darkButton" onClick={onClick}>
            <button type="submit">{label} </button>
          </span>
        </Link>
      ) : (
        <span className="darkButton" onClick={onClick}>
          <button type="submit">{label} </button>
        </span>
      )}
    </>
  );
};
export default CommanButtonDark;
