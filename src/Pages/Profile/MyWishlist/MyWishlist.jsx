import React, { useEffect } from "react";
import CoursesCard from "../MyCourses/CoursesCard";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { courses } from "../../../constant/data";
import "../MyWishlist/wishlist.css";
import { useGetWishlistQuery } from "../../../redux/services/CourseServices";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const MyWishlist = () => {
	// WISHLIST DATA
	const { data: wishlistItem, isLoading, refetch } = useGetWishlistQuery();
	let wishlists = wishlistItem?.response?.data;
	console.log(wishlists, "wishlists");

	const wishlistCourses = wishlists?.map((item) => {
		return item?.course;
	});

	console.log(wishlistCourses, "wishlistCourses");

	useEffect(() => {
		refetch();
	}, []);

	const user = useSelector((state) => state?.AuthReducer?.user);

	return (
		<ProfileLayout type={user?.role_name}>
			<div class="row">
				<div class="col-lg-6 col">
					<h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
						mY wishlist
					</h2>
					{/* <p>Nunc pellentesque libero et lore</p> */}
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					{!isLoading ? (
						wishlists?.length > 0 ? (
							<CoursesCard courses={wishlistCourses} />
						) : (
							<h2 className="text-uppercase heading-font text-dark level-3-sm">
								No Record Found
							</h2>
						)
					) : (
						<div className="courses-loader-wrapper">
							<Spin size="large" />
						</div>
					)}
				</div>
			</div>
		</ProfileLayout>
	);
};

export default MyWishlist;
