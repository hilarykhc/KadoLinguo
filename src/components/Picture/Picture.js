import "./Picture.scss";
import { useDrag } from "react-dnd";

export default function Picture({ id, url, dropBoxId, text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id, dropBoxId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div className="picture__container">
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        {url && (
          <img
            className="picture__img"
            src={url}
            alt={`item${id}`}
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
          />
        )}
        {!url && <p className="placeholder-text">{text}</p>}
      </div>
    </div>
    // <div className="picture__container">
    //   {url && (
    //     <img
    //       ref={drag}
    //       className="picture__img"
    //       src={url}
    //       style={{ border: isDragging ? "5px solid pink" : "0px" }}
    //     />
    //   )}
    //   {!url && <p className="placeholder-text">{text}</p>}
    // </div>
  );
}
