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

  // const handleNextPage = () => {
  //   const nextStoryId = currentImgId + 1;

  // }

  // const filteredStories = stories.filter(
  //   (story) => story.id !== selectedStory.id
  // );

  return (
    <main className="story">
      <h2 className="story__heading" style={titleStyles}>
        Oli's Journey.
      </h2>
      <section className="hero">
        <StoryHero selectedStory={selectedStory} />
        <div className="center__card-btn-wrapper">
          <button className="center__card-btn">PREV</button>
          <button className="center__card-btn">NEXT</button>
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
          {/* <p className="story__list-title">{selectedStory.title}</p> */}
        </div>
      </section>
      {/* Story component: map through stories // 3 stories with Hero section
      showing current selected story */}
    </main>
  );
}
