import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import {
  EDIT_PROFILE,
  GET_PROFILE,
  LOGIN_URL,
  REGISTER_URL,
  RESEND_VERIFY_OTP,
  VERIFY_ACCOUNT,
} from "../../utils/endpoints";

const AuthServices = createApi({
  reducerPath: "AuthServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    tagTypes: "editInfo",
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
      invalidatesTags: ["editInfo"],
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
} = AuthServices;
