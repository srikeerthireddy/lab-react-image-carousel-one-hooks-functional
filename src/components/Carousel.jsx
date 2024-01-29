import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const prev = () => {
    if (currImageIndex > 0) {
      setCurrImageIndex(currImageIndex - 1);
    } else {
      setCurrImageIndex(images.length - 1);
    }
  };

  const next = () => {
    if (currImageIndex < images.length - 1) {
      setCurrImageIndex(currImageIndex + 1);
    } else {
      setCurrImageIndex(0);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="btn-container">
          <div className="left-btn" onClick={prev}>
            <ArrowBackIosIcon style={{ fill: "white" }} />
          </div>

          <div className="right-btn" onClick={next}>
            <ArrowForwardIosIcon style={{ fill: "white" }} />
          </div>
        </div>

        <div className="image-span-container">
          <span className="text title">
            {images[currImageIndex].title}
          </span>
          <img src={images[currImageIndex].img} alt="" />
          <span className="text subtitle">
            {images[currImageIndex].subtitle}
          </span>
        </div>
      </div>
    </>
  );
};

export default Carousel;