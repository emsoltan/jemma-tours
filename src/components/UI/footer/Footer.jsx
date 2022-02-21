import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="#" className="footer__link">
              About
            </Link>
          </li>
          <li className="footer__item">
            <Link to="#" className="footer__link">
              Contact
            </Link>
          </li>

          <li className="footer__item">
            <Link to="#" className="footer__link">
              Terms
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__logo-box">
        <img alt="Full logo" src={logo} className="footer__logo" />
      </div>
      <div className="footer__copyright">
        Created by
        <a
          href="https://www.linkedin.com/in/jelena-mayer-03139a225/"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Jelena,
        </a>
        <a
          href="https://www.linkedin.com/in/emad-h-soltan-9a773595/"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Emad,
        </a>{" "}
        <a href="#" className="footer__link" target="_blank" rel="noreferrer">
          Mathias,
        </a>
        <a
          href="https://www.linkedin.com/in/m-olfatee/"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Mohamed,
        </a>
        <a
          href="https://www.linkedin.com/in/m-olfatee/"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Arta
        </a>
      </div>
    </footer>
  );
};

export default Footer;
