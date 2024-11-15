import React from "react";

export default function DomainRegistration() {
  const items1: string[] = [
    ".com",
    ".net",
    ".in",
    ".co.in",
    ".org",
    ".biz",
    ".info",
    ".co",
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
            Domain Registration
          </h1>
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
                  <span className="text-green-300">Empowering</span> your
                  digital journey with seamless
                  <span className="text-green-300"> domain registration.</span>
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                  Often considered as one of the prerequisites for starting an
                  online business, a domain name should be effective and have a
                  lasting impact on your target audience. It should be chosen on
                  the basis of an in-depth analysis and market research with
                  regard to your business sphere. As a premier hosting solutions
                  company we provides reliable and powerful choices of domain
                  names, domain registration and administration tools like DNS
                  management, domain protection and a lot more – all at
                  competitive prices.
                </p>

                <p className="text-xl mb-10">
                  We offer a range of extension options - .in, .co.in, .com,
                  .or.ug, .ug, .ac.ug, .sc. ug, .org, .net, .biz, .info – which
                  can be easily searched and accessed through some of the
                  top-notch search engines. Our registration process is simple –
                  just send in your requirement and we will provide you with
                  myriad choices in domain names. We let you opt for the
                  administrative and registration rights of your domain, thus
                  allowing for complete access.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="/assets/images/domain-registration/domain-names.jpg"
          alt="Background Image"
          className="w-full h-36 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
      <section className="relative flex flex-col overflow-hidden items-center justify-center bg-blue-500">
        <div className="relative items-center py-24 px-12 mx-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-3xl font-medium tracking-tight text-white">
                    Buy any domain with following domain extensions
                  </p>
                </div>

                <ul className="grid grid-cols-2 order-last mt-8 text-sm text-white gap-y-3 uppercase">
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
          </div>
        </div>
      </section>
    </div>
  );
}
