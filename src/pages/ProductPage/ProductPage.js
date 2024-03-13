import "./ProductPage.scss";
import { Link } from "react-router-dom";
import book2 from "../../assets/products/book2.jpg";
import postcard2 from "../../assets/products/postcard2.jpg";

export default function ProductPage() {
  return (
    <section className="productpage__about">
      <div className="productpage__about-top">
        <div className="productpage__about-top-left">
          <h2 className="productpage__about-top-heading">
            Check out what Oli's got for you.
          </h2>
        </div>
        {/* <div className="productpage__about-top-right">
          <p className="productpage__about-top-text"></p>
        </div> */}
      </div>
      <div className="productpage__about-container">
        <div className="productpage__about-wrapper">
          <Link to="/products/books" className="productpage__link">
            <img
              src={book2}
              alt="Oli's Books"
              className="productpage__about-img"
            />
          </Link>
          <h3 className="productpage__about-subtitle">BOOKS</h3>
        </div>
        <div className="productpage__about-wrapper">
          <Link to="/products/shop" className="productpage__link">
            <img
              src={postcard2}
              alt="Oli's Shop"
              className="productpage__about-img"
            />
          </Link>
          <h3 className="productpage__about-subtitle">OLI'S GIFT SHOP</h3>
        </div>
      </div>
    </section>

    // <section className="productpage">
    //   <div className="productpage__about">
    //     <div className="productpage__about-top">
    //       <h2 className="productpage__about-top-heading">
    //         Check out what Oli's got for you.
    //       </h2>
    //     </div>
    //   </div>
    //   <div className="productpage__container">
    //     <div className="productpage__wrapper">
    //       <img alt="Oli's Books" className="productpage__image"></img>
    //       <h3 className="productpage__subtitle">BOOKS</h3>
    //     </div>
    //     <div className="productpage__wrapper">
    //       <img alt="Oli's Shop" className="productpage__image"></img>
    //       <h3 className="productpage__subtitle">OLI'S SHOP</h3>
    //     </div>
    //   </div>
    // </section>
  );
}
