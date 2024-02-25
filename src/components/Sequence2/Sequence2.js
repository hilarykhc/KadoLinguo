import { useState } from "react";
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
  const [storyboard1, setStoryboard1] = useState([]);
  const [storyboard2, setStoryboard2] = useState([]);
  const [storyboard3, setStoryboard3] = useState([]);
  const [storyboard4, setStoryboard4] = useState([]);
  const [storyboard5, setStoryboard5] = useState([]);
  const [storyboard6, setStoryboard6] = useState([]);
  //   const [availablePics, setAvailablePics] = useState([...pictureList]);

  const [{ isOver: isOver1 }, drop1] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard1),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver2 }, drop2] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard2),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver3 }, drop3] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard3),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver4 }, drop4] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard4),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver5 }, drop5] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard5),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver6 }, drop6] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard6),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addPicToBoard = (id, setStoryboard) => {
    const filteredPicture = pictureList.filter((picture) => id === picture.id);
    setStoryboard([filteredPicture[0]]);

    // setStoryboard((prevStoryboard) => [
    //   ...prevStoryboard,
    //   { ...filteredPicture, text: `1. Rolling Dough` },
    // ]);
  };

  return (
    <>
      <div className="storyboard-container">
        {/* {dropBoxList.map((dropBox, index) => ( */}
        <div className="storyboard-container2">
          <div className="storyboard" ref={drop1}>
            {storyboard1.length === 0 && <Picture text="1. Rolling Dough" />}
            {storyboard1.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
          <div className="storyboard" ref={drop2}>
            {storyboard1.length === 0 && <Picture text="2. Cutting Apple" />}
            {storyboard2.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>

          <div className="storyboard" ref={drop3}>
            {storyboard1.length === 0 && <Picture text="3. Cooking Apple" />}
            {storyboard3.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
        </div>
        <div className="storyboard-container3">
          <div className="storyboard" ref={drop4}>
            {storyboard1.length === 0 && <Picture text="4. Baking Pie" />}
            {storyboard4.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>

          <div className="storyboard" ref={drop5}>
            {storyboard1.length === 0 && <Picture text="5. Serving Pie" />}
            {storyboard5.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>

          <div className="storyboard" ref={drop6}>
            {storyboard1.length === 0 && <Picture text="6. Eating Pie" />}
            {storyboard6.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
        </div>
        {/* ))} */}
      </div>
      <div className="pictures">
        {pictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}
