import React from "react";
import "./ToursCard.css";

const ToursCard2 = () => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--2">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--2">
            The Forest Hiker
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>7 day tours</li>
            <li>Up to 40 people</li>
            <li>6 tour guides</li>
            <li>Sleep in provided tents</li>
            <li>Difficulty: medium</li>
          </ul>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-2">
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">$497</p>
          </div>
          <a href="/tours" className="btn btn--white">
            Explore Tours
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToursCard2;
