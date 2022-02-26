import React from "react";
import "./Features.css";
import { FcGlobe } from "react-icons/fc";
import nature from "../../../Assets/nature.svg";
import reset from "../../../Assets/reset.svg";
import joy from "../../../Assets/joy.svg"
import healthy from "../../../Assets/healthy.svg"

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <img src={nature} className="feature-box__icon icon-basic-world" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet Nature
            </h3>
            <p className="feature-box__text">
              Get in touch with our beautiful nature, go somehwere where you can
              hear your inner thoughts & care for the peace & beauty of the world.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <img src={reset} className="feature-box__icon icon-basic-compass" />
            <h3 className="heading-tertiary u-margin-bottom-small">Reset it</h3>
            <p className="feature-box__text">
              Leave all your troubles, heavy loads & luggage behind. Reset your
              mind & stop all the distractions, you will come back a lot lighter
              than when you started off.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <img src={joy} className="feature-box__icon icon-basic-map" />
            <h3 className="heading-tertiary u-margin-bottom-small">your Joy</h3>
            <p className="feature-box__text">
              Find your joy in the purity of nature. Be it under a sea, atop the
              mountains or in a beautiful forest hike. You are always in control
              of your own happiness.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <img src={healthy} className="feature-box__icon icon-basic-heart" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live Healthy
            </h3>
            <p className="feature-box__text">
              It is medically proven that our mental health level improves while
              spending time in nature. As well as countless physical health
              benefits. Mind, Body & Soul
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
