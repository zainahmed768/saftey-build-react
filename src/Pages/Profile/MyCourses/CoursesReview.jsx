import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import "../../Profile/MyCourses/courses.css";
const CoursesReview = (props) => {
  const { course, setReview } = props;
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  const handleSubmit = () => {
    setReview(false);
  };
  return (
    <>
      <div className="allcourse-wrapper">
        <div className="courses-card-wrapper d-flex gap-3 ">
          <div className="courses-img-wrapper">
            <figure className="mb-0">
              <img src={course?.images} className="img-fluid" alt="" />
            </figure>
          </div>
          <div className="courses-content-wrapper">
            <h4>{course?.name}</h4>
            <p>{course?.des}</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: `${course?.completion}%` }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="completion-level mt-2">
              <p>
                {course?.completion}%{" "}
                <span className="complete">Completed</span>
              </p>
            </div>
          </div>
          <div className="courses-btn-wrapper"></div>
        </div>
        <div className="write-reviews">
          <div className="form group d-flex justify-content-between align-items-center">
            <h5 className="review-heading text-uppercase heading-font">
              write a review
            </h5>
            <div className="rating-star-wrapper d-flex gap-2 align-items-center">
              <h5 className="heading-font text-uppercase mb-0">rating</h5>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              name="description"
              className="form-control"
              rows={6}
              cols={5}
              id=""
            ></textarea>
          </div>
          <div className="form-group mt-3 d-flex justify-content-end">
            <CommanButton
              label={"submit"}
              className={"add-btn-student"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesReview;
