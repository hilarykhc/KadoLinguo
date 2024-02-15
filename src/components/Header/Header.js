import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <Link to="/" className="header__logo">
          KādoLinguo logo
        </Link>

        {/* <div> */}
        <div className="header__nav">
          <Link to="/about" className="header__nav-item">
            About
          </Link>
          <Link to="/stories" className="header__nav-item">
            Stories
          </Link>
          <Link to="/flashcards" className="header__nav-item">
            Flashcards
          </Link>
        </div>
        {/* </div> */}
      </section>
    </header>
  );
}
