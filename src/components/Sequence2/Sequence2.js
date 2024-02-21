import { useState, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Sequence2.scss";
import pictureList from "../../data/sequence.json";
import Picture from "../Picture/Picture";
import DropBox from "../DropBox/DropBox";

const dropBoxList = [
  {
    id: 1,
    content: "Cooking Apples",
  },
  {
    id: 2,
    content: "Baking Pie",
  },
  {
    id: 3,
    content: "Serving Pie",
  },
];

export default function Sequence2() {
  const [storyboard, setStoryboard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  //   const addPicToBoard = (item) => {
  //     const { id: draggedItemId, dropBoxId } = item;

  //     if (dropBoxId !== null) {
  //       setStoryboard((storyboard) => [
  //         ...storyboard,
  //         { id: draggedItemId, dropBoxId },
  //       ]);
  //     }
  //   };
  const addPicToBoard = (id) => {
    const filteredPicture = pictureList.filter((picture) => id === picture.id);
    // setStoryboard((storyboard) => [...storyboard, filteredPicture[0]]);
    setStoryboard([filteredPicture[0]]);
  };

  return (
    <>
      <div className="storyboard-container">
        {dropBoxList.map((dropBox, index) => (
          <div className="storyboard" ref={drop}>
            {storyboard.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;

              // <DropBox
              //   key={dropBox.id}
              //   id={dropBox.id}
              //   content={dropBox.content}
              // />
            })}
          </div>
        ))}
      </div>
      <div className="pictures">
        {pictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}
