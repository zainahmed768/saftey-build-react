import React from "react";
import "../../Profile/MyStudent/student.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { CiSearch } from "react-icons/ci";
import { courseImg1 } from "../../../constant";
import { useNavigate, useParams } from "react-router-dom";
import { useGetStudentDetailsQuery } from "../../../redux/services/AuthServices";

const StudentCourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetStudentDetailsQuery(id);
  const student = data?.response?.data?.student;
  const course = data?.response?.data?.courses;

  return (
    <ProfileLayout type={"team leader"}>
      <div className="row">
        <div className="col-lg-12">
          <div className="student-card-wrapper d-flex gap-2 my-3">
            <div className="student-info-wrapper">
              <div className="student-info-img-wrapper">
                <figure>
                  <img src={student?.image} className="img-fluid" alt="" />
                </figure>
                <div className="student-name-wrapper">
                  <h4 className="heading-font dark-color mt-3 mb-0 text-uppercase">
                    {student?.name}
                  </h4>
                  <p>{student?.email}</p>
                </div>
              </div>
            </div>
            {course?.length == 0 ? (
              <>
                <div className="student-course-info-wrapper d-flex justify-content-center align-items-center">
                  <div className="student-course-wrapper">
                    <div className="student-course-heading-wrapper">
                      <h4 className="heading-font text-center dark-color mt-3 mb-0 text-uppercase">
                        This student hasn't enrolled in any courses.
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="student-course-info-wrapper">
                  <div className="student-course-wrapper">
                    <div className="student-course-heading-wrapper">
                      <h4 className="heading-font dark-color mt-3 mb-0 text-uppercase">
                        courses enrolled
                      </h4>
                    </div>
                    {course?.map((item, index) => {
                      return (
                        <div className="course-overview-wrapper">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="course-heading-wrap">
                                <h5>{item?.course?.title}</h5>
                                <p>{item?.course?.description}</p>
                              </div>
                              <div className="course-stats-wrapper">
                                <ul className="m-0 p-0">
                                  <li>
                                    <span className="property">
                                      Chapters Covered :{" "}
                                    </span>
                                    <span className="value">
                                      {item?.chaptersCovered}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="property">
                                      Quiz Percentage :
                                    </span>
                                    <span className="value">
                                      {item?.quizPercentage}%
                                    </span>
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
                                    style={{
                                      width: `${item?.course?.progress}%`,
                                    }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <div className="completion-level mt-2">
                                  <p>
                                    {item?.course?.progress}%{" "}
                                    <span className="complete">Completed</span>
                                  </p>
                                </div>
                              </div>
                              <div className="course-stats-wrapper">
                                <ul className="m-0 p-0">
                                  <li>
                                    <span className="property">
                                      Quiz Total Marks :
                                    </span>
                                    <span className="value">
                                      {item?.quizTotalMarks}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="property">
                                      Achieved Marked :
                                    </span>
                                    <span className="value">
                                      {item?.achievedMarks}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="chapters-tags-wrapper mt-3 d-flex gap-2 flex-wrap">
                                {item?.chapterScores?.map((item, index) => {
                                  return (
                                    <div className="chapter-tag-wrapper">
                                      <span class="badge bg-dark">
                                        Chapter {index + 1} :{" "}
                                        {item?.achieved_marks}
                                        <b>/{item?.total_marks}</b>
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            {" "}
            <span className="darkButton mt-4 d-flex justify-content-center">
              <button
                type="submit"
                className="darkButton"
                onClick={(e) => navigate("/my-student")}
              >
                Back
              </button>
            </span>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default StudentCourseDetail;
