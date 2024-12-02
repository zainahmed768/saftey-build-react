import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/footer/Footerr";
import CommanButton from "../../Components/CommanButton/CommanButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaftyBuildCard from "../../Components/SaftyBuildCard/SaftyBuildCard";
import CoursesCard from "../../Components/CoursesCard/CoursesCard";
import { FeaturedCourses } from "../../data";
import CommanButtonDark from "../../Components/CommanButtonDark/CommanButtonDark";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  console.log(FeaturedCourses, "FeaturedCourses");

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    initialSlide: 1,
  };

  var settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",

    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    initialSlide: 1,
  };
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/course-details");
  };


  return (
    <>
      <Header />

      <section className="main_banner">
        <div className="banner_heading">
          <h1>Welcome to Saftey built</h1>
          <h1> online Hazewoper training</h1>
          <div className="d-flex justify-content-center mt-3">
            <CommanButton label={"Lets start"} link={"/courses"} />
          </div>
        </div>
      </section>
      {/* <div className="bg-danger"> */}

      <Slider {...settings} className="rotate_line_1">
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>

        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
      </Slider>

      <Slider {...settings2} className="rotate_line_2">
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
        <div className="rotate_text">
          <h3>8-hour hazwoper</h3>
        </div>
      </Slider>
      {/* </div> */}

      {/* ||||||||||||||||||||||Why choose Safety Built?|||||||||||||||||||||||||| */}

      <section>
        <div className="site_width">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="level-3-sm heading-font dark-color text-uppercase">
                Why choose Safety Built?
              </h1>

              <p className="level-6 reg-font">
                Safety Built offers high quality online training that’s based
                upon years of classroom training experience. SafetyBuilt is the
                perfect choice for anyone who wants to prioritize safety on
                construction sites. Our courses are designed to provide site
                workers with the knowledge and skills they need to identify
                potential hazards, mitigate risks, and promote a culture of
                safety in the workplace. By choosing SafetyBuilt, you can be
                confident that you are investing in the safety and wellbeing of
                your team, as well as ensuring compliance with industry
                standards and regulations. With experienced instructors,
                flexible course options, and a commitment to excellence,
                SafetyBuilt is the smart choice for site safety training.
              </p>

              <CommanButton label={"Learn more"} link={"/about-us"} />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col">
                  <SaftyBuildCard label={"19"} info={"Years Experience"} />
                </div>

                <div className="col">
                  <SaftyBuildCard label={"103"} info={"Online Courses"} />
                </div>

                <div className="col">
                  <SaftyBuildCard label={"203"} info={"Courses Sold"} />
                </div>
                <div className="col">
                  <SaftyBuildCard label={"24.7"} info={"Support"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ||||||||||||||||||||||Featured courses|||||||||||||||||||||||||| */}

      <section>
        <div className="site_width py-5">
          <div className="text-center">
            <h1 className="level-3-sm heading-font dark-color text-uppercase">
              Featured courses
            </h1>
            <p className="level-6 reg-font">
              Stay Ahead of the Game with SafetyBuilt’s Site Safety Training
              Courses
            </p>
          </div>
          <div className="row">
            {FeaturedCourses?.map((item, key) => (
              <div className="col-lg-4" key={key}>
                <CoursesCard
                  onClick={onClick}
                  img={item?.image}
                  label={item?.label}
                  title={item?.title}
                  price={item?.price}
                  rating={undefined}
                  isActiveStar={false}
                />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center my-lg-3">
            <CommanButtonDark label={"View All"} link={"/courses"} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
