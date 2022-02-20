import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img alt="Full logo" src={logo} className="footer__logo" />
      </div>
      <div className="">
        <div className="col-1-of-2">
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
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Created by
            <Link
              to="https://www.linkedin.com/in/jelena-mayer-03139a225/"
              className="footer__link"
              target="_blank"
            >
              Jelena,
            </Link>
            <Link
              to="https://www.linkedin.com/in/emad-h-soltan-9a773595/"
              className="footer__link"
              target="_blank"
            >
              Emad,
            </Link>{" "}
            <Link to="#" className="footer__link" target="_blank">
              Mathias,
            </Link>
            <Link
              to="https://www.linkedin.com/in/m-olfatee/"
              className="footer__link"
              target="_blank"
            >
              Mohamed
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
