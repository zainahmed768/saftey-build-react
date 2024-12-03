import React, { useEffect, useState } from "react";
import "../../Auth/AuthStyles.css";

import CommanButton from "../../../Components/CommanButton/CommanButton";
import { Segmented } from "antd";
import { signUpValidation } from "../../../constant/HelperFunction";
import CommonInputField from "../../../Components/CommonInputField/CommonInputField";
import { useAuthRegisterMutation } from "../../../redux/services/AuthServices";
import Alert from "../../../Components/SweetAlert/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../../redux/reducers/AuthReducer";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [authRegister, response] = useAuthRegisterMutation();
  const [selectedRole, setSelectedRole] = useState("TEAM LEADER");
  const [formErrors, setFormErrors] = useState(null);
  const [user, setUser] = useState({
    f_name: "",
    l_name: "",
    email: "",
    contact_no: "",
    company_name: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpValidation(user, setFormErrors)) {
      console.log(user, "sign up", formErrors);
      let data = new FormData();
      data.append("first_name", user?.f_name);
      data.append("last_name", user?.l_name);
      data.append("email", user?.email);
      data.append("password", user?.password);
      data.append("confirm_password", user?.confirm_password);
      data.append("phone", user?.contact_no);
      data.append("role", selectedRole == "TEAM LEADER" ? 1 : 0);

      authRegister(data);
    }
  };
  console.log(response, "all response");

  useEffect(() => {
    if (response?.isSuccess) {
      // dispatch(setUserToken(response?.data?.response?.data));

      Alert({
        title: "Success",
        text: "Account created successfully. Please verify your email by clicking the link we sent to your inbox.",
      });
      navigate("/verify-otp", {
        state: {
          email: user?.email,
        },
      });
      // setUser({
      //   f_name: "",
      //   l_name: "",
      //   email: "",
      //   contact_no: "",
      //   company_name: "",
      //   password: "",
      //   confirm_password: "",
      // });
    }
    if (response?.isError) {
      // if (
      //   response?.error?.data?.errors?.length === 0 &&
      //   response?.error?.data?.message === "Bad Request!"
      // ) {
      //   setFormErrors(response?.error?.data?.errors);
      // } else if (response?.error?.data?.errors?.website) {
      //   setFormErrors({ website: response?.error?.data?.errors?.website?.[0] });
      // } else if (response?.error?.data?.errors?.profile_photo) {
      //   setFormErrors({
      //     profile_photo: response?.error?.data?.errors?.profile_photo?.[0],
      //   });
      // }
      // if (Object.keys(response?.error?.data?.errors).length > 0) {
      //   const errorMessages = response?.error?.data?.errors
      //     ? Object.values(response.error.data.errors).flat().join("\n")
      //     : "An unexpected error occurred.";
      //   Alert({
      //     title: "Error",
      //     text: errorMessages,
      //     iconStyle: "error",
      //   });
      // } else {
      Alert({
        title: "Error",
        text: response?.data?.errors?.message,
        iconStyle: "error",
      });
      // }
    }
  }, [response]);

  return (
    <>
      <section className="auth_section">
        <div className="row">
          <div className="col-lg-7 col-sm-12 p-lg-5 p-2">
            <div className="auth_inner">
              <h1 className="heading-font level-1 text-uppercase leter-1 mb-lg-0">
                sign up{" "}
              </h1>
              <p className="reg-font level-7 text-capitalize mb-lg-2">
                Already A Member ?
                <Link
                  to="/sign-in"
                  className="bold-font level-7 text-capitalize text-decoration-none dark-color"
                >
                  {" "}
                  Sign In
                </Link>
              </p>
              <Segmented
                options={["TEAM LEADER", "STUDENT"]}
                value={selectedRole}
                onChange={(value) => setSelectedRole(value)}
                block
                style={{
                  marginBottom: 20,
                  maxWidth: "220px",
                  margin: "0",
                  fontWeight: "bold",
                  background: "white",
                  border: "1px solid black",
                }}
              />

              {selectedRole === "TEAM LEADER" && (
                <>
                  <div className="auth_fields_">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="med-font level-8 text-capitalize mb-1">
                            First Name
                          </label>

                          <CommonInputField
                            className="form-control-1"
                            type={"text"}
                            name="first_name"
                            value={user.f_name}
                            onChange={(e) =>
                              setUser({
                                ...user,
                                f_name: e.target.value,
                              })
                            }
                            errors={
                              formErrors?.f_name ? formErrors?.f_name : null
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="med-font level-8 text-capitalize mb-1">
                            Last Name
                          </label>

                          <CommonInputField
                            className="form-control-1"
                            type={"text"}
                            name="first_name"
                            value={user?.l_name}
                            onChange={(e) =>
                              setUser({ ...user, l_name: e.target.value })
                            }
                            errors={
                              formErrors?.l_name ? formErrors?.l_name : null
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="med-font level-8 text-capitalize mb-1">
                            Email Address
                          </label>
                          <CommonInputField
                            className="form-control-1"
                            type={"email"}
                            name="first_name"
                            value={user?.email}
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                            errors={
                              formErrors?.email ? formErrors?.email : null
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label className="med-font level-8 text-capitalize mb-1">
                          Contact Number{" "}
                        </label>
                        <CommonInputField
                          className="form-control-1"
                          type={"number"}
                          name="first_name"
                          value={user?.contact_no}
                          onChange={(e) =>
                            setUser({ ...user, contact_no: e.target.value })
                          }
                          errors={
                            formErrors?.contact_no
                              ? formErrors?.contact_no
                              : null
                          }
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="med-font level-8 text-capitalize mb-1">
                            Company Name
                          </label>

                          <CommonInputField
                            className="form-control-1"
                            type={"text"}
                            name="first_name"
                            value={user?.company_name}
                            onChange={(e) =>
                              setUser({ ...user, company_name: e.target.value })
                            }
                            errors={
                              formErrors?.company_name
                                ? formErrors?.company_name
                                : null
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="med-font level-8 text-capitalize mb-1">
                          Password
                        </label>

                        <CommonInputField
                          placeholder={"**********"}
                          type={"password"}
                          name="password"
                          value={user?.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          errors={
                            formErrors?.password ? formErrors?.password : null
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="med-font level-8 text-capitalize mb-1">
                          Confirm New Password
                        </label>

                        <CommonInputField
                          placeholder={"**********"}
                          type={"password"}
                          name="password"
                          value={user?.confirm_password}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              confirm_password: e.target.value,
                            })
                          }
                          errors={
                            formErrors?.confirm_password
                              ? formErrors?.confirm_password
                              : null
                          }
                        />
                      </div>
                    </div>

                    {/* <CommanButton
                      onClick={handleSubmit}
                      label={"sign up"}
                      style={{ width: "100%" }}
                      link={"/sign-in"}
                    /> */}
                    <span className={`GeneralButton`} onClick={handleSubmit}>
                      <button
                        type="submit"
                        style={{ width: "100%" }}
                        disabled={response?.isLoading}
                      >
                        Sign up
                      </button>
                    </span>
                  </div>
                </>
              )}
              {selectedRole === "STUDENT" && (
                <>
                  <div className="auth_fields_">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="med-font level-8 text-capitalize mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control-1"
                            value={user?.f_name}
                            onChange={(e) =>
                              setUser({ ...user, f_name: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="med-font level-8 text-capitalize mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control-1"
                            value={user?.l_name}
                            onChange={(e) =>
                              setUser({ ...user, l_name: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="med-font level-8 text-capitalize mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name=""
                            id=""
                            className="form-control-1"
                            value={user?.email}
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label className="med-font level-8 text-capitalize mb-1">
                          Contact Number{" "}
                        </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control-1"
                          value={user?.contact_no}
                          onChange={(e) =>
                            setUser({ ...user, contact_no: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="med-font level-8 text-capitalize mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          name=""
                          id=""
                          className="form-control-1"
                          value={user?.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="med-font level-8 text-capitalize mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          name=""
                          id=""
                          className="form-control-1"
                          value={user?.confirm_password}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              confirm_password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* <CommanButton
                      onClick={handleSubmit}
                      label={"sign up"}
                      style={{ width: "100%" }}
                    /> */}
                    <span className={`GeneralButton`} onClick={handleSubmit}>
                      <button
                        type="submit"
                        disabled={response?.isLoading}
                        style={{ width: "100%" }}
                      >
                        Sign up
                      </button>
                    </span>
                  </div>
                </>
              )}
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

export default Signup;
