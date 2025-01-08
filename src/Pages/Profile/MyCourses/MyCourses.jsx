import React, { useEffect, useState } from "react";
import "../../Profile/MyCourses/courses.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CoursesCard from "./CoursesCard";
import { courses } from "../../../constant/data";
import CoursesReview from "./CoursesReview";
import { useMyCoursesQuery } from "../../../redux/services/AuthServices";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const MyCourses = () => {
	const { data: getMyCourses, isLoading, refetch } = useMyCoursesQuery();
	const [review, setReview] = useState(false);
	const [course, setCourse] = useState(null);
	let myCourse = getMyCourses?.response?.data;
	console.log(myCourse, "ekjsdbvmyCourse");

	useEffect(() => {
		refetch();
	}, [myCourse]);
	const user = useSelector((state) => state?.AuthReducer?.user);
	return (
		<>
			<ProfileLayout type={user?.role_name}>
				<div class="row">
					<div class="col-lg-6 col">
						<h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
							mY courses
						</h2>
						{/* <p>Nunc pellentesque libero et lore</p> */}
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						{review == false ? (
							isLoading ? (
								<div className="courses-loader-wrapper">
									<Spin size="large" />
								</div>
							) : myCourse?.length > 0 ? (
								<CoursesCard
									courses={myCourse}
									setReview={setReview}
									setCourse={setCourse}
								/>
							) : (
								<h2 className="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
									You have not enrolled in any course yet.
								</h2>
							)
						) : (
							<CoursesReview course={course} setReview={setReview} />
						)}
					</div>
				</div>
			</ProfileLayout>
		</>
	);
};

export default MyCourses;
