
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import { CONTACT_US } from "../../utils/endpoints";

const ContactServices = createApi({
  reducerPath: "ContactServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    tagTypes: "contact",
  }),
  endpoints: (build) => ({
    contact: build.mutation({
      query: (data) => {
        return {
          url: CONTACT_US,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["contact"],
    }),
  }),
});

export default ContactServices;

export const { useContactMutation } = ContactServices;
