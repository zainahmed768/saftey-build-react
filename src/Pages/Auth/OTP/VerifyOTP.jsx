import React, { useEffect, useState } from "react";
import "../../Auth/AuthStyles.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Flex, Input, Typography } from "antd";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import {
	useResendVerifyOtpMutation,
	useVerifyAccountMutation,
} from "../../../redux/services/AuthServices";
import Alert from "../../../Components/SweetAlert/Alert";
const { Title } = Typography;

const VerifyOTP = () => {
	const location = useLocation();
	let email = localStorage.getItem("email");
	const navigate = useNavigate();
	const [otp, setOtp] = useState();
	const [error, setError] = useState("");
	const onChange = (text) => {
		console.log("OTP:", text);
		setOtp(text);
	};
	const sharedProps = {
		onChange,
	};
	const [verifyOtp, response] = useVerifyAccountMutation();
	const [resendOtp, verifyResponse] = useResendVerifyOtpMutation();

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
		data.append("email", email);
		verifyOtp(data);
	};

	const handleResendOtp = () => {
		let data = new FormData();
		data.append("email", email);
		resendOtp(data);
	};

	useEffect(() => {
		console.log(response, "otp response");
		if (response?.isSuccess) {
			Alert({
				title: "Success",
				text: response?.data?.message,
			});
			navigate("/sign-in");
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

	useEffect(() => {
		console.log(verifyResponse, "otp response");
		if (verifyResponse?.isSuccess) {
			Alert({
				title: "Success",
				text: verifyResponse?.data?.message,
			});
		}
		if (verifyResponse?.isError) {
			Alert({
				title: "Error",
				text: verifyResponse?.error?.data?.message,
				iconStyle: "error",
			});
		}
	}, [verifyResponse]);
	return (
		<>
			<section className="auth_section">
				<div className="row">
					<div className="col-lg-7 col-sm-12 p-lg-5 p-2">
						<div className="auth_inner">
							<h1 className="heading-font level-1 text-uppercase leter-1">
								Verify Account
							</h1>
							<p className="med-font level-8 text-capitalize">
								Enter verification Otp
							</p>
							<div className="btn-wrapper mb-3">
								<CommanButton
									label={"Resend otp"}
									// style={{ width: "100%" }}

									onClick={handleResendOtp}
									disabled={verifyResponse?.isLoading}
								/>
							</div>

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

export default VerifyOTP;
