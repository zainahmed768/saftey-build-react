import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
import CommanButton from "../../../Components/CommanButton/CommanButton";

const CourseContent = ({ content }) => {
	return (
		<>
			{content?.chapters?.map((item, index) => {
				return (
					<div className="course-content-list-wrapper d-flex align-items-center justify-content-between py-3">
						<div className="course-list-right-wrapper">
							<div className="course-heading-wrapper">
								<h5>{item?.title}</h5>
							</div>
							<div className="course-play-button-wrapper">
								<p className="mb-0">
									<IoIosPlayCircle size={20} color="#949494" />{" "}
									<span>{item?.video_length}</span>
								</p>
							</div>
						</div>
						<div className="course-list-left-wrapper text-end">
							<div className="course-btns-wrapper">
								<button className="text-uppercase text-decoration-underline mb-2 bg-transparent border-0 heading-font bg-transparent complete-quiz-btn">
									mark complete
								</button>
								{item?.quizes?.map((quiz) => {
									return (
										<CommanButton
											label={`take quiz ${index + 1}`}
											link={"/quiz/" + quiz?.slug}
										/>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default CourseContent;
