import React, { useEffect, useState } from "react";
import "../../Profile/EditProfile/EditProfile.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { useSelector } from "react-redux";
import { useAddStudentMutation } from "../../../redux/services/AuthServices";
import { addStudentValidation } from "../../../constant/HelperFunction";
import Alert from "../../../Components/SweetAlert/Alert";
import { Spin } from "antd";

const AddStudent = () => {
	const userData = useSelector((state) => state.AuthReducer.user);
	let userId = userData.id;
	const [email, setEmail] = useState("");
	const [formErrors, setFormErrors] = useState(false);

	const [addStudent, response] = useAddStudentMutation();

	const handleAddStudent = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("created_by", userId);
		formData.append("email", email);
		if (addStudentValidation(email, setFormErrors)) {
			addStudent(formData);
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
			setEmail("");
		}
	}, [response?.isSuccess]);

	return (
		<>
			<ProfileLayout type={"team leader"}>
				<div class="row">
					<div class="col-lg-4 col">
						<h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
							add student
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<div className="edit-profile-form-wrapper mt-4">
							<form onSubmit={handleAddStudent}>
								<div className="form-group">
									<label htmlFor="f_Name">Email Address</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="form-control"
									/>
									{formErrors && (
										<p
											className="error"
											style={{
												color: "red",
												fontSize: "13px",
												marginBottom: "0",
												marginTop: "10px",
											}}
										>
											{formErrors?.email}
										</p>
									)}
								</div>
								<div className="form-group text-end">
									<span className="GeneralButton mt-4">
										<button
											type="submit"
											className="GeneralButton"
											disabled={response?.isLoading}
										>
											{!response?.isLoading ? (
												"Submit"
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
								</div>
							</form>
						</div>
					</div>
				</div>
			</ProfileLayout>
		</>
	);
};

export default AddStudent;
