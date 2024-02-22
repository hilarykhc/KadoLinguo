import "./AboutOli.scss";
import aboutKadolinguo from "../../assets/oli/about_kadolinguo.png";
import aboutOli from "../../assets/oli/about_oli.png";
import aboutTeam from "../../assets/oli/about_team.png";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function AboutOli() {
  return (
    <section className="homepage__about">
      <div className="homepage__about-container">
        <div className="homepage__about-wrapper">
          <h2 className="homepage__about-subtitle" style={titleStyles}>
            About KādoLinguo
          </h2>
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
          <h2 className="homepage__about-subtitle" style={titleStyles}>
            About Oli
          </h2>
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
          <h2 className="homepage__about-subtitle" style={titleStyles}>
            Meet the Team
          </h2>
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
