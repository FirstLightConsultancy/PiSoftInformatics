import Image from "next/image";
import React from "react";

export default function OurModules() {
  return (
    <div>
      {/* Why my company */}
      <div className="font-sans -mb-10">
        {/* <!-- ... (previous header code remains unchanged) ... --> */}
        <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* <div className="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');"> */}
          <div>
            <Image
            alt=""
              className=" absolute inset-0 bg-cover bg-center"
              src="/assets/images/our-modules/our-modules-bg.jpg"
            />
          </div>

          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* <!-- Left Side: Company Info --> */}
              <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Innovate.
                  <br />
                  Transform.
                  <br />
                  Succeed.
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Empowering businesses with cutting-edge solutions for a
                  digital future.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="#"
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* <!-- Right Side: Features --> */}
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                  <h2 className="text-2xl font-semibold mb-6">
                    Why MyCompany?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      <span>Lightning-fast Performance</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>Bank-grade Security</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        ></path>
                      </svg>
                      <span>AI-powered Insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Decorative Element --> */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="#EFF0F7"
              />
            </svg>
          </div>
        </section>
      </div>

      <section
        id="new-features"
        className="py-8 bg-[#EFF0F7] sm:py-10 lg:py-16"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center space-y-10">
            <h2 className="text-3xl  font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Explore Our ERP Modules{" "}
            </h2>
            <p className=" text-xl  text-black sm:mt-2">
              With proficiency in Digital, Engineering, and Cloud, we provide
              solutions that meet the conventional, transformative, and
              future-oriented needs of clients worldwide.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-x-12  md:grid-cols-3 md:gap-x-4">
            <div className="relative flex justify-center overflow-hidden py-3 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[11]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-sky-400">
                    <div className="mx-auto flex h-20 w-20 transform items-center justify-center rounded-full bg-blue-100 shadow-lg shadow-teal-500/40">
                      <div className="w-20 h-20 rounded-full bg-green-200 flex justify-center items-center">
                        <Image
                          src="/assets/images/our-modules/education.png"
                          alt="Team Member 8"
                          className="w-16 ml-2"
                        />{" "}
                      </div>
                    </div>
                  </span>
                  <div className="space-y-6 pt-5 leading-7 text-black transition-all duration-300 group-hover:text-white">
                    <h1 className="text-2xl">Education</h1>
                    <p>
                      A platform where users can lodge complaints or raise
                      concerns about services or experiences.{" "}
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center overflow-hidden py-3 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[11]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-800">
                    <div className="mx-auto flex h-20 w-20 transform items-center justify-center rounded-full bg-blue-100 shadow-lg shadow-teal-500/40">
                      <div className="w-20 h-20 rounded-full bg-green-200 flex justify-center items-center">
                        <Image
                        alt=""
                          src="/assets/images/our-modules/finance.png"
                          className="w-16"
                        />{" "}
                      </div>
                    </div>
                  </span>
                  <div className="space-y-6 pt-5 leading-7 text-black transition-all duration-300 group-hover:text-white">
                    <h1 className="text-2xl">Finance</h1>
                    <p>
                      A service that ensures new businesses meet legal and
                      regulatory requirements.{" "}
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center overflow-hidden py-3 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[11]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-500">
                    <div className="mx-auto flex h-20 w-20 transform items-center justify-center rounded-full bg-blue-100 shadow-lg shadow-teal-500/40">
                      <div className="w-20 h-20 rounded-full bg-green-200 flex justify-center items-center">
                        <Image
                        alt=""
                          src="/assets/images/our-modules/medical.png"
                          className="w-16"
                        />{" "}
                      </div>
                    </div>
                  </span>
                  <div className="space-y-6 pt-5 leading-7 text-black transition-all duration-300 group-hover:text-white">
                    <h1 className="text-2xl">Medical</h1>
                    <p>
                      Assistance in establishing an online presence for
                      businesses, including website development and digital
                      marketing.{" "}
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative flex justify-center overflow-hidden py-3 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[11]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <div className="mx-auto flex h-20 w-20 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                      <div className="mx-auto flex h-20 w-20 transform items-center justify-center rounded-full bg-blue-100 shadow-lg shadow-teal-500/40">
                        <div className="w-20 h-20 rounded-full bg-green-200 flex justify-center items-center">
                          <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="space-y-6 pt-5 leading-7 text-black transition-all duration-300 group-hover:text-white">
                    <h1 className="text-2xl">Startup India</h1>
                    <p>
                      An initiative to support and promote entrepreneurship in
                      India, offering resources, mentoring, and funding
                      opportunities.{" "}
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center overflow-hidden py-3 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[11]"></span>

                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <div className="w-20 h-20 rounded-full bg-green-200 flex justify-center items-center">
                      <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
                    </div>
                  </span>
                  <div className="space-y-6 pt-5 leading-7 text-black transition-all duration-300 group-hover:text-white">
                    <h1 className="text-2xl">Track Your Assignment</h1>
                    <p>
                      A tool for tracking the progress and status of assigned
                      tasks or projects.{" "}
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center overflow-hidden py-3 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[11]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <div className="w-20 h-20 rounded-full bg-green-200 flex justify-center items-center">
                      <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
                    </div>
                  </span>
                  <div className="space-y-6 pt-5 leading-7 text-black transition-all duration-300 group-hover:text-white">
                    <h1 className="text-2xl">Submit Your Grievance</h1>
                    <p>
                      Reiterates the availability of a platform to submit and
                      address grievances.{" "}
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
