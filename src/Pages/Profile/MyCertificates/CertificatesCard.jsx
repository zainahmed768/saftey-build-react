import React, { useState } from "react";
import { certificatesImg, pdfImg } from "../../../constant";
import "../MyCertificates/certificates.css";
import PaymentModal from "../../../Components/Payment/Payment";

const CertificatesCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="certificates-card-wrapper d-flex gap-2 align-items-center">
        <div className="certificates-img-wrapper">
          <figure>
            <img src={certificatesImg} className="img-fluid" alt="" />
          </figure>
        </div>
        <div className="certificates-content-wrapper my-3">
          <h4>Version 3. Respirators And CPC Chapters</h4>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: `40%` }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="completion-level mt-2">
            <p>
              48% <span className="complete">Completed</span>
            </p>
          </div>
          <div className="score-wrapper">
            <p>Score : 8/8</p>
          </div>
          <div className="certificates-btn-wrapperr">
            <button className="bg-transparent border-0" onClick={handleShow}>
              <img src={pdfImg} className="img-fluid" alt="" />
              <span className="heading-font text-decoration-underline text-uppercase ms-2">
                download certificate
              </span>
            </button>
          </div>
        </div>
      </div>
      <PaymentModal show={show} handleClose={handleClose} />
    </>
  );
};

export default CertificatesCard;
