import axios from "axios";
import "./CardPairing.scss";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const CardPairing = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await axios.get("http://localhost:8080/cards");
        setCards(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCards();
  }, []);

  const handleCardClick = async (id) => {
    if (selectedCards.length === 2) {
      return; // Ignore clicks when two cards are already selected
    }

    const clickedCard = cards.find((card) => card.id === id);

    if (!clickedCard.isMatched && !selectedCards.includes(clickedCard)) {
      const newSelectedCards = [...selectedCards, clickedCard];
      setSelectedCards(newSelectedCards);

      if (newSelectedCards.length === 2) {
        checkForMatch(newSelectedCards);
      }
    }
  };

  const checkForMatch = async (selectedCards) => {
    const [card1, card2] = selectedCards;

    try {
      const response = await axios.post("http://localhost:8080/checkMatch", {
        card1: card1.id,
        card2: card2.id,
      });

      if (response.data.isMatch) {
        // Match found, mark cards as matched
        const newCards = cards.map((card) =>
          selectedCards.includes(card) ? { ...card, isMatched: true } : card
        );
        setCards(newCards);
        setSelectedCards([]);

        // Display a message saying the pair is correct
        console.log("Correct pair!");
      } else {
        // No match, reset selected cards after a short delay
        setTimeout(() => {
          setSelectedCards([]);
        }, 500);
      }
    } catch (error) {
      console.error("Error checking for match:", error);
    }
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          front={card.front}
          back={card.back}
          onClick={handleCardClick}
          isMatched={card.isMatched}
        />
      ))}
    </div>
  );
};

export default CardPairing;
