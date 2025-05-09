import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container  h-6 bg-opacity-50">
      <Slider {...settings} >
        <div>
        <img className="w-full h-[80vh] object-cover" src="/image.jpg" alt="Mountain"  />

        </div>
        <div>
          <img className="w-full h-[80vh] object-cover" src="/mount.jpg"/>
        </div>
        <div>
        <img className="w-full h-[80vh] object-cover"src="/nepal.jpg"/>
        </div>
        <div>
          <img  className="w-full h-[80vh] object-cover" src="/monastery.jpg"/>
        </div>
        
      </Slider>
    </div>
  );
}

export default AutoPlay;
