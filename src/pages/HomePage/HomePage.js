import "./HomePage.scss";
import mockupHomePage from "../../assets/oli/oli_home2.png";

export default function HomePage() {
  return (
    <main>
      HomePage
      <section>
        <img className="mockup" src={mockupHomePage} />
      </section>
    </main>
  );
}
