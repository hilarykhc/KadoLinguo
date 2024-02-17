import "./PracticePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PracticePage() {
  const { cardId } = useParams();
  const [currentCardId, setCurrentCardId] = useState(parseInt(cardId || 1));
  const [currentCard, setCurrentCard] = useState(null);
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false); // New state for flip
  const navigate = useNavigate(); //to navigate to homepage when we are out of cards

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/cards/${currentCardId}`
        );
        setCurrentCard(response.data);
      } catch (error) {
        console.error(error);
        setCurrentCard(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [cardId, currentCardId]);

  const getAllCards = async () => {
    try {
      const response = await axios.get("http://localhost:8081/cards");
      setAllCards(response.data);
    } catch (error) {
      console.error("Error fetching flashcard data:", error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, [cardId]);

  const handleNextClick = () => {
    const nextCardId = currentCardId + 1;
    setCurrentCardId(nextCardId);
    setIsFlipped(false); // Reset flip state when moving to the next card
    window.history.pushState(null, null, `/cards/${nextCardId}`);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state on card click
  };
  const handleGoHomeClick = () => {
    navigate("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentCard) {
    return (
      <div>
        We've run out of cards!{" "}
        <button onClick={handleGoHomeClick}>Go Home!</button>
      </div>
    );
  }

  return (
    <div className="center">
      <div
        key={currentCard.id}
        className={`center__card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="center__card-front">
          <h3 className="center__card-english">{currentCard.english}</h3>
        </div>
        <div className="center__card-back">
          <h3 className="center__card-french">{currentCard.french}</h3>
        </div>
      </div>
      <button className="center__card-btn" onClick={handleNextClick}>
        PREV
      </button>
      <button className="center__card-btn" onClick={handleNextClick}>
        NEXT
      </button>
    </div>
  );
}
