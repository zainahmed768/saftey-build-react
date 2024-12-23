import React, { useState } from "react";
import Alert from "../../../Components/SweetAlert/Alert";
import { usePostQuizMutation } from "../../../redux/services/AuthServices";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";

const QuizResult = () => {
	const location = useLocation();
	let quizResult = location.state;
	console.log(location.state, "location");
	return (
		<>
			<ProfileLayout type={"quiz"} sidebar={false}>
				<section className="quiz_result">
					<Container>
						<div className="quiz-card-wrapper">
							<div className="quiz-content-wrapper mt-4">
								<div className="quiz-score-wrapper text-center">
									<div className="row">
										<div className="col-lg-2"></div>
										<div className="col-lg-8">
											<div className="success-card-wrapper text-center my-5">
												<h3 className="heading-font level-3 text-uppercase">
													Congratulations on Completing the Quiz
												</h3>
												<p>
													Well done! You've successfully completed the quiz.
													Stay tuned for more exciting challenges!
												</p>
												<div className="marks-wrapper">
													<p>
														<span className="property me-2">
															Total Marks : <b>{quizResult?.total_marks}</b>
														</span>{" "}
														|{" "}
														<span className="property ms-2">
															Achieved Marks :{" "}
															<b>{quizResult?.marks_obtained}</b>{" "}
														</span>
													</p>
												</div>
												<div className="btn-wrap text-center mt-4">
													<span
														className={`GeneralButton d-flex justify-content-center`}
													>
														<Link to={"/my-profile"} className="text-dark">
															Done
														</Link>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</ProfileLayout>
		</>
	);
};

export default QuizResult;
