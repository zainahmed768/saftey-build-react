import React, { useState, useEffect } from "react";
import "../../Auth/AuthStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { Flex, Input, Typography } from "antd";
import CommanButton from "../../../Components/CommanButton/CommanButton";
const { Title } = Typography;
import Alert from "../../../Components/SweetAlert/Alert";
import { useForgetOtpMutation } from "../../../redux/services/AuthServices";

const OTP = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState();
	const [error, setError] = useState("");
	let Email = localStorage.getItem("email");
	const [forgetOtp, response] = useForgetOtpMutation();

	const onChange = (text) => {
		console.log("OTP:", text);
		setOtp(text);
	};
	const sharedProps = {
		onChange,
	};

	const handleVerify = (e) => {
		e.preventDefault();

		// Validation: Check if OTP is empty or less than 4 digits
		if (otp?.length == 0) {
			setError("OTP is required");
			return;
		}
		if (otp?.length < 4) {
			setError("OTP must be exactly 4 digits");
			return;
		}

		setError(""); // Clear errors if validation passes

		let data = new FormData();
		data.append("otp", otp);
		data.append("email", Email);
		forgetOtp(data);
	};

	console.log(Email, "asdjsdkkj");

	useEffect(() => {
		console.log(response, "otp response");
		if (response?.isSuccess) {
			Alert({
				title: "Success",
				text: response?.data?.message,
			});
			navigate("/auth-change-password");
		}
		if (response?.isError) {
			Alert({
				title: "Error",
				text: response?.error?.data?.message,
				iconStyle: "error",
			});
			setOtp("");
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
							<p className="med-font level-8 text-capitalize">Enter Otp</p>

							<div className="auth_fields_">
								<div className="mb-3">
									<Flex gap="middle" vertical>
										<Input.OTP
											formatter={(str) => str.toUpperCase()}
											{...sharedProps}
											length={4}
											value={otp} // Bind the input value directly to OTP state
											key={otp} // Force re-render when OTP state changes
										/>
									</Flex>
								</div>

								{error && (
									<p
										className="error"
										style={{
											color: "red",
											fontSize: "13px",
											marginBottom: "10px",
											marginTop: "10px",
										}}
									>
										{error}
									</p>
								)}

								{/* <CommanButton
									label={"submit"}
									style={{ width: "100%" }}
									link={"/auth-change-password"}
								/> */}
								<CommanButton
									label={"submit"}
									style={{ width: "100%" }}
									onClick={handleVerify}
									disabled={response?.isLoading}
								/>
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

export default OTP;
