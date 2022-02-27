import React from "react";
import "./Tours.css"
import ToursCard1 from "../../UI/cards/ToursCard1";
import ToursCard2 from "../../UI/cards/ToursCard2";
import ToursCard3 from "../../UI/cards/ToursCard3";
import ButtonGreen from "../../UI/button/ButtonGreen"
const Tours = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary section-tours-title">
          Most popular tours
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <ToursCard1 />
        </div>

        <div className="col-1-of-3">
          <ToursCard2 />
        </div>

        <div className="col-1-of-3">
          <ToursCard3 />
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn  btn--tours btn--green">
          Check all tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
