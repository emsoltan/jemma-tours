import React from "react";
import sea from "../../../Assets/sea1.svg"
import snow from "../../../Assets/snow-hike3.svg"
import forest from "../../../Assets/forest1.svg"
import "./About.css"

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text  about-title">
        <h2 className="heading-secondary section-about-title">Get in touch with Nature</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small about-secondary">
            Find your peace of mind
          </h3>
          <p className="paragraph">
        Getting into nature & experiencing the wonders of being away from our daily life typically improve your mental and physical health alike.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small about-secondary">
            Make new memories
          </h3>
          <p className="paragraph">
        With our outdoor experience & adventures, you have the chance to live & re-live your wildest dreams. Get in touch with your inner self & have beautiful memories forever.
        
          </p>

          <a href="#" className="btn-text">
            Learn more 
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={sea}
            />

            <img
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={forest}
            />

            <img
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={snow}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
