import "./HomePage.scss";
import mockupHomePage from "../../assets/oli/oli.homepage.png";
import HomeHero from "../../components/HomeHero/HomeHero";
import AboutOli from "../../components/AboutOli/AboutOli";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function HomePage() {
  return (
    <main className="homepage">
      <HomeHero />
      <AboutOli />
    </main>
  );
}
