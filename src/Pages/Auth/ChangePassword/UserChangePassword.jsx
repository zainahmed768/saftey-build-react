import React from "react";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { Link } from "react-router-dom";

const UserChangePassword = () => {
  return (
    <>
      <section className="auth_section">
        <div className="row">
          <div className="col-lg-7 col-sm-12 p-lg-5 p-2">
            <div className="auth_inner">
              <h1 className="heading-font level-1 text-uppercase leter-1">
                Change password
              </h1>

              <div className="auth_fields_">
                <div className="mb-3">
                  <label className="med-font level-8 text-capitalize mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control-1"
                  />
                </div>
                <div className="mb-3">
                  <label className="med-font level-8 text-capitalize mb-1">
                  Confirm New Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control-1"
                  />
                </div>

                <CommanButton
                  label={"submit"}
                  style={{ width: "100%" }}
                  link={"/sign-in"}
                />
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

export default UserChangePassword;
