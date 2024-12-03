import React, { useEffect, useState } from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import "../ContacUs/ContacUs.css";
import { Divider } from "antd";
import CommanButton from "../../Components/CommanButton/CommanButton";
import Footer from "../../layout/footer/Footerr";
import { useContactMutation } from "../../redux/services/ContactServices";
import CommonInputField from "../../Components/CommonInputField/CommonInputField";
import { contactFormValidation } from "../../constant/HelperFunction";
import Alert from "../../Components/SweetAlert/Alert";
const ContacUs = () => {
  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState(null);
  const [contactQuery, response] = useContactMutation();

  const handleSubmit = () => {
    if (contactFormValidation(contact, setFormErrors)) {
      let data = new FormData();
      data.append("first_name", contact?.first_name);
      data.append("last_name", contact?.last_name);
      data.append("email", contact?.email);
      data.append("phone", contact?.phone);
      data.append("message", contact?.message);

      contactQuery(data);
    }
  };

  useEffect(() => {
    if (response?.isSuccess) {
      Alert({
        title: "Success",
        text: response?.data?.message,
      });
      setContact({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        message: "",
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
      <PrimaryHeader
        pageTitle={"CONTACT US"}
        pageDesc={
          "Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
        }
      />

      <div className="py-5 site_width">
        <div className="row">
          <div className="col-lg-4 ">
            <div className="light_gray_box">
              <div className="">
                <h3 className="heading-font level-5-md text-uppercase dark-color leter-2">
                  Contact Information
                </h3>
                <p className="reg-font level-8 color-dark">
                  e eu tincidunt tortor aliquam nulla facilisi cras. Mauris sit
                  amet massa vitae tortor condimentum lacinia.{" "}
                </p>

                <Divider style={{ borderColor: "rgb(0 0 0 / 32%)" }} />
              </div>

              <div className="">
                <h3 className="heading-font level-5-md text-uppercase dark-color leter-2">
                  Office
                </h3>
                <p className="reg-font level-8 color-dark">
                  e eu tincidunt tortor aliquam nulla facilisi cras. Mauris sit
                  amet massa vitae tortor condimentum lacinia.{" "}
                </p>

                <Divider style={{ borderColor: "rgb(0 0 0 / 32%)" }} />
              </div>

              <div className="">
                <h3 className="heading-font level-5-md text-uppercase dark-color leter-2">
                  Management
                </h3>
                <p className="reg-font level-8 color-dark">
                  e eu tincidunt tortor aliquam nulla facilisi cras. Mauris sit
                  amet massa vitae tortor condimentum lacinia.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mx-3 py-3">
            <div className="row">
              <h1 className="heading-font level-4 text-uppercase dark-color leter-1">
                leave us a message
              </h1>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="med-font level-9 text-capitalize mb-1">
                    First Name
                  </label>
                  <CommonInputField
                    className="form-control-1"
                    type={"text"}
                    name="first_name"
                    value={contact?.first_name}
                    onChange={(e) =>
                      setContact({ ...contact, first_name: e.target.value })
                    }
                    errors={
                      formErrors?.first_name ? formErrors?.first_name : null
                    }
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="med-font level-9 text-capitalize mb-1">
                    Last Name
                  </label>
                  <CommonInputField
                    className="form-control-1"
                    type={"text"}
                    name="last_name"
                    value={contact?.last_name}
                    onChange={(e) =>
                      setContact({ ...contact, last_name: e.target.value })
                    }
                    errors={
                      formErrors?.last_name ? formErrors?.last_name : null
                    }
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="med-font level-9 text-capitalize mb-1">
                    Phone
                  </label>
                  <CommonInputField
                    className="form-control-1"
                    type={"number"}
                    name="last_name"
                    value={contact?.phone}
                    onChange={(e) =>
                      setContact({ ...contact, phone: e.target.value })
                    }
                    errors={formErrors?.phone ? formErrors?.phone : null}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <label className="med-font level-9 text-capitalize mb-1">
                  Email Address{" "}
                </label>
                <CommonInputField
                  className="form-control-1"
                  type={"email"}
                  name="email"
                  value={contact?.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
                  errors={formErrors?.email ? formErrors?.email : null}
                />
              </div>

              <div class="col-lg-12">
                <label className="med-font level-9 text-capitalize mb-1">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  value={contact?.message}
                  onChange={(e) =>
                    setContact({ ...contact, message: e.target.value })
                  }
                ></textarea>
                {formErrors?.message && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginBottom: "0",
                      marginTop: "10px",
                    }}
                  >
                    {formErrors?.message}
                  </p>
                )}
              </div>

              <div className="d-flex justify-content-lg-end justify-content-center py-3">
                <CommanButton onClick={handleSubmit} label={"Submit"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContacUs;
