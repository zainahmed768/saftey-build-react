import React, { useEffect, useState } from "react";
import "../../Profile/EditProfile/EditProfile.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { useEditProfileMutation } from "../../../redux/services/AuthServices";
import { useDispatch, useSelector } from "react-redux";
import CommonInputField from "../../../Components/CommonInputField/CommonInputField";
import { editProfileValidation } from "../../../constant/HelperFunction";
import Alert from "../../../Components/SweetAlert/Alert";
import { setUserToken } from "../../../redux/reducers/AuthReducer";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = useSelector((state) => state?.AuthReducer?.user);
  const [formErrors, setFormErrors] = useState(null);
  const [user, setUser] = useState({
    first_name: getUser?.first_name,
    last_name: getUser?.last_name,
    phone: getUser?.phone,
  });
  const [editProfile, response] = useEditProfileMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProfileValidation(user, setFormErrors)) {
      let data = new FormData();
      data.append("first_name", user?.first_name);
      data.append("last_name", user?.last_name);
      data.append("phone", user?.phone);

      editProfile(data);
    }
  };
  console.log(response, "responsesdsdsdv");
  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setUserToken({ user: response?.data?.response?.data }));
      Alert({
        title: "Success",
        text: response?.data?.message,
      });
      navigate("/my-profile");
      setUser({
        email: "",
        password: "",
      });
    }

    if (response?.isError) {
      Alert({
        title: "Error",
        text: response?.error?.data?.message,
        iconStyle: "error",
      });
    }
  }, [response]);
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
                  <CommonInputField
                    className="form-control-1"
                    type={"text"}
                    name="first_name"
                    value={user?.first_name}
                    onChange={(e) =>
                      setUser({ ...user, first_name: e.target.value })
                    }
                    errors={
                      formErrors?.first_name ? formErrors?.first_name : null
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="l_Name">Last Name</label>
                  <CommonInputField
                    className="form-control-1"
                    type={"text"}
                    name="last_name"
                    value={user?.last_name}
                    onChange={(e) =>
                      setUser({ ...user, last_name: e.target.value })
                    }
                    errors={
                      formErrors?.last_name ? formErrors?.last_name : null
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <CommonInputField
                    className="form-control-1"
                    type={"number"}
                    name="phone"
                    value={user?.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                    errors={formErrors?.phone ? formErrors?.phone : null}
                  />
                </div>
                <div className="form-group text-end">
                  <span className="GeneralButton mt-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="GeneralButton"
                    >
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
