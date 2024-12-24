import React, { useEffect, useState } from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import "../CheckOut/CheckOut.css";
import { Checkbox, Divider } from "antd";
import CommanButton from "../../Components/CommanButton/CommanButton";
import checkout_product from "../../assets/images/checkout_product.png";
import { FaStar } from "react-icons/fa";
import Footer from "../../layout/footer/Footerr";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { checkoutFormValidation } from "../../constant/HelperFunction";
import CommonInputField from "../../Components/CommonInputField/CommonInputField";
import { useDispatch, useSelector } from "react-redux";
import { useCheckoutMutation } from "../../redux/services/PaymentServices";
import Alert from "../../Components/SweetAlert/Alert";
import { clearCart } from "../../redux/reducers/CartReducer";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState(null);
	const [checkoutRequest, response] = useCheckoutMutation();
	const cart = useSelector((state) => state?.CartReducer?.cart);
	const user_id = useSelector((state) => state?.AuthReducer?.user?.id);
	const [formErrors, setFormErrors] = useState();
	const [paymentInfo, setPaymentInfo] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		addressLine1: "",
		addressLine2: "",
		city: "",
		country: "",
		state: "",
		postcode: "",
		additionalInfo: "",
		promo_code: "",
	});
	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const rating = 5;
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<FaStar
					key={i}
					color={i <= rating ? "#F0BD08" : "#e4e5e9"}
					size={13}
					style={{ margin: 3 }}
				/>,
			);
		}
		return stars;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = new FormData();
		if (checkoutFormValidation(paymentInfo, setFormErrors)) {
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
				console.log("PaymentMethod:", paymentMethod);

				data.append("user_id", user_id);
				data.append("first_name", paymentInfo?.firstName);
				data.append("last_name", paymentInfo?.lastName);
				data.append("phone", paymentInfo?.phone);
				data.append("email", paymentInfo?.email);
				data.append("address_line_1", paymentInfo?.addressLine1);
				data.append("city", paymentInfo?.city);
				data.append("state", paymentInfo?.state);
				data.append("country", paymentInfo?.country);
				data.append("postcode", paymentInfo?.postcode);
				cart?.map((course, i) => {
					data.append(`courses[${i}][course_id]`, course?.id);
					data.append(`courses[${i}][quantity]`, 1);
				});
				data.append("stripe_token", paymentMethod?.id);
				data.append(
					"promo_code",
					paymentInfo?.promo_code ? paymentInfo?.promo_code : " ",
				);

				checkoutRequest(data);
			}
		}
	};
	useEffect(() => {
		console.log(response, "checkout response");
		if (response?.isSuccess) {
			dispatch(clearCart());
			navigate("/");
			Alert({
				title: "success",
				text: "Your Ordered has been placed",
				iconStyle: "success",
			});
		} else if (response?.isError) {
			Alert({
				title: "Error",
				text: "Something went Wrong",
				iconStyle: "error",
			});
		}
	}, [response]);

	return (
		<>
			<PrimaryHeader
				pageTitle={"checkout"}
				pageDesc={
					"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
				}
			/>

			<div className="site_width py-5">
				<div className="row">
					<div className="col-lg-8">
						<div className="row">
							<h1 className="heading-font level-4 text-uppercase dark-color leter-1">
								Billing information
							</h1>
							<div className="col-lg-6">
								<div className="mb-3">
									<label className="med-font level-9 text-capitalize mb-1">
										First Name
									</label>
									<CommonInputField
										className="form-control-1"
										type={"text"}
										name="firstname"
										value={paymentInfo.firstName}
										onChange={(e) =>
											setPaymentInfo({
												...paymentInfo,
												firstName: e.target.value,
											})
										}
										errors={
											formErrors?.firstName ? formErrors?.firstName : null
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
										name="lastname"
										value={paymentInfo.lastName}
										onChange={(e) =>
											setPaymentInfo({
												...paymentInfo,
												lastName: e.target.value,
											})
										}
										errors={formErrors?.lastName ? formErrors?.lastName : null}
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
										name="phone"
										value={paymentInfo.phone}
										onChange={(e) =>
											setPaymentInfo({
												...paymentInfo,
												phone: e.target.value,
											})
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
									value={paymentInfo.email}
									onChange={(e) =>
										setPaymentInfo({
											...paymentInfo,
											email: e.target.value,
										})
									}
									errors={formErrors?.email ? formErrors?.email : null}
								/>
							</div>
							<div className="col-lg-12">
								<label className="med-font level-9 text-capitalize mb-1">
									Address Line 1{" "}
								</label>
								<CommonInputField
									className="form-control-1"
									type={"text"}
									name="address_1"
									value={paymentInfo.addressLine1}
									onChange={(e) =>
										setPaymentInfo({
											...paymentInfo,
											addressLine1: e.target.value,
										})
									}
									errors={
										formErrors?.addressLine1 ? formErrors?.addressLine1 : null
									}
								/>
							</div>

							<div className="col-lg-12">
								<label className="med-font level-9 text-capitalize mb-1">
									Address Line 2{" "}
								</label>
								<CommonInputField
									className="form-control-1"
									type={"text"}
									name="address_2"
									value={paymentInfo.addressLine2}
									onChange={(e) =>
										setPaymentInfo({
											...paymentInfo,
											addressLine2: e.target.value,
										})
									}
									errors={
										formErrors?.addressLine2 ? formErrors?.addressLine2 : null
									}
								/>
							</div>

							<div className="col-lg-6">
								<div className="mb-3">
									<label className="med-font level-9 text-capitalize mb-1">
										City
									</label>
									<CommonInputField
										className="form-control-1"
										type={"text"}
										name="address_2"
										value={paymentInfo.city}
										onChange={(e) =>
											setPaymentInfo({
												...paymentInfo,
												city: e.target.value,
											})
										}
										errors={formErrors?.city ? formErrors?.city : null}
									/>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="mb-3">
									<label className="med-font level-9 text-capitalize mb-1">
										Country
									</label>
									<CommonInputField
										className="form-control-1"
										type={"text"}
										name="address_2"
										value={paymentInfo.country}
										onChange={(e) =>
											setPaymentInfo({
												...paymentInfo,
												country: e.target.value,
											})
										}
										errors={formErrors?.country ? formErrors?.country : null}
									/>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="mb-3">
									<label className="med-font level-9 text-capitalize mb-1">
										State
									</label>
									<CommonInputField
										className="form-control-1"
										type={"text"}
										name="address_2"
										value={paymentInfo.state}
										onChange={(e) =>
											setPaymentInfo({
												...paymentInfo,
												state: e.target.value,
											})
										}
										errors={formErrors?.state ? formErrors?.state : null}
									/>
								</div>
							</div>

							<div className="col-lg-6">
								<label className="med-font level-9 text-capitalize mb-1">
									Postcode
								</label>
								<CommonInputField
									className="form-control-1"
									type={"text"}
									name="address_2"
									value={paymentInfo.postcode}
									onChange={(e) =>
										setPaymentInfo({
											...paymentInfo,
											postcode: e.target.value,
										})
									}
									errors={formErrors?.postcode ? formErrors?.postcode : null}
								/>
							</div>

							<div class="col-lg-12">
								<label className="med-font level-9 text-capitalize mb-1">
									Additional Information
								</label>
								<textarea
									class="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									value={paymentInfo.additionalInfo}
									onChange={(e) =>
										setPaymentInfo({
											...paymentInfo,
											additionalInfo: e.target.value,
										})
									}
								></textarea>
								{formErrors?.additionalInfo && (
									<p
										className="error"
										style={{
											color: "red",
											fontSize: "13px",
											marginBottom: "0",
											marginTop: "10px",
										}}
									>
										{formErrors?.additionalInfo}
									</p>
								)}
							</div>
						</div>

						<div className="row">
							<div className="pt-4">
								<h1 className="heading-font level-4 text-uppercase dark-color leter-1">
									Payment Details
								</h1>
							</div>
							<CardElement />
							{/* <div className="col-lg-12">
                <div className="mb-3">
                  <label className="med-font level-9 text-capitalize mb-1">
                    Card Number
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control-1"
                  />
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
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control-1"
                  />
                </div>
              </div> */}
						</div>

						<div className="">
							<p className="pt-3">
								<Checkbox
									onChange={onChange}
									className="med-font level-8 text-capitalize"
								>
									Nam massa dolor, imperdiet sed ante eget, luctus gravida ipsum
									lobortis eu. Donec id{" "}
								</Checkbox>
							</p>
						</div>

						<Divider />

						<div className="d-flex justify-content-lg-end justify-content-center">
							<CommanButton
								label={"Confirm payment"}
								onClick={handleSubmit}
								disabled={!stripe}
								loading={response?.isLoading}
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="gray_back_box">
							<h1 className="heading-font level-5-md text-uppercase leter-1 mb-4 color-dark">
								course information
							</h1>
							{cart?.length > 0 &&
								cart?.map((course, index) => {
									return (
										<>
											<div className="course-cart-pro-wrapper">
												<div className="cart-img-text-wrapper">
													<img
														src={course?.course_img}
														className="img-fluid"
														alt="product"
														title="prodcut"
													/>

													<h1 className="bold-font level-6 text-capitalize mt-3">
														{course?.title}
													</h1>
												</div>

												{/* <p className="semi-b-font  level-8 text-capitalize">
                        {renderStars(rating)} 4.9
                      </p> */}

												<p className="med-font  level-8 text-capitalize color-dark">
													{course?.short_des}
												</p>
												<p className="semi-b-font  level-8 text-capitalize">
													price $ {course?.price}
												</p>
											</div>
										</>
									);
								})}
						</div>

						<div className="dark_gray_box">
							<h1 className="heading-font level-5-sm text-uppercase leter-1 mb-4 text-white">
								Cart Totals
							</h1>

							<div className="row">
								<div className="col-lg-8">
									<p className="light-font level-7 text-capitalize leter-1 text-white">
										Promo Code Discount
									</p>
								</div>
								<div className="col-lg-4">
									<p className="med-font level-7 text-capitalize leter-1 text-white">
										$20.00
									</p>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-8">
									<p className="light-font level-7 text-capitalize leter-1 text-white">
										Subtotal
									</p>
								</div>
								<div className="col-lg-4">
									<p className="med-font level-7 text-capitalize leter-1 text-white">
										$312.21
									</p>
								</div>
							</div>

							<Divider style={{ borderColor: "rgb(255 255 255 / 15%)" }} />
							<div className="row">
								<div className="col-lg-8">
									<p className="light-font level-7 text-capitalize leter-1 text-white">
										Total
									</p>
								</div>
								<div className="col-lg-4">
									<p className="med-font level-7 text-capitalize leter-1 text-white">
										$312.21
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default CheckOut;
