import React, { useState } from "react";

const QuizCard = ({ quiz, setQuizStatus, setQuizMarks }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Handle answer selection
  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  // Calculate the final score
  const calculateScore = () => {
    let score = 0;
    quiz.forEach((question, index) => {
      // Check if the selected answer is the same as the correct answer
      if (selectedAnswers[index] === parseInt(question.correctAnswer) - 1) {
        score += parseInt(question.point);
      }
    });
    return score;
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Submit quiz and calculate the score
  const handleSubmit = () => {
    setIsSubmitted(true);
    setQuizStatus(true);
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="row">
      {!isSubmitted && (
        <div className="col-lg-12 pt-5">
          <div className="questions-length-wrapper position-relative">
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={currentQuestionIndex + 1}
              aria-valuemin="0"
              aria-valuemax={quiz.length}
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{
                  width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%`,
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
      )}

      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        <div className="quiz-content-wrapper mt-4">
          {!isSubmitted ? (
            <>
              <div className="quiz-question-wrapper text-center mt-4">
                <p>{quiz[currentQuestionIndex].question}</p>
              </div>
              <div className="quiz-answer-wrapper mt-5">
                <div className="row">
                  {quiz[currentQuestionIndex].answers.map((answer, index) => (
                    <div className="col-lg-6 my-2" key={index}>
                      <label className="d-flex align-items-center position-relative">
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          className="btn-checkd"
                          checked={
                            selectedAnswers[currentQuestionIndex] === index
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
                          {answer}
                        </label>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="quiz-btn-wrapper text-center mt-4">
                {currentQuestionIndex < quiz.length - 1 ? (
                  <span className={`GeneralButton d-block`}>
                    <button onClick={handleNextQuestion}>Next</button>
                  </span>
                ) : (
                  <>
                    <div className="d-flex gap-2 justify-content-center">
                      <span className={`GeneralButton d-block`}>
                        <button onClick={handleSubmit}>Submit</button>
                      </span>
                      <span className={`GeneralButton d-block`}>
                        <button onClick={handleRetake}>Retake Quiz</button>
                      </span>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="quiz-score-wrapper text-center">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <div className="success-card-wrapper text-center my-5 text-center">
                    <h3 className="heading-font level-3 text-uppercase">
                      Congratulations on Completing the Quiz
                    </h3>
                    <p>
                      Well done! You've successfully completed the quiz. stay
                      tuned for more exciting challenges!"
                    </p>
                    <div className="marks-wrapper">
                      <p>
                        <span className="property me-2">
                          Total Marks :{" "}
                          <b>
                            {quiz.reduce(
                              (acc, q) => acc + parseInt(q.point),
                              0
                            )}
                          </b>
                        </span>{" "}
                        |{" "}
                        <span className="property ms-2">
                          Achieved Marks : <b> {calculateScore()}</b>{" "}
                        </span>
                      </p>
                    </div>
                    <div className="btn-wrap text-center mt-4">
                      <span className={`GeneralButton d-block`}>
                        <button>Done</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
