import { useState } from "react";
import "./StoryPage.scss";
import { Link } from "react-router-dom";
import storyData from "../../data/stories.json";

export default function StoryPage() {
  const [stories, setStories] = useState(storyData);
  const [selectedStory, setSelectedStory] = useState(storyData[0]);

  const handleSelectStory = (clickedId) => {
    const foundStory = storyData.find((story) => clickedId === story.id);

    setSelectedStory(foundStory);
  };

  const filteredStories = stories.filter(
    (story) => story.id !== selectedStory.id
  );

  return (
    <main>
      <section className="hero">
        Hero section for current selected story
      </section>
      <ul className="story__list">
        <Link to="/stories/1">
          <li className="story__list-item">story 1</li>
        </Link>
        <Link to="/stories/2">
          <li className="story__list-item">story 2</li>
        </Link>
        <Link to="/stories/3">
          <li className="story__list-item">story 3</li>
        </Link>
      </ul>
      Story component: map through stories // 3 stories with Hero section
      showing current selected story
    </main>
  );
}
