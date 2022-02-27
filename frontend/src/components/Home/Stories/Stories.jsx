import React from "react";
import "./Stories.css";
import bkgVID from "../../../Assets/stories-bkg-vid.mp4";
import Story1 from "./Story1"
import Story2 from "./Story2"

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bkgVID} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Your next happy memory starts now!</h2>
      </div>

      {/* story 1 */}
      <Story1/>
      <Story2/>

      {/* story 2 */}

      {/* <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn-text">Read all stories &rarr;</a>
                </div> */}
    </section>
  );
};

export default Stories;
