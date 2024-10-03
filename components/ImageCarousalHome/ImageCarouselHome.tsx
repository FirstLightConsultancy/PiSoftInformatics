"use client"
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import the custom CSS for arrows

interface ImageCarouselProps {
  images: string[];
}

const ImageCarouselHome: React.FC<ImageCarouselProps> = ({ images }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true, // Ensure arrows are enabled
  };

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "80%", margin: "0 auto" }}
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarouselHome;
