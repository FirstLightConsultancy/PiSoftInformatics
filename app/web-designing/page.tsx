import React from "react";

export default function WebDesigning() {
  const items1: string[] = [
    "Responsive & Mobile compatible",
    "4 design concepts to choose",
    "Photo gallery - 20 images",
    "2 Professional designers",
    "HTML 5 & CSS 3 Designs",
    "Social Media Icons",
    "Contact Form",
    "2 Revisions",
    "5 pages",
  ];
  const items2: string[] = [
    "Responsive & Mobile compatible",
    "6 design concepts to choose",
    "Photo gallery - 40 images",
    "2 Professional designers",
    "HTML 5 & CSS 3 Designs",
    "Social Media Icons",
    "Contact Form",
    "4 Revisions",
    "10 pages",
  ];
  const items3: string[] = [
    "Media Gallery - 40 Videos / Images",
    "Responsive & Mobile compatible",
    "Minor Design Customisation",
    "4 Templates to choose",
    "20 Article / Posts",
    "News Letter Signup",
    "Social Media Icons",
    "CMS installation",
    "Contact Form",
  ];
  const items4: string[] = [
    "Media Gallery - 80 Videos / Images",
    "Responsive & Mobile compatible",
    "Minor Design Customisation",
    "Unlimited Articles / Posts",
    "4 Templates to choose",
    "News Letter Signup",
    "Social Media Icons",
    "CMS installation",
    "Contact Form",
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
            Web Designing
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap text-white">
        <div className="w-full sm:w-8/12  bg-gray-800">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Every pixel tells a story—let&apos;s design yours with
                  <span className="text-green-300"> precision</span> and
                  <span className="text-green-300"> passion.</span>
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                  Whether you are developing a web site for the first time, or
                  an existing one, it is imperative to plan. Planning at the
                  early stage can save time, money and stress ! we offer you
                  these benefits, a crucial blend of expertise including
                  creative conception, brand sensitivity, and technical and
                  interactive architecture skill and design execution. We Have
                  an integrated business-driven approach, which separates us
                  from other typical Web site Development and Designing
                  Companies.
                </p>
                <p className="text-xl mb-10">
                  With our Team of web consultants, creative, programmers and
                  marketing professionals we develop unforgettable attractive
                  Web sites. Our web site development team focuses primarily on
                  the objectives of our clients. Our main goal is to design web
                  sites that will be user friendly, attractive, provide a
                  professional image, cost effective and support the message you
                  are trying to convey to your clients.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="/assets/images/our-services-tab/web-designing.jpg"
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
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl  shadow-gray-900/50  border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    BASIC
                  </p>
                  <p className="text-white">Static Site</p>
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
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl  shadow-gray-900/50  border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    ADVANCED
                  </p>
                  <p className="text-white">Static Site</p>
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
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl  shadow-gray-900/50  border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    PROFESSIONAL
                  </p>
                  <p className="text-white">Wordpress / Drupal / Joomla</p>
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
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl  shadow-gray-900/50  border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    EXTREME
                  </p>
                  <p className="text-white">Wordpress / Drupal / Joomla</p>
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
