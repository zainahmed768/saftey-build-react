import React from "react";
import CoursesCard from "../MyCourses/CoursesCard";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { courses } from "../../../constant/data";
import '../MyWishlist/wishlist.css'

const MyWishlist = () => {
  return (
    <ProfileLayout type={"team leader"}>
      <div class="row">
        <div class="col-lg-6 col">
          <h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
            mY wishlist
          </h2>
          <p>Nunc pellentesque libero et lore</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <CoursesCard courses={courses} />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default MyWishlist;
