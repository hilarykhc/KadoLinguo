import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import kadolinguoLogo from "../../assets/logo/5.png";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
      ? "active"
      : "";
  };

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

        <div className="header__nav">
          <Link to="/" className={`header__nav-item ${isActive("/")}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`header__nav-item ${isActive("/about")}`}
          >
            About
          </Link>
          <Link
            to="/stories"
            className={`header__nav-item ${isActive("/stories")}`}
          >
            Stories
          </Link>
          <Link
            to="/flashcards"
            className={`header__nav-item ${isActive("/flashcards")}`}
          >
            Flashcards
          </Link>
        </div>
      </section>
    </header>
  );
}
