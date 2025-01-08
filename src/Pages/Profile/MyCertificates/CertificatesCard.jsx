import React, { useState, useEffect } from "react";
import { certificatesImg, pdfImg } from "../../../constant";
import "../MyCertificates/certificates.css";
import PaymentModal from "../../../Components/Payment/Payment";

const CertificatesCard = ({ certificate, refetch }) => {
	const [show, setShow] = useState(false);
	console.log(certificate, "certificateadasd");

	const [paymentCompleted, setPaymentCompleted] = useState(false);
	const [downloadLink, setDownloadLink] = useState("");

	// Simulate download after payment
	useEffect(() => {
		if (paymentCompleted && downloadLink) {
			// Automatically trigger the certificate download
			const link = document.createElement("a");
			link.href = downloadLink;
			link.download = "certificate.pdf"; // File name
			link.target = "_blank";
			link.click();

			// Reset state after download
			setPaymentCompleted(false);
			setDownloadLink("");
		}
	}, [paymentCompleted, downloadLink]);

	const handlePaymentSuccess = () => {
		// Set the download link after payment success
		setPaymentCompleted(true);
	};

	const handleClose = () => setShow(false);
	const handleShow = (url, key) => {
		if (!key) {
			setShow(true);
			setDownloadLink(url);
		} else {
			const link = document.createElement("a");
			link.href = url;
			link.download = "certificate.pdf"; // File name
			link.target = "_blank";
			link.click();
		}
	};
	return (
		<>
			{certificate?.map((cert, index) => {
				console.log(cert, "cert");
				return (
					<>
						<div className="certificates-card-wrapper d-flex gap-2 align-items-center">
							<div className="certificates-img-wrapper">
								<figure>
									<img
										src={cert?.course?.course_img}
										className="img-fluid"
										alt=""
										style={{ width: "245px", height: "153px" }}
									/>
								</figure>
							</div>
							<div className="certificates-content-wrapper my-3">
								<h4>{cert?.course?.title}</h4>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										style={{
											width: `${Math.round(cert?.course?.progress)}%`,
										}}
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
								<div className="completion-level mt-2">
									<p>
										{Number(cert?.course?.progress ?? 0).toFixed(0)}%{" "}
										<span className="complete">Completed</span>
									</p>
								</div>
								{/* <div className="score-wrapper">
              <p>Score : 8/8</p>
            </div> */}
								<div className="certificates-btn-wrapperr">
									<button
										className="bg-transparent border-0"
										onClick={() =>
											handleShow(cert?.certificate_url, cert?.is_purchased)
										}
									>
										<img src={pdfImg} className="img-fluid" alt="" />
										<span className="heading-font text-decoration-underline text-uppercase ms-2">
											download certificate
										</span>
									</button>
								</div>
							</div>
						</div>
						<PaymentModal
							show={show}
							handleClose={handleClose}
							type={"certificate"}
							chapterId={cert?.id}
							setShow={setShow}
							refetch={refetch}
							onPaymentSuccess={() => handlePaymentSuccess()}
						/>
					</>
				);
			})}
		</>
	);
};

export default CertificatesCard;
