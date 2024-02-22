import "./HomeHero.scss";
import oliHomePage from "../../assets/oli/oli.homepage.png";
import oliHomeGray from "../../assets/oli/oli_home_gray3.png";
import { Link } from "react-router-dom";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function HomeHero() {
  return (
    <section className="homepage__hero">
      <div className="homepage__hero-container">
        <div className="hoomepage__content" style={titleStyles}>
          <h1 className="homepage__title">KādoLinguo</h1>
          <p className="homepage__paragraph">
            Learning made easy, flashy and engaging.
          </p>
          <div className="homepage__button-wrapper">
            <Link to="/flashcards">
              <button className="homepage__button"> MEET OLI</button>
            </Link>
          </div>
        </div>

        {/* <img className="mockup" src={oliHomePage} /> */}
        <img className="mockup" src={oliHomeGray} />
        {/* <h1 className="homepage__title">KādoLinguo</h1> */}
      </div>
    </section>
  );
}
