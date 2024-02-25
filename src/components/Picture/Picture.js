import "./Picture.scss";
import { useDrag } from "react-dnd";

export default function Picture({ id, url, dropBoxId }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id, dropBoxId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={drag}
      className="picture__img"
      src={url}
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    />
  );
}
