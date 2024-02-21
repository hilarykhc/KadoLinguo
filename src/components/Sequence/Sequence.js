import { useState, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Sequence.scss";

const DraggableImage = ({ src, alt, onDrop, type }) => {
  //   const [{ isOver }, drop] = useDrop({
  //     accept: type, // Ensure that the type matches the expected type
  //     drop: () => onDrop({ src, alt }), // Pass the dropped item to the handler
  //     collect: (monitor) => ({
  //       isOver: !!monitor.isOver(),
  //     }),
  //   });

  //   return (
  //     <div ref={drop} className={isOver ? "highlight" : ""}>
  //       <img src={src} alt={alt} draggable="true" />
  //     </div>
  //   );
  // };
  const [{ isDragging }, drag] = useDrag({
    type: "IMAGE",
    item: { src, alt, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <img
      ref={drag}
      src={src}
      alt={alt}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      width="300"
      //   onDragEnd={() => onDrop({ src, alt, type })}
    />
  );
};

const DropBox = ({ onDrop, onDragOver, label }) => {
  const dropRef = useRef();

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "IMAGE",

    drop: (item, monitor) =>
      //   console.log("dropped", item);
      onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  useEffect(() => {
    drop(dropRef.current);
  }, []);

  return (
    <div
      ref={dropRef}
      className={`dropBox ${isActive ? "active" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver && onDragOver(e);
      }}
    >
      <p>{label}</p>
    </div>
  );
};

const Sequence = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    console.log("Handling drop:", item);
    setDroppedItems([...droppedItems, item.alt]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div>
          {droppedItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div id="dropZone">
          <DropBox label="Cooking Apples" onDrop={handleDrop} />
        </div>
      </div>

      <div id="oli_storyboard">
        <DraggableImage
          src="https://github.com/axiom6ai/project_oli_assets/blob/main/oli_baking_pie.png?raw=true"
          alt="Bake Pie"
          onDrop={handleDrop}
          type="IMAGE"
        />
      </div>
    </DndProvider>
  );
};

export default Sequence;

//-----------------------------------------------------------------------------
// hover: (item, monitor) => {
//   console.log("Hovering over drop target");
//   console.log("Item type:", item.type);

//   if (item.type === "IMAGE" && monitor.isOver()) {
//     console.log("Valid drop");

//     const element = dropRef.current;
//     if (element) {
//       element.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
//     }
//   }
// },

//--------------------------------

// import { useState, useEffect } from "react";
// import "./Sequence.scss";

// const Sequence = () => {
//   const [droppedItems, setDroppedItems] = useState([]);

//   const allowDrop = (event) => {
//     console.log("allowDrop");
//     event.preventDefault();
//   };

//   const drag = (event) => {
//     console.log("dragging");
//     event.dataTransfer.setData("text", event.target.id);
//   };

//   const drop = (event) => {
//     console.log("dropping");
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text");
//     setDroppedItems((prevItems) => [...prevItems, data]);
//     // setDroppedItems([...droppedItems, data]);
//     console.log("updating...", droppedItems);
//   };

//   useEffect(() => {
//     console.log("updating...:", droppedItems);
//   }, [droppedItems]);

//   return (
//     <div>
//       <div id="dropZone" onDrop={drop} onDragOver={allowDrop}>
//         <div
//           className="dropBox"
//           id="dropBox1"
//           onDrop={drop}
//           onDragOver={allowDrop}
//         >
//           <p>Cooking Apples</p>
//         </div>

//         <div
//           className="dropBox"
//           id="dropBox2"
//           onDrop={drop}
//           onDragOver={allowDrop}
//         >
//           <p>Baking Pie</p>
//         </div>

//         <div
//           className="dropBox"
//           id="dropBox3"
//           onDrop={drop}
//           onDragOver={allowDrop}
//         >
//           <p>Serving Pie</p>
//         </div>

//         <div
//           className="dropBox"
//           id="dropBox4"
//           onDrop={drop}
//           onDragOver={allowDrop}
//         >
//           <p>Cutting Apple</p>
//         </div>

//         <div
//           className="dropBox"
//           id="dropBox5"
//           onDrop={drop}
//           ondragover={allowDrop}
//         >
//           <p>Eating Pie</p>
//         </div>

//         <div
//           className="dropBox"
//           id="dropBox6"
//           onDrop={drop}
//           dragend={allowDrop}
//         >
//           <p>Rolling Dough</p>
//         </div>
//       </div>

//       <div id="oli_storyboard" onDrop={drop} onDragOver={allowDrop}>
//         <img
//           id="bake_pie"
//           src="https://github.com/axiom6ai/project_oli_assets/blob/main/oli_baking_pie.png?raw=true"
//           draggable="true"
//           onDragStart={drag}
//           width="300"
//         />
//         <img
//           id="eat_pie"
//           src="https://github.com/axiom6ai/project_oli_assets/blob/main/oli_eating_pie.png?raw=true"
//           draggable="true"
//           dragstart={drag}
//           width="300"
//         />
//         <img
//           id="cook_apple"
//           src="https://github.com/axiom6ai/project_oli_assets/blob/main/oli_cooking_apple.png?raw=true"
//           draggable="true"
//           dragstart={drag}
//           width="300"
//         />
//         <img
//           id="rolling_dough"
//           src="https://github.com/axiom6ai/project_oli_assets/blob/main/oli_rolling_dough.png?raw=true"
//           draggable="true"
//           dragstart={drag}
//           width="300"
//         />
//         <img
//           id="serving_pie"
//           src="https://github.com/axiom6ai/project_oli_assets/blob/main/oli_serving_pie.png?raw=true"
//           draggable="true"
//           onDragStart={drag}
//           width="300"
//         />
//         <img
//           id="cut_apple"
//           src="https://github.com/axiom6ai/project_oli_assets/blob/main/oli_cutting_apple.png?raw=true"
//           draggable="true"
//           onDragStart={drag}
//           width="300"
//         />
//       </div>
//     </div>
//   );
// };

// export default Sequence;

{
  /* {droppedItems.map((itemId) => (
          <div key={itemId} id={itemId} draggable="true" onDragStart={drag}>
            <p>{itemId}</p>
          </div>
        ))} */
}
