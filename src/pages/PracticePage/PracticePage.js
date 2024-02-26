import "./PracticePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function PracticePage() {
  const { cardId = "" } = useParams();
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentCardId, setCurrentCardId] = useState(parseInt(cardId || 1));

  const [loading, setLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  console.log(cardId);

  useEffect(() => {
    const getCards = async () => {
      try {
        // const response = await axios.get(`${REACT_APP_SERVER_URL}/cards`);
        const response = await axios.get("http://localhost:8080/cards");
        console.log(response.data);
        setCards(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCards();
  }, []);

  useEffect(() => {
    const getSingleCard = async () => {
      try {
        const singleCard = currentCardId;
        const singleCardRes = await axios.get(
          `http://localhost:8080/cards/${singleCard}`
        );
        setCurrentCard(singleCardRes.data);
      } catch (error) {
        console.error("Error getting single card:", error);

        if (error.response && error.response.status === 404) {
          setCurrentCard(null);
        } else {
          console.log();
        }
      } finally {
        setLoading(false);
      }
    };
    getSingleCard();
  }, [cardId]);

  // function renderFrontImage(front) {
  //   if (front && front.type === "Buffer") {
  //     const imageSrc = `data:image/png;base64,${arrayBufferToBase64(
  //       front.data.data
  //     )}`;
  //     console.log(imageSrc);
  //     return <img src={imageSrc} alt="Front Image" />;
  //   } else {
  //     return <span>{front}</span>;
  //   }
  // }

  // function arrayBufferToBase64(buffer) {
  //   let binary = "";
  //   const bytes = new Uint8Array(buffer);
  //   bytes.forEach((byte) => {
  //     binary += String.fromCharCode(byte);
  //   });
  //   console.log(bytes);
  //   return btoa(binary);
  // }

  const handleNextClick = () => {
    const nextCardId = currentCardId + 1;
    setCurrentCardId(nextCardId);
    setIsFlipped(false); // reset flip
    navigate(`/flashcards/practice/${nextCardId}`);
  };

  const handlePrevClick = () => {
    const nextCardId = currentCardId - 1;
    setCurrentCardId(nextCardId);
    setIsFlipped(false); // reset flip
    navigate(`/flashcards/practice/${nextCardId}`);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // toggle flip
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
          <img
            src={currentCard.front}
            alt={currentCard.back}
            // style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
            className="center__card-front-img"
          />
        </div>
        <div className="center__card-back">
          <div className="center__card-back-text">{currentCard.back}</div>
        </div>
      </div>
      <div className="center__card-btn-wrapper">
        <button className="center__card-btn" onClick={handlePrevClick}>
          PREV
        </button>
        <button className="center__card-btn" onClick={handleNextClick}>
          NEXT
        </button>
      </div>
    </div>
  );
}

// ------------------------------------------------

// const { cardId } = useParams();
// const [currentCardId, setCurrentCardId] = useState(parseInt(cardId || 1));
// const [currentCard, setCurrentCard] = useState(null);
// const [allCards, setAllCards] = useState([]);
// const [loading, setLoading] = useState(true);
// const [isFlipped, setIsFlipped] = useState(false); // New state for flip
// const navigate = useNavigate(); //to navigate to homepage when we are out of cards

// useEffect(() => {
//   const fetchCards = async () => {
//     try {
//       const response = await axios.get(
//         `${REACT_APP_SERVER_URL}/cards/${currentCardId}`
//       );
//       setCurrentCard(response.data);
//     } catch (error) {
//       console.error(error);
//       setCurrentCard(null);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchCards();
// }, [cardId, currentCardId]);

// const getAllCards = async () => {
//   try {
//     const response = await axios.get(`${REACT_APP_SERVER_URL}/cards`);
//     setAllCards(response.data);
//   } catch (error) {
//     console.error("Error fetching flashcard data:", error);
//   }
// };

// useEffect(() => {
//   getAllCards();
// }, [cardId]);

//---------------------------------------------
