import React, { useEffect, useState } from "react";
import "../../Profile/EditProfile/EditProfile.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { useChangePasswordMutation } from "../../../redux/services/AuthServices";
import Alert from "../../../Components/SweetAlert/Alert";
import { changePasswordValidation } from "../../../constant/HelperFunction";
const ChangePassword = () => {
	const [formErrors, setFormErrors] = useState({});
	// CHANGE PASSWORD API CALL
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
		formData.append("current_password", passwordState.oldPassword);
		formData.append("password", passwordState.newPassword);
		formData.append("confirm_password", passwordState.confirmPassword);
		if (changePasswordValidation(passwordState, setFormErrors)) {
			changePassword(formData);
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
								<div className="form-group">
									<label htmlFor="f_Name">Old Password</label>
									<input
										type="password"
										value={passwordState?.oldPassword}
										name="oldPassword"
										onChange={handleChange}
										className="form-control"
									/>
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
								<div className="form-group">
									<label htmlFor="l_Name">New Password</label>
									<input
										type="password"
										name="newPassword"
										value={passwordState?.newPassword}
										onChange={handleChange}
										className="form-control"
									/>
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
								<div className="form-group">
									<label htmlFor="phone_number">Confirm New Password</label>
									<input
										type="password"
										name="confirmPassword"
										onChange={handleChange}
										value={passwordState?.confirmPassword}
										className="form-control"
									/>
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
