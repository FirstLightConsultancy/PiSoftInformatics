import React from "react";

export default function Erp() {
  const items1: string[] = [
    "Modules: Finance, HR",
    "User Access: Up to 10 Users",
    "Data Storage: 10 GB",
    "Basic Support",
    "Cloud Hosting",
  ];
  const items2: string[] = [
    "Modules: Finance, HR, Sales",
    "User Access: Up to 50 Users",
    "Data Storage: 50 GB",
    "Standard Support",
    "Cloud Hosting",
  ];
  const items3: string[] = [
    "Modules: Finance, HR, Sales, CRM",
    "User Access: Up to 200 Users",
    "Data Storage: 200 GB",
    "Priority Support",
    "Cloud Hosting",
  ];
  const items4: string[] = [
    "Modules: Finance, HR, Sales, CRM, Supply Chain,Manufacturing",
    "User Access: Unlimited Users",
    "Data Storage: Unlimited",
    "24/7 Dedicated Support",
    "Cloud Hosting",
  ];

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
            ERP Solutions
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap text-white">
        <div className="w-full sm:w-8/12  bg-gray-800">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  we transform complexity into clarity, driving growth through
                  <span className="text-green-300"> innovation</span> and
                  <span className="text-green-300"> efficiency</span>
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                  Enterprise Resource Planning (ERP) is essential for modern
                  businesses looking to streamline their operations. Our ERP
                  solutions integrate all facets of your business—including
                  planning, purchasing, inventory, sales, marketing, finance,
                  human resources, and more—into a single coherent system.
                </p>
                <p className="text-xl mb-10">
                  At Pisoft Informatics, we offer scalable ERP solutions
                  tailored to your specific needs, whether you’re a small
                  business or a large enterprise. Our ERP systems help you
                  automate and simplify processes, leading to enhanced
                  productivity and better decision-making across the
                  organization.
                </p>
                <p className="text-xl mb-10">
                  Choose from our range of ERP packages to find the best fit for
                  your business. Each package comes with the flexibility to grow
                  with your business and adapt to changing demands.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="/assets/images/our-services-tab/erp.jpg"
          alt="Background Image"
          className="w-full h-36 object-contain sm:h-screen sm:w-4/12"
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
                    BASIC ERP
                  </p>
                  <p className="text-white">Small Businesses</p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  This plan is ideal for startups / small business who are
                  looking for essential functionalities to support their
                  projects.
                </p>
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
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl  shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                    ADVANCED ERP
                  </p>
                  <p className="text-white">Growing Businesses</p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  If you&apos;re a growing business, this plan is designed to
                  cater to your needs. It offers a balance of essential
                  features.
                </p>
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
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                    PROFESSIONAL ERP
                  </p>
                  <p className="text-white">Mid-sized Businesses</p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  Tailored for medium-sized businesses, this plan offers
                  advanced tools and features to support your growing demands.
                </p>
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
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                    ENTERPRISE ERP
                  </p>
                  <p className="text-white">Large Enterprises</p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  If you&apos;re a large business, this plan is designed to
                  cater to your needs. It offers a balance of essential
                  features.
                </p>
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
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
