// Import necessary libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Faq from "../../Pages/Faq/Faq";
import Signin from "../../Pages/Auth/Signin/Signin";
import Signup from "../../Pages/Auth/Signup/Signup";
import OTP from "../../Pages/Auth/OTP/OTP";
import Courses from "../../Pages/Courses/Courses";
import MyCart from "../../Pages/MyCart/MyCart";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import ContacUs from "../../Pages/ContacUs/ContacUs";
import TermCondition from "../../Pages/TermCondition/TermCondition";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import ForgotPassword from "../../Pages/Auth/ForgotPassword/ForgotPassword";
import MyProfile from "../../Pages/Profile/MyProfile/MyProfile";
import MyOrders from "../../Pages/Profile/MyOrders/Myorders";
import EditProfile from "../../Pages/Profile/EditProfile/EditProfile";
import ChangePassword from "../../Pages/Profile/ChangePassword/ChangePassword";
import MyStudent from "../../Pages/Profile/MyStudent/MyStudent";
import StudentCourseDetail from "../../Pages/Profile/MyStudent/StudentCourseDetail";
import AddStudent from "../../Pages/Profile/MyStudent/AddStudent";
import MyCourses from "../../Pages/Profile/MyCourses/MyCourses";
import CoursesReview from "../../Pages/Profile/MyCourses/CoursesReview";
import MyWishlist from "../../Pages/Profile/MyWishlist/MyWishlist";
import MyCertificates from "../../Pages/Profile/MyCertificates/MyCertificates";
import ViewCourses from "../../Pages/Profile/Courses/ViewCourses";
import QuizPage from "../../Pages/Profile/Quiz/Quiz";
import UserChangePassword from "../../Pages/Auth/ChangePassword/UserChangePassword";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/contact-us" element={<ContacUs />} />
        <Route path="/terms-conditions" element={<TermCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/auth-change-password" element={<UserChangePassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-student" element={<MyStudent />} />
        <Route path="/my-student-detail" element={<StudentCourseDetail />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/my-course" element={<MyCourses />} />
        <Route path="/review-course" element={<CoursesReview />} />
        <Route path="/my-wishlist" element={<MyWishlist />} />
        <Route path="/my-certificates" element={<MyCertificates />} />
        <Route path="/view-courses" element={<ViewCourses />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
