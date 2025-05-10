import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import { FAQ } from "../../utils/endpoints";

const FaqServices = createApi({
  reducerPath: "FaqServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    faq: build.query({
      query: () => {
        return {
          url: FAQ,
          method: "GET",
        };
      },
    }),
  }),
});

export default FaqServices;

export const { useFaqQuery } = FaqServices;
