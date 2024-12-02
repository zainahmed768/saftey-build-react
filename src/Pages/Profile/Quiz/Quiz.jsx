import React, { useState } from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CommanButton from "../../../Components/CommanButton/CommanButton";
import "../Quiz/quiz.css";
import Quiz from "react-quiz-component";
import { quiz } from "../../../constant/data";
import QuizCard from "./QuizCard";

const QuizPage = () => {
  const [quizStatus, setQuizStatus] = useState(false);

  return (
    <>
      <ProfileLayout type={"quiz"} sidebar={false}>
        <div className="col-lg-12">
          <div className="quiz-card-wrapper">
            {quizStatus !== true && (
              <div className="quiz-header-wrapper d-flex justify-content-between align-items-center">
                <div className="quiz-heading-wrapper">
                  <h4 className="text-uppercase heading-font level-4 mb-0">
                    chapter 3 quiz test 1
                  </h4>
                </div>
                <div className="quiz-info-wrapper d-flex justify-content-between align-items-center gap-2">
                  <div className="total-marks-wrapper">
                    <p className="mb-0">
                      Total Marks : <span className="marks">100</span>
                    </p>
                  </div>
                  <div className="timmer-wrapper">
                    <p className="mb-0">09 Minutes - Time Taken</p>
                  </div>
                  {/* <div className="mark-view-btn-wrapper">
                    <CommanButton label={"view marks"} />
                  </div> */}
                </div>
              </div>
            )}

            <QuizCard quiz={quiz} setQuizStatus={setQuizStatus} />
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default QuizPage;
