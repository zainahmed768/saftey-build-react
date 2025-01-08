import React, { useState, useEffect } from "react";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { Link, useNavigate } from "react-router-dom";
import { useUpdatePasswordMutation } from "../../../redux/services/AuthServices";
import { PasswordValidation } from "../../../constant/HelperFunction";
import Alert from "../../../Components/SweetAlert/Alert";

const UserChangePassword = () => {
	const [formErrors, setFormErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
	const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password
	const [updateComplete, response] = useUpdatePasswordMutation();
	const [passwordState, setPasswordState] = useState({
		newPassword: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const value = e.target.value;
		setPasswordState({ ...passwordState, [e.target.name]: value });
	};

	const handleChangePassword = (e) => {
		e.preventDefault();
		const formData = new FormData();
		let email = localStorage.getItem("email");
		formData.append("password", passwordState.newPassword);
		formData.append("email", email);
		formData.append("confirm_password", passwordState.confirmPassword);
		if (PasswordValidation(passwordState, setFormErrors)) {
			updateComplete(formData);
		}
	};

	const togglePassword = () => {
		setShowPassword(!showPassword); // Toggle password visibility
	};

	const toggleConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
	};

	useEffect(() => {
		if (response?.isError) {
			if (response?.error?.data?.errors?.length > 0) {
				for (let key in response?.error?.data?.errors) {
					if (response?.error?.data?.errors.hasOwnProperty(key)) {
						Alert({
							title: "Error",
							text: response.error.data.errors[key],
							iconStyle: "error",
						});
					}
				}
			} else {
				Alert({
					title: "Error",
					text: response?.error?.data?.message,
					iconStyle: "error",
				});
			}
		}
	}, [response?.error]);

	console.log(response?.error?.data?.message, "dsakjasdiasdj2");

	useEffect(() => {
		if (response?.isSuccess) {
			Alert({
				title: "Success",
				text: response?.data?.message,
				iconStyle: "success",
			});
			setPasswordState({
				newPassword: "",
				confirmPassword: "",
			});
			navigate("/sign-in");
		}
	}, [response?.isSuccess]);
	return (
		<>
			<section className="auth_section">
				<div className="row">
					<div className="col-lg-7 col-sm-12 p-lg-5 p-2">
						<div className="auth_inner">
							<h1 className="heading-font level-1 text-uppercase leter-1">
								Change password
							</h1>
							<div className="auth_fields_">
								<form onSubmit={handleChangePassword}>
									<div className="form-group position-relative mb-3">
										<label className="med-font level-8 text-capitalize mb-1">
											New Password
										</label>
										<input
											type={showConfirmPassword ? "text" : "password"}
											name="newPassword"
											value={passwordState?.newPassword}
											onChange={handleChange}
											className="form-control"
										/>
										<button
											className="input-inline-btn shop-password"
											type="button"
											onClick={toggleConfirmPassword}
										>
											<i
												style={{ cursor: "pointer", marginTop: "0px" }}
												className={`fa ${
													showConfirmPassword ? "fa-eye-slash" : "fa-eye"
												} text-color`}
											></i>
										</button>
										{formErrors?.newPassword && (
											<p
												className="error text-start"
												style={{
													color: "red",
													fontSize: "13px",
													marginBottom: "0",
													marginTop: "10px",
												}}
											>
												{formErrors?.newPassword}
											</p>
										)}
									</div>
									<div className="form-group position-relative mb-3">
										<label className="med-font level-8 text-capitalize mb-1">
											Confirm New Password
										</label>
										<input
											type={showPassword ? "text" : "password"}
											name="confirmPassword"
											onChange={handleChange}
											value={passwordState?.confirmPassword}
											className="form-control"
										/>
										<button
											className="input-inline-btn shop-password"
											type="button"
											onClick={togglePassword}
										>
											<i
												style={{ cursor: "pointer", marginTop: "0px" }}
												className={`fa ${
													showPassword ? "fa-eye-slash" : "fa-eye"
												} text-color`}
											></i>
										</button>
										{formErrors?.confirmPassword && (
											<p
												className="error text-start"
												style={{
													color: "red",
													fontSize: "13px",
													marginBottom: "0px",
													marginTop: "10px",
												}}
											>
												{formErrors?.confirmPassword}
											</p>
										)}
									</div>
									<div className="form-group text-end">
										<span className="GeneralButton mt-4">
											<button
												type="submit"
												disabled={response?.isLoading}
												className="GeneralButton"
											>
												Submit
											</button>
										</span>
									</div>
								</form>
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

export default UserChangePassword;
