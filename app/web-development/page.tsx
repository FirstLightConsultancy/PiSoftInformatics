import React from "react";

export default function WebDevelopement() {
  const items1: string[] = ["Up to 5 Pages", "Responsive Design", "Basic SEO Optimization", "Contact Form Integration", "1 Revision" ];
  const items2: string[] = ["Up to 10 Pages", "Responsive Design", "Advanced SEO Optimization", "Blog Setup", "Social Media Integration","3 Revisions"];
  const items3: string[] = ['Unlimited Pages', 'Responsive Design', 'Advanced SEO & Analytics', 'E-Commerce Integration', 'Payment Gateway Setup','5 Revisions'];
  const items4: string[] = ['Custom Design & Features', 'Full Responsive Design', 'Premium SEO & Marketing', 'Custom Application Development', 'Unlimited Revisions','Dedicated Support'];

  return (
    <div>
      <div className="relative h-[400px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
          src="/assets/images/breadcrumb.jpg"
          className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight pb-4">
            Web Developement
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap text-white">
        <div className="w-full sm:w-8/12  bg-gray-800">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  We don&apos;t just build websites, we build experiences that
                  <span className="text-green-300"> connect</span> and
                  <span className="text-green-300"> inspire.</span>
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                  Whether you&apos;re a small business or a large enterprise, having
                  a robust online presence is crucial. A well-designed website
                  is more than just an online brochure; it&apos;s a powerful
                  marketing tool that can enhance your brand, drive traffic, and
                  increase sales. Our web development services are tailored to
                  meet the specific needs of your business, providing a seamless
                  experience that engages your audience and supports your goals.
                </p>
                <p className="text-xl mb-10">
                  We specialize in creating responsive, user-friendly websites
                  that look great on all devices. Our team of experienced
                  developers uses the latest technologies to ensure your site is
                  fast, secure, and easy to manage. From custom designs to
                  e-commerce platforms, we offer a full range of web development
                  services to help you succeed online.
                </p>
                <p className="text-xl -mb-2">
                  Choosing the right web development partner is crucial to your
                  online success. Our company offers affordable and high-quality
                  web development services that cater to businesses of all
                  sizes. Whether you&apos;re launching a new site or looking to
                  improve an existing one, we have the expertise to help you
                  achieve your goals.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/cyber-security-expert-working-with-technology-neon-lights_23-2151645693.jpg?t=st=1727339773~exp=1727343373~hmac=c671840000518600400f471d2ec9225055524426cdac8f6eebbdeb58e4fef4dd&w=740"
          alt="Background Image"
          className="w-full h-36 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
      <section className="relative flex flex-col overflow-hidden h-svh items-center justify-center bg-zinc-950">
        <img
          className="absolute w-full h-full lg:w-full lg:h-screen object-cover"
          src="/assets/images/our-services/our-services-pricing.jpg"
          alt="alt text"
        />
        <div className="relative items-center py-5 px-12 mx-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    
                    BASIC
                  </p>
                  <p className="text-white">
                    
                  Small Business Websites
                  </p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  This plan is ideal for startups / small business who are
                  looking for essential functionalities to support their
                  projects.
                </p>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items1.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">                
                <a
                  href="#_"
                  title="Silver Surfer"
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
                  <p className="text-xl font-medium tracking-tight text-white">
                    
                    ADVANCED
                  </p>
                  <p className="text-white">Medium Business Websites
                  </p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  If you&apos;re a medium business, this plan is designed
                  to cater to your needs. It offers a balance of essential
                  features.
                </p>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items2.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                
                <a
                  href="#_"
                  title="Silver Surfer"
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
                  <p className="text-xl font-medium tracking-tight text-white">
                    
                    PROFESSIONAL
                  </p>
                  <p className="text-white">E-Commerce Websites
                  </p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  Tailored for medium-sized businesses, this plan offers
                  advanced tools and features to support your growing demands.
                </p>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items3.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                
                <a
                  href="#_"
                  title="Silver Surfer"
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
                  <p className="text-xl font-medium tracking-tight text-white">
                    
                    EXTREME
                  </p>
                  <p className="text-white">Custom Solutions
                  </p>
                </div>
                <p className="mt-8 text-xs text-white/80">
                  If you&apos;re a large business, this plan is designed
                  to cater to your needs. It offers a balance of essential
                  features.
                </p>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items4.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                
                <a
                  href="#_"
                  title="Silver Surfer"
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
