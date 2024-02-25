import { Link } from "react-router-dom";
import HomeFlashcards from "../../components/HomeFlashcards/HomeFlashcards";
import "./FlashCardPage.scss";

export default function FlashCardPage() {
  return (
    <main className="flashcard">
      <div className="flashcard__container">
        <HomeFlashcards />
      </div>
    </main>
  );
}
