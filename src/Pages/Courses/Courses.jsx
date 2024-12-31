import React, { useEffect, useState } from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import search_icon from "../../assets/images/search_icon.png";
import box_icon from "../../assets/images/box_icon.svg";
import dots_bar from "../../assets/images/3_dots_bar.svg";
import "../Courses/Courses.css";
import CoursesCard from "../../Components/CoursesCard/CoursesCard";
import { Pagination, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import Footer from "../../layout/footer/Footerr";
import {
	useAllCoursesQuery,
	useLazySortCoursesQuery,
	useLazySearchCoursesQuery, // Add your search hook
} from "../../redux/services/CourseServices";

const Courses = () => {
	const navigate = useNavigate();
	const { data: allcourses, isLoading } = useAllCoursesQuery();
	const [sortCourse, { data: sortCourseData }] = useLazySortCoursesQuery();
	const [searchCourses, { data: searchCourseData }] =
		useLazySearchCoursesQuery(); // Add lazy query for search

	const [allCourses, setAllCourses] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [current, setCurrent] = useState(1);
	const [debounceTimeout, setDebounceTimeout] = useState(null);

	useEffect(() => {
		if (allcourses?.response?.data) {
			setAllCourses(allcourses.response.data);
		}
	}, [allcourses]);

	useEffect(() => {
		if (sortCourseData?.response?.data) {
			setAllCourses(sortCourseData.response.data);
		}
	}, [sortCourseData]);

	useEffect(() => {
		if (searchCourseData?.response?.data) {
			setAllCourses(searchCourseData.response.data);
		}
	}, [searchCourseData]);

	const onChange = (page) => {
		setCurrent(page);
	};

	const onClick = (item) => {
		navigate("/course-details/" + item?.id);
	};

	const handleSort = (e) => {
		sortCourse(e.target.value);
	};

	const handleSearch = (e) => {
		const value = e.target.value;
		setSearchTerm(value);

		// Debounce API calls
		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		const newTimeout = setTimeout(() => {
			if (value.trim() !== "") {
				searchCourses(value);
			} else {
				setAllCourses(allcourses?.response?.data || []); // Reset to all courses
			}
		}, 300); // Adjust debounce delay as needed
		setDebounceTimeout(newTimeout);
	};

	return (
		<>
			<PrimaryHeader
				pageTitle={"courses"}
				pageDesc={
					"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
				}
			/>

			<section>
				<div className="site_width py-5">
					{isLoading ? (
						<div className="courses-loader-wrapper">
							<Spin size="large" />
						</div>
					) : (
						<>
							<div className="row">
								<div className="col-lg-6">
									<label
										htmlFor="search"
										className="med-font color-dark level-8 text-capitalize mb-1"
									>
										Search Here
									</label>
									<div className="position-relative">
										<input
											id="search"
											type="text"
											className="form-control-1"
											placeholder="Search your keyword here"
											value={searchTerm}
											onChange={handleSearch}
										/>
										<span className="search_box">
											<img src={search_icon} alt="Search Icon" />
										</span>
									</div>
								</div>

								<div className="col-lg-2 offset-lg-2 p-lg-0">
									<label
										htmlFor="sort"
										className="med-font color-dark level-8 text-capitalize mb-1"
									>
										Sort By
									</label>
									<select
										id="sort"
										className="form-select-1"
										onChange={handleSort}
									>
										<option value="" disabled selected>
											Select Sorting
										</option>
										<option value="low_to_high">Low To High</option>
										<option value="high_to_low">High To Low</option>
									</select>
								</div>

								<div className="col-lg-1 my-auto">
									<div className="yellow_box">
										<img src={box_icon} alt="Box Icon" className="img-fluid" />
									</div>
								</div>

								<div className="col-lg-1 my-auto">
									<div className="dots_bar">
										<img src={dots_bar} alt="Dots Icon" className="img-fluid" />
									</div>
								</div>
							</div>

							<div className="py-3">
								<div className="row">
									{allCourses?.map((item, key) => (
										<div className="col-lg-4" key={key}>
											<CoursesCard
												onClick={() => onClick(item)}
												img={item?.course_img}
												label={item?.label}
												title={item?.title}
												price={item?.price}
												rating={undefined}
												isActiveStar={false}
											/>
										</div>
									))}
								</div>
							</div>

							<div className="d-flex justify-content-center">
								<Pagination current={current} onChange={onChange} total={50} />
							</div>
						</>
					)}
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Courses;
