import Sequence from "../../components/Sequence/Sequence";
import Sequence2 from "../../components/Sequence2/Sequence2";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function GamePage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1>GamePage</h1>
      <Sequence2 />
    </DndProvider>
  );
}
