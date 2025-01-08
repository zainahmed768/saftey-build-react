import React, { useEffect, useState } from "react";
import "../../Profile/MyStudent/student.css";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { CiSearch } from "react-icons/ci";
import StudentCard from "./StudentCard";
import { courseImg1, courseImg2, courseImg3 } from "../../../constant";
import { students } from "../../../constant/data";
import { useGetStudentQuery } from "../../../redux/services/AuthServices";
import { useSelector } from "react-redux";

const MyStudent = () => {
	const [search, setSearch] = useState("");
	const userData = useSelector((state) => state.AuthReducer.user);
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const { data: student, isLoading } = useGetStudentQuery(debouncedSearch);
	let myStudents = student?.response?.data;

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [search]);

	return (
		<>
			<ProfileLayout type={userData?.role_name}>
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
												value={search}
												onChange={(e) => setSearch(e.target.value)}
												className="form-control"
												placeholder="Search student"
											/>
											{/* <button type="submit">
												<CiSearch color="#fff" size={20} />
											</button> */}
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
						{myStudents?.length > 0 ? (
							<StudentCard students={myStudents} />
						) : (
							<h2 className="text-uppercase heading-font text-dark level-3-sm">
								No Record Found
							</h2>
						)}
					</div>
				</div>
			</ProfileLayout>
		</>
	);
};

export default MyStudent;
