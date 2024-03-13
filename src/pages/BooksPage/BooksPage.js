import axios from "axios";
import { useEffect, useState } from "react";
import "./BooksPage.scss";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Unable to get books", error);
      }
    };
    getBooks();
  }, []);

  return (
    <main className="books">
      <h2 className="books__heading">Welcome to Oli's Books.</h2>
      <div className="books__container">
        {books.map((book) => (
          <div key={book.id} className="books__item">
            <img src={book.image} alt={book.text} className="books__item-img" />
            <h3 className="books__item-text">{book.text}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
