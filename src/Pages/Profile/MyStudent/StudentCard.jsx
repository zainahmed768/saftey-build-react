import React from "react";
import { courseImg1 } from "../../../constant";
import { useNavigate } from "react-router-dom";

const StudentCard = (props) => {
	const { students } = props;
	console.log(students, "asdj3u2");
	const navigate = useNavigate();
	const handleStudentDetail = (id) => {
		navigate(`/my-student-detail/${id}`);
	};
	return (
		<>
			{students.map((student) => {
				return (
					<div
						className="student-card-wrapper d-flex gap-2 my-3"
						onClick={() => handleStudentDetail(student?.id)}
					>
						<div className="student-info-wrapper">
							<div className="student-info-img-wrapper">
								<figure>
									<img src={student?.image_url} className="img-fluid" alt="" />
								</figure>
								<div className="student-name-wrapper">
									<h4 className="heading-font dark-color mt-3 mb-0 text-uppercase">
										{student?.name}
									</h4>
									<p> {student?.email}</p>
								</div>
							</div>
						</div>
						<div className="student-course-info-wrapper">
							<div className="student-course-wrapper">
								<div className="student-course-heading-wrapper">
									<h4 className="heading-font dark-color mt-3 mb-0 text-uppercase">
										courses enrolled
									</h4>
								</div>
								<div className="course-overview-wrapper">
									<ul className="p-0 m-0">
										{student?.courses?.map((course) => (
											<li>{course?.title}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default StudentCard;
