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
    <div className="slider-container h-6 bg-opacity-5 relative0">
      <Slider {...settings} className="relative" >
        <div>
        <img className="w-full h-[80vh] relative object-cover" src="/image.jpg" alt="Mountain"  />
        <div className="absolute inset-0 bg-black opacity-13"></div>
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
      <div className="flex flex-row">
      <div className="absolute inset-0 text-white text-4xl font-bold flex items-center">
  Welcome to GoPlaces.<br/> Here you will find<br/> attractive Destinations <br/>in Nepal for you next Holidays.
  <br/><button className="border border-white rounded-3xl p-4">Explore Now</button>
  </div>
  </div>

    </div>
  );
}

export default AutoPlay;
