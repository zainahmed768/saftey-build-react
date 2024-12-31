import React, { useEffect, useState } from "react";
import profileImg from "../../assets/images/profile.png";
import fileUpload from "../../assets/images/file-upload.png";
import PrimaryHeader from "../Header/PrimaryHeader";
import "../ProfileLayout/profileLayout.css";
import { Button, Image, Upload, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../ProfileLayout/SideBar";
import Footer from "../footer/Footerr";
import { useGetProfileQuery } from "../../redux/services/AuthServices";
import Skeleton from "react-loading-skeleton";

const ProfileLayout = ({
	children,
	type,
	sidebar = true,
	profileData,
	setFile,
	File,
}) => {
	const { data: getProfile, isLoading } = useGetProfileQuery();
	const userProfile = getProfile?.response?.data;
	console.log(userProfile, "userProfile");

	const location = useLocation(); // Get current route

	const [imageUrl, setImageUrl] = useState(userProfile?.image_url);

	useEffect(() => {
		setImageUrl(userProfile?.image_url);
	}, [userProfile]);

	const handleImage = (event) => {
		const selectedFile = event.target.files[0];

		if (selectedFile) {
			const reader = new FileReader();
			reader.onload = () => {
				setImageUrl(reader.result); // Set the preview
				setFile(selectedFile); // Save the file for potential upload
			};
			reader.readAsDataURL(selectedFile);
		} else {
			message.error("No file selected or invalid file format");
		}
	};

	return (
		<>
			<PrimaryHeader
				pageTitle={type}
				pageDesc={
					"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
				}
			/>
			<section className="profile__wrapp mt-5 site_width">
				<div className="container">
					<div className="row">
						{sidebar ? (
							<>
								<div className="col-lg-3">
									<div className="profile__sidebar position-relative mb-3 py-3">
										<div className="profile__info mb-4">
											<div className="img__wrapp position-relative">
												{!isLoading ? (
													<img
														src={imageUrl}
														alt="Profile"
														className="profile__img"
													/>
												) : (
													<Skeleton
														count={1}
														height={"150px"}
														width={"150px"}
														style={{ borderRadius: "50%" }}
													/>
												)}
												{location?.pathname === "/edit-profile" && (
													<label className="position-absolute">
														<img src={fileUpload} alt="fileUpload" />
														<input
															type="file"
															name="file-upload"
															className="d-none"
															onChange={handleImage}
														/>
													</label>
												)}
											</div>
											<h5 className="level-5 heading-font dark-color my-4 text-uppercase letter-1">
												{!isLoading ? (
													userProfile?.first_name
												) : (
													<Skeleton count={1} />
												)}
											</h5>
										</div>
										<Sidebar />
									</div>
								</div>
								<div className="col-lg-8 offset-lg-2 ms-lg-5 mt-5 pt-5">
									{children}
								</div>
							</>
						) : (
							<>{children}</>
						)}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ProfileLayout;
