import "./AboutOli.scss";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function AboutOli() {
  return (
    <section className="homepage__about">
      <h2 className="homepage__about-subtitle" style={titleStyles}>
        Who is Oli?
      </h2>
      <p className="homepage__about-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pharetra
        orci. Integer id tellus vel mauris ornare vulputate. Curabitur auctor
        varius pellentesque. Suspendisse nec tellus massa. Donec vel felis elit.
        Praesent et mi justo. Donec gravida, nibh ac tincidunt iaculis, mi
        ligula faucibus enim, eget congue velit quam vitae felis. Sed dignissim
        eleifend sollicitudin. Maecenas euismod eu ligula ornare imperdiet.
        Phasellus risus lacus, dictum id augue at, pulvinar euismod massa. Nunc
        et nibh libero.
      </p>
    </section>
  );
}
