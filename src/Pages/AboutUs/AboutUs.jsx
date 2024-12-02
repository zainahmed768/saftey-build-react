import React from 'react'
import PrimaryHeader from '../../layout/Header/PrimaryHeader';
import aboutBg from "../../assets/images/bg.png"
import aboutImg from "../../assets/images/about-img.png"
import { Col, Divider, Row, Skeleton, Space } from 'antd';
import "./AboutUs.css"
import Footer from '../../layout/footer/Footerr';
import FeedBackCard from '../../Components/FeedBackCard/FeedBackCard';
import avatr from "../../assets/images/avatar.png"
import about_right_img from "../../assets/images/about_right_img.png"
import training_course_card from "../../assets/images/training_course_card.png"
import { FeaturedReviews } from '../../data';
const AboutUs = () => {
  return (
    <>
      <PrimaryHeader pageTitle={"About Us"} pageDesc={"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"} />
      <section className='about_sec'>
        <div className="my-5 site_width">
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={24} md={8}>
              <Space direction="vertical">
                <img src={aboutBg} alt="" className='img-one' />
                <img src={aboutImg} alt="" className='img-two' />
              </Space>
            </Col>

            <Col xs={24} sm={24} md={8}>
              <Space direction="vertical" className='center_content_box'>
                <h1 className='heading-font level-4'>OUR MISSION</h1>
                <p className='reg-font level-8'>Safety Built offers high quality online training that’s based upon years of classroom training experience. SafetyBuilt is the perfect choice for anyone who wants to prioritize safety on construction sites. Our courses </p>


                <h1 className='heading-font level-4'>OUR VISION</h1>
                <p className='reg-font level-8'>Safety Built offers high quality online training that’s based upon years of classroom training experience. SafetyBuilt is the perfect choice for anyone who wants to prioritize safety on construction sites. Our courses </p>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Space direction="vertical">
                <img src={aboutImg} alt="" className='img-fluid' />
              </Space>
            </Col>
          </Row>
        </div>

      </section>

      <section className='bg-dark my-5'>
        <div className="py-5 site_width">
          <Row justify="space-between" align="middle">

            <Col xs={24} sm={24} md={8}>
              <h1 className='heading_balck_section mb-0'>check recent </h1>
              <h1 className='heading_balck_section'>achievements</h1>
              <p className='reg-font level-7 text-white text-capitalize'>Safety Built offers high quality online training that’s based upon years of</p>

            </Col>

            <Col xs={24} sm={24} md={4}>
              <h1 className='heading-font level-3-sm text-white text-uppercase'>28%</h1>
              <p className='reg-font level-7 text-white text-capitalize'>Safety Built offers high quality online</p>
            </Col>

            <Col xs={24} sm={24} md={4}>
              <h1 className='heading-font level-3-sm text-white text-uppercase'>30+</h1>
              <p className='reg-font level-7 text-white text-capitalize'>Safety Built offers high quality online</p>
            </Col>
            <Col xs={24} sm={24} md={4}>
              <h1 className='heading-font level-3-sm text-white text-uppercase'>2X</h1>
              <p className='reg-font level-7 text-white text-capitalize'>Safety Built offers high quality online</p>
            </Col>
          </Row>

        </div>
      </section >

      <section>
        <div className="text-center">
          <div className='row justify-content-center'>

            <div className="col-lg-5">
              <h1 className=' dark-color heading-font level-4  text-uppercase leter-1'>We’re trusted by worldwide cutsomers</h1>
              <p className='reg-font level-7  dark-color text-capitalize'>Safety Built offers high quality online training that’s based upon years of classroom training experience. SafetyBuilt is the perfect cho</p>
            </div>
          </div>


          <div className="py-5 site_width">


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
                  ))
                }

              
            </Row>
          </div>
        </div>
      </section>

      {/* why choose resonance */}
      <section>
        <div className="p-lg-4 site_width">
          <Row justify="center" align="middle" className='my-5'>
            <div className='text-center'>
              <h1 className=' dark-color heading-font level-4  text-uppercase leter-1 mb-lg-4'>
                why choose resonance
              </h1>
            </div>

          </Row>
          <div className="resonance_cards">
            <Row justify="space-between" align="middle">
              <Col xs={24} sm={24} md={6}>
                <div className="resonance_card">
                  <Divider type="vertical" className='vertical_line' />
                  <h1 className=' dark-color heading-font level-5-sm  text-uppercase leter-1'>Our vision</h1>
                  <p className='med-font level-8  dark-color text-capitalize'>Safety Built offers high quality online training that’s based upon years of </p>
                </div>
              </Col>

              <Col xs={24} sm={24} md={6}>
                <div className="resonance_card">
                  <Divider type="vertical" className='vertical_line' />
                  <h1 className=' dark-color heading-font level-5-sm  text-uppercase leter-1'>Our vision</h1>
                  <p className='med-font level-8  dark-color text-capitalize'>Safety Built offers high quality online training that’s based upon years of </p>
                </div>
              </Col>

              <Col xs={24} sm={24} md={6}>
                <div className="resonance_card">
                  <Divider type="vertical" className='vertical_line' />
                  <h1 className=' dark-color heading-font level-5-sm  text-uppercase leter-1'>Our vision</h1>
                  <p className='med-font level-8  dark-color text-capitalize'>Safety Built offers high quality online training that’s based upon years of </p>
                </div>
              </Col>

              <Col xs={24} sm={24} md={6}>
                <div className="resonance_card">
                  <Divider type="vertical" className='vertical_line' />
                  <h1 className=' dark-color heading-font level-5-sm  text-uppercase leter-1'>Our vision</h1>
                  <p className='med-font level-8  dark-color text-capitalize'>Safety Built offers high quality online training that’s based upon years of </p>
                </div>
              </Col>
            </Row>
          </div>

        </div>


      </section>


      <section>
        <div className="py-5 site_width">
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={24} md={10}>
              <div className="pe-lg-5">
                <h1 className=' dark-color heading-font level-4  text-uppercase leter-1'>We’re trusted by worldwide cutsomers</h1>
                <p className='reg-font level-7  dark-color text-capitalize'>Safety Built offers high quality online training that’s based upon years of classroom training experience. SafetyBuilt is the perfect cho</p>
              </div>
            </Col>

            <Col xs={24} sm={24} md={14}>
              <div className="">
                <img src={about_right_img} alt="" className='img-fluid' />
              </div>
            </Col>

          </Row>
        </div>
      </section>


      <section>
        <div className="p-lg-4 site_width">
          <Row justify="center" align="middle" className='my-5'>
            <Col xs={24} sm={24} md={17}>
              <div className='text-center'>
                <h1 className=' dark-color heading-font level-4  text-uppercase leter-1 mb-lg-4'>
                  training courses details
                </h1>
                <p className='reg-font level-7  dark-color text-capitalize'>Safety Built offers high quality online training that’s based upon years of classroom training experience. SafetyBuilt is the perfect choice for anyone who wants to prioritize saf</p>
              </div>
            </Col>

          </Row>
          <div className="resonance_cards">
            <Row justify="space-between" align="middle">
              <Col xs={24} sm={24} md={8}>
                <div className="training_course_card">
                  <div className="training_course_img">
                    <img src={training_course_card} alt="" className='img-fluid' />
                  </div>
                  <div className="training_course_body">

                    <div className="pt-3">
                      <h1 className=' dark-color med-font level-5-sm  text-uppercase line-clamp line-clamp-2'>Version 3. respirators and CPC chapters</h1>
                    </div>
                    <div className="">
                      <p className='reg-font level-8  dark-color text-capitalize'>Lorem ipsum dolor sit amet consectetur. Aenean nibh eget venenatis vitae neque molestie arcu aliquam quam. Amet risus lorem habitant pellentesque euismod lacus egestas. Arcu convallis velit at felis nunc qu</p>
                    </div>
                  </div>

                </div>
              </Col>

              <Col xs={24} sm={24} md={8}>
                <div className="training_course_card">
                  <div className="training_course_img">
                    <img src={training_course_card} alt="" className='img-fluid' />
                  </div>
                  <div className="training_course_body">

                    <div className="pt-3">
                      <h1 className=' dark-color med-font level-5-sm  text-uppercase line-clamp line-clamp-2'>Version 3. respirators and CPC chapters</h1>
                    </div>
                    <div className="">
                      <p className='reg-font level-8  dark-color text-capitalize'>Lorem ipsum dolor sit amet consectetur. Aenean nibh eget venenatis vitae neque molestie arcu aliquam quam. Amet risus lorem habitant pellentesque euismod lacus egestas. Arcu convallis velit at felis nunc qu</p>
                    </div>
                  </div>

                </div>
              </Col>


              <Col xs={24} sm={24} md={8}>
                <div className="training_course_card">
                  <div className="training_course_img">
                    <img src={training_course_card} alt="" className='img-fluid' />
                  </div>
                  <div className="training_course_body">

                    <div className="pt-3">
                      <h1 className=' dark-color med-font level-5-sm  text-uppercase line-clamp line-clamp-2'>Version 3. respirators and CPC chapters</h1>
                    </div>
                    <div className="">
                      <p className='reg-font level-8  dark-color text-capitalize'>Lorem ipsum dolor sit amet consectetur. Aenean nibh eget venenatis vitae neque molestie arcu aliquam quam. Amet risus lorem habitant pellentesque euismod lacus egestas. Arcu convallis velit at felis nunc qu</p>
                    </div>
                  </div>

                </div>
              </Col>


            </Row>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutUs;