import "./HomePage.scss";
import mockupHomePage from "../../assets/oli/oli.homepage.png";

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="homepage__hero">
        <h1 className="homepage__title">KādoLinguo</h1>

        <img className="mockup" src={mockupHomePage} />
        {/* <h1 className="homepage__title">KādoLinguo</h1> */}
      </section>
    </main>
  );
}
