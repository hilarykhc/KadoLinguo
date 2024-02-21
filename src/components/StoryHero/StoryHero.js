import "./StoryHero.scss";

export default function StoryHero({ selectedStory }) {
  return (
    <div className="hero">
      <img className="hero__img" src={selectedStory.image} alt="story image" />
    </div>
  );
}
