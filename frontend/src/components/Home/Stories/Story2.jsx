import React from 'react'
import storyGuy from "../../../Assets/story-guy.svg";
const Story2 = () => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={storyGuy} alt="Person on a tour" className="story__img" />
          <figcaption className="story__caption">Arthur "Boo" Radley</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            WOW! I really needed that !
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story2