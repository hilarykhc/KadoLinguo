import "./StoryHero.scss";

export default function StoryHero({ selectedStory }) {
  return (
    <hero className="hero">
      <img className="hero__img" src={selectedStory.image} alt="story image" />
    </hero>
  );
}
