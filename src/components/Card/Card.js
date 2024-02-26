const Card = ({ id, front, back, onClick, isMatched }) => {
  return (
    <div
      className={`card ${isMatched ? "matched" : ""}`}
      onClick={() => onClick(id)}
    >
      <div className="front">{front}</div>
      <img className="back" src={`path/to/your/images/${back}`} alt={front} />
    </div>
  );
};

export default Card;
