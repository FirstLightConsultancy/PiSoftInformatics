"use  client";
import ImageCarousel from "@/components/ImageCarousal/ImageCarousel";
import React from "react";

export default function EliveToday() {
  const images = [
    "/assets/images/elive-today/elive35.png",
    "/assets/images/elive-today/elive36.png",
    "/assets/images/elive-today/elive37.png",
    "/assets/images/elive-today/elive38.png",
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
          <h1 className="text-5xl font-bold leading-tight mb-4">Elive Today</h1>
        </div>
      </div>
      <div className="py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          

          <div className="mx-auto max-w-7xl text-justify">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Elive Today is an independent website for a visitor interested in
              a resource for information with different aspects for
              technological advancements, current trend in the world of
              Information Technology, Job skills, Student Placements etc. We
              effort to author and aggregate mind-opening contents / articles
              that inspire the world of our readers and liberate them from
              various myths.
            </p>
            <div className="mt-10  flow-root sm:mt-20">
            <div className=" rounded-xl bg-blue-300 ring-1 ring-inset ring-gray-900/10  lg:rounded-2xl pt-3">
              <ImageCarousel images={images} />
            </div>
          </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our aim is to provide quality information to our visitors by
              linking highly experienced and qualified professionals with highly
              ambitious knowledge hunters. Our enhancement is never ending with
              consistent innovation made on the feedback our various visitors
              which include academicians, professionals from medical, IT, travel
              & tourism, automobile, banking & finance and others. We want
              expert views on career, new trends and skills development to have
              an access to upcoming generation especially students. Gradually we
              are moving towards our final mission, ‘To become number one blog
              site’, and with the support and acclaim we are receiving from our
              visitors, we apparently see our mission achieving.
            </p>
            <div className="my-8 flex justify-center ">
              <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20 bg-blue-300  hover:bg-lime-500 hover:text-white">
                <a
                  href="http://www.elivetoday.com/"
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
