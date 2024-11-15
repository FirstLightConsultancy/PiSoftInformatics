"use client"
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; // Import the custom CSS for arrows

interface BlogPost {
  title: string;
  description: string;
  image: string;
}

interface BlogCarouselProps {
  posts: BlogPost[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ posts }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      style={{ width: "90%", margin: "0 auto" }}
    >
      <Slider {...settings} ref={sliderRef}>
        {posts.map((post, index) => (
          <div key={index} className="carousel-slide">
            <div className="rounded overflow-hidden shadow-lg  bg-white">
                  <a href="#"></a>
                  <div className="relative  carousel-image-container">
                    <a href="#">
                      <img
                        className="w-full"
                        src={post.image}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                      </div>
                    </a>

                    <a href="!#">
                      <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">15</span>
                        <small>April</small>
                      </div>
                    </a>
                  </div>
                  <div className="px-6 py-4 carousel-content">
                    <a
                      href="#"
                      className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      {post.title}
                    </a>
                    <p className="text-gray-500 text-sm">
                    {post.description}
                    </p>
                  </div>
                  <div className="px-6 py-4 flex flex-row items-center">
                    <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                      <img src="icons/clock.svg" className="w-4 h-"/>
                      <span className="ml-1">6 mins read</span>
                    </span>
                  </div>
                </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
