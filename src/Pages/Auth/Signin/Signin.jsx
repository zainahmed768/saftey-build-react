import React from "react";
import "../../Auth/AuthStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import CommanButton from "../../../Components/CommanButton/CommanButton";

const Signin = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate("/my-profile");
  };

  return (
    <>
      <section className="auth_section">
        <div className="row">
          <div className="col-lg-7 col-sm-12 p-lg-5 p-2">
            <div className="auth_inner">
              <h1 className="heading-font level-1 text-uppercase leter-1">
                sign in
              </h1>
              <h2 className="bold-font level-6 text-capitalize">
                Welcome Back To Safety Built
              </h2>
              <p className="med-font level-8 text-capitalize">
                At vero eos et accusamus et iusto odio dignissimo
              </p>
              <p className="reg-font level-7 text-capitalize">
                Not A Member ?
                <Link
                  to="/sign-up"
                  className="bold-font level-7 text-capitalize text-decoration-none dark-color"
                >
                  {" "}
                  Sign Up
                </Link>
              </p>

              <div className="auth_fields_">
                <div className="mb-3">
                  <label className="med-font level-8 text-capitalize mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control-1"
                  />
                </div>

                <div className="">
                  <label className="med-font level-8 text-capitalize mb-1">
                    Password
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control-1"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <p className="pt-3">
                      <Checkbox
                        onChange={onChange}
                        className="med-font level-8 text-capitalize"
                      >
                        Remember Me
                      </Checkbox>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-lg-end">
                      <p className="bold-font level-8 text-capitalize  pt-3">
                        Forgot Password?{" "}
                        <Link
                          to="/forgot-password"
                          className="bold-font level-8 text-capitalize  pt-3 text-black"
                        >
                          Click Here
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="" onClick={handleRedirection}>
                  <CommanButton
                    label={"sign in"}
                    onClick={handleRedirection}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="auth_banner"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
