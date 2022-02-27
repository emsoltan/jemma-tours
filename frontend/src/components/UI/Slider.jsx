import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import images from "../../Assets/images";
import "./Slider.css";


function Slider(props) {


  return (
    <Carousel
      className="carousel"
      navButtonsAlwaysInvisible={true}
    >
      {images.map((image) => {
        return (
          <div className="slider-inner__item" key={image}>
            <img src={image} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
}


export default Slider

// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import "./Slider.css";
// const Slider = () => {
//   const [width, setWidth] = useState(0);
//   const sliderRef = useRef();
//   useEffect(() => {
//     // console.log(sliderRef.current.scrollWidth, sliderRef.current.offsetWidth);
//     setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
//   }, []);
//   return (
//     <motion.div ref={sliderRef} className="slider" whileDrag={{cursor: "grabbing"}}>
//       <motion.div
//         drag="x"
//         dragConstraints={{ right: 0 , left : -width}}
//         className="slider-inner"
//       >
//         {images.map((image) => {
//           return (
//             <motion.div className="slider-inner__item" key={image}>
//               <img src={image} alt="" />
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Slider;
