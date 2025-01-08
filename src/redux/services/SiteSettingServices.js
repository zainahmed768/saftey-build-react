import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import { ABOUT, PAGES, REVIEWS, SITE_SETTINGS } from "../../utils/endpoints";

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
		aboutUs: build.query({
			query: () => {
				return {
					url: `${ABOUT}`,
					method: "GET",
				};
			},
		}),
		siteSetting: build.query({
			query: () => {
				return {
					url: `${SITE_SETTINGS}`,
					method: "GET",
				};
			},
		}),
		reviews: build.query({
			query: (name) => {
				return {
					url: `${REVIEWS}`,
					method: "GET",
				};
			},
		}),
	}),
});

export default SiteSettingServices;

export const {
	usePagesQuery,
	useReviewsQuery,
	useAboutUsQuery,
	useSiteSettingQuery,
} = SiteSettingServices;
