import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import { CHECKOUT, REGISTER_URL } from "../../utils/endpoints";

const PaymentServices = createApi({
  reducerPath: "PaymentServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
    checkout: build.mutation({
      query: (data) => {
        return {
          url: CHECKOUT,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export default PaymentServices;

export const { useCheckoutMutation } = PaymentServices;
