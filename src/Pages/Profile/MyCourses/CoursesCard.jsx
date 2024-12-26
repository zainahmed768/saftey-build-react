import React, { useEffect } from "react";
import { coursesImg } from "../../../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../Profile/MyCourses/courses.css";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/reducers/CartReducer";
import Alert from "../../../Components/SweetAlert/Alert";
import { useRemoveWishlistMutation } from "../../../redux/services/CourseServices";
const CoursesCard = (props) => {
	const dispatch = useDispatch();
	const { courses, setReview, setCourse } = props;
	console.log(courses, "courses");
	const checkUser = useSelector((state) => state?.AuthReducer?.userToken);
	const cart = useSelector((state) => state?.CartReducer?.cart);

	const location = useLocation();
	const navigate = useNavigate();
	const handleReview = (course) => {
		setReview(true);
		setCourse(course);
	};

	const handleCart = (item) => {
		if (!checkUser) {
			return Alert({
				title: "Error",
				text: "Please Login To Add Products",
				iconStyle: "error",
			});
		}
		const checkCourseInCart = cart.some((course) => course?.id == item?.id);
		if (!checkCourseInCart) {
			dispatch(addToCart(item));
			Alert({
				title: "Success",
				text: `${item?.title} is added to the cart`,
				iconStyle: "success",
			});
		} else {
			Alert({
				title: "Warning",
				text: `Product is Already in the cart`,
				iconStyle: "warning",
			});
		}
	};

	// REMOVE WISHLIST ITEM
	const [removeWishlist, response] = useRemoveWishlistMutation();

	const handleRemove = (id) => {
		const formData = new FormData();
		formData.append("course_id", id);
		removeWishlist(formData);
	};

	useEffect(() => {
		if (response?.isSuccess) {
			Alert({
				title: "Success",
				text: response.data.message,
				iconStyle: "success",
			});
		}
	}, [response?.isSuccess]);

	return (
		<>
			{courses?.map((item) => {
				console.log(item, "sujcsdjn");
				return (
					<div className="courses-card-wrapper d-flex gap-2 justify-content-between my-3">
						<div className="courses-img-wrapper">
							<figure className="mb-0">
								<Link to={`/view-courses/${item?.slug}`}>
									<img src={item?.course_img} className="img-fluid" alt="" />
								</Link>
							</figure>
						</div>
						<div className="courses-content-wrapper">
							<h4>{item?.title}</h4>
							{location?.pathname == "/my-wishlist" && (
								<>
									<div className="mb-2 d-flex gap-2 align-items-center">
										<Rating
											initialValue={item?.rating}
											readonly={true}
											size={20}
										/>
										<span className="value">
											<b>{item?.rating}</b>
										</span>
									</div>
								</>
							)}
							<p>{item?.description}</p>
							{location.pathname !== "/my-wishlist" && (
								<>
									<div class="progress">
										<div
											class="progress-bar"
											role="progressbar"
											style={{ width: `${item?.progress}%` }}
											aria-valuenow="50"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
									<div className="completion-level mt-2">
										<p>
											{item?.progress}%{" "}
											<span className="complete">Completed</span>
										</p>
									</div>
								</>
							)}
						</div>
						<div className="courses-btn-wrapper text-center">
							{location.pathname == "/my-wishlist" && (
								<>
									<span className="GeneralButton">
										<button type="button" onClick={() => handleCart(item)}>
											add to cart
										</button>
									</span>
									<button
										onClick={() => handleRemove(item?.id)}
										disabled={response.isLoading}
										className="btn-review  text-decoration-underline mt-3"
									>
										remove course
									</button>
								</>
							)}

							{location.pathname !== "/my-wishlist" && (
								<button
									onClick={(e) => handleReview(item)}
									className="btn-review text-decoration-underline"
								>
									submit a review
								</button>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default CoursesCard;
