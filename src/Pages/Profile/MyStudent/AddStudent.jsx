import React from "react";
import "../../Profile/EditProfile/EditProfile.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";

const AddStudent = () => {
  return (
    <>
      <ProfileLayout type={"team leader"}>
        <div class="row">
          <div class="col-lg-4 col">
            <h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
              add student
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="edit-profile-form-wrapper mt-4">
              <form action="">
                <div className="form-group">
                  <label htmlFor="f_Name">Email Address</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group text-end">
                  <span className="GeneralButton mt-4">
                    <button type="submit" className="GeneralButton">
                      Submit
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default AddStudent;
