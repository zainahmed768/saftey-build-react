import React from 'react'
import "../footer/Footer.css"
import Logo from "../../assets/images/footer_logo.png"
import { Col, Divider, Row, Space } from 'antd'

const Footer = () => {
  return (
    <>
      <section className="footer_container">
        <div className="container">
          <Row justify="space-between" align="middle" className="footer_content"
          >
            <Col xs={24} sm={24} md={2}>
              <div className="footer_logo">
                <img src={Logo} title="Logo" className="img-fluid" alt="Logo" />
              </div>
            </Col>
            <Col xs={24} sm={24} md={7}>

              <p className="footer_desc">
                Building a safer future for site workers through comprehensive training and education.
              </p>
            </Col>

            <Col xs={24} sm={24} md={3}>
              <Space direction="vertical">
                <h4 className='footer_link_heading'>Quick Links</h4>
                <ul className="footer_links">
                  <li><a href="/courses">Courses</a></li>
                  <li><a href="/wishlist">Wishlist</a></li>
                  <li><a href="/contact-us">Contact</a></li>
                </ul>
              </Space>
            </Col>

            <Col xs={24} sm={24} md={3}>
              <Space direction="vertical">
                <h4 className='footer_link_heading'>Quick Links</h4>
                <ul className="footer_links">
                  <li><a href="/faq">FAQs</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-conditions">Terms & Conditions</a></li>
                </ul>
              </Space>
            </Col>


            <Col xs={24} sm={24} md={5}>
              <Space direction="vertical">
                <h4 className='footer_link_heading'>Contact us</h4>
                <ul className="footer_links">
                  <li>info@safetybuilt.net</li>
                  <li>(323) 202 - 8641</li>
                  <li>1766 E 111th PI Los Angles, CA 90059  </li>
                </ul>
              </Space>
            </Col>

            {/* <Col xs={24} sm={24} md={3}>
              <Space direction="vertical">
                <h4 className='footer_link_heading'>Contact Us</h4>
                <p>Email: info@safetybuilt.net</p>
                <p>Phone: (323) 999-4844</p>
                <p>1703 W 111th Pl Los Angeles, CA 90059</p>
              </Space>
            </Col> */}
          </Row>
          <Divider style={{
            borderColor: '#545454',
          }} />
          <Row justify="center">
            <Col>
              <p className="footer_copy">© 2024 Safety Built. All Rights Reserved.</p>
            </Col>
          </Row>
        </div>
      </section>
      {/* <section className='footer_container'>
        <div className="container my-auto px-5 pt-5 pb-2">
          <div className="row">
            <div className="col-lg-2 p-3">
              <div className="footer_logo">
                <img src={Logo} title="Logo" className='img-fluid ' alt="Logo" />
              </div>
            </div>
            <div className="col-lg-4 my-auto p-0">
              <p className='level-8 reg-font text-white'>Building a safer future for site workers through comprehensive training and education</p>
            </div>

            <div className="col-lg-2 my-auto">
              <ul className='p-0'>
                <h6 className='footer_link_heading heading-font'>Quick Links</h6>
                <li className='reg-font text-white'>Courses</li>
                <li className='reg-font text-white'>Wishlist</li>
                <li className='reg-font text-white'> Contact</li>
              </ul>
            </div>
            <div className="col-lg-2 my-auto">
              <ul className='p-0'>
                <h6 className='footer_link_heading heading-font'>Quick Links</h6>
                <li className='reg-font text-white'>Faqs</li>
                <li className='reg-font text-white'>Privacy Policy</li>
                <li className='reg-font text-white'> Terms & Conditions</li>
              </ul>
            </div>
            <div className="col-lg-2 my-auto">
              <ul className='p-0'>
                <h6 className='footer_link_heading heading-font'>Contact us</h6>
                <li className='reg-font text-white'>info@safteybuilt.net</li>
                <li className='reg-font text-white'>(323) 202 - 8641</li>
                <li className='reg-font text-white'>1766 E 111th PI Los Angles, CA 90059</li>
              </ul>
            </div>
          </div>
          <hr className='reg-font text-white' />

          <div className="text-center">
            <p className='reg-font text-white'>2023 Safety Built. All Right Reserved.</p>
          </div>
        </div>
      </section> */}

    </>
  )
}

export default Footer

