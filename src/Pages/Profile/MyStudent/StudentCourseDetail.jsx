import React from "react";
import "../../Profile/MyStudent/student.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { CiSearch } from "react-icons/ci";
import { courseImg1 } from "../../../constant";

const StudentCourseDetail = () => {
  return (
    <ProfileLayout type={"team leader"}>
      <div class="row">
        <div class="col-lg-4 col">
          <h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
            MY STUDENTS
          </h2>
        </div>
        <div className="col-lg-8">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="student-search-wrapper">
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search student"
                    />
                    <button type="submit">
                      <CiSearch color="#fff" size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 col d-flex justify-content-end my-lg-4">
              <CommanButton
                label={"Add student"}
                className={"add-btn-student"}
                link={"/add-student"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="student-card-wrapper d-flex gap-2 my-3">
            <div className="student-info-wrapper">
              <div className="student-info-img-wrapper">
                <figure>
                  <img src={courseImg1} className="img-fluid" alt="" />
                </figure>
                <div className="student-name-wrapper">
                  <h4 className="heading-font dark-color mt-3 mb-0 text-uppercase">
                    jordan gilbert
                  </h4>
                  <p>jordan@example.com</p>
                </div>
              </div>
            </div>
            <div className="student-course-info-wrapper">
              <div className="student-course-wrapper">
                <div className="student-course-heading-wrapper">
                  <h4 className="heading-font dark-color mt-3 mb-0 text-uppercase">
                    courses enrolled
                  </h4>
                </div>
                <div className="course-overview-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="course-heading-wrap">
                        <h5>Version 3. Respirators And CPC Chapters</h5>
                        <p>At vero eos et accusamus et iusto odio dignissim</p>
                      </div>
                      <div className="course-stats-wrapper">
                        <ul className="m-0 p-0">
                          <li>
                            <span className="property">
                              Chapters Covered :{" "}
                            </span>
                            <span className="value">
                              10<b>/15</b>
                            </span>
                          </li>
                          <li>
                            <span className="property">Quiz Percentage :</span>
                            <span className="value">50%</span>
                          </li>
                          <li>
                            <span className="property">
                              Quiz Score By Chapters :
                            </span>
                            <span className="value"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="course-completeing-wrap">
                        <h6>Course Completion Progress</h6>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div className="completion-level mt-2">
                          <p>
                            48% <span className="complete">Completed</span>
                          </p>
                        </div>
                      </div>
                      <div className="course-stats-wrapper">
                        <ul className="m-0 p-0">
                          <li>
                            <span className="property">Quiz Total Marks :</span>
                            <span className="value">10</span>
                          </li>
                          <li>
                            <span className="property">Achieved Marked :</span>
                            <span className="value">10</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
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
                <div className="course-overview-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="course-heading-wrap">
                        <h5>Version 3. Respirators And CPC Chapters</h5>
                        <p>At vero eos et accusamus et iusto odio dignissim</p>
                      </div>
                      <div className="course-stats-wrapper">
                        <ul className="m-0 p-0">
                          <li>
                            <span className="property">
                              Chapters Covered :{" "}
                            </span>
                            <span className="value">
                              10<b>/15</b>
                            </span>
                          </li>
                          <li>
                            <span className="property">Quiz Percentage :</span>
                            <span className="value">50%</span>
                          </li>
                          <li>
                            <span className="property">
                              Quiz Score By Chapters :
                            </span>
                            <span className="value"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="course-completeing-wrap">
                        <h6>Course Completion Progress</h6>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div className="completion-level mt-2">
                          <p>
                            48% <span className="complete">Completed</span>
                          </p>
                        </div>
                      </div>
                      <div className="course-stats-wrapper">
                        <ul className="m-0 p-0">
                          <li>
                            <span className="property">Quiz Total Marks :</span>
                            <span className="value">10</span>
                          </li>
                          <li>
                            <span className="property">Achieved Marked :</span>
                            <span className="value">10</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
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
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default StudentCourseDetail;
