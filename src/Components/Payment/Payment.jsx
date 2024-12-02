import { Modal, Button } from "react-bootstrap";
import { Checkbox, Divider } from "antd";
import React from "react";
import CommanButton from "../CommanButton/CommanButton";

const PaymentModal = ({ show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Body>
        <div className="row">
          <div className="pt-4">
            <h1 className="heading-font level-4 text-uppercase dark-color leter-1">
              Payment Details
            </h1>
          </div>
          <div className="col-lg-12">
            <div className="mb-3">
              <label className="med-font level-9 text-capitalize mb-1">
                Card Number
              </label>
              <input type="number" name="" id="" className="form-control-1" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="med-font level-9 text-capitalize mb-1">
                MM / YY
              </label>
              <input type="date" name="" id="" className="form-control-1" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="med-font level-9  text-uppercase mb-1">
                cvv
              </label>
              <input type="number" name="" id="" className="form-control-1" />
            </div>
          </div>
        </div>

        <div className="">
          <p className="pt-3">
            <Checkbox
              //   onChange={onChange}
              className="med-font level-8 text-capitalize"
            >
              Nam massa dolor, imperdiet sed ante eget, luctus gravida ipsum
              lobortis eu. Donec id{" "}
            </Checkbox>
          </p>
        </div>

        <Divider />

        <div className="d-flex justify-content-lg-end justify-content-center">
          <CommanButton label={"Confirm payment"} link={"/my-profile"} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
