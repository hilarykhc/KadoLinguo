import { useParams, useNavigate } from "react-router-dom";
import "./QuizPage.scss";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizPage = () => {
  const { quizId = 1 } = useParams();

  const [wordPairs, setWordPairs] = useState([]);
  const [currentPair, setCurrentPair] = useState({});
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    const nextQuizId = parseInt(quizId, 10) + 1;
    navigate(`/quiz/${nextQuizId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/cards");
        const data = await response.json();
        setWordPairs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    //random pairing
    if (wordPairs.length > 0) {
      const randomIndex = Math.floor(Math.random() * wordPairs.length);
      const selectedPair = wordPairs[randomIndex];
      setCurrentPair(selectedPair);

      const shuffledOptions = shuffleArray([
        selectedPair.french,
        getRandomIncorrectOption(wordPairs, selectedPair.french),
      ]);
      setOptions(shuffledOptions);

      // Reset state
      setSelectedOption(null);
      setIsCorrect(null);
      setShowSuccessMessage(false);
    }
  }, [wordPairs, quizId]);

  useEffect(() => {
    if (isCorrect) {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
        setSelectedOption(null);
        setIsCorrect(null);
      }, 1000);
    }
  }, [isCorrect]);

  //shuffle
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const getRandomIncorrectOption = (pairs, correctOption) => {
    const incorrectOptions = pairs
      .filter((pair) => pair.french !== correctOption)
      .map((pair) => pair.french);

    const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
    return incorrectOptions[randomIndex];
  };

  const handleOptionClick = (clickedOption) => {
    // Check if an option is selected
    if (selectedOption !== null || isCorrect !== null) {
      return;
    }

    const correct = clickedOption === currentPair.french;
    setIsCorrect(correct);

    if (correct) {
      toast.success("Bon Travail!", { autoClose: 1000 });
    } else {
      toast.error("Lâche pas la patate", { autoClose: 1000 });
    }
  };

  return (
    <div className="container-big">
      <div className="quiz__container">
        <h2>What is "{currentPair.english}" in French?</h2>
        <ul>
          {options.map((option, index) => (
            <button
              key={index}
              className={
                selectedOption === option
                  ? isCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </ul>

        <ToastContainer />
        {showSuccessMessage && (
          <div className="success-message">Bon Travail!</div>
        )}
      </div>
      <div className="quiz__buttons">
        <button className="center__card-btn" onClick={handleNextClick}>
          PREV
        </button>
        <button className="center__card-btn" onClick={handleNextClick}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
