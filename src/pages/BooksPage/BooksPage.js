export default function BooksPage() {
  return (
    <main>
      {/* <section className="story__list">
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
      </section> */}
    </main>
  );
}
