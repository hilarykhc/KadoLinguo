import "./AboutOli.scss";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function AboutOli() {
  return (
    <section className="homepage__about">
      <div className="homepage__about-container">
        <div className="homepage__about-kadolinguo">
          <h2 className="homepage__about-subtitle" style={titleStyles}>
            What is KādoLinguo?
          </h2>
          <p className="homepage__about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            pharetra orci. Integer id tellus vel mauris ornare vulputate.
            Curabitur auctor varius pellentesque. Suspendisse nec tellus massa.
            Donec vel felis elit. Praesent et mi justo. Donec gravida, nibh ac
            tincidunt iaculis, mi ligula faucibus enim, eget congue velit quam.
          </p>
        </div>
        <div className="homepage__about-oli">
          <h2 className="homepage__about-subtitle" style={titleStyles}>
            Who is Oli?
          </h2>
          <p className="homepage__about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            pharetra orci. Integer id tellus vel mauris ornare vulputate.
            Curabitur auctor varius pellentesque. Suspendisse nec tellus massa.
            Donec vel felis elit. Praesent et mi justo. Donec gravida, nibh ac
            tincidunt iaculis, mi ligula faucibus enim, eget congue velit quam.
          </p>
        </div>
      </div>
    </section>
  );
}
