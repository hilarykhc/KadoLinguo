import "./Quiz.scss";
// import quizData from "../../data/quiz.json";
import { useState, useEffect } from "react";
import axios from "axios";
import quizBackground from "../../assets/oli/quiz_background.jpg";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await axios.get("http://localhost:8080/quiz");
        console.log(response.data);
        setQuizData(response.data);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    getQuiz();
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion]?.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz__container">
      {currentQuestion < quizData.length ? (
        <div className="quiz__content">
          <h2 className="quiz__question">
            {quizData[currentQuestion]?.question}
          </h2>
          <div className="quiz__choices">
            {quizData[currentQuestion]?.choices.map((choice, index) => (
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
