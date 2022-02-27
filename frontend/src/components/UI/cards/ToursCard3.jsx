import React from "react";
import "./ToursCard.css";
const ToursCard3 = () => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--3">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--3">
            The Snow Adventurer
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>5 day tours</li>
            <li>Up to 15 people</li>
            <li>3 tour guides</li>
            <li>Sleep in provided tents</li>
            <li>Difficulty: hard</li>
          </ul>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-3">
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">$897</p>
          </div>
          <a href="/tours" className="btn btn--white">
            Explore Tours
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToursCard3;
