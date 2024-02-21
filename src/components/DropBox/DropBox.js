import "./DropBox.scss";

export default function DropBox({ id, content }) {
  return (
    <div className="dropbox">
      <p>{content}</p>
    </div>
  );
}
