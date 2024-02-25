import { useEffect, useState } from "react";
import "./StoryHero.scss";
import { Link, useParams } from "react-router-dom";

export default function StoryHero({ selectedStory }) {
  const { storyId } = useParams();
  const [currentStoryId, setCurrentStoryId] = useState([storyId]);

  useEffect(() => {
    setCurrentStoryId(storyId);
  }, [storyId]);

  const getNextStoryId = () => {
    return parseInt(currentStoryId, 10) + 1;
  };

  return (
    <div className="hero">
      <Link to={`/stories/${getNextStoryId()}`}>
        <img
          className="hero__img"
          src={selectedStory.image}
          alt="story image"
        />
      </Link>
    </div>
  );
}
