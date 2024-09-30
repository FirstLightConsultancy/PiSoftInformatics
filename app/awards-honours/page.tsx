import React from "react";

export default function AboutUsPage() {
  return (
    <div className="">
      <div className="relative h-[400px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
          src="/assets/images/breadcrumb.jpg"
          alt="Background Image"
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight pb-4">
            Awards and Honours
          </h1>
        </div>
      </div>
      <section className="px-3 py-5 lg:mb-10 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center  lg:-mt-48">
            <p className="text-sm md:text-lg">
              We are proud to share that We have been ranked amongst
            </p>
            <p className="text-4xl font-bold md:text-7xl text-orange-600">
              Top 20 {" "}
            </p>
            <p className="text-4xl font-bold md:text-7xl">Most Promising ERP Solution Providers !</p>

            {/* <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button> */}
          </div>
          <div className="order-1 lg:order-2 py-10">
            <img
              className="h-full w-80 object-cover lg:w-[500px] lg:h-full"
              src="/assets/images/awards-honours/certificate.jpeg"
              alt="certificate"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
