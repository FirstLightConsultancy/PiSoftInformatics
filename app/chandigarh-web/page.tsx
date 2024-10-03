"use  client";
import ImageCarousel from "@/components/ImageCarousal/ImageCarousel";
import React from "react";

export default function ChandigarhWeb() {
  const images = [
    "/assets/images/chandigarh-web/chandigarh35.png",
    "/assets/images/chandigarh-web/chandigarh36.png",
    "/assets/images/chandigarh-web/chandigarh37.png",
    "/assets/images/chandigarh-web/chandigarh38.png",
  ];

  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[300px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/breadcrumb.jpg"
            alt="Background Image"
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Chandigarh Web</h1>
        </div>
      </div>
      <div className="py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          

          <div className="mx-auto max-w-7xl text-justify">
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Chandigarh Web – The portal is designed to help the visitors, which include tourists and Chandigarh & tricity residents, to make them easy to find the places and other prospective searches like transportation, current events, restaurants, cafes & eateries, mall and multiplexes, hotels and other useful information about the city.
            </p>
            <div className="mt-10  flow-root sm:mt-20">
            <div className=" rounded-xl bg-blue-300 ring-1 ring-inset ring-gray-900/10  lg:rounded-2xl pt-3">
              <ImageCarousel images={images} />
            </div>
          </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Vision of Chandigarh Web is to develop an information channel for the residents and visitors of this city to keep them updated with all current affairs and important information about tricity – Chandigarh, Panchkula, Mohali and its suburbs Kharar & Zirakpur. Chandigarh Web links various vendors with the buyers by creating a user account and list their business. Accommodation service providers like hotels, guest houses can get online bookings from tourists and business travelers and earn attractive benefits.
            </p>
            <div className="my-8 flex justify-center ">
              <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20 bg-blue-300  hover:bg-lime-500 hover:text-white">
                <a
                  href="http://www.chandigarhweb.com/"
                  target="_blank"
                  className="font-semibold "
                >
                  <span className="absolute inset-0"></span> Visit Website{" "}
                  <span>→</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
