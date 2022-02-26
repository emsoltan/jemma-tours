import React from "react";
import "./Hero.css";
import "../../UI/button/Button.css"
import logo from "../../../Assets/logo-alt-3.svg"
import Slider from "../../UI/Slider"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text-box">
        <h4 className="heading-primary">
          <span className="heading-primary--sub">Welcome to </span>
          <span className="heading-primary--main"> JEMMA TOURS</span>
          <span className="heading-primary--sub">
            Your outdoor Adventure starts here
          </span>
        </h4>
        <a href="#section-tours" className="btn btn--green btn--animated">
          Discover Our Tours
        </a>
      </div>
      {/* <Slider/> */}
    </div>
  );
};

export default Hero;
