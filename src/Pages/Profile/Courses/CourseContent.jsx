import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { Link } from "react-router-dom";

const CourseContent = ({ content, handleChapterDetail }) => {
	const isChapterDisabled = (index) => {
		// Agar index 0 hai tou button kabhi disable nahi hoga
		if (index === 0) return false;

		// Pichle object ke is_completed ko check karein
		return !data[index - 1].is_completed;
	};
	const chapterRedirect = (content, index) => {
		console.log(content, "dhsdb");
		if (isChapterDisabled(index)) {
			return;
		} else {
			handleChapterDetail(content);
		}
	};

	const isButtonDisabled = (index) => {
		// Agar index 0 hai tou button kabhi disable nahi hoga
		if (index === 0) return false;

		// Pichle object ke is_completed ko check karein
		return !data[index - 1].is_quiz_attempt;
	};
	return (
		<>
			{content?.chapters?.map((item, index) => {
				return (
					<div className="course-content-list-wrapper d-flex align-items-center justify-content-between py-3">
						<div
							className="course-list-right-wrapper"
							onClick={() => chapterRedirect(item, index)}
						>
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
								{/* <button className="text-uppercase text-decoration-underline mb-2 bg-transparent border-0 heading-font bg-transparent complete-quiz-btn">
                  mark complete
                </button> */}
								{item?.quizes?.map((quiz) => {
									return quiz?.is_quiz_attempt === false ? (
										<CommanButton
											label={`take quiz ${index + 1}`}
											link={"/quiz/" + quiz?.slug}
											disabled={isButtonDisabled(index)}
										/>
									) : (
										<CommanButton
											label={`retake quiz ${index + 1}`}
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
