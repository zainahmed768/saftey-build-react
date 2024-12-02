import React, { useState } from "react";
import profileImg from "../../assets/images/profile.png";
import fileUpload from "../../assets/images/file-upload.png";
import PrimaryHeader from "../Header/PrimaryHeader";
import "../ProfileLayout/profileLayout.css";
import { Button, Image, Upload } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../ProfileLayout/SideBar";
import Footer from "../footer/Footerr";

const ProfileLayout = ({ children, type, sidebar = true }) => {
  const location = useLocation(); // Get current route
  console.log(sidebar, "sidebar");
  const [imageUrl, setImageUrl] = useState(profileImg);

  const handleChange = (info) => {
    console.log("Upload Info:", info.file);

    if (info.file.status === "done") {
      // Check if the server response contains the URL
      const uploadedUrl = info.file?.response?.url; // Adjust this based on your API response structure

      if (uploadedUrl) {
        setImageUrl(uploadedUrl); // Set the image URL from the response
      } else {
        console.error("Image URL not found in the response");
      }
    }
  };

  return (
    <>
      <PrimaryHeader
        pageTitle={type}
        pageDesc={
          "Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
        }
      />
      <section className="profile__wrapp  mt-5 site_width">
        <div className="container">
          <div className="row">
            {sidebar == true ? (
              <>
                <div className="col-lg-3">
                  <div className="profile__sidebar position-relative mb-3 py-3">
                    <div className="profile__info mb-4">
                      <div className="img__wrapp position-relative">
                        <img
                          src={profileImg}
                          alt="sol tanning"
                          className="profile__img"
                        />
                        <label className="position-absolute">
                          <img src={fileUpload} alt="fileUpload" />
                          <input
                            type="file"
                            name="file-upload"
                            className="d-none"
                          />
                        </label>
                      </div>

                      {/* <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
                                        
                                        <Image
                                            src={imageUrl}
                                            style={{
                                                width: 150,
                                                height: 150,
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                            }}
                                            preview={false}
                                        />

                                        <Upload
                                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // Upload URL
                                            onChange={handleChange}
                                            showUploadList={false} 
                                            maxCount={1} 
                                        >
                                            <Button
                                                icon={<CameraOutlined />}
                                                style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    right: 0,
                                                    backgroundColor: '#000',
                                                    borderRadius: '50%',
                                                    color: '#fff',
                                                    border: 'none',
                                                }}
                                            />
                                        </Upload>
                                    </div> */}
                      <h5 className="level-5 heading-font dark-color  my-4 text-uppercase leter-1">
                        jORDAN gILBERT
                      </h5>
                    </div>
                    {/* <ul className="sidebar__list m-0 p-0">
                                    <ul className="sidebar__list m-0 p-0">
                                        <li className="py-md-3 py-2">
                                            <NavLink
                                                to="/my-profile"
                                                exact
                                                className={`level-5-sm d-flex align-items-center reg-font dark-color text-uppercase ${location.pathname === '/' ? 'active' : ''}`}
                                                activeClassName="active"
                                            >
                                                My Profile
                                            </NavLink>
                                        </li>
                                        <li className="py-md-3 py-2">
                                            <NavLink
                                                to="/my-orders"
                                                className="level-5-sm d-flex align-items-center reg-font dark-color text-uppercase"
                                                activeClassName="active"
                                            >
                                                My Orders
                                            </NavLink>
                                        </li>
                                        <li className="py-md-3 py-2">
                                            <NavLink
                                                to="/my-course"
                                                className="level-5-sm d-flex align-items-center reg-font dark-color text-uppercase"
                                                activeClassName="active"
                                            >
                                                My Courses
                                            </NavLink>
                                        </li>
                                        <li className="py-md-3 py-2">
                                            <NavLink
                                                to="/my-address"
                                                className="level-5-sm d-flex align-items-center reg-font dark-color text-uppercase"
                                                activeClassName="active"
                                            >
                                                My Address
                                            </NavLink>
                                        </li>
                                        <li className="py-md-3 py-2">
                                            <NavLink
                                                to="/my-student"
                                                className="level-5-sm d-flex align-items-center reg-font dark-color text-uppercase"
                                                activeClassName="active"
                                            >
                                                My Students
                                            </NavLink>
                                        </li>
                                        <li className="py-md-3 py-2">
                                            <NavLink
                                                to="/my-wishlist"
                                                className="level-5-sm d-flex align-items-center reg-font dark-color text-uppercase"
                                                activeClassName="active"
                                            >
                                                My Wishlist
                                            </NavLink>
                                        </li>
                                    </ul>

                                    <li className="py-md-3 py-2">
                                        <NavLink to="#" className="level-5-sm d-flex align-items-center  reg-font dark-color text-uppercase">
                                            LogOut
                                        </NavLink >
                                    </li>
                                </ul> */}
                    <Sidebar />
                  </div>
                </div>
                <div className="col-lg-8 offset-lg-2 ms-lg-5 mt-5 pt-5">
                  {children}
                </div>
              </>
            ) : (
              <>{children}</>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfileLayout;
