import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FaCopyright } from "react-icons/fa";
import logo from "../../../Assets/logo-bottom.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              About us
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Contact
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Policy
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Register
            </a>
          </li>
        </ul>
        <ul className="social-media">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              {" "}
              <GrFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FiTwitter />
            </a>
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
          Mohammad,
        </a>
        <a
          href="https://www.linkedin.com/in/m-olfatee/"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Arta
        </a>
        <div>
          <FaCopyright /> JEMMA-TOURS 2022
        </div>
      </div>
    </footer>
  );
};
export default Footer;
