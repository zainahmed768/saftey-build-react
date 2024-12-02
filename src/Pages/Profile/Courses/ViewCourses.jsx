import React, { useState } from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { coursesImage, playImg } from "../../../constant";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import CourseContent from "./CourseContent";
import "../Courses/courses.css";
import { coursesContent } from "../../../constant/data";
import { Modal, Button } from "react-bootstrap";
import { Checkbox, Divider } from "antd";
import PaymentModal from "../../../Components/Payment/Payment";

const ViewCourses = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <ProfileLayout type={"team leader"} sidebar={false}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8">
              <div className="view-course-img-wrapper position-relative">
                <figure className="mb-0">
                  <img src={coursesImage} className="img-fluid" alt="" />
                  <img
                    src={playImg}
                    alt=""
                    className="img-fluid position-absolute top-50 start-50 translate-middle play-img"
                  />
                </figure>
              </div>
              <div className="view-course-content-wrapper mt-3">
                <div className="view-course-headings-wrapper">
                  <h2 className="heading-font text-uppercase">
                    Version 3. respirators and CPC chapters
                  </h2>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem re
                  </p>
                </div>
                <div className="view-course-btn-wrapper d-flex gap-3 mb-5">
                  <span className={`GeneralButton`} onClick={handleShow}>
                    <button type="submit">submit review</button>
                  </span>
                  <CommanButton
                    label={"download certificate"}
                    onClick={handleShow}
                  />
                </div>
                <div className="view-course-result-wrapper">
                  <div className="view-course-result-heading-wrapper">
                    <h3 className="heading-font level-4  text-uppercase">
                      results
                    </h3>
                  </div>
                  <div className="view-course-result-list-wrapper">
                    <ul className="p-0">
                      <li>
                        Chapters Covered : 10<b>/15</b>
                      </li>
                      <li>Quiz Percentage : 50%</li>
                      <li>Quiz Score By Chapters :</li>
                      <li>Quiz Total Marks : 10</li>
                      <li>Achieved Marked : 10</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="view-courses-chapter-wrapper">
                      <div className="chapters-tags-wrapper mt-3 d-flex gap-2 flex-wrap">
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 1 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 2 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 3 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 4 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 5 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 6 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 4 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 5 : 10<b>/15</b>
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span class="badge bg-dark">
                            Chapter 6 : 10<b>/15</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="courses-sidebar-detail-wrapper">
                <div className="course-sidebar-card-wrapper bg-white p-2 rounded">
                  <div className="courses-sidebar-heading-wrapper">
                    <h4 className="text-uppercase level-4 heading-font">
                      course details
                    </h4>
                  </div>
                  <div className="course-completeing-wrap my-3">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="course-stats-wrapper">
                    <ul className="m-0 p-0">
                      <li>
                        <span className="property">Progress :</span>
                        <span className="value">100% Completed</span>
                      </li>
                      <li>
                        <span className="property">Chapters :</span>
                        <span className="value">6</span>
                      </li>
                      <li>
                        <span className="property">Total Quizes :</span>
                        <span className="value">24</span>
                      </li>
                      <li>
                        <span className="property">Total Marks :</span>
                        <span className="value">50</span>
                      </li>
                      <li>
                        <span className="property">Achieved Marks :</span>
                        <span className="value">50</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-content-wrapper mt-3">
                  <div className="course-content-heading-wrapper">
                    <h4 className="level-4 heading-font text-uppercase">
                      course content
                    </h4>
                  </div>
                  <CourseContent content={coursesContent} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <PaymentModal show={show} handleClose={handleClose} />
        {/* <Modal show={show} onHide={handleClose}  size="lg">
         
          <Modal.Body>
            <div className="row">
              <div className="pt-4">
                <h1 className="heading-font level-4 text-uppercase dark-color leter-1">
                  Payment Details
                </h1>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="med-font level-9 text-capitalize mb-1">
                    Card Number
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control-1"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="med-font level-9 text-capitalize mb-1">
                    MM / YY
                  </label>
                  <input type="date" name="" id="" className="form-control-1" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="med-font level-9  text-uppercase mb-1">
                    cvv
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control-1"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <p className="pt-3">
                <Checkbox
                  onChange={onChange}
                  className="med-font level-8 text-capitalize"
                >
                  Nam massa dolor, imperdiet sed ante eget, luctus gravida ipsum
                  lobortis eu. Donec id{" "}
                </Checkbox>
              </p>
            </div>

            <Divider />

            <div className="d-flex justify-content-lg-end justify-content-center">
              <CommanButton label={"Confirm payment"} link={"/my-profile"} />
            </div>
          </Modal.Body>
       
        </Modal> */}
      </ProfileLayout>
    </>
  );
};

export default ViewCourses;
