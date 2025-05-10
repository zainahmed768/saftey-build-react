import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import "../../Profile/MyCourses/courses.css";
import { usePostReviewMutation } from "../../../redux/services/CourseServices";
import Alert from "../../../Components/SweetAlert/Alert";
import { postReviewValidation } from "../../../constant/HelperFunction";
const CoursesReview = (props) => {
	const { course, setReview } = props;
	const [formErrors, setFormErrors] = useState({});
	console.log(formErrors, "formErrors");

	// Post Review Api CALL
	const [postReview, response] = usePostReviewMutation();

	const [description, setDescription] = useState("");
	const [rating, setRating] = useState(0);

	const handleRating = (rate) => {
		setRating(rate);
	};
	const onPointerEnter = () => console.log("Enter");
	const onPointerLeave = () => console.log("Leave");
	const onPointerMove = (value, index) => console.log(value, index);
	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("course_id", course.id);
		formData.append("rating", rating);
		formData.append("content", description);
		if (postReviewValidation(rating, description, setFormErrors)) {
			postReview(formData);
		}
	};

	useEffect(() => {
		if (response?.isSuccess) {
			setDescription("");
			setRating(0);
			setReview(false);
			Alert({
				title: "Success",
				text: "Review submitted successfully",
				iconStyle: "success",
			});
		}
	}, [response?.isSuccess]);

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

	return (
		<>
			<div className="allcourse-wrapper">
				<div className="courses-card-wrapper d-flex gap-3 ">
					<div className="courses-img-wrapper">
						<figure className="mb-0">
							<img src={course?.course_img} className="img-fluid" alt="" />
						</figure>
					</div>
					<div className="courses-content-wrapper">
						<h4>{course?.title}</h4>
						<p>{course?.short_des}</p>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style={{ width: `${course?.completion}%` }}
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
							></div>
						</div>
						<div className="completion-level mt-2">
							<p>
								{0}% <span className="complete">Completed</span>
							</p>
						</div>
					</div>
					<div className="courses-btn-wrapper"></div>
				</div>
				<div className="write-reviews">
					<div className="form group d-flex justify-content-between align-items-center">
						<h5 className="review-heading text-uppercase heading-font">
							write a review
						</h5>
						<div className="rating-star-wrapper d-flex gap-2 align-items-center">
							<h5 className="heading-font text-uppercase mb-0">rating</h5>
							<Rating
								onClick={handleRating}
								onPointerEnter={onPointerEnter}
								onPointerLeave={onPointerLeave}
								onPointerMove={onPointerMove}
							/>
						</div>
					</div>
					{formErrors?.rating && (
						<p
							className="error text-end"
							style={{
								color: "red",
								fontSize: "13px",
								marginBottom: "0",
								marginTop: "10px",
							}}
						>
							{formErrors?.rating}
						</p>
					)}
					<div className="form-group mt-3">
						<textarea
							name="description"
							className="form-control"
							rows={6}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							cols={5}
							id=""
						></textarea>
						{formErrors?.description && (
							<p
								className="error"
								style={{
									color: "red",
									fontSize: "13px",
									marginBottom: "0",
									marginTop: "10px",
								}}
							>
								{formErrors?.description}
							</p>
						)}
					</div>
					<div className="form-group mt-3 d-flex justify-content-end">
						<CommanButton
							label={"submit"}
							disabled={response.isLoading}
							className={"add-btn-student"}
							onClick={handleSubmit}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesReview;
