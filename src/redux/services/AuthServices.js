import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import {
	EDIT_PROFILE,
	GET_PROFILE,
	LOGIN_URL,
	MY_ORDERS,
	REGISTER_URL,
	RESEND_VERIFY_OTP,
	VERIFY_ACCOUNT,
	MY_COURSES,
	GET_QUIZ_DETAIL,
	MY_COURSE_DETAIL,
	CHANGE_PASSWORD,
	POST_QUIZ,
	ADD_STUDENT,
	GET_STUDENT,
	FORGET_PASSWORD,
	FORGET_OTP,
	UPDATE_NEW_PASSWORD,
	GET_STUDENT_DETAIL,
	CERTIFICATE,
} from "../../utils/endpoints";

const AuthServices = createApi({
	reducerPath: "AuthServices",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		tagTypes: ["editInfo", "quiz"],
		prepareHeaders: (headers, { getState, endpoint }) => {
			const reducers = getState();
			const token = reducers?.AuthReducer?.userToken;
			headers.set("Accept", "application/json");
			if (endpoint !== REGISTER_URL && token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => {
				return {
					url: LOGIN_URL,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		authRegister: build.mutation({
			query: (data) => {
				return {
					url: REGISTER_URL,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		verifyAccount: build.mutation({
			query: (data) => {
				return {
					url: VERIFY_ACCOUNT,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		forgetPassword: build.mutation({
			query: (data) => {
				return {
					url: FORGET_PASSWORD,
					method: "POST",
					body: data,
				};
			},
		}),
		resendVerifyOtp: build.mutation({
			query: (data) => {
				return {
					url: RESEND_VERIFY_OTP,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		getProfile: build.query({
			query: () => {
				return {
					url: GET_PROFILE,
					method: "GET",
				};
			},
			providesTags: ["editInfo"],
		}),
		editProfile: build.mutation({
			query: (data) => {
				return {
					url: EDIT_PROFILE,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		myOrders: build.query({
			query: () => {
				return {
					url: MY_ORDERS,
					method: "GET",
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		myCourses: build.query({
			query: () => {
				return {
					url: MY_COURSES,
					method: "GET",
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		myCourseDetail: build.query({
			query: (slug) => {
				return {
					url: `${MY_COURSE_DETAIL}/${slug}`,
					method: "GET",
				};
			},
			invalidatesTags: ["editInfo"],
		}),
		getQuiz: build.query({
			query: (slug) => {
				return {
					url: `${GET_QUIZ_DETAIL}/${slug}`,
					method: "GET",
				};
			},
			providesTags: ["quiz"],
		}),
		postQuiz: build.mutation({
			query: (data) => {
				return {
					url: POST_QUIZ,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["quiz"],
		}),
		changePassword: build.mutation({
			query: (data) => {
				return {
					url: CHANGE_PASSWORD,
					method: "POST",
					body: data,
				};
			},
		}),
		forgetOtp: build.mutation({
			query: (data) => {
				return {
					url: FORGET_OTP,
					method: "POST",
					body: data,
				};
			},
		}),
		UpdatePassword: build.mutation({
			query: (data) => {
				return {
					url: UPDATE_NEW_PASSWORD,
					method: "POST",
					body: data,
				};
			},
		}),
		addStudent: build.mutation({
			query: (data) => {
				return {
					url: ADD_STUDENT,
					method: "POST",
					body: data,
				};
			},
		}),
		certificateStudent: build.query({
			query: (data) => {
				return {
					url: `${CERTIFICATE}`,
					method: "GET",
				};
			},
		}),
		getStudent: build.query({
			query: (data) => {
				return {
					url: `${GET_STUDENT}?search=${data}`,
					method: "GET",
				};
			},
		}),
		getStudentDetails: build.query({
			query: (id) => {
				return {
					url: `${GET_STUDENT_DETAIL}${id}`,
					method: "GET",
				};
			},
		}),
	}),
});

export default AuthServices;

export const {
	useAuthRegisterMutation,
	useVerifyAccountMutation,
	useResendVerifyOtpMutation,
	useLoginMutation,
	useGetProfileQuery,
	useEditProfileMutation,
	useForgetOtpMutation,
	useMyOrdersQuery,
	useMyCoursesQuery,
	useMyCourseDetailQuery,
	useGetQuizQuery,
	usePostQuizMutation,
	useChangePasswordMutation,
	useAddStudentMutation,
	useForgetPasswordMutation,
	useUpdatePasswordMutation,
	useGetStudentQuery,
	useCertificateStudentQuery,
	useGetStudentDetailsQuery,
} = AuthServices;
