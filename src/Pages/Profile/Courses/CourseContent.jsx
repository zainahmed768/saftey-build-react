import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import { Link } from "react-router-dom";

const CourseContent = ({ content, handleChapterDetail, navigate }) => {
	// const isChapterDisabled = (data, index) => {
	// 	console.log(data[index - 1], "asdjjasdj");
	// 	// Agar index 0 hai tou button kabhi disable nahi hoga
	// 	if (index === 0) return false;

	// 	// Pichle object ke is_completed ko check karein
	// 	return !data[index - 1].is_completed;
	// };
	const isChapterDisabled = (data, index) => {
		console.log(data[index - 1], "Previous Chapter Data");
		// If index is 0, the button should not be disabled
		if (index === 0) return false;

		// Check if previous chapter exists and is_completed is defined
		const previousChapter = data[index - 1];
		if (!previousChapter || typeof previousChapter.is_completed !== "boolean") {
			console.error("Invalid data for previous chapter:", previousChapter);
			return true; // Disable the button by default if data is invalid
		}

		// Return true if the previous chapter is not completed
		return !previousChapter.is_completed;
	};

	const chapterRedirect = (content, item, index) => {
		console.log(content, "dhsdb");
		if (isChapterDisabled(content, index)) {
			return;
		} else {
			handleChapterDetail(item);
		}
	};

	const isButtonDisabled = (data, index) => {
		// Agar index 0 hai tou button kabhi disable nahi hoga
		if (index === 0) return false;

		// Pichle object ke is_completed ko check karein
		return !data[index - 1].is_completed;
	};
	return (
		<>
			{content?.chapters?.map((item, index) => {
				return (
					<div className="course-content-list-wrapper d-flex align-items-center justify-content-between py-3">
						<div
							className="course-list-right-wrapper"
							onClick={() => chapterRedirect(content?.chapters, item, index)}
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
								{/* {item?.quizes?.map((quiz, index) => {
									return (
										<CommanButton
											label={`${
												quiz?.is_quiz_attempt ? "retake quiz" : "take quiz"
											} ${index + 1}`}
											link={"/quiz/" + quiz?.slug}
											disabled={isChapterDisabled(content?.chapters, index)}
										/>
									);
								})} */}
								{item?.quizes?.map((quiz, ind) => {
									console.log(quiz, "Quiz Data");
									return (
										<CommanButton
											label={`${
												quiz?.is_quiz_attempt ? "retake quiz" : "take quiz"
											} ${ind + 1}`}
											link={"/quiz/" + quiz?.slug}
											disabled={isChapterDisabled(
												content?.chapters || [],
												index,
											)}
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
