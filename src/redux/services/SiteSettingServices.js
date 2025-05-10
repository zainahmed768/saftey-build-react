import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import { PAGES } from "../../utils/endpoints";

const SiteSettingServices = createApi({
  reducerPath: "SiteSettingServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    pages: build.query({
      query: (name) => {
        return {
          url: `${PAGES}/${name}`,
          method: "GET",
        };
      },
    }),
  }),
});

export default SiteSettingServices;

export const { usePagesQuery } = SiteSettingServices;
