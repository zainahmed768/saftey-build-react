import React, { useState, useEffect } from "react";
import "../../Auth/AuthStyles.css";
import { Link, useNavigate } from "react-router-dom";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { useForgetPasswordMutation } from "../../../redux/services/AuthServices";
import { forgetPasswordValidation } from "../../../constant/HelperFunction";
import CommonInputField from "../../../Components/CommonInputField/CommonInputField";
import Alert from "../../../Components/SweetAlert/Alert";

const ForgotPassword = () => {
	const navigate = useNavigate();
	const [formErrors, setFormErrors] = useState(null);
	const [forgetPassword, response] = useForgetPasswordMutation();
	const [user, setUser] = useState({
		email: "",
	});
	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (forgetPasswordValidation(user, setFormErrors)) {
			let data = new FormData();
			data.append("email", user?.email);
			forgetPassword(data);
		}
	};

	useEffect(() => {
		if (response?.isSuccess) {
			localStorage.setItem("email", user?.email);
			Alert({
				title: "Success",
				text: response?.data?.message,
			});
			navigate("/otp");
			setUser({
				email: "",
			});
		}

		if (response?.isError) {
			if (response?.error?.data?.errors?.email?.[0]) {
				Alert({
					title: "Error",
					text: response?.error?.data?.errors?.email?.[0],
					iconStyle: "error",
				});
			} else if (response?.error?.data?.errors?.[0]) {
				Alert({
					title: "Error",
					text: response?.error?.data?.errors?.[0],
					iconStyle: "error",
				});
			} else {
				Alert({
					title: "Error",
					text: response?.error?.data?.message,
					iconStyle: "error",
				});
			}
		}
	}, [response]);

	return (
		<>
			<section className="auth_section">
				<div className="row">
					<div className="col-lg-7 col-sm-12 p-lg-5 p-2">
						<div className="auth_inner">
							<h1 className="heading-font level-1 text-uppercase leter-1">
								forgot password
							</h1>
							<p className="med-font level-8 text-capitalize">
								An  OTP will be sent to your email
							</p>
							<p className="reg-font level-7 text-capitalize">
								Haven’t recieved a code yet ?
								<Link
									to="/sign-up"
									className="bold-font level-7 text-capitalize text-decoration-none dark-color"
								>
									{" "}
									Send Again
								</Link>
							</p>

							<div className="auth_fields_">
								<div className="mb-3">
									<label className="med-font level-8 text-capitalize mb-1">
										Email Address
									</label>

									<CommonInputField
										className="form-control-1"
										type={"email"}
										name="first_name"
										value={user?.email}
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
										errors={formErrors?.email ? formErrors?.email : null}
									/>
								</div>

								{/* <CommanButton
                                    label={"submit"}
                                    style={{ width: "100%" }}
                                    link={"/otp"}
                                /> */}

								<span className={`GeneralButton`} onClick={handleSubmit}>
									<button
										type="submit"
										style={{ width: "100%" }}
										// disabled={response?.isLoading}
									>
										submit
									</button>
								</span>
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

export default ForgotPassword;
