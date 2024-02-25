import Sequence from "../../components/Sequence/Sequence";
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
        <h2 className="gamepage__heading" style={titleStyles}>
          Matchy-Matchy.
        </h2>
        <Sequence2 />
      </section>
    </DndProvider>
  );
}
