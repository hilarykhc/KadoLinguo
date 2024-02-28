import { useState, useEffect } from "react";
import "./StoryPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import storyData from "../../data/stories.json";
import StoryHero from "../../components/StoryHero/StoryHero";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function StoryPage() {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [stories, setStories] = useState(storyData);
  const [selectedStory, setSelectedStory] = useState(
    storyId ? storyData.find((story) => story.id === storyId) : storyData[0]
  );
  const [currentImgId, setCurrentImgId] = useState(storyId || storyData[0].id);

  useEffect(() => {
    setCurrentImgId(storyId || storyData[0].id);
  }, [storyId]);

  const handleSelectStory = (clickedId) => {
    const foundStory = storyData.find((story) => clickedId === story.id);

    setSelectedStory(foundStory);

    navigate(`/stories/${foundStory.id}`);
  };

  const handleImgClick = (clickedId) => {
    setCurrentImgId(clickedId);
  };

  const handleNextPage = () => {
    const currentIndex = stories.findIndex(
      (story) => story.id === currentImgId
    );
    const nextIndex = (currentIndex + 1) % stories.length;
    const nextStory = stories[nextIndex];

    setCurrentImgId(nextStory.id);
    setSelectedStory(nextStory);
    navigate(`/stories/${nextStory.id}`);
  };

  const handlePrevPage = () => {
    const currentIndex = stories.findIndex(
      (story) => story.id === currentImgId
    );
    const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
    const prevStory = stories[prevIndex];

    setCurrentImgId(prevStory.id);
    setSelectedStory(prevStory);
    navigate(`/stories/${prevStory.id}`);
  };

  return (
    <main className="story">
      <h2 className="story__heading">Oli's Journey.</h2>
      <section className="hero">
        <StoryHero
          selectedStory={selectedStory}
          handleNextPage={handleNextPage}
        />
        <div className="center__card-btn-wrapper">
          <button className="center__card-btn" onClick={handlePrevPage}>
            PREV
          </button>
          <button className="center__card-btn" onClick={handleNextPage}>
            NEXT
          </button>
        </div>
      </section>
      <section className="story__list">
        <div className="story__list-wrapper">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`story__list-wrapper-card ${
                currentImgId === story.id ? "clicked" : ""
              }`}
              onClick={() => {
                handleSelectStory(story.id);
                handleImgClick(story.id);
              }}
            >
              <article className="story__list-wrapper-card2">
                <div>
                  <img
                    src={story.image}
                    alt={story.title}
                    className={`story__list-wrapper-card-img ${
                      currentImgId === story.id ? "default-grayscale" : ""
                    }`}
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
