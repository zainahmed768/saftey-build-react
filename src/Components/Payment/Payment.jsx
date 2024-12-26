import { Modal, Button } from "react-bootstrap";
import { Checkbox, Divider, Spin } from "antd";
import React, { useEffect, useState } from "react";
import CommanButton from "../CommanButton/CommanButton";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAddPaymentMutation } from "../../redux/services/CourseServices";
import Alert from "../SweetAlert/Alert";

const PaymentModal = ({ show, handleClose, type, chapterId }) => {
	const stripe = useStripe();
	const elements = useElements();
	// Payment Api Call
	const [addPayment, response] = useAddPaymentMutation();

	const [errorMessage, setErrorMessage] = useState(null);
	console.log(type, "type");
	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = new FormData();
		if (!stripe || !elements) {
			return; // Stripe has not loaded yet
		}

		const cardElement = elements.getElement(CardElement);

		// Send the payment method to the backend
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			setErrorMessage(error.message);
		} else {
			data.append("stripe_token", paymentMethod?.id);
			data.append("type", type);
			chapterId && data.append("chapter_id", chapterId);

			addPayment(data);
		}
	};

	useEffect(() => {
		if (response?.isError && response?.error?.data?.errors) {
			for (let key in response?.error?.data?.errors) {
				if (response?.error?.data?.errors.hasOwnProperty(key)) {
					Alert({
						title: "Error",
						text: response.error.data.errors[key],
						iconStyle: "error",
					});
				}
			}
		}
	}, [response?.error]);

	useEffect(() => {
		if (response?.isSuccess) {
			Alert({
				title: "Success",
				text: response.data.message,
				iconStyle: "success",
			});
		}
	}, [response?.isSuccess]);

	return (
		<Modal show={show} onHide={handleClose} size="lg">
			<Modal.Body>
				<div className="row">
					<div className="pt-4 pb-2">
						<h1 className="heading-font level-4 text-uppercase dark-color leter-1">
							Payment Details
						</h1>
					</div>
					{/* <div className="col-lg-12">
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
          </div> */}
					<CardElement />
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
					<span class="GeneralButton">
						<button type="button" onClick={handleSubmit}>
							{!response?.isLoading ? (
								"Confirm payment"
							) : (
								<Spin
									size="medium"
									style={{
										color: "#000",
									}}
								/>
							)}
						</button>
					</span>
					{/* <CommanButton
						disabled={!stripe}
						loading={response?.isLoading}
						label={""}
						link={"/my-profile"}
					/> */}
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default PaymentModal;
