import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import {
	ADD_WISHLIST,
	ALL_COURSES,
	GET_SINGLE_COURSES,
	GET_WISHLIST,
	POST_COURSE_REVIEW,
	REMOVE_WISHLIST,
} from "../../utils/endpoints";

const CourseServices = createApi({
	reducerPath: "CourseServices",
	tagTypes: ["courseTag"],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const reducers = getState();
			const token = reducers?.AuthReducer?.userToken;
			headers.set("authorization", token ? `Bearer ${token}` : "");
			headers.set("Access-Control-Allow-Origin", "*");
			return headers;
		},
	}),
	endpoints: (build) => ({
		allCourses: build.query({
			query: () => {
				return {
					url: ALL_COURSES,
					method: "GET",
				};
			},
			providesTags: ["courseTag"],
		}),
		getSingleCourse: build.query({
			query: (id) => {
				return {
					url: GET_SINGLE_COURSES,
					method: "GET",
					params: {
						id: id,
					},
				};
			},
			providesTags: ["courseTag"],
		}),
		sortCourses: build.query({
			query: (sortBy) => {
				return {
					url: ALL_COURSES,
					method: "GET",
					params: {
						sortBy: sortBy,
					},
				};
			},
		}),
		searchCourses: build.query({
			query: (course) => {
				return {
					url: ALL_COURSES,
					method: "GET",
					params: {
						search: course,
					},
				};
			},
		}),
		getWishlist: build.query({
			query: () => {
				return {
					url: GET_WISHLIST,
					method: "GET",
				};
			},
			providesTags: ["courseTag"],
		}),
		addWishlist: build.mutation({
			query: (id) => {
				return {
					url: ADD_WISHLIST,
					method: "POST",
					body: id,
				};
			},
			invalidatesTags: ["courseTag"],
		}),
		removeWishlist: build.mutation({
			query: (id) => {
				return {
					url: REMOVE_WISHLIST,
					method: "POST",
					body: id,
				};
			},
			invalidatesTags: ["courseTag"],
		}),
		postReview: build.mutation({
			query: (data) => {
				return {
					url: POST_COURSE_REVIEW,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["courseTag"],
		}),
	}),
});

export default CourseServices;

export const {
	useAllCoursesQuery,
	useGetSingleCourseQuery,
	useLazySortCoursesQuery,
	useLazySearchCoursesQuery,
	useGetWishlistQuery,
	useAddWishlistMutation,
	useRemoveWishlistMutation,
	usePostReviewMutation,
} = CourseServices;
