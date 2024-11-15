import Image from "next/image";
import React from "react";

type CardProps = {
  imgSrc: string;
  title: string;
};
const Card = ({ imgSrc, title }: CardProps) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
    <div className="p-4 hover:bg-[#ffff] rounded-2xl hover:text-black text-white">
      <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
        <div className="flex justify-center">
          <img alt="" src={imgSrc} className="w-24 mb-3" />
        </div>
        <h2 className="font-semibold text-2xl">{title}</h2>
      </div>
    </div>
  </div>
);

export default function WhyChooseUs() {
  const data = [
    {
      imgSrc: "/assets/images/why-choose-us/innovation.gif",
      title: "Innovative Solutions & Affordable Customization",
    },
    {
      imgSrc: "/assets/images/why-choose-us/customer.gif",
      title: "Customer-Centric Approach & User Friendly",
    },
    {
      imgSrc: "/assets/images/why-choose-us/time.gif",
      title: "Time Efficiency & Amazing Support",
    },
    {
      imgSrc: "/assets/images/why-choose-us/globe.gif",
      title: "Global Reach, Local Touch & Manage Multiple Departments",
    },
    {
      imgSrc: "/assets/images/why-choose-us/expert.gif",
      title: "Expert-Led Teams & Sustainable IT Practices",
    },
    {
      imgSrc: "/assets/images/why-choose-us/practice.gif",
      title: "Mobile Versions, Secure & Reliable, Custom Reports",
    },
  ];

  return (
    <div
      className="relative h-screen w-full text-black font-bold"
      style={{
        backgroundImage:
          'url("/assets/images/why-choose-us/why-choose-us-bg.jpg")',
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
              {data.slice(0, 3).map((item, index) => (
                <Card key={index} imgSrc={item.imgSrc} title={item.title} />
              ))}
            </div>
            <div className="grid grid-cols-3 text-center gap-x-4 pt-4">
              {data.slice(3).map((item, index) => (
                <Card key={index} imgSrc={item.imgSrc} title={item.title} />
              ))}
            </div>
            <div className="py-10 flex justify-center items-center">
              <div className="relative inline-flex group">
                <a
                  href="http://localhost:3000/about-us"
                  target="_blank"
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
