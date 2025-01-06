import React, { useEffect, useState } from "react";
import "../../Profile/EditProfile/EditProfile.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { useChangePasswordMutation } from "../../../redux/services/AuthServices";
import Alert from "../../../Components/SweetAlert/Alert";
import { changePasswordValidation } from "../../../constant/HelperFunction";
const ChangePassword = () => {
	const [formErrors, setFormErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
	const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password
	// CHANGE PASSWORD API CALL
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [changePassword, response] = useChangePasswordMutation();

	const [passwordState, setPasswordState] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setPasswordState({ ...passwordState, [e.target.name]: value });
	};

	const handleChangePassword = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("old_password", passwordState.oldPassword);
		formData.append("new_password", passwordState.newPassword);
		formData.append("new_password_confirmation", passwordState.confirmPassword);
		if (changePasswordValidation(passwordState, setFormErrors)) {
			changePassword(formData);
		}
	};

	const togglePassword = () => {
		setShowPassword(!showPassword); // Toggle password visibility
	};

	const toggleoldPassword = () => {
		setShowOldPassword(!showOldPassword); // Toggle password visibility
	};

	const toggleConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
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
			setPasswordState({
				oldPassword: "",
				newPassword: "",
				confirmPassword: "",
			});
		}
	}, [response?.isSuccess]);

	return (
		<>
			<ProfileLayout type={"team leader"}>
				<div class="row">
					<div class="col-lg-8 col">
						<h2 class="level-3-sm heading-font dark-color mt-3 mb-0 text-uppercase">
							Change Password
						</h2>
						<p>Nunc pellentesque libero et lore</p>
					</div>
				</div>
				<div class="row">
					<div className="col-lg-6">
						<div className="edit-profile-form-wrapper">
							<form onSubmit={handleChangePassword}>
								<div className="form-group position-relative">
									<label htmlFor="f_Name">Old Password</label>
									<input
										type={showOldPassword ? "text" : "password"}
										value={passwordState?.oldPassword}
										name="oldPassword"
										onChange={handleChange}
										className="form-control"
									/>
									<button
										className="input-inline-btn shop-password"
										type="button"
										onClick={toggleoldPassword}
									>
										<i
											style={{ cursor: "pointer", marginTop: "10px" }}
											className={`fa ${
												showOldPassword ? "fa-eye-slash" : "fa-eye"
											} text-color`}
										></i>
									</button>
									{formErrors?.oldPassword && (
										<p
											className="error text-start"
											style={{
												color: "red",
												fontSize: "13px",
												marginBottom: "0",
												marginTop: "10px",
											}}
										>
											{formErrors?.oldPassword}
										</p>
									)}
								</div>
								<div className="form-group position-relative">
									<label htmlFor="l_Name">New Password</label>
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
											style={{ cursor: "pointer", marginTop: "10px" }}
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
								<div className="form-group position-relative">
									<label htmlFor="phone_number">Confirm New Password</label>
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
											style={{ cursor: "pointer", marginTop: "10px" }}
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
												marginBottom: "0",
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
			</ProfileLayout>
		</>
	);
};

export default ChangePassword;
