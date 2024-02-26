import "./Footer.scss";
import { Link } from "react-router-dom";
import kadolinguoLogo from "../../assets/logo/5.png";
import facebookIcon from "../../assets/icons/Icon-facebook.svg";
import instagramIcon from "../../assets/icons/Icon-instagram.svg";
import xIcon from "../../assets/icons/Icon-twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper-top">
          <div className="footer__wrapper-top-left">
            <Link to="/" className="footer__link">
              <img
                src={kadolinguoLogo}
                alt="kadolinguo logo"
                className="footer__logo"
              />
            </Link>
          </div>
          <div className="footer__wrapper-top-right">
            <Link to="#" className="footer__social">
              <img
                className="footer__social-icon"
                src={instagramIcon}
                alt="instagram icon"
              />
            </Link>
            <Link to="#" className="footer__social">
              <img
                className="footer__social-icon"
                src={facebookIcon}
                alt="facebook icon"
              />
            </Link>
            <Link to="#" className="footer__social">
              <img className="footer__social-icon" src={xIcon} alt="x icon" />
            </Link>
          </div>
        </div>
        <div className="footer__wrapper-bottom">
          <div className="footer__wrapper-bottom-center">
            <p className="footer__collabs">Made by Kādolinguo x Oli © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
