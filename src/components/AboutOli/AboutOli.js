import "./AboutOli.scss";
import aboutKadolinguo from "../../assets/oli/about_1.png";
import aboutOli from "../../assets/oli/about_2.png";
import aboutTeam from "../../assets/oli/about_3.png";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function AboutOli() {
  return (
    <section className="homepage__about">
      <div className="homepage__about-top">
        <div className="homepage__about-top-left">
          <h2 className="homepage__about-top-heading">Learn About Us.</h2>
        </div>
        <div className="homepage__about-top-right">
          <p className="homepage__about-top-text"></p>
        </div>
      </div>
      <div className="homepage__about-container">
        <div className="homepage__about-wrapper">
          <h3 className="homepage__about-subtitle">About KādoLinguo</h3>
          <img
            src={aboutKadolinguo}
            alt="Kadolinguo logo"
            className="homepage__about-img"
          />
          <p className="homepage__about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            pharetra orci. Integer id tellus vel mauris ornare vulputate.
            Curabitur auctor varius pellentesque. Suspendisse nec tellus massa.
          </p>
        </div>
        <div className="homepage__about-wrapper">
          <h3 className="homepage__about-subtitle">About Oli</h3>
          <img
            src={aboutOli}
            alt="Oli and butterfly"
            className="homepage__about-img"
          />
          <p className="homepage__about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            pharetra orci. Integer id tellus vel mauris ornare vulputate.
            Curabitur auctor varius pellentesque. Suspendisse nec tellus massa.
          </p>
        </div>
        <div className="homepage__about-wrapper">
          <h3 className="homepage__about-subtitle">Meet the Team</h3>
          <img src={aboutTeam} alt="Team pic" className="homepage__about-img" />
          <p className="homepage__about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            pharetra orci. Integer id tellus vel mauris ornare vulputate.
            Curabitur auctor varius pellentesque. Suspendisse nec tellus massa.
          </p>
        </div>
      </div>
    </section>
  );
}
