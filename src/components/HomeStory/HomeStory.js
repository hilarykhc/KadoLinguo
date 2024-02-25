import { useEffect, useState } from "react";
import storyHome from "../../assets/story/story3.jpg";
import storyHome2 from "../../assets/story/story5.jpg";
import "./HomeStory.scss";
import { Link } from "react-router-dom";

// const titleStyles = {
//   animation: "moveInFromBottom 1s ease-out",
// };

export default function HomeStory() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      console.log(scrollY);
      const offset = 850;
      if (!initialRender) {
        setIsScrolled(scrollY > offset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    setInitialRender(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialRender]);

  const secondaryTitleStyles = {
    animation: initialRender
      ? "none"
      : isScrolled
      ? "moveInFromBottom 1s ease-out"
      : "none",
    // animationFillMode: isScrolled ? "forwards" : "none",
  };

  return (
    <section className="homestory__hero">
      <div className="homestory__hero-container">
        <div className="hoomepage__content" style={secondaryTitleStyles}>
          <h1 className="homestory__title">Meet Oli</h1>
          <p className="homestory__paragraph">Embark on the adventures.</p>
          <div className="homestory__button-wrapper">
            <Link to="/stories">
              <button className="homestory__button">READ STORIES</button>
            </Link>
          </div>
        </div>

        {/* <img className="homestory__img" src={storyHome} /> */}
        <img className="homestory__img" src={storyHome} />
      </div>
    </section>
  );
}
