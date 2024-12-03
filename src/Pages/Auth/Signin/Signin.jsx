import React, { useEffect, useState } from "react";
import "../../Auth/AuthStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { signInValidation } from "../../../constant/HelperFunction";
import {
  useLoginMutation,
  useAuthRegisterMutation,
} from "../../../redux/services/AuthServices";
import { setUserToken } from "../../../redux/reducers/AuthReducer";
import { useDispatch } from "react-redux";
import CommonInputField from "../../../Components/CommonInputField/CommonInputField";
import Alert from "../../../Components/SweetAlert/Alert";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [authLogin, response] = useLoginMutation();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState(null);

  const handleRedirection = () => {
    navigate("/my-profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signInValidation(login, setFormErrors)) {
      let data = new FormData();
      data.append("email", login.email);
      data.append("password", login.password);
      authLogin(data);
    }
  };
  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setUserToken(response?.data?.response?.data));

      Alert({
        title: "Success",
        text: response?.data?.message,
      });
      navigate("/my-profile");
      setLogin({
        email: "",
        password: "",
      });
    }

    if (response?.isError) {
      if (response?.error?.data?.errors?.email[0]) {
        Alert({
          title: "Error",
          text: response?.error?.data?.errors?.email[0],
          iconStyle: "error",
        });
      } else {
        Alert({
          title: "Error",
          text: response?.error?.data?.message,
          iconStyle: "error",
        });
      }
    }
  }, [response]);
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
                  <CommonInputField
                    className="form-control-1"
                    type={"email"}
                    name="email"
                    value={login.email}
                    onChange={(e) =>
                      setLogin({
                        ...login,
                        email: e.target.value,
                      })
                    }
                    errors={formErrors?.email ? formErrors?.email : null}
                  />
                </div>

                <div className="">
                  <label className="med-font level-8 text-capitalize mb-1">
                    Password
                  </label>

                  <CommonInputField
                    className="form-control-1"
                    type={"password"}
                    name="email"
                    value={login.password}
                    onChange={(e) =>
                      setLogin({
                        ...login,
                        password: e.target.value,
                      })
                    }
                    errors={formErrors?.password ? formErrors?.password : null}
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
                <div className="" onClick={handleSubmit}>
                  <CommanButton
                    label={"sign in"}
                    onClick={handleSubmit}
                    style={{ width: "100%" }}
                    disabled={response?.isLoading}
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
