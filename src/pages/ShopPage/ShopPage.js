import axios from "axios";
import { useEffect, useState } from "react";
import "./ShopPage.scss";

export default function ShopPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/shops");
        setItems(response.data);
      } catch (error) {
        console.error("Unable to get items", error);
      }
    };
    getItems();
  }, []);

  return (
    <main className="shop">
      <h2 className="shop__heading">Welcome to Oli's Gift Shop.</h2>
      <div className="shop__container">
        {items.map((item) => (
          <div key={item.id} className="shop__item">
            <img src={item.image} alt={item.text} className="shop__item-img" />
            <h3 className="shop__item-text">{item.text}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
