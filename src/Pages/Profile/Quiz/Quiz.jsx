import React, { useState, useEffect } from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { useGetQuizQuery } from "../../../redux/services/AuthServices";
import QuizCard from "./QuizCard";
import "../Quiz/quiz.css";

const QuizPage = () => {
	const param = useParams();
	const { data: getQuiz, isLoading } = useGetQuizQuery(param?.slug);
	const QuizDetail = getQuiz?.response?.data;

	const [quizStatus, setQuizStatus] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(null); // Initialize as null

	// Retrieve saved timeRemaining on component mount
	useEffect(() => {
		if (QuizDetail?.duration) {
			const savedTime = Number(localStorage.getItem("timeRemaining"));
			const durationInSeconds = QuizDetail.duration * 60;

			// Use saved time if it exists and is valid, otherwise use the full duration
			setTimeRemaining(savedTime > 0 ? savedTime : durationInSeconds);
		}
	}, [QuizDetail]);

	// Save the timeRemaining to localStorage whenever it changes
	useEffect(() => {
		if (timeRemaining !== null) {
			localStorage.setItem("timeRemaining", timeRemaining);
		}
	}, [timeRemaining]);

	// Timer function to update timeRemaining every second
	useEffect(() => {
		if (quizStatus) {
			const timer = setInterval(() => {
				setTimeRemaining((prevTime) => {
					if (prevTime <= 1) {
						clearInterval(timer);
						localStorage.removeItem("timeRemaining"); // Clear saved time on expiry
						setQuizStatus(false); // Submit the quiz once the timer runs out
					}
					return prevTime - 1;
				});
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [quizStatus]);

	// Trigger the quiz to start after data is fetched
	useEffect(() => {
		if (QuizDetail) {
			const savedState = JSON.parse(localStorage.getItem("quizState"));
			if (savedState) {
				setQuizStatus(true);
			}
		}
	}, [QuizDetail]);

	// Function to return time in numeric format
	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return { minutes, seconds }; // Return as numbers
	};

	if (isLoading) {
		return (
			<div className="loader-wrapper">
				<Spin size="large" style={{ color: "#000" }} />
			</div>
		);
	}

	// Ensure timeRemaining is ready before rendering formatted time
	const { minutes = 0, seconds = 0 } =
		timeRemaining !== null ? formatTime(timeRemaining) : {};

	return (
		<ProfileLayout type="quiz" sidebar={false}>
			<div className="col-lg-12">
				<div className="quiz-card-wrapper">
					<div className="quiz-header-wrapper d-flex justify-content-between align-items-center">
						<div className="quiz-heading-wrapper">
							<h4 className="text-uppercase heading-font level-4 mb-0">
								{QuizDetail?.title}
							</h4>
						</div>
						<div className="quiz-info-wrapper d-flex justify-content-between align-items-center gap-2">
							<div className="total-marks-wrapper">
								<p className="mb-0">
									Total Marks:{" "}
									<span className="marks">{QuizDetail?.total_marks}</span>
								</p>
							</div>
							<div className="timmer-wrapper">
								<p className="mb-0">
									{String(minutes).padStart(2, "0")}:
									{String(seconds).padStart(2, "0")} Remaining
								</p>
							</div>
						</div>
					</div>
					<QuizCard
						quiz={QuizDetail?.questions}
						setQuizStatus={setQuizStatus}
						timeRemaining={timeRemaining}
						setTimeRemaining={setTimeRemaining}
						duration={QuizDetail?.duration}
					/>
				</div>
			</div>
		</ProfileLayout>
	);
};

export default QuizPage;
