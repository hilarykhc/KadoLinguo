import Sequence2 from "../../components/Sequence2/Sequence2";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./GamePage.scss";

const titleStyles = {
  animation: "moveInFromBottom 1s ease-out",
};

export default function GamePage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className="gamepage__container">
        <h2 className="gamepage__heading">Matchy-Matchy.</h2>
        <div className="gamepage__intro-container">
          <p className="gamepage__intro1">
            Hey there, culinary enthusiasts! Our friend Oli is feeling a bit
            peckish and has a hankering for a delicious homemade apple pie. Oli
            is ready to embark on this delightful culinary journey, but needs
            your expertise to ensure the apple pie turns out perfect. Are you up
            for the challenge?
          </p>
          <p className="gamepage__intro2">
            Help Oli figure out the sequence of making the apple pie by dragging
            and dropping the respsective images into the boxes.
          </p>
        </div>
        <Sequence2 />
      </section>
    </DndProvider>
  );
}
