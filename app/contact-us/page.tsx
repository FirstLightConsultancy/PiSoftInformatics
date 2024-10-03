import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[400px] text-white overflow-hidden">
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
            How to Reach Us?{" "}
          </h1>
        </div>
      </div>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-2">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Visit Our Location
            </h2>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="mr-4 h-4 w-4"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      Documentation
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center py-10 text-4xl">Drop Your Message</h1>
      <div className=" container bg-white border rounded-lg px-8 py-6 mx-auto mb-24 max-w-7xl">
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={5}
                ></textarea>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  htmlFor="start"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  ng-model="subject"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value=""> Select Service/Product/Package</option>
                  <optgroup label="ERP Solutions">
                    <option>PisoftERP Automobile</option>
                    <option>PisoftERP Education</option>
                    <option>PisoftERP Finance</option>
                    <option>PisoftERP Medical and Healthcare</option>
                    <option>PisoftERP Transport</option>
                  </optgroup>
                  <optgroup label="Internship">
                    <option>6 Weeks</option>
                    <option>6 Months</option>
                  </optgroup>
                  <optgroup label="Our Services">
                    <option>Digital Marketing</option>
                    <option>Domain Registration</option>
                    <option>Graphic Designing</option>
                    <option>Mobile Applications</option>
                    <option>Web Applications</option>
                    <option>Web Designing</option>
                    <option>Web Hosting</option>
                  </optgroup>
                  <option>Others</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mobile *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Enter Captcha<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-400 p-2 w-full  max-w-xl rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
