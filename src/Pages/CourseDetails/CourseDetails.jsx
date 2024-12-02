import React from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import "../CourseDetails/CourseDetails.css";
import img from "../../assets/images/course-detail.png";
import { Col, Row, List, Divider, Skeleton } from "antd";
import { FaStar } from "react-icons/fa";
import CommanButton from "../../Components/CommanButton/CommanButton";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/hours-on-demand.png";
import icon2 from "../../assets/images/mobile-icon.png";
import icon3 from "../../assets/images/articles.png";
import icon4 from "../../assets/images/written-exercises.png";
import icon5 from "../../assets/images/lifetime-access.png";
import icon6 from "../../assets/images/certificate-completion.png";
import centerd_img from "../../assets/images/centerd_img.png";
import video_icon from "../../assets/images/video_icon.png";
import { FeaturedReviews } from "../../data";
import FeedBackCard from "../../Components/FeedBackCard/FeedBackCard";
import Footer from "../../layout/footer/Footerr";
import { FaCirclePlay } from "react-icons/fa6";
const CourseDetails = () => {
  console.log(FeaturedReviews, "FeaturedReviews");

  const rating = 9;
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} color={i <= rating ? "#F0BD08" : "#e4e5e9"} size={13} />
      );
    }
    return stars;
  };

  const data = [
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    "Praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    "Molestias excepturi sint occaecati cupiditate",
  ];
  return (
    <>
      <PrimaryHeader
        pageTitle={"course Details"}
        pageDesc={
          "Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
        }
      />

      <section>
        <div className="py-5 site_width">
          <Row justify="space-between" align="top">
            <Col xs={24} sm={24} md={11}>
              <div className="rounded_img">
                <img src={img} alt="" className="img-fluid" />
              </div>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Row justify="space-between" align="top">
                <Col xs={24} sm={24} md={14}>
                  <div className="pt-3 course-heading-wrapper">
                    <h1 className="heading-font level-4-lg text-uppercase dark-color letter-2">
                      Version 3. respirators and CPC chapters
                    </h1>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <div className="py-3 ms-lg-5">
                    {renderStars(rating)}
                    <span className="ms-2 rating">{"4.9"}</span>
                  </div>
                </Col>
              </Row>

              <div className="col-lg-10">
                <p className="reg-font level-8">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem re
                </p>
              </div>

              <div className="row">
                <div className="col-lg-2">
                  <span className="reg-font level-8">Price</span>
                  <h1 className="heading-font level-5 text-uppercase dark-color letter-2">
                    $39.95
                  </h1>
                </div>

                <div className="col-lg-4 my-auto">
                  <CommanButton label={"add to cart"} link={"/my-cart"} />
                </div>

                <div className="col-lg-3 my-auto">
                  <Link
                    to=""
                    className="heading-font level-5-sm text-uppercase dark-color letter-1 underline course-wishlist-btn"
                  >
                    add to wishlist
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          {/* listing section */}
          <div className="learn-section p-5">
            <div>
              <Col span={24} className="mb-4">
                <h3 className="heading-font level-5-sm text-uppercase dark-color leter-2">
                  What You Will Learn
                </h3>
              </Col>

              <div className="row">
                <div className="col-lg-6 px-lg-0">
                  <ul className="learn-list">
                    <li>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui{" "}
                    </li>
                    <li>
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas{" "}
                    </li>
                    <li>molestias excepturi sint occaecati cupiditate </li>
                  </ul>
                </div>

                <div className="col-lg-6 px-lg-0">
                  <ul className="learn-list">
                    <li>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                    </li>
                    <li>
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas{" "}
                    </li>
                    <li>molestias excepturi sint occaecati cupiditate </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* description */}

          <div className="my-5">
            <h3 className="leter-2 heading-font level-5-sm text-uppercase dark-color">
              description
            </h3>
            <p className="reg-font level-8 dark-color">
              Lorem ipsum dolor sit amet consectetur. Egestas aliquam felis at
              condimentum ut ultrices erat sed eu. Phasellus amet pulvinar
              fringilla posuere adipiscing viverra. Mattis nulla nisi sit tortor
              magna quam proin. Velit lacinia pellentesque mattis quam commodo
              ac. Dui imperdiet morbi duis risus urna convallis eget. Metus a
              felis nec arcu neque eu vitae sit. Eleifend vitae vitae congue et
              ut urna quisque et mauris. Nisl sed orci convallis et placerat
              euismod eget. Non feugiat ut vulputate donec ut dolor non
              porttitor.
            </p>
          </div>

          <div className="my-5">
            <h3 className="leter-2 heading-font level-5-sm text-uppercase dark-color">
              requirements
            </h3>
            <p className="reg-font level-8 dark-color">
              Lorem ipsum dolor sit amet consectetur. Egestas aliquam felis at
              condimentum ut ultrices erat sed eu. Phasellus amet pulvinar
              fringilla posuere adipiscing viverra. Mattis nulla nisi sit tortor
              magna quam proin. Velit lacinia pellentesque mattis quam commodo
              ac. Dui imperdiet morbi duis ris
            </p>
          </div>

          <div className="my-5">
            <h3 className="leter-2 heading-font level-5-sm text-uppercase dark-color">
              this course includes
            </h3>
            <Row justify="space-between" align="top" className="mt-3">
              <Col xs={4} sm={4} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon1} alt="" />
                  </span>
                  22 hours on-demand video
                </p>
              </Col>

              <Col xs={4} sm={4} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon2} alt="" />
                  </span>
                  Access on Mobile and Tv
                </p>
              </Col>
              <Col xs={4} sm={4} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon3} alt="" />
                  </span>
                  16 Articles
                </p>
              </Col>
              <Col xs={4} sm={4} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon3} alt="" />
                  </span>
                  Tutor : Jordan Gilbert
                </p>
              </Col>
            </Row>
            <Row justify="space-between" align="top" className="my-2">
              <Col xs={24} sm={24} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon4} alt="" />
                  </span>
                  22 Written exercises
                </p>
              </Col>
              <Col xs={24} sm={24} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon5} alt="" />
                  </span>
                  Full Lifetime Access
                </p>
              </Col>

              <Col xs={24} sm={24} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon6} alt="" />
                  </span>
                  Certificate Of Completion
                </p>
              </Col>

              <Col xs={24} sm={24} md={6}>
                <p className="reg-font level-7 dark-color">
                  <span className="me-3">
                    {" "}
                    <img src={icon6} alt="" />
                  </span>
                  Last Update : 22 Jan 2024
                </p>
              </Col>
            </Row>
          </div>

          <div className="my-5">
            <h3 className="leter-2 heading-font level-5-md text-uppercase dark-color mb-3">
              introductory video
            </h3>
            <div className="video-player-wrapper position-relative">
              <img src={centerd_img} alt="" className="img-fluid" />
              <div className="video-play-wrap">
                <FaCirclePlay size={40} color="#fff" />
              </div>
            </div>
          </div>

          <div className="video_listing_sec">
            <h3 className="leter-2 heading-font level-5-md  text-uppercase dark-color mb-3">
              video listing
            </h3>
            <Row justify="space-between" align="middle" className="my-2">
              <Divider type="vertical" className="vertical_video_list_line" />
              <Col xs={24} sm={24} md={11}>
                <h6 className=" semi-b-font level-6 text-uppercase dark-color">
                  Version 3. Respirators And CPC Chapters
                </h6>
                <p className="med-font level-7">
                  sque mattis quam commodo ac. Dui imperdiet morbi duis ris
                </p>

                <span>
                  <span>
                    {" "}
                    <img
                      src={video_icon}
                      alt=""
                      className="img-fluid"
                      width="20"
                    />
                  </span>
                  <span className="med-font level-8 secondary-3 ps-2 pt-lg-1">
                    11 Minute
                  </span>
                </span>
                <Divider style={{ borderColor: "rgb(0 0 0 / 40%)" }} />
              </Col>

              <Col xs={24} sm={24} md={11}>
                <h6 className=" semi-b-font level-6 text-uppercase dark-color">
                  Version 3. Respirators And CPC Chapters
                </h6>
                <p className="med-font level-7">
                  sque mattis quam commodo ac. Dui imperdiet morbi duis ris
                </p>

                <span>
                  <span>
                    {" "}
                    <img
                      src={video_icon}
                      alt=""
                      className="img-fluid"
                      width="20"
                    />
                  </span>
                  <span className="med-font level-8 secondary-3 ps-2 pt-lg-1">
                    11 Minute
                  </span>
                </span>
                <Divider style={{ borderColor: "rgb(0 0 0 / 40%)" }} />
              </Col>

              <Col xs={24} sm={24} md={11}>
                <h6 className=" semi-b-font level-6 text-uppercase dark-color">
                  Version 3. Respirators And CPC Chapters
                </h6>
                <p className="med-font level-7">
                  sque mattis quam commodo ac. Dui imperdiet morbi duis ris
                </p>

                <span>
                  <span>
                    {" "}
                    <img
                      src={video_icon}
                      alt=""
                      className="img-fluid"
                      width="20"
                    />
                  </span>
                  <span className="med-font level-8 secondary-3 ps-2 pt-lg-1">
                    11 Minute
                  </span>
                </span>
                <Divider style={{ borderColor: "rgb(0 0 0 / 40%)" }} />
              </Col>

              <Col xs={24} sm={24} md={11}>
                <h6 className=" semi-b-font level-6 text-uppercase dark-color">
                  Version 3. Respirators And CPC Chapters
                </h6>
                <p className="med-font level-7">
                  sque mattis quam commodo ac. Dui imperdiet morbi duis ris
                </p>

                <span>
                  <span>
                    {" "}
                    <img
                      src={video_icon}
                      alt=""
                      className="img-fluid"
                      width="20"
                    />
                  </span>
                  <span className="med-font level-8 secondary-3 ps-2 pt-lg-1">
                    11 Minute
                  </span>
                </span>
                <Divider style={{ borderColor: "rgb(0 0 0 / 40%)" }} />
              </Col>

              <Col xs={24} sm={24} md={11}>
                <h6 className=" semi-b-font level-6 text-uppercase dark-color">
                  Version 3. Respirators And CPC Chapters
                </h6>
                <p className="med-font level-7">
                  sque mattis quam commodo ac. Dui imperdiet morbi duis ris
                </p>

                <span>
                  <span>
                    {" "}
                    <img
                      src={video_icon}
                      alt=""
                      className="img-fluid"
                      width="20"
                    />
                  </span>
                  <span className="med-font level-8 secondary-3 ps-2 pt-lg-1">
                    11 Minute
                  </span>
                </span>
                <Divider style={{ borderColor: "rgb(0 0 0 / 40%)" }} />
              </Col>

              <Col xs={24} sm={24} md={11}>
                <h6 className=" semi-b-font level-6 text-uppercase dark-color">
                  Version 3. Respirators And CPC Chapters
                </h6>
                <p className="med-font level-7">
                  sque mattis quam commodo ac. Dui imperdiet morbi duis ris
                </p>

                <span>
                  <span>
                    {" "}
                    <img
                      src={video_icon}
                      alt=""
                      className="img-fluid"
                      width="20"
                    />
                  </span>
                  <span className="med-font level-8 secondary-3 ps-2 pt-lg-1">
                    11 Minute
                  </span>
                </span>
                <Divider style={{ borderColor: "rgb(0 0 0 / 40%)" }} />
              </Col>
            </Row>
          </div>

          {/*  */}
          <div className="my-5">
            <h3 className="leter-2 heading-font level-5-md  text-uppercase dark-color mb-3">
              featured reviews
            </h3>
            <Row justify="space-between" align="middle">
              {FeaturedReviews?.length > 0
                ? FeaturedReviews.map((item, index) => (
                    <Col xs={24} sm={24} md={8} key={index}>
                      <FeedBackCard
                        title={item?.title}
                        desc={item?.des}
                        avatar={item?.image}
                        blockquote={item?.blockquote}
                        rating={item?.rating}
                      />
                    </Col>
                  ))
                : [0, 1, 2].map((_, index) => (
                    <Col xs={24} sm={24} md={8} key={index}>
                      <Skeleton active />
                    </Col>
                  ))}
            </Row>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CourseDetails;
