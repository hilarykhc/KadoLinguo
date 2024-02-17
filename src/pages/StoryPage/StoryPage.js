import { useState } from "react";
import "./StoryPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import storyData from "../../data/stories.json";
import StoryHero from "../../components/StoryHero/StoryHero";

export default function StoryPage() {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [stories, setStories] = useState(storyData);
  const [selectedStory, setSelectedStory] = useState(
    storyId ? storyData.find((story) => story.id === storyId) : storyData[0]
  );

  const handleSelectStory = (clickedId) => {
    const foundStory = storyData.find((story) => clickedId === story.id);

    setSelectedStory(foundStory);

    navigate(`/stories/${foundStory.id}`);
  };

  const filteredStories = stories.filter(
    (story) => story.id !== selectedStory.id
  );

  return (
    <main>
      <section className="hero">
        <StoryHero selectedStory={selectedStory} />
      </section>
      <section className="story__list">
        <div className="story__list-wrapper">
          {stories.map((story) => (
            <div
              className="story__list-wrapper-card"
              onClick={() => handleSelectStory(story.id)}
            >
              <article className="story__list-wrapper-card2">
                <div>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="story__list-wrapper-card-img"
                  />
                </div>
              </article>
            </div>
          ))}
          {/* <p className="story__list-title">{selectedStory.title}</p> */}
        </div>
        {/* <Link to="/stories/:storyId">
          <li className="story__list-item">{selectedStory.title}</li>
        </Link> */}
        {/* <Link to="/stories/2">
          <li className="story__list-item">story 2</li>
        </Link>
        <Link to="/stories/3">
          <li className="story__list-item">story 3</li>
        </Link> */}
      </section>
      {/* Story component: map through stories // 3 stories with Hero section
      showing current selected story */}
    </main>
  );
}
