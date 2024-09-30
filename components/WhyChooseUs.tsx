import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div
      className="relative h-screen w-full text-black font-bold"
      style={{
        backgroundImage: 'url("/assets/images/why-choose-us/why-choose-us-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        backgroundAttachment: "fixed", // The key to the parallax effect
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <section className="body-font">
          <div className="flex justify-center pt-20 text-4xl font-regular  text-white">
            Why Choose Us?
          </div>
          <div className="container py-12 mx-auto">
            <div className="grid grid-cols-3 text-center gap-x-4">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
                <div className="p-4  hover:bg-[#ffff] rounded-2xl">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                      alt=""
                        src="/assets/images/why-choose-us/innovation.gif"
                        className="w-24 mb-3"
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl">
                      Innovative Solutions
                    </h2>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
                <div className="p-4  hover:bg-[#ffff] rounded-2xl ">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/why-choose-us/customer.gif"
                        className="w-24 mb-3"
                        alt=""
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl">
                      Customer-Centric Approach
                    </h2>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
                <div className="p-4  hover:bg-[#ffff] rounded-2xl">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/why-choose-us/time.gif"
                        className="w-24 mb-3"
                        alt=""
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl">
                      Time Efficiency
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 text-center gap-x-4 pt-4">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
                <div className="p-4   hover:bg-[#ffff] rounded-2xl">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/why-choose-us/globe.gif"
                        className="w-24 mb-3"
                        alt=""
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl">
                      Global Reach, Local Touch
                    </h2>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
                <div className="p-4   hover:bg-[#ffff] rounded-2xl ">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/why-choose-us/expert.gif"
                        className="w-24 mb-3"
                        alt=""
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl">
                      Expert-Led Teams
                    </h2>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
                <div className="p-4   hover:bg-[#ffff] rounded-2xl">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/why-choose-us/practice.gif"
                        className="w-24 mb-3"
                        alt=""
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl">
                      Sustainable IT Practices
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 flex justify-center items-center">
              <div className="relative inline-flex  group">
                {/* <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a href="#" title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">View More
        </a>
         */}
                <a
                  href="#"
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
