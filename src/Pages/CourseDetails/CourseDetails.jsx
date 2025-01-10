import React, { useEffect, useState } from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import "../CourseDetails/CourseDetails.css";
import img from "../../assets/images/course-detail.png";
import { Col, Row, List, Divider, Skeleton, Spin } from "antd";
import { FaStar } from "react-icons/fa";
import CommanButton from "../../Components/CommanButton/CommanButton";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import icon1 from "../../assets/images/hours-on-demand.png";
import icon2 from "../../assets/images/mobile-icon.png";
import icon3 from "../../assets/images/articles.png";
import icon4 from "../../assets/images/written-exercises.png";
import icon5 from "../../assets/images/lifetime-access.png";
import icon6 from "../../assets/images/certificate-completion.png";
import centerd_img from "../../assets/images/centerd_img.png";
import video_icon from "../../assets/images/video_icon.png";
import { FeaturedReviews } from "../../data";
import FeedBackCard from "../../Components/FeedBackCard/FeedBackCard";
import Footer from "../../layout/footer/Footerr";
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/CartReducer";
import {
	useAddWishlistMutation,
	useGetSingleCourseQuery,
	useRemoveWishlistMutation,
} from "../../redux/services/CourseServices";
import Alert from "../../Components/SweetAlert/Alert";
import ReactPlayer from "react-player";
import { ImConfused2 } from "react-icons/im";
const CourseDetails = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const param = useParams();
	console.log(param, "param");
	const checkUser = useSelector((state) => state?.AuthReducer?.userToken);
	const cart = useSelector((state) => state?.CartReducer?.cart);

	// ADD WISHLIST API CALL
	const [addWishlist, response] = useAddWishlistMutation();
	const [removeWishlist, Removeresponse] = useRemoveWishlistMutation();

	// Add Wishlist Handle
	const handleWishlist = (id) => {
		if (checkUser) {
			const formData = new FormData();
			formData.append("course_id", id);
			addWishlist(formData);
		} else {
			navigate("/sign-in");
		}
	};

	// Remove Wishlist Handle
	const handleRemoveWishlist = (id) => {
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

	useEffect(() => {
		if (Removeresponse?.isSuccess) {
			Alert({
				title: "Success",
				text: Removeresponse.data.message,
				iconStyle: "success",
			});
		}
	}, [Removeresponse?.isSuccess]);

	const [showControls, setShowControls] = useState();

	const { data: getSingleCourse, isLoading } = useGetSingleCourseQuery(
		param?.id,
	);
	let courseDetail = getSingleCourse?.response?.data;

	const rating = 9;
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<FaStar
					key={i}
					color={i <= rating ? "#F0BD08" : "#e4e5e9"}
					size={13}
				/>,
			);
		}
		return stars;
	};

	const handleControls = () => {
		setShowControls((showControls) => !showControls);
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
	if (isLoading) {
		return (
			<div className="loader-wrapper">
				<Spin
					size="large"
					style={{
						color: "#000",
					}}
				/>
			</div>
		);
	}

	return (
		<>
			<PrimaryHeader
				pageTitle={"course Details"}
				pageDesc={
					"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
				}
			/>

			<section>
				<div className="py-5 site_width">
					<Row justify="space-between" align="top">
						<Col xs={24} sm={24} md={11}>
							<div className="rounded_img">
								<img
									src={courseDetail?.course_img}
									alt=""
									className="img-fluid"
									style={{
										width: "435px",
										height: "327px",
										objectFit: "contain",
										border: "1px solid rgb(146 144 144)",
										outlineColor: "rgba(0, 0, 0, 0.5)",
										padding: "5px",
									}}
								/>
							</div>
						</Col>

						<Col xs={24} sm={24} md={12}>
							<Row justify="space-between" align="top">
								<Col xs={24} sm={24} md={14}>
									<div className="pt-3 course-heading-wrapper">
										<h1 className="heading-font level-4-lg text-uppercase dark-color letter-2">
											{courseDetail?.title}
										</h1>
									</div>
								</Col>
								<Col xs={24} sm={24} md={8}>
									<div className="py-3 ms-lg-5">
										{renderStars(rating)}
										<span className="ms-2 rating">
											{courseDetail?.course_avg_rating > 0
												? Number(courseDetail?.course_avg_rating)
												: 0}
										</span>
									</div>
								</Col>
							</Row>

							<div className="col-lg-10">
								<p className="reg-font level-8">{courseDetail?.short_des}</p>
							</div>

							<div className="row">
								<div className="col-lg-2 setmarging">
									<span className="reg-font level-8">Price</span>
									<h1 className="heading-font level-5 text-uppercase dark-color letter-2">
										${Math.round(courseDetail?.price)}
									</h1>
								</div>

								<div className="col-lg-4 my-auto">
									<CommanButton
										label={"add to cart"}
										onClick={(e) => handleCart(courseDetail)}
									/>
								</div>

								{!courseDetail?.is_wishlisted ? (
									<div className="col-lg-3 my-auto">
										<button
											onClick={() => handleWishlist(courseDetail?.id)}
											className="bg-transparent border-0 p-0 heading-font level-5-sm text-uppercase dark-color letter-1 underline course-wishlist-btn"
											disabled={response?.isLoading}
										>
											add to wishlist
										</button>
									</div>
								) : (
									<div className="col-lg-3 my-auto">
										<button
											onClick={() => handleRemoveWishlist(courseDetail?.id)}
											className="bg-transparent border-0 p-0 heading-font level-5-sm text-uppercase dark-color letter-1 underline course-wishlist-btn"
											disabled={Removeresponse?.isLoading}
										>
											remove wishlist
										</button>
									</div>
								)}
							</div>
						</Col>
					</Row>

					{/* listing section */}
					<div className="learn-section p-5">
						<div>
							<Col span={24} className="mb-4">
								<h3 className="heading-font level-5-sm text-uppercase dark-color leter-2">
									What You Will Learn
								</h3>
							</Col>
							{courseDetail?.what_you_will_learn && (
								<div className="row">
									<div className="col-lg-12 px-lg-0">
										<ul className="learn-list">
											{JSON.parse(courseDetail?.what_you_will_learn).map(
												(learn) => {
													return <li>{learn}</li>;
												},
											)}
										</ul>
									</div>
								</div>
							)}

							{/* <div className="col-lg-6 px-lg-0">
                  <ul className="learn-list">
                    <li>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                    </li>
                    <li>
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas{" "}
                    </li>
                    <li>molestias excepturi sint occaecati cupiditate </li>
                  </ul>
                </div> */}
							{/* </div> */}
						</div>
					</div>

					{/* description */}

					<div className="my-5">
						<h3 className="leter-2 heading-font level-5-sm text-uppercase dark-color">
							description
						</h3>
						<p className="reg-font level-8 dark-color">
							{courseDetail?.description}
						</p>
					</div>

					<div className="my-5">
						<h3 className="leter-2 heading-font level-5-sm text-uppercase dark-color">
							requirements
						</h3>
						<p className="reg-font level-8 dark-color">
							{courseDetail?.requirements}
						</p>
					</div>

					<div className="my-5">
						<h3 className="leter-2 heading-font level-5-sm text-uppercase dark-color">
							this course includes
						</h3>
						<Row justify="left" align="top" className="mt-3">
							{JSON.parse(courseDetail?.course_includes)?.map((includes) => {
								return (
									<Col xs={4} sm={4} md={6}>
										{includes == "22 hours on-demand video" ? (
											<p className="reg-font level-7 dark-color">
												<span className="me-3">
													<img src={icon1} alt="" />
												</span>
												{includes}
											</p>
										) : includes == "Access on Mobile and TV" ? (
											<p className="reg-font level-7 dark-color">
												<span className="me-3">
													<img src={icon2} alt="" />
												</span>
												{includes}
											</p>
										) : includes == "16 Articles" ? (
											<p className="reg-font level-7 dark-color">
												<span className="me-3">
													<img src={icon3} alt="" />
												</span>
												{includes}
											</p>
										) : includes == "22 Written exercises" ? (
											<p className="reg-font level-7 dark-color">
												<span className="me-3">
													<img src={icon4} alt="" />
												</span>
												{includes}
											</p>
										) : includes == "Full Lifetime Access" ? (
											<p className="reg-font level-7 dark-color">
												<span className="me-3">
													<img src={icon5} alt="" />
												</span>
												{includes}
											</p>
										) : includes == "Tutor: Jordan Gilbert" ? (
											<p className="reg-font level-7 dark-color">
												<span className="me-3">
													<img src={icon6} alt="" />
												</span>
												{includes}
											</p>
										) : (
											<p className="reg-font level-7 dark-color">
												<span className="me-3">
													<img src={icon6} alt="" />
												</span>
												{includes}
											</p>
										)}
									</Col>
								);
							})}
						</Row>
					</div>

					<div className="my-5">
						<h3 className="leter-2 heading-font level-5-md text-uppercase dark-color mb-3">
							introductory video
						</h3>
						<div className="video-player-wrapper position-relative">
							{/* <video
								src={courseDetail?.introductory_video}
								width={"100%"}
								poster={courseDetail?.thumbnail}
								onClick={handleControls}
								controls={showControls}
							/> */}
							<ReactPlayer
								url={courseDetail?.introductory_video}
								playing={true}
								width={"100%"}
								controls={true}
							/>
							{/* <img src={centerd_img} alt="" className="img-fluid" /> */}
							{!showControls && (
								<div className="video-play-wrap">
									<FaCirclePlay size={40} color="#fff" />
								</div>
							)}
						</div>
					</div>

					<div className="video_listing_sec">
						<h3 className="leter-2 heading-font level-5-md  text-uppercase dark-color mb-3">
							video listing
						</h3>
						<Row justify="space-between" align="middle" className="my-2">
							<Divider type="vertical" className="vertical_video_list_line" />
							{console.log(courseDetail, "dosjnsd")}
							{courseDetail?.chapters?.map((chapter, i) => {
								return (
									<Col xs={24} sm={24} md={11}>
										<h6 className=" semi-b-font level-6 text-uppercase dark-color">
											{chapter?.title}
										</h6>
										<p className="med-font level-7">{chapter?.description}</p>

										<span>
											<span>
												{" "}
												<img
													src={video_icon}
													alt=""
													className="img-fluid"
													width="20"
												/>
											</span>
											<span className="med-font level-8 secondary-3 ps-2 pt-lg-1">
												11 Minute
											</span>
										</span>
										<Divider style={{ borderColor: "rgb(0 0 0 / 40%)" }} />
									</Col>
								);
							})}
						</Row>
					</div>

					{/*  */}
					<div className="my-5">
						<h3 className="leter-2 heading-font level-5-md  text-uppercase dark-color mb-3">
							featured reviews
						</h3>
						<Row justify="start" align="middle">
							{courseDetail?.reviews?.length > 0 ? (
								!isLoading ? (
									courseDetail?.reviews?.slice(0, 3)?.map((item, index) => (
										<Col xs={24} sm={24} md={8} key={index}>
											{console.log(item, "item")}
											<FeedBackCard
												title={item?.user?.name}
												desc={item?.user?.role_name}
												avatar={item?.user?.image_url}
												blockquote={item?.content}
												rating={item?.rating}
											/>
										</Col>
									))
								) : (
									[0, 1, 2].map((_, index) => (
										<Col xs={24} sm={24} md={8} key={index}>
											<Skeleton active />
										</Col>
									))
								)
							) : (
								<Col xs={24} sm={24} md={8}>
									<p>No Reviews Found</p>
								</Col>
							)}
						</Row>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default CourseDetails;
