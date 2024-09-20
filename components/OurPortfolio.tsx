import React from "react";

export default function OurPortfolio() {
  return (
    <div className=" mx-auto p-24 bg-[#EFF0F7] text-black">
      <h1 className="text-5xl text-center font-bold py-12">Our Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/*Service Block 1*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="inset-0"
            style={{
              backgroundImage: "url('/assets/images/portfolio/elivetoday.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="absolute hover:backdrop-filter hover:backdrop-blur-md shadow-2xl inset-0 flex flex-col items-center justify-center p-4  ">
            <h3
              className="text-black text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              Elive Today
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
        {/*Service Block 2*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/images/portfolio/classikart.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute  hover:backdrop-filter hover:backdrop-blur-md inset-0 flex flex-col items-center justify-center p-4 ">
            <h3
              className="text-black text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              ClassiKart Portal
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
        {/*Service Block 3*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('/assets/images/portfolio/chandigarhweb.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute  hover:backdrop-filter hover:backdrop-blur-md inset-0 flex flex-col items-center justify-center p-4 ">
            <h3
              className="text-white text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              Chandigarh Web
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
        {/*Service Block 4*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/images/portfolio/elivetoday.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute  hover:backdrop-filter hover:backdrop-blur-md inset-0 flex flex-col items-center justify-center p-4 ">
            <h3
              className="text-black text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              Wonder Websites
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
        {/*Service Block 5*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/images/portfolio/pisofterp.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute  hover:backdrop-filter hover:backdrop-blur-md inset-0 flex flex-col items-center justify-center p-4 ">
            <h3
              className="text-white text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              PisoftERP
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
        {/*Service Block 6*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('/assets/images/portfolio/achieverspoint.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute  hover:backdrop-filter hover:backdrop-blur-md inset-0 flex flex-col items-center justify-center p-4 ">
            <h3
              className="text-black text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              Achievers Point
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
        {/*Service Block 7*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('/assets/images/portfolio/grilltochill.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute  hover:backdrop-filter hover:backdrop-blur-md inset-0 flex flex-col items-center justify-center p-4 ">
            <h3
              className="text-black text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              Grill to Chill
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
        {/*Service Block 8*/}
        <div className="relative group block bg-cover bg-center aspect-video overflow-hidden shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/images/portfolio/elivetoday.png')",
              backgroundSize: "contain", // Optional: Ensures the image covers the entire div
              height: "300px", // Set height to see the background image
              width: "full", // Set width to full container width
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute  hover:backdrop-filter hover:backdrop-blur-md inset-0 flex flex-col items-center justify-center p-4 ">
            <h3
              className="text-black text-2xl font-bold mb-2 transform group-hover:-translate-y-2
                opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
            >
              Pisoft Informatics
            </h3>
            <a
              href="#"
              className="border-2 border-transparent text-transparent font-semibold px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition duration-300 text-center"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
