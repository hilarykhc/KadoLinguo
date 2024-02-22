import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import kadolinguoLogo from "../../assets/logo/5.png";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <Link to="/" className="header__link">
          <img
            className="header__logo"
            src={kadolinguoLogo}
            alt="kadolinguo logo"
          />
        </Link>

        {/* <div> */}
        <div className="header__nav">
          <Link to="/" className="header__nav-item">
            Home
          </Link>
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
