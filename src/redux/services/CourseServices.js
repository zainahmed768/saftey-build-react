import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/baseUrl";
import { ALL_COURSES, GET_SINGLE_COURSES } from "../../utils/endpoints";

const CourseServices = createApi({
  reducerPath: "CourseServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    allCourses: build.query({
      query: () => {
        return {
          url: ALL_COURSES,
          method: "GET",
        };
      },
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
  }),
});

export default CourseServices;

export const {
  useAllCoursesQuery,
  useGetSingleCourseQuery,
  useLazySortCoursesQuery,
  useLazySearchCoursesQuery,
} = CourseServices;
