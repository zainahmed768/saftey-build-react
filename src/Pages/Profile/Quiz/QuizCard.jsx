import React, { useEffect, useState } from "react";
import Alert from "../../../Components/SweetAlert/Alert";
import { usePostQuizMutation } from "../../../redux/services/AuthServices";
import { useNavigate } from "react-router-dom";

const QuizCard = ({
	quiz,
	setQuizStatus,
	timeRemaining,
	setTimeRemaining,
	duration,
}) => {
	const savedState = JSON.parse(localStorage.getItem("quizState"));
	const navigate = useNavigate();
	const [quizData, response] = usePostQuizMutation();
	console.log(quiz, "quiz");
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
		savedState ? savedState.currentQuestionIndex : 0,
	);
	const [selectedAnswers, setSelectedAnswers] = useState(
		savedState ? savedState.selectedAnswers : [],
	);
	const [isTimeExpired, setIsTimeExpired] = useState(false);
	console.log(isTimeExpired, "isTimeExpired");

	const [isSubmitted, setIsSubmitted] = useState(false);

	// Load saved state from localStorage if available
	// useEffect(() => {
	// 	if (savedState) {
	// 		setCurrentQuestionIndex(savedState.currentQuestionIndex);
	// 		setSelectedAnswers(savedState.selectedAnswers);
	// 	}
	// }, []);

	// Save state to localStorage to persist quiz progress
	useEffect(() => {
		localStorage.setItem(
			"quizState",
			JSON.stringify({
				currentQuestionIndex,
				selectedAnswers,
			}),
		);
	}, [currentQuestionIndex, selectedAnswers]);

	const handleAnswerSelect = (questionIndex, answerIndex) => {
		const quizObj = {
			questionId: quiz[questionIndex]?.id,
			answerId: quiz[questionIndex]?.options[answerIndex]?.id,
		};

		setSelectedAnswers((prev) => {
			const filteredAnswers = prev.filter(
				(answer) => answer.questionId !== quizObj.questionId,
			);
			return [...filteredAnswers, quizObj];
		});
	};

	const handleNextQuestion = () => {
		if (!isTimeExpired) {
			const currentAnswer = selectedAnswers.find(
				(answer) => answer.questionId === quiz[currentQuestionIndex]?.id,
			);

			if (!currentAnswer) {
				Alert({
					title: "Error",
					text: "Please select an option",
					iconStyle: "warning",
				});
				return;
			}
		}

		if (currentQuestionIndex < quiz?.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	useEffect(() => {
		if (timeRemaining === 0) {
			setIsTimeExpired(true);
		}
	}, [timeRemaining]);

	useEffect(() => {
		if (isTimeExpired) {
			handleSubmit();
		}
	}, [isTimeExpired]);

	const handleSubmit = () => {
		if (
			!isTimeExpired &&
			!selectedAnswers.find(
				(answer) => answer.questionId === quiz[currentQuestionIndex]?.id,
			)
		) {
			Alert({
				title: "Error",
				text: "Please select an option",
				iconStyle: "warning",
			});
			return;
		}

		setIsSubmitted(true);
		const formData = new FormData();
		formData.append("quiz_id", quiz[0]?.quiz_id);

		selectedAnswers?.forEach((item, index) => {
			formData.append(`answers[${index}][question_id]`, item?.questionId);
			formData.append(`answers[${index}][option_id]`, item?.answerId);
		});

		quizData(formData);
	};

	useEffect(() => {
		if (response?.isSuccess) {
			navigate("/result", { state: response?.data?.response?.data });
			localStorage.removeItem("quizState");
			localStorage.removeItem("timeRemaining");
		}
	}, [response?.isSuccess]);
	const handleRetake = () => {
		setCurrentQuestionIndex(0);
		setSelectedAnswers([]);
		setTimeRemaining(duration * 60);
		setIsSubmitted(false);
		setIsTimeExpired(false);
	};

	return (
		<div className="row">
			<div className="col-lg-12 pt-5">
				<div className="questions-length-wrapper position-relative">
					<div
						className="progress"
						role="progressbar"
						aria-valuenow={currentQuestionIndex + 1}
						aria-valuemin="0"
						aria-valuemax={quiz?.length}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated"
							style={{
								width: `${((currentQuestionIndex + 1) / quiz?.length) * 100}%`,
							}}
						></div>
					</div>
					<div className="quiz-question-number-wrapper position-absolute w-100 top-0">
						<ul className="d-flex justify-content-between mb-0 p-0">
							{quiz.map((_, index) => (
								<li key={index}>
									<span className="question-number">{index + 1}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="col-lg-1"></div>
			<div className="col-lg-10">
				<div className="quiz-content-wrapper mt-4">
					<div className="quiz-question-wrapper text-center mt-4">
						<p>{quiz[currentQuestionIndex]?.question}</p>
					</div>
					<div className="quiz-answer-wrapper mt-5">
						<div className="row">
							{quiz[currentQuestionIndex]?.options?.map((option, index) => (
								<div className="col-lg-6 my-2" key={option.id}>
									<label className="d-flex align-items-center position-relative">
										<input
											type="radio"
											name={`question-${currentQuestionIndex}`}
											className="btn-checkd"
											id={index}
											checked={
												selectedAnswers.find(
													(answer) =>
														answer.questionId ===
														quiz[currentQuestionIndex]?.id,
												)?.answerId === option.id
											}
											onChange={() =>
												handleAnswerSelect(currentQuestionIndex, index)
											}
										/>
										<label
											className="btn btn-outline-secondary rounded-pill  w-100 position-relative"
											htmlFor={`question-${currentQuestionIndex}`}
										>
											<span className="fw-bold me-2">
												{String.fromCharCode(65 + index)}
											</span>
											{option.value}
										</label>
									</label>
								</div>
							))}
						</div>
					</div>
					<div className="quiz-btn-wrapper text-center mt-4">
						{currentQuestionIndex < quiz?.length - 1 ? (
							<span className={`GeneralButton d-block`}>
								<button onClick={handleNextQuestion}>Next</button>
							</span>
						) : (
							<div className="d-flex gap-2 justify-content-center">
								<span className={`GeneralButton d-block`}>
									<button onClick={handleSubmit} disabled={response?.isLoading}>
										Submit
									</button>
								</span>
								<span className={`GeneralButton d-block`}>
									<button onClick={handleRetake}>Retake Quiz</button>
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
