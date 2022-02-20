import React from "react";
import Section from "../section/Section";
import Composition from "../composition/Composition";
import "./Hero.css";
import test from "../../../assets/hero.jpg";
import Slider from "../slider/Slider";
import Button from "../button/Button"

const Hero = () => {
  return (
    <Section className="hero">
      {/* <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <Button>
          Discover our Tours
        </Button>
      </div> */}
      {/* <Slider className="slider-side"/> */}
    </Section>
  );
};

export default Hero;
