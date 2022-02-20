import React from "react";
import "./Composition.css";
import Section from "../section/Section";
import img1 from "../../../assets/nat-1-large.jpg";
import img2 from "../../../assets/nat-2-large.jpg";
import img3 from "../../../assets/nat-3-large.jpg";

const Composition = () => {
  return (
    <>
      <Section>
        <div className="section-composition">
          <div className="col-1-of-2">
            <div className="composition">
              <img
                alt="forest 1"
                className="composition__photo composition__photo--p1"
                src={img1}
              />

              <img
                alt="mount 2"
                className="composition__photo composition__photo--p2"
                src={img2}
              />

              <img
                alt="trail 3"
                className="composition__photo composition__photo--p3"
                src={img3}
              />
              {/* 
                            <!--
                            <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1">
                            <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2">
                            <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3">
                            --> */}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Composition;
