"use client";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";

import "./style.css";
export default function HeroSection() {
  const words =  useMemo( ()=> [
    "Empowering Digital Transformation",
    "Building Future-Ready Solutions",
    "Innovating Tomorrow, Today",
  ],[]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const typeEffect = () => {
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }   ;

    const timeout = setTimeout(typeEffect, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  useEffect(() => {
    function createParticle() {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const hue = Math.random() * 360;
      particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

      const duration = Math.random() * 3 + 2;
      particle.style.animation = `float-up ${duration}s linear`;

      const particlesContainer = document.getElementById("particles");
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
      }

      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    }

    const intervalId = setInterval(createParticle, 50);

    // Cleanup function to remove interval and particles
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div className="">
      {/* <div className="bg-animated min-h-screen flex items-center justify-center p-4 overflow-hidden"> */}
      {/* <div id="particles"></div> */}
      {/* <div className="text-center z-10">
        <h1
          className="text-6xl font-bold mb-4 text-white neon-text glitch hover-3d"
          data-text="Pisoft Informatics"
        >
          Pisoft Informatics
        </h1>
        <p className="text-2xl text-cyan-300 my-8">
        Driving Innovation, Enhancing Efficiency, and Delivering Excellence in Every Digital Transformation Journey<br/>Enter the digital realm of infinite possibilities.
        </p>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110 inline-block">
          <i className="fas fa-rocket mr-2"></i>Explore Our Services
        </button>
      </div> */}
      
      {/* 4562472.jpg */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="area h-screen "
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <ul className="relative circles ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
          }}
        ></div>
        <div className="h-screen relative">
          <section className="px-2 py-32 md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3 ">
                  <div className="w-full pb-6 space-y-6 text-white sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <div className=" h-[180px] flex justify-center items-start">
                      <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                        {displayedText}
                      </h1>
                    </div>
                    {/* <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="block xl:inline">Useful Tools to </span>
                      <span className="block  xl:inline">
                        Help You Build Faster.
                      </span>
                    </h1> */}
                    <p className="mx-auto text-base  sm:max-w-md lg:text-xl md:max-w-3xl">
                      It is never been easier to build beautiful websites that
                      convey your message and tell your story.
                    </p>

                    <div className="relative flex flex-col sm:flex-row sm:space-x-6">
                      <a
                        href="#_"
                        className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-3xl sm:mb-0 hover:bg-indigo-700 sm:w-auto transition-all duration-200 hover:scale-110"
                      >
                        Try It Free
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                      <a
                        href="#_"
                        className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 rounded-3xl 
transition-all duration-200 hover:scale-110"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-[750px] h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                    {/* <img src="https://cdn.dribbble.com/users/904433/screenshots/3884784/progression_dribbble.gif" /> */}
                    <video
                      src="https://v.ftcdn.net/02/59/52/28/700_F_259522827_Gv2kjAKQpKaI7MvyqLPlc4r6mABAzzP5_ST.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=""
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
