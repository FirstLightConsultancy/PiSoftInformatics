import React from "react";

export default function ContactUs() {
  return (
    <section className="flex flex-wrap gap-20 p-20">
      <div className=" py-6 flex flex-col justify-center">
        <div className="relative sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-10">
            <div className="text-center">
              <h1 className="text-3xl">Contact Us!</h1>

              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form action="https://fabform.io/f/{form-id}" method="post">
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
              <a
                href="https://veilmail.io/e/FkKh7o"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Or click here to reveal our protected email address
              </a>
            </form>
          </div>
        </div>
      </div>
      <div
        id="map"
        className="relative h-[680px] pt-10 overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="680"
          height="580"
        ></iframe>
        {/* style="border:0;" 
      allowfullscreen="" loading="lazy" */}
      </div>
    </section>
  );
}
