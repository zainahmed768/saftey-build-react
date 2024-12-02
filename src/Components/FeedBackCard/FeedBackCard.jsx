import React from "react";
import { FaStar } from "react-icons/fa";
import "../FeedBackCard/FeedBackCard.css";
import { useLocation } from "react-router-dom";

const FeedBackCard = ({ title, blockquote, avatar, rating, desc }) => {
  const location = useLocation();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} color={i <= rating ? "#F0BD08" : "#e4e5e9"} size={13} />
      );
    }
    return stars;
  };

  return (
    <div
      className={location.pathname == "/about-us" ? `main_card about-testimonails` : `main_card`}
      style={{ padding: "24px" }}
    >
      <span className="styled-quote "></span>
      <blockquote className="blockquote">{blockquote}</blockquote>
      <div className="d-flex align-items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="rounded-circle"
          width={54}
          height={54}
        />
        <div className="ms-3">
          <h5 className="feedBack-title">{title}</h5>
          <p className="feedBack-des">{desc}</p>
          <div className="d-flex justify-content-center align-items-center">
            {renderStars(rating)}
            <span className="ms-2 rating">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
