"use client";
import * as React from "react";
import "./style.css";
import Image from "next/image";

export function OurTeam() {
  return (
    <section id="our-team" className="bg-gray-100 grid grid-cols-3">
      <div className="container mx-auto col-span-2 p-11">
        <h2 className="text-5xl font-bold text-center  mb-8 text-primary">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 font-bold px-20">
          {/* <!-- Team Member 1 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center transition-all duration-300 hover:scale-110 inline-block">
            <img
            src="/assets/images/our-team/member1.jpg"
              alt="Team Member 1"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-700">Role: Software Engineer</p>
          </div>

          {/* <!-- Team Member 2 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center  transition-all duration-300 hover:scale-110 inline-block">
            <img
src="/assets/images/our-team/member2.jpg"              alt="Team Member 2"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Role: Graphic Designer</p>
          </div>

          {/* <!-- Team Member 3 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center  transition-all duration-300 hover:scale-110 inline-block">
            <img
src="/assets/images/our-team/member3.jpg"              alt="Team Member 3"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
            <p className="text-gray-700">Role: Marketing Manager</p>
          </div>

          {/* <!-- Team Member 4 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center  transition-all duration-300 hover:scale-110 inline-block">
            <img
src="/assets/images/our-team/member4.jpg"              alt="Team Member 4"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">Peter Johnson</h3>
            <p className="text-gray-700">Role: Seo specialist</p>
          </div>

          {/* <!-- Team Member 5 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center  transition-all duration-300 hover:scale-110 inline-block">
            <img
src="/assets/images/our-team/member5.jpg"              alt="Team Member 5"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
            <p className="text-gray-700">Role: UX Designer</p>
          </div>

          {/* <!-- Team Member 6 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center  transition-all duration-300 hover:scale-110 inline-block">
            <img
src="/assets/images/our-team/member6.jpg"              alt="Team Member 6"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Davis</h3>
            <p className="text-gray-700">Role: Frontend Developer</p>
          </div>

          {/* <!-- Team Member 7 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center  transition-all duration-300 hover:scale-110 inline-block">
            <img
src="/assets/images/our-team/member7.png"              alt="Team Member 7"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-gray-700">Role: Content Writer</p>
          </div>

          {/* <!-- Team Member 8 --> */}
          <div className="bg-white rounded-lg shadow-md p-3 my-4 text-center  transition-all duration-300 hover:scale-110 inline-block">
            <img
src="/assets/images/our-team/member8.jpg"              alt="Team Member 8"
              className="w-full rounded-full mb-1"
            />
            <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
            <p className="text-gray-700">Role: Project Manager</p>
          </div>
        </div>
      </div>
      <div className="video-wrapper">
        <video
          // src="https://v.ftcdn.net/09/04/32/78/700_F_904327866_hNY5F4I7UbjmPtCZ1ZjW3s76ImNRbVYx_ST.mp4"
          src="/assets/video/our-team.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        ></video>
        {/* <div className="overlay-text">
        <h1>Your Text Here</h1>
        <p>Subtitle or additional information</p>
      </div> */}
      </div>
    </section>
  );
}
