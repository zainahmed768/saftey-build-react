import React from "react";
import "../../Profile/EditProfile/EditProfile.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
const EditProfile = () => {
  return (
    <>
      <ProfileLayout type={"team leader"}>
        <div class="row">
          <div class="col-lg-6 col">
            <h2 class="level-3-sm heading-font dark-color mt-3 mb-0 text-uppercase">
              Edit Profile
            </h2>
            <p>Nunc pellentesque libero et lore</p>
          </div>
        </div>
        <div class="row">
          <div className="col-lg-6">
            <div className="edit-profile-form-wrapper">
              <form action="">
                <div className="form-group">
                  <label htmlFor="f_Name">First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="l_Name">Last Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input type="phone" className="form-control" />
                </div>
                <div className="form-group text-end">
                  <span className="GeneralButton mt-4">
                    <button type="submit" className="GeneralButton">
                      Save profile
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

export default EditProfile;
