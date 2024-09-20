import Image from "next/image";
import React from "react";

export default function OurServices() {
  return (
    <div
      className="h-full min-h-screen w-full bg-blue-400 pt-20 p-4 "
      style={{
        backgroundImage:
          'url("/assets/images/our-services/ourservices-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        width: "100%",
        backgroundAttachment: "fixed", // The key to the parallax effect
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center text-5xl font-bold text-white">
        Our Services
      </h1>
      <div className="grid md:grid-cols-3 md:gap-10 p-20">
        <div className="antialiased text-gray-900  transition-all duration-300 hover:scale-110 inline-block ">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300">
            <Image
              className="h-48 w-full object-cover object-end"
              src="/assets/images/our-services/web-development.jpg"
              alt="Home in Countryside"
            />
            <div className="p-6">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  Explore Now
                </span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                Web Development
              </h4>

              <p className="mt-1 text-justify">
                We have designed, developed, deployed and maintained
                enterprise-level web applications from the ground up that have
                enhanced the bottom line.
              </p>
            </div>
          </div>
        </div>
        <div className="antialiased text-gray-900  transition-all duration-300 hover:scale-110 inline-block">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300">
            <Image
              className="h-48 w-full object-cover object-end"
              src="/assets/images/our-services/erp.jpg"
              alt="Home in Countryside"
            />
            <div className="p-6">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  Explore Now
                </span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                ERP Solutions
              </h4>

              <p className="mt-1 text-justify">
                We offer low cost ERP solutions to our clients in Human
                Resources, Accounts, Retail, Education, Automobile and
                Transportation, Haulage, Courier.
              </p>
            </div>
          </div>
        </div>
        <div className="antialiased text-gray-900  transition-all duration-300 hover:scale-110 inline-block">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300">
            <Image
              className="h-48 w-full object-cover object-end"
              src="/assets/images/our-services/web-services.jpg"
              alt="Home in Countryside"
            />
            <div className="p-6">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  Explore Now
                </span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                Web Services
              </h4>

              <p className="mt-1 text-justify">
                We design, develop, host & maintain web sites. Here, gathering
                all the required information to develop, we design with the
                latest technology.
              </p>
            </div>
          </div>
        </div>
        <div className="antialiased text-gray-900  transition-all duration-300 hover:scale-110 inline-block">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300">
            <Image
              className="h-48 w-full object-cover object-end"
              src="/assets/images/our-services/carrer.jpg"
              alt="Home in Countryside"
            />
            <div className="p-6">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  Explore Now
                </span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                Career{" "}
              </h4>

              <p className="mt-1 text-justify">
                We join hands with our interns to make them learn the best of
                the industrial knowledge and have an hands on experience over
                projects to gain the practical exposure.
              </p>
            </div>
          </div>
        </div>
        <div className="antialiased text-gray-900  transition-all duration-300 hover:scale-110 inline-block">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300">
            <Image
              className="h-48 w-full object-cover object-end"
              src="/assets/images/our-services/seo.jpg"
              alt="Home in Countryside"
            />
            <div className="p-6">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  Explore Now
                </span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                SEO Marketing{" "}
              </h4>

              <p className="mt-1 text-justify">
                We ensure customers and search engines can find and understand
                every page on your site. Visibility is about technical
                infrastructure, site structure and user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="antialiased text-gray-900  transition-all duration-300 hover:scale-110 inline-block">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300">
            <Image
              className="h-48 w-full object-cover object-end"
              src="/assets/images/our-services/marketing.jpg"
              alt="Home in Countryside"
            />
            <div className="p-6">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  Explore Now
                </span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                SEO Promotion{" "}
              </h4>

              <p className="mt-1 text-justify">
                We make you more relevant to your customers. We start with
                audience analysis to find the right topics. Then we optimize
                your site around the actual customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
