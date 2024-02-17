import "./HomePage.scss";
import mockupHomePage from "../../assets/oli/oli.homepage.png";

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="homepage__hero">
        <img className="mockup" src={mockupHomePage} />
      </section>
    </main>
  );
}
