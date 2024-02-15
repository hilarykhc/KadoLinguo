import { Link } from "react-router-dom";

export default function FlashCardPage() {
  return (
    <main className="flashcard">
      3 modes (3 components instead of 3 pages)? - practice - quiz - game
      <section className="flashcard__container">
        <ul className="flashcard__list">
          <Link to="/flashcards/practice">
            <li className="flashcard__list-item">practice mode</li>
          </Link>
          <Link to="/flashcards/quiz">
            <li className="flashcard__list-item">quiz mode</li>
          </Link>
          <Link to="/flashcards/game">
            <li className="flashcard__list-item">game mode</li>
          </Link>
        </ul>
        flashcard component: map through stories // 3 stories with Hero section
        showing current selected flashcard
      </section>
    </main>
  );
}
