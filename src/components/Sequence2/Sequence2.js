import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import "./Sequence2.scss";
import pictureList from "../../data/sequence.json";
import Picture from "../Picture/Picture";

export default function Sequence2() {
  const [storyboard0, setStoryboard0] = useState([]);
  const [storyboard1, setStoryboard1] = useState([]);
  const [storyboard2, setStoryboard2] = useState([]);
  const [storyboard3, setStoryboard3] = useState([]);
  const [storyboard4, setStoryboard4] = useState([]);
  const [storyboard5, setStoryboard5] = useState([]);
  const [storyboard6, setStoryboard6] = useState([]);
  const [correctImages, setCorrectImages] = useState([]);

  const [{ isOver: isOver1 }, drop1] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard1, drop1),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver2 }, drop2] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard2, drop2),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver3 }, drop3] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard3, drop3),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver4 }, drop4] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard4, drop4),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver5 }, drop5] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard5, drop5),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver6 }, drop6] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPicToBoard(item.id, setStoryboard6, drop6),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addPicToBoard = (id, setStoryboard, dropRef) => {
    console.log(`Image with id ${id} dropped into ${dropRef}`);
    const filteredPicture = pictureList.find((picture) => id === picture.id);
    setStoryboard([filteredPicture]);

    if (dropRef) {
      const isImageCorrect = checkImage(id, dropRef);
      if (isImageCorrect) {
        setCorrectImages((prev) => {
          const updatedArray = [...prev, id];

          return updatedArray;
        });
      }
    }
  };

  const checkImage = (id, dropRef) => {
    switch (dropRef) {
      case drop1:
        return id === 4;
      case drop2:
        return id === 6;
      case drop3:
        return id === 3;
      case drop4:
        return id === 1;
      case drop5:
        return id === 5;
      case drop6:
        return id === 2;
      default:
        return false;
    }
  };

  useEffect(() => {
    if (correctImages.length === pictureList.length) {
      toast.success(
        "Yay! Thank you for helping Oli bake the apple pie. It's super delicious! 😋"
      );
    }
  }, [correctImages]);

  return (
    <>
      <div className="storyboard-container">
        <div className="storyboard-container2">
          <div className="storyboard" ref={drop1}>
            {storyboard0.length === 0 && <Picture text="1. Rolling Dough" />}
            {storyboard1.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
          <div className="storyboard" ref={drop2}>
            {storyboard0.length === 0 && <Picture text="2. Cutting Apple" />}
            {storyboard2.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>

          <div className="storyboard" ref={drop3}>
            {storyboard0.length === 0 && <Picture text="3. Cooking Apple" />}
            {storyboard3.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
        </div>
        <div className="storyboard-container3">
          <div className="storyboard" ref={drop4}>
            {storyboard0.length === 0 && <Picture text="4. Baking Pie" />}
            {storyboard4.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>

          <div className="storyboard" ref={drop5}>
            {storyboard0.length === 0 && <Picture text="5. Serving Pie" />}
            {storyboard5.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>

          <div className="storyboard" ref={drop6}>
            {storyboard0.length === 0 && <Picture text="6. Eating Pie" />}
            {storyboard6.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="pictures">
        {pictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}
