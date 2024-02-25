import "./HomeHero.scss";
import oliHomePage from "../../assets/oli/oli.homepage.png";
import oliHomeGray from "../../assets/oli/oli_home_gray3.png";
import newHomeHero from "../../assets/story/story5.jpg";
import { Link } from "react-router-dom";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function HomeHero() {
  return (
    <section className="homepage__hero">
      <div className="homepage__hero-container">
        <div className="homepage__content" style={titleStyles}>
          <h1 className="homepage__title">KādoLinguo</h1>
          <p className="homepage__paragraph">Learning made easy.</p>
          <div className="homepage__button-wrapper">
            <Link to="/about">
              <button className="homepage__button"> MEET OLI</button>
            </Link>
          </div>
        </div>

        {/* <img className="mockup" src={oliHomePage} /> */}
        <img className="homepage__img" src={newHomeHero} />
        {/* <h1 className="homepage__title">KādoLinguo</h1> */}
      </div>
    </section>
  );
}
