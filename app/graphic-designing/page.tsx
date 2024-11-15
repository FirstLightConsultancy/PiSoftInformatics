import React from "react";

export default function GraphicDesigning() {
  const items1: string[] = [
    "6 Original logo design concepts",
    "2 Professional designers",
    "2 Revisions",
  ];
  const items2: string[] = [
    "9 Original logo design concepts",
    "3 Professional designers",
    "2 Revisions",
   ];
  const items3: string[] = [
    "Logo-Basic Package",
    "3 business card concepts",
    "3 letterhead concepts",
    ];
  const items4: string[] = [
    "Stationery-Basic Package",
    "6 business card concepts",
    "6 letterhead concepts",
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
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Graphic Designing
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap text-white">
        <div className="w-full sm:w-8/12  bg-gray-800">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Bringing your <span className="text-green-300"> vision</span>{" "}
                  to life with stunning
                  <span className="text-green-300"> graphic design </span>
                  solutions.
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                The web isn&apos;t just for static content anymore. Increasingly, the web is being used as an enterprise-level environment for application development and deployment. Platform-independence make the web an ideal foundation for such applications. We&apos;ve designed, developed, deployed and maintained enterprise-level web applications from the ground up that have enhanced the bottom line for our clients. </p>
                <p className="text-xl mb-10">
                That kind of experience has put us in the forefront of where the web is today and where it will be going tomorrow. As last century&apos;s content-driven web gives way to this century&apos;s social web, semantic web, and UI enhancements like AJAX that modern applications demand, we&apos;ve been tackling the technical challenges that face application developers and web engineers in this new era.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="/assets/images/graphic-design/3d-rendering-laptop.jpg"
          alt="Background Image"
          className="w-full h-36 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
      <section className="relative flex flex-col overflow-hidden h-svh items-center justify-center bg-zinc-950">
        <img
          className="absolute w-full h-full lg:w-full lg:h-screen object-cover"
          src="/assets/images/our-services/our-services-pricing.jpg"
        />
        <div className="relative items-center py-5 px-12 mx-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                  LOGO
                  </p>
                  <p className="text-white">BASIC</p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items1.map((item, index) => (
                    <li key={index} className="inline-flex items-center gap-2">
                      <img src="/icons/tick.png" className="w-7" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                <a
                  href="/contact-us"
                  title="Send Query"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Send Query
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl  shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                  LOGO
                  </p>
                  <p className="text-white">ADVANCED</p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items2.map((item, index) => (
                    <li key={index} className="inline-flex items-center gap-2">
                      <img src="/icons/tick.png" className="w-7" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                <a
                  href="/contact-us"
                  title="Send Query"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Send Query
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                  STATIONERY
                  </p>
                  <p className="text-white">BASIC</p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items3.map((item, index) => (
                    <li key={index} className="inline-flex items-center gap-2">
                      <img src="/icons/tick.png" className="w-7" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                <a
                  href="/contact-us"
                  title="Send Query"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Send Query
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                  STATIONERY
                  </p>
                  <p className="text-white">ADVANCED</p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items4.map((item, index) => (
                    <li key={index} className="inline-flex items-center gap-2">
                      <img src="/icons/tick.png" className="w-7" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                <a
                  href="/contact-us"
                  title="Send Query"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Send Query
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
