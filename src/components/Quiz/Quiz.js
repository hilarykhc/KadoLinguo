import "./Quiz.scss";
import quizData from "../../data/quiz.json";
import { useState } from "react";
import quizBackground from "../../assets/oli/quiz_background.jpg";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz__container">
      {currentQuestion < quizData.length ? (
        <div className="quiz__content">
          <h2 className="quiz__question">
            {quizData[currentQuestion].question}
          </h2>
          <div className="quiz__choices">
            {quizData[currentQuestion].choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(choice)}
                className="quiz__choices-btn"
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz__response">
          <h2 className="quiz__response-message">Quiz Completed!</h2>
          <p className="quiz__response-score">
            Your Score: {score}/{quizData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
