import React from "react";
import { coursesImg } from "../../../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../Profile/MyCourses/courses.css";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { Rating } from "react-simple-star-rating";
const CoursesCard = (props) => {
  const { courses, setReview, setCourse } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const handleReview = (course) => {
    setReview(true);
    setCourse(course);
  };

  return (
    <>
      {courses?.map((item) => {
        return (
          <div className="courses-card-wrapper d-flex gap-2 justify-content-between my-3">
            <div className="courses-img-wrapper">
              <figure className="mb-0">
                <Link to="/view-courses">
                  <img src={item?.images} className="img-fluid" alt="" />
                </Link>
              </figure>
            </div>
            <div className="courses-content-wrapper">
              <h4>{item?.name}</h4>
              {location?.pathname == "/my-wishlist" && (
                <>
                  <div className="mb-2 d-flex gap-2 align-items-center">
                    <Rating
                      initialValue={item?.rating}
                      readonly={true}
                      size={20}
                    />
                    <span className="value">
                      <b>{item?.rating}</b>
                    </span>
                  </div>
                </>
              )}
              <p>{item?.des}</p>
              {location.pathname !== "/my-wishlist" && (
                <>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: `${item?.completion}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="completion-level mt-2">
                    <p>
                      {item?.completion}%{" "}
                      <span className="complete">Completed</span>
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="courses-btn-wrapper text-center">
              {location.pathname == "/my-wishlist" && (
                <>
                  <span className="GeneralButton">
                    <button type="submit">add to cart</button>
                  </span>
                  <button className="btn-review  text-decoration-underline mt-3">
                    remove course
                  </button>
                </>
              )}

              {location.pathname !== "/my-wishlist" && (
                <button
                  onClick={(e) => handleReview(item)}
                  className="btn-review text-decoration-underline"
                >
                  submit a review
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CoursesCard;
