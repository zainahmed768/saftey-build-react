import React from "react";
import "../../Profile/MyStudent/student.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { CiSearch } from "react-icons/ci";
import StudentCard from "./StudentCard";
import { courseImg1, courseImg2, courseImg3 } from "../../../constant";
import { students } from "../../../constant/data";

const MyStudent = () => {
  return (
    <>
      <ProfileLayout type={"team leader"}>
        <div class="row">
          <div class="col-lg-4 col">
            <h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
              MY STUDENTS
            </h2>
          </div>
          <div className="col-lg-8">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="student-search-wrapper">
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search student"
                      />
                      <button type="submit">
                        <CiSearch color="#fff" size={20} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-4 col d-flex justify-content-end my-lg-4">
                <CommanButton
                  label={"Add student"}
                  className={"add-btn-student"}
                  link={"/add-student"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <StudentCard students={students} />
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default MyStudent;
