import React from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import aboutBg from "../../assets/images/bg.png";
import aboutImg from "../../assets/images/about-img.png";
import { Col, Divider, Row, Skeleton, Space } from "antd";
import "./AboutUs.css";
import Footer from "../../layout/footer/Footerr";
import FeedBackCard from "../../Components/FeedBackCard/FeedBackCard";
import avatr from "../../assets/images/avatar.png";
import about_right_img from "../../assets/images/about_right_img.png";
import training_course_card from "../../assets/images/training_course_card.png";
import { FeaturedReviews } from "../../data";
import Slider from "react-slick";
import {
	useAboutUsQuery,
	usePagesQuery,
	useReviewsQuery,
} from "../../redux/services/SiteSettingServices";
import { useAllCoursesQuery } from "../../redux/services/CourseServices";
const AboutUs = () => {
	const { data: aboutpageContent, isLoading } = usePagesQuery("about-us");
	const { data: aboutContent } = useAboutUsQuery();
	const { data: allcourses } = useAllCoursesQuery();
	const { data: courseReview } = useReviewsQuery();

	let courseDetail = allcourses?.response?.data?.data;
	let AboutContent = aboutpageContent?.response?.data;
	let AboutUs = aboutContent?.response?.data;
	let courseReviews = courseReview?.response?.data;

	const firstThree = courseDetail?.slice(0, 3);

	const settings = {
		dots: true, // Show dots below the slider
		infinite: true, // Infinite loop sliding
		speed: 500, // Transition speed in ms
		slidesToShow: 3, // Number of slides to show at once
		slidesToScroll: 1, // Number of slides to scroll at once
		autoplay: true, // Enable autoplay
		autoplaySpeed: 3000, // Autoplay delay in ms
	};

	console.log(AboutUs, "AboutUs");
	return (
		<>
			<PrimaryHeader
				pageTitle={AboutContent?.page_title}
				pageDesc={AboutContent?.page_subtitle}
			/>
			<section className="about_sec">
				<div className="my-5 site_width">
					<Row justify="space-between" align="middle">
						<Col xs={24} sm={24} md={8}>
							<Space direction="vertical">
								<img src={aboutBg} alt="" className="img-one" />
								<img
									src={AboutUs?.section_one_image_url}
									alt=""
									className="img-two"
								/>
							</Space>
						</Col>

						<Col xs={24} sm={24} md={8}>
							<Space direction="vertical" className="center_content_box">
								{/* <div
									dangerouslySetInnerHTML={{
										__html: AboutUs?.section_one_title,
									}}
								></div> */}
								<h1 className="heading-font level-4">
									{AboutUs?.section_one_title}
								</h1>
								<p className="reg-font level-8">
									{AboutUs?.section_one_description}{" "}
								</p>

								<h1 className="heading-font level-4">
									{AboutUs?.section_one_title_two}
								</h1>
								<p className="reg-font level-8">
									{AboutUs?.section_one_description_two}
								</p>
							</Space>
						</Col>
						<Col xs={24} sm={24} md={8}>
							<Space direction="vertical">
								<img
									src={AboutUs?.section_one_image_two_url}
									alt=""
									className="img-fluid"
								/>
							</Space>
						</Col>
					</Row>
				</div>
			</section>

			<section className="bg-dark my-5">
				<div className="py-5 site_width">
					<Row justify="space-between" align="middle">
						<Col xs={24} sm={24} md={8}>
							<h1 className="heading_balck_section mb-0">
								{AboutUs?.section_two_title?.split(" ").slice(0, 2).join(" ")}
							</h1>
							<h1 className="heading_balck_section">
								{AboutUs?.section_two_title?.split(" ").slice(2).join(" ")}
							</h1>
							<p className="reg-font level-7 text-white text-capitalize">
								{AboutUs?.section_two_description}
							</p>
						</Col>

						<Col xs={24} sm={24} md={4}>
							<h1 className="heading-font level-3-sm text-white text-uppercase">
								{AboutUs?.section_two_perc_one}
							</h1>
							<p className="reg-font level-7 text-white text-capitalize">
								{AboutUs?.section_two_perc_one_description}
							</p>
						</Col>

						<Col xs={24} sm={24} md={4}>
							<h1 className="heading-font level-3-sm text-white text-uppercase">
								{AboutUs?.section_two_perc_two}
							</h1>
							<p className="reg-font level-7 text-white text-capitalize">
								{AboutUs?.section_two_perc_two_description}
							</p>
						</Col>
						<Col xs={24} sm={24} md={4}>
							<h1 className="heading-font level-3-sm text-white text-uppercase">
								{AboutUs?.section_two_perc_three}
							</h1>
							<p className="reg-font level-7 text-white text-capitalize">
								{AboutUs?.section_two_perc_description}
							</p>
						</Col>
					</Row>
				</div>
			</section>

			<section>
				<div className="text-center">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<h1 className=" dark-color heading-font level-4  text-uppercase leter-1">
								{AboutUs?.section_five_title}
							</h1>
							<p className="reg-font level-7  dark-color text-capitalize">
								{AboutUs?.section_five_description}
							</p>
						</div>
					</div>

					<div className="py-5 site_width">
						<Row justify="space-between" align="middle">
							{courseReviews?.length > 0
								? courseReviews?.slice(0, 3)?.map((item, index) => (
										<Col xs={24} sm={24} md={8} key={index}>
											<FeedBackCard
												title={item?.user?.name}
												desc={item?.user?.role_name}
												avatar={item?.user?.image_url}
												blockquote={item?.content}
												rating={item?.rating}
											/>
										</Col>
								  ))
								: [0, 1, 2].map((_, index) => (
										<Col xs={24} sm={24} md={8} key={index}>
											<Skeleton active />
										</Col>
								  ))}
						</Row>
					</div>
				</div>
			</section>

			{/* why choose resonance */}
			<section>
				<div className="p-lg-4 site_width">
					<Row justify="center" align="middle" className="my-5">
						<div className="text-center">
							<h1 className=" dark-color heading-font level-4  text-uppercase leter-1 mb-lg-4">
								{AboutUs?.section_four_title}
							</h1>
						</div>
					</Row>
					<div className="resonance_cards">
						<Row justify="space-between" align="middle">
							<Col xs={24} sm={24} md={6}>
								<div className="resonance_card">
									<Divider type="vertical" className="vertical_line" />
									<h1 className=" dark-color heading-font level-5-sm  text-uppercase leter-1">
										{AboutUs?.section_four_title_one}
									</h1>
									<p className="med-font level-8  dark-color text-capitalize">
										{AboutUs?.section_four_description_one}
									</p>
								</div>
							</Col>

							<Col xs={24} sm={24} md={6}>
								<div className="resonance_card">
									<Divider type="vertical" className="vertical_line" />
									<h1 className=" dark-color heading-font level-5-sm  text-uppercase leter-1">
										{AboutUs?.section_four_title_two}
									</h1>
									<p className="med-font level-8  dark-color text-capitalize">
										{AboutUs?.section_four_description_two}
									</p>
								</div>
							</Col>

							<Col xs={24} sm={24} md={6}>
								<div className="resonance_card">
									<Divider type="vertical" className="vertical_line" />
									<h1 className=" dark-color heading-font level-5-sm  text-uppercase leter-1">
										{AboutUs?.section_four_title_three}
									</h1>
									<p className="med-font level-8  dark-color text-capitalize">
										{AboutUs?.section_four_description_three}
									</p>
								</div>
							</Col>

							<Col xs={24} sm={24} md={6}>
								<div className="resonance_card">
									<Divider type="vertical" className="vertical_line" />
									<h1 className=" dark-color heading-font level-5-sm  text-uppercase leter-1">
										{AboutUs?.section_four_title_four}
									</h1>
									<p className="med-font level-8  dark-color text-capitalize">
										{AboutUs?.section_four_description_four}
									</p>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</section>

			<section>
				<div className="py-5 site_width">
					<Row justify="space-between" align="middle">
						<Col xs={24} sm={24} md={10}>
							<div className="pe-lg-5">
								<h1 className=" dark-color heading-font level-4  text-uppercase leter-1">
									{AboutUs?.section_three_title}
								</h1>
								<p className="reg-font level-7  dark-color text-capitalize">
									{AboutUs?.section_three_description}
								</p>
							</div>
						</Col>

						<Col xs={24} sm={24} md={14}>
							<div className="">
								<img
									src={AboutUs?.section_five_image_url}
									alt=""
									className="img-fluid"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</section>

			<section>
				<div className="p-lg-4 site_width">
					<Row justify="center" align="middle" className="my-5">
						<Col xs={24} sm={24} md={17}>
							<div className="text-center">
								<h1 className=" dark-color heading-font level-4  text-uppercase leter-1 mb-lg-4">
									{AboutUs?.section_six_title}
								</h1>
								<p className="reg-font level-7  dark-color text-capitalize">
									{AboutUs?.section_six_description}
								</p>
							</div>
						</Col>
					</Row>
					<div className="resonance_cards">
						<Row justify="space-between" align="top">
							{firstThree?.map((course, index) => {
								return (
									<Col xs={24} sm={24} md={8}>
										<div className="training_course_card">
											<div className="training_course_img">
												<img
													src={course?.course_img}
													alt=""
													className="img-fluid"
												/>
											</div>
											<div className="training_course_body">
												<div className="pt-3">
													<h1 className=" dark-color med-font level-5-sm  text-uppercase line-clamp line-clamp-2">
														{course?.title}
													</h1>
												</div>
												<div className="">
													<p className="reg-font level-8  dark-color text-capitalize">
														{course?.description}
													</p>
												</div>
											</div>
										</div>
									</Col>
								);
							})}
						</Row>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default AboutUs;
