import React, { useState,useEffect } from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { coursesImage, playImg } from "../../../constant";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import CourseContent from "./CourseContent";
import "../Courses/courses.css";
import { coursesContent } from "../../../constant/data";
import { Modal, Button } from "react-bootstrap";
import { Checkbox, Divider, Spin } from "antd";
import PaymentModal from "../../../Components/Payment/Payment";
import { useNavigate, useParams } from "react-router-dom";
import { useMyCourseDetailQuery } from "../../../redux/services/AuthServices";
import ReactPlayer from "react-player";

const ViewCourses = () => {
  const navigate = useNavigate();
  const param = useParams();

  const {
    data: getCourse,
    isLoading,
    refetch,
  } = useMyCourseDetailQuery(param?.slug);
  const [chapterId, setChapterId] = useState(null);
  let viewCourse = getCourse?.response?.data?.course;
  let CourseMarks = getCourse?.response?.data;
  console.log(viewCourse?.certificates, "asdjasdj6236");
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

//   const handelDownloadCertificate = () => {
//     setType("certificate");
//     handleShowasd()
//   };

const [paymentCompleted, setPaymentCompleted] = useState(false);
	const [downloadLink, setDownloadLink] = useState("");
const [showPayment,setShowPayment] = useState(false)
// Simulate download after payment
	useEffect(() => {
		if (paymentCompleted && downloadLink) {
			// Automatically trigger the certificate download
			const link = document.createElement("a");
			link.href = downloadLink;
			link.download = "certificate.pdf"; // File name
			link.target = "_blank";
			link.click();

			// Reset state after download
			setPaymentCompleted(false);
			setDownloadLink("");
		}
	}, [paymentCompleted, downloadLink]);

  const handleShowasd = (url, key) => {
	if (!key) {
		setShowPayment(true);
		setDownloadLink(url);
	} else {
		const link = document.createElement("a");
		link.href = url;
		link.download = "certificate.pdf"; // File name
		link.target = "_blank";
		link.click();
	}
};

const handleClosePayment = () => setShowPayment(false);
const handlePaymentSuccess = () => {
	// Set the download link after payment success
	setPaymentCompleted(true);
};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChapterDetail = (item) => {
    if (item?.watch_time >= item?.video_length) {
      setChapterId(item?.id);
      setType("video");
      handleShow();
    } else {
      navigate(`/chapter-detail/${item?.slug}`);
    }
  };

  
  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <Spin
          size="large"
          style={{
            color: "#000",
          }}
        />
      </div>
    );
  }
  return (
    <>
      <ProfileLayout type={viewCourse?.title} sidebar={false}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8">
              <div className="view-course-img-wrapper position-relative">
                <ReactPlayer
                  url={viewCourse?.introductory_video}
                  playing={true}
                  width={"100%"}
                  controls={true}
                />
                {/* <figure className="mb-0">
									<img src={coursesImage} className="img-fluid" alt="" />
									<img
										src={playImg}
										alt=""
										className="img-fluid position-absolute top-50 start-50 translate-middle play-img"
									/>
								</figure> */}
              </div>
              <div className="view-course-content-wrapper mt-3">
                <div className="view-course-headings-wrapper">
                  <h2 className="heading-font text-uppercase">
                    {viewCourse?.title}
                  </h2>
                  <p>{viewCourse?.description}</p>
                </div>
                <div className="view-course-btn-wrapper d-flex gap-3 mb-5">
                  <span className={`GeneralButton`}>
                    <button type="submit">submit review</button>
                  </span>
                  {viewCourse?.certificates?.length > 0 && (
                    <CommanButton
                      label={"download certificate"}
                      onClick={()=>handleShowasd(viewCourse?.certificates?.[0]?.certificate_url,viewCourse?.certificates?.[0]?.is_purchased)}
                    />
                  )}
                </div>
                <div className="view-course-result-wrapper">
                  <div className="view-course-result-heading-wrapper">
                    <h3 className="heading-font level-4  text-uppercase">
                      results
                    </h3>
                  </div>
                  <div className="view-course-result-list-wrapper">
                    <ul className="p-0">
                      <li>Chapters Covered : {CourseMarks?.chaptersCovered}</li>
                      <li>Quiz Percentage : {CourseMarks?.quizPercentage}%</li>
                      <li>Quiz Score By Chapters :</li>
                      <li>Quiz Total Marks : {CourseMarks?.quizTotalMarks}</li>
                      <li>Achieved Marked : {CourseMarks?.achievedMarks}</li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-8">
                    <div className="view-courses-chapter-wrapper">
                      <div className="chapters-tags-wrapper mt-3 d-flex gap-2 flex-wrap">
                        {CourseMarks?.chapterScores?.map((item, key) => (
                          <div className="chapter-tag-wrapper" key={key}>
                            <span class="badge bg-dark">
                              Chapter {item?.chapter} : {item?.total_marks}
                              <b>/{item?.achieved_marks}</b>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row">
									<div className="col-lg-8">
										<div className="view-courses-chapter-wrapper">
											<h3 className="heading-font level-4  text-uppercase">
												Chapters
											</h3>
											<div className="chapters-tags-wrapper mt-3 d-flex gap-2 flex-wrap">
												{viewCourse?.chapters?.map((item, key) => (
													<div
														className="chapter-tag-wrapper"
														onClick={() => handleChapterDetail(item)}
														key={key}
														style={{ cursor: "pointer" }}
													>
														<span class="badge bg-dark">
															{item?.title}
														</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div> */}
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
                        style={{
                          width: `${Math.round(viewCourse?.progress)}%`,
                        }}
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
                        <span className="value">
                          {viewCourse?.progress}% Completed
                        </span>
                      </li>
                      <li>
                        <span className="property">Chapters :</span>
                        <span className="value">
                          {viewCourse?.chapters_count}
                        </span>
                      </li>
                      <li>
                        <span className="property">Total Quizes :</span>
                        <span className="value">
                          {" "}
                          {viewCourse?.quizzes_count}
                        </span>
                      </li>
                      <li>
                        <span className="property">Total Marks :</span>
                        <span className="value">
                          {CourseMarks?.quizTotalMarks}
                        </span>
                      </li>
                      <li>
                        <span className="property">Achieved Marks :</span>
                        <span className="value">
                          {CourseMarks?.achievedMarks}
                        </span>
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
                  <CourseContent
                    content={viewCourse}
                    handleChapterDetail={handleChapterDetail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <PaymentModal
		show={show}
          refetch={refetch}
		  setShow={setShow}
          handleClose={handleClose}
          chapterId={chapterId}
          type={type}
        />
        <PaymentModal
           show={showPayment}
		 handleClose={handleClosePayment}
		 type={"certificate"}
		 chapterId={viewCourse?.certificates?.[0]?.id}
		 setShow={setShowPayment}
		 refetch={refetch}
		 onPaymentSuccess={() => handlePaymentSuccess()}
        />
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
