import React from "react";

export default function SoftwareDevelopment() {
  return (
    <div>
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
            Software Development
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap text-white">
        <div className="w-full sm:w-8/12  bg-gray-800">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Great software is built on a foundation of
                  <span className="text-green-300"> collaboration,</span>
                  <span className="text-green-300"> creativity,</span>
                  and an unwavering commitment to
                  <span className="text-green-300"> quality.</span>
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                  In the ever-evolving landscape of technology, software
                  development has become the cornerstone of business innovation
                  and efficiency. At Pisoft, we specialize in creating custom
                  software solutions that are tailored to meet the unique needs
                  of our clients. From initial concept to final deployment, our
                  team of experienced developers works closely with you to
                  deliver software that is not only functional but also scalable
                  and secure.
                </p>
                <p className="text-xl mb-10">
                  Whether you&apos;re looking to build a new application from scratch
                  or enhance an existing system, we leverage the latest
                  technologies and development methodologies to ensure that your
                  software is future-proof and capable of adapting to changing
                  business environments. Our commitment to quality and our focus
                  on client satisfaction have enabled us to develop software
                  that drives success and fosters growth in various industries.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/technology-hologram-indoors_23-2151833333.jpg?t=st=1727339596~exp=1727343196~hmac=c09316b73d3f15e2976af68a2712ffc2c227f7e6ad465295f524d217b374ccc5&w=360"
          alt="Background Image"
          className="w-full h-36 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </div>
  );
}
