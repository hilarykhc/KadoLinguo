import "./HomeFlashcards.scss";
import { Link } from "react-router-dom";
import cat2Logo from "../../assets/logo/cat2.png";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function HomeFlashcards() {
  return (
    <section className="homeFlashcards__about">
      <div className="homeFlashcards__about-top">
        <div className="homeFlashcards__about-top-left">
          <h2 className="homeFlashcards__about-top-heading">Flashcards.</h2>
        </div>
        <div className="homeFlashcards__about-top-right">
          <p className="homeFlashcards__about-top-text"></p>
        </div>
      </div>
      <div className="homeFlashcards__about-container">
        <div className="homeFlashcards__about-wrapper">
          <Link to="/flashcards/practice" className="homeFlashcards__box-link">
            <div className="homeFlashcards__box">
              <div className="homeFlashcards__box-number">01</div>
              <div className="homeFlashcards__box-text">
                PRACTICE <br /> MODE
              </div>
              <img
                src={cat2Logo}
                alt="cat logo"
                className="homeFlashcards__box-img"
              />
            </div>
          </Link>
        </div>
        <div className="homeFlashcards__about-wrapper">
          <Link to="/flashcards/quiz" className="homeFlashcards__box-link">
            <div className="homeFlashcards__box">
              <div className="homeFlashcards__box-number">02</div>
              <div className="homeFlashcards__box-text">
                QUIZ <br /> MODE
              </div>
              <img
                src={cat2Logo}
                alt="cat logo"
                className="homeFlashcards__box-img"
              />
            </div>
          </Link>
        </div>
        <div className="homeFlashcards__about-wrapper">
          <Link to="/flashcards/game" className="homeFlashcards__box-link">
            <div className="homeFlashcards__box">
              <div className="homeFlashcards__box-number">03</div>
              <div className="homeFlashcards__box-text">
                GAME <br /> MODE
              </div>
              <img
                src={cat2Logo}
                alt="cat logo"
                className="homeFlashcards__box-img"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
